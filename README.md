# Portfolio

A single-page portfolio built with React + Vite. The hero background is a
live particle-advection animation of a double-gyre flow field (a real
flow-visualization test case) — move your cursor over it to perturb the
field, the way an obstacle or probe would in a real flow.

## Before you publish — fill in your details

Everything editable lives in **`src/content.js`**. Open it and replace
anything in `[brackets]`:

- Your last name, email, LinkedIn URL, resume link
- Education dates and your prior degree
- Real experience entries and dates (the CFD thesis bullets are already
  filled in from what's on record)
- Your Upwork/freelance project(s) and 1–2 real client review quotes
- The Streamlit live-demo URL for the CFD dashboard project

If you don't have a resume link yet, either add one or remove the
"Resume" button in `src/components/Contact.jsx`.

## Run it locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173.

## Deploy to GitHub Pages

This repo already includes a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds and publishes on every push
to `main`.

1. Create a new GitHub repo and push this project to it:

   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/NoorZahra1/<your-repo-name>.git
   git push -u origin main
   ```

2. On GitHub: **Settings → Pages → Build and deployment → Source** →
   select **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab). Your
   site will be live at:

   - `https://NoorZahra1.github.io/<your-repo-name>/`, or
   - `https://NoorZahra1.github.io/` if the repo is named exactly
     `NoorZahra1.github.io`

No further config is needed — `vite.config.js` uses a relative base path,
so the build works at either URL.

## Structure

```
src/
  content.js          ← all editable text/data — start here
  components/         ← one file per section
  styles/             ← one CSS file per component
```
