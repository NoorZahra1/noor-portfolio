import { about, education } from "../content.js";
import "../styles/about.css";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-head">
        <h2>About</h2>
        <span className="section-note mono">islamabad, pakistan</span>
      </div>
      <div className="about-grid">
        <p className="about-copy">{about}</p>
        <div className="timeline">
          {education.map((e, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-period mono">{e.period}</div>
              <div className="timeline-body">
                <h4>{e.degree}</h4>
                <div className="timeline-school">{e.school}</div>
                <p className="timeline-detail">{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
