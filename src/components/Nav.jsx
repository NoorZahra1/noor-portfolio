import { useEffect, useState } from "react";
import "../styles/nav.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="#top" className="nav-mark mono">
        N
      </a>
      <div className="nav-links">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="nav-link mono">
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
