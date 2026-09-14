import { skills } from "../content.js";
import "../styles/skills.css";

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-head">
        <h2>Skills</h2>
        <span className="section-note mono">by domain</span>
      </div>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-group" key={group.group}>
            <h4>{group.group}</h4>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
