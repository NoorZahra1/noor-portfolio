import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className="project-card"
    >
      <div className="project-card-top">
        <span className={`tag ${project.tag}`}>{project.tag}</span>
        <span className="project-status mono">{project.status}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      <div className="project-stack">
        {project.stack.map((s) => (
          <span key={s} className="stack-chip mono">
            {s}
          </span>
        ))}
      </div>
      {project.links?.length > 0 && (
        <div className="project-links">
          {project.links.map((l) => (
            <a key={l.label} href={l.url} className="project-link mono" target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
}
