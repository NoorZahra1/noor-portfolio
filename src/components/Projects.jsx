import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, buildingNext } from "../content.js";
import ProjectCard from "./ProjectCard.jsx";
import "../styles/projects.css";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "research", label: "Research" },
  { key: "engineering", label: "Engineering" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.tag === filter)),
    [filter]
  );

  return (
    <section className="section projects" id="projects">
      <div className="section-head">
        <h2>Selected work</h2>
        <div className="filter-toggle">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter-btn mono ${filter === f.key ? "is-active" : ""}`}
              onClick={() => setFilter(f.key)}
            >
              {filter === f.key && (
                <motion.span layoutId="filter-pill" className="filter-pill" transition={{ duration: 0.25 }} />
              )}
              <span className="filter-label">{f.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="project-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <ProjectCard project={p} key={p.title} />
          ))}
        </AnimatePresence>
      </div>

      <div className="building-next">
        <span className="building-label mono">also building —</span>
        <div className="building-list">
          {buildingNext.map((b) => (
            <span key={b} className="building-item mono">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
