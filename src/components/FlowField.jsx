import { useEffect, useRef } from "react";

// A live particle-advection field, drawn from the same family of test flows
// (the "double gyre") used in flow-visualization research — not a generic
// decorative animation. Moving the cursor perturbs the field locally, the
// way an obstacle or probe would.

const COOL = [62, 216, 194]; // slow
const WARM = [255, 107, 74]; // fast
const BG = "10, 14, 20";

function lerpColor(t) {
  const c = Math.max(0, Math.min(1, t));
  const r = Math.round(COOL[0] + (WARM[0] - COOL[0]) * c);
  const g = Math.round(COOL[1] + (WARM[1] - COOL[1]) * c);
  const b = Math.round(COOL[2] + (WARM[2] - COOL[2]) * c);
  return `rgb(${r}, ${g}, ${b})`;
}

// Classic time-dependent double-gyre velocity field on domain x:[0,2] y:[0,1]
function doubleGyre(x, y, t, A, eps, w) {
  const a = eps * Math.sin(w * t);
  const b = 1 - 2 * eps * Math.sin(w * t);
  const f = a * x * x + b * x;
  const dfdx = 2 * a * x + b;
  const u = -Math.PI * A * Math.sin(Math.PI * f) * Math.cos(Math.PI * y);
  const v = Math.PI * A * Math.cos(Math.PI * f) * Math.sin(Math.PI * y) * dfdx;
  return [u, v];
}

export default function FlowField({ readoutRef }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1, y: -1, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = `rgb(${BG})`;
      ctx.fillRect(0, 0, width, height);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);
    resize();

    const DOMAIN_W = 2;
    const DOMAIN_H = 1;
    const A = 0.1;
    const EPS = 0.25;
    const W = (2 * Math.PI) / 10;
    const SPEED_SCALE = 1.7;

    const density = window.innerWidth < 640 ? 0.00035 : 0.00055;
    const count = Math.max(160, Math.min(950, Math.floor(width * height * density)));

    const particles = new Array(count).fill(0).map(() => spawn());

    function spawn() {
      return {
        x: Math.random() * DOMAIN_W,
        y: Math.random() * DOMAIN_H,
        life: Math.random() * 6,
        maxLife: 5 + Math.random() * 5,
      };
    }

    function fieldAt(x, y, t) {
      let [u, v] = doubleGyre(x, y, t, A, EPS, W);
      const m = mouseRef.current;
      if (m.active) {
        const mx = (m.x / width) * DOMAIN_W;
        const my = (m.y / height) * DOMAIN_H;
        const dx = x - mx;
        const dy = y - my;
        const d2 = dx * dx + dy * dy;
        const falloff = Math.exp(-d2 / 0.03);
        u += -dy * 2.2 * falloff;
        v += dx * 2.2 * falloff;
      }
      return [u, v];
    }

    let t = 0;
    let raf;
    let running = true;
    let elapsed = 0;
    const dt = 1 / 60;

    function frame() {
      if (!running) return;
      t += dt;
      elapsed += dt;

      ctx.fillStyle = `rgba(${BG}, 0.09)`;
      ctx.fillRect(0, 0, width, height);

      for (const p of particles) {
        const [u, v] = fieldAt(p.x, p.y, t);
        const speed = Math.hypot(u, v);
        const px = (p.x / DOMAIN_W) * width;
        const py = (p.y / DOMAIN_H) * height;

        p.x += u * dt * SPEED_SCALE * 0.12;
        p.y += v * dt * SPEED_SCALE * 0.12;
        p.life += dt;

        const nx = (p.x / DOMAIN_W) * width;
        const ny = (p.y / DOMAIN_H) * height;

        ctx.strokeStyle = lerpColor(speed / 1.1);
        ctx.lineWidth = 1.1;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        if (p.x < -0.02 || p.x > DOMAIN_W + 0.02 || p.y < -0.02 || p.y > DOMAIN_H + 0.02 || p.life > p.maxLife) {
          Object.assign(p, spawn());
        }
      }

      if (mouseRef.current.active && readoutRef?.current) {
        const m = mouseRef.current;
        const mx = (m.x / width) * DOMAIN_W;
        const my = (m.y / height) * DOMAIN_H;
        const [u, v] = fieldAt(mx, my, t);
        const speed = Math.hypot(u, v);
        readoutRef.current.textContent = `u = ${speed.toFixed(2)}  ·  x = ${mx.toFixed(2)}, y = ${my.toFixed(2)}`;
      }

      if (reduced && elapsed > 2.2) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true };
    }
    function onLeave() {
      mouseRef.current.active = false;
      if (readoutRef?.current) readoutRef.current.textContent = "";
    }

    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [readoutRef]);

  return <canvas ref={canvasRef} className="flow-field-canvas" aria-hidden="true" />;
}
