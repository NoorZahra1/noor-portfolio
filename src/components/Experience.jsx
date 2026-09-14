import { experience, testimonials } from "../content.js";
import "../styles/experience.css";

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section-head">
        <h2>Experience</h2>
        <span className="section-note mono">2020 — present</span>
      </div>

      <div className="exp-list">
        {experience.map((job, i) => (
          <div className="exp-item" key={i}>
            <div className="exp-period mono">{job.period}</div>
            <div className="exp-body">
              <h4>{job.title}</h4>
              <div className="exp-org">{job.org}</div>
              <ul>
                {job.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonials">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="testimonial">
            <p>&ldquo;{t.quote}&rdquo;</p>
            <footer className="mono">{t.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
