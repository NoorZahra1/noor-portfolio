import { profile } from "../content.js";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-head">
        <h2>Get in touch</h2>
        <span className="section-note mono">open to RA & AI/LLM engineering roles</span>
      </div>
      <p className="contact-lede">
        Reach out if the CFD/AI Research Associate role — or something adjacent in applied ML — sounds like a fit.
      </p>
      <a href={`mailto:${profile.email}`} className="contact-email">
        {profile.email}
      </a>
      <div className="contact-links">
        <a href={profile.github} target="_blank" rel="noreferrer" className="btn">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn">
          LinkedIn
        </a>
        <a href={profile.resumeUrl} className="btn primary">
          Resume
        </a>
      </div>
    </section>
  );
}
