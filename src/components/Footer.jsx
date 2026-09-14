import { profile } from "../content.js";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <span className="mono">{profile.name} · {new Date().getFullYear()}</span>
      <span className="mono">built with React + a live double-gyre flow field</span>
    </footer>
  );
}
