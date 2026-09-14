import { useRef } from "react";
import { motion } from "framer-motion";
import FlowField from "./FlowField.jsx";
import { profile } from "../content.js";
import "../styles/hero.css";

export default function Hero() {
  const readoutRef = useRef(null);

  return (
    <section className="hero" id="top">
      <FlowField readoutRef={readoutRef} />
      <div className="hero-content">
        <motion.p
          className="hero-eyebrow mono"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {profile.role}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
          {profile.tagline}
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
        >
          <a className="btn primary" href="#projects">
            See the work
          </a>
          <a className="btn" href="#contact">
            Get in touch
          </a>
        </motion.div>
      </div>
      <div className="hero-readout mono" ref={readoutRef} aria-hidden="true" />
      <div className="hero-hint mono">move your cursor — it perturbs the field</div>
    </section>
  );
}
