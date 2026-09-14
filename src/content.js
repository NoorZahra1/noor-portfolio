// ---------------------------------------------------------------------------
// All of the site's real text lives here.
//
// >>> BEFORE YOU PUBLISH: search this file for "CONFIRM" and fix those 3 things:
//     1. your current degree name + school (SINES vs SEECS)
//     2. your advisor's name
//     3. the two testimonials (paste REAL client quotes, or delete the section)
// Everything else is built from your actual SmartCFD / F-35 work.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Noor Zahra",
  role: "Computational Aeronautics · CFD + AI Surrogate Modeling",
  tagline:
    "I build AI surrogates for computational fluid dynamics — from generating the CFD in ANSYS Fluent, to compressing it with POD and neural networks, to interactive 3D/VR tools that predict a flow field in milliseconds.",
  location: "Pakistan",
  github: "https://github.com/NoorZahra1",
  linkedin: "https://www.linkedin.com/in/noor-zahra/",
  email: "noorzahra605@gmail.com",
  resumeUrl: "", // optional: link a resume PDF, or the Contact button hides itself
};

export const about = `I work at the intersection of computational fluid dynamics and applied
machine learning. My research, SmartCFD, is a reduced-order surrogate that predicts
full CFD flow fields in milliseconds instead of the hours a solver takes: it compresses
solved fields with Proper Orthogonal Decomposition and trains a compact neural network
to map a physical parameter — Reynolds number, angle of attack, or Mach number — to the
modal coefficients.

I built this end to end: I generate the training data myself in ANSYS Fluent, wrote a
parametric automation pipeline that runs the CFD sweeps unattended, implemented the
POD-FCDNN model, validated it against published benchmarks, and developed an interactive
web application — including a 3D and VR viewer — for real-time design exploration. I am
currently extending it to a transonic, two-parameter case: a full F-35 configuration swept
over Mach number and angle of attack. Alongside the research I have eight years of software
development experience, which is what makes the application-building side of the work
second nature.`;

export const education = [
  {
    // CONFIRM: you told me MS Computational Science & Engineering at SINES; an earlier
    // draft said MS Computer Science at SEECS. Set whichever is correct before publishing.
    degree: "MS Computational Science & Engineering",
    school: "NUST — SINES (H-12, Islamabad)",
    period: "2025 — Present",
    detail:
      "Thesis (SmartCFD): a POD-FCDNN reduced-order surrogate for CFD, with an automated Fluent pipeline and an interactive 3D/VR design-exploration application. Advisor: [CONFIRM advisor name].",
  },
  {
    degree: "MSc Computer Science",
    school: "University of the Punjab",
    period: "2013 — 2017",
    detail: "Foundations in computing, algorithms, and numerical methods.",
  },
];

export const experience = [
  {
    title: "MS Researcher — SmartCFD (CFD + AI Surrogate Modeling)",
    org: "NUST",
    period: "2025 — Present",
    points: [
      "Built a POD-FCDNN reduced-order surrogate that predicts full velocity/pressure fields in milliseconds; achieved ~0.15% relative-L2 error on a held-out Reynolds number, validated by leave-one-out testing against Ghia et al. (1982).",
      "Generated all training data in ANSYS Fluent and wrote a parametric automation pipeline — a Python generator that emits Fluent journals — to run multi-parameter sweeps unattended.",
      "Extending the pipeline to a transonic, two-parameter case (F-35, Mach 0.75–0.85 × angle of attack 0–5°) with an automated compressible-CFD workflow.",
      "Developed the interactive workbench (FastAPI + JavaScript) and a WebXR 3D/VR viewer rendering isosurfaces, streamlines, and shock structure — the tool an aerodynamicist explores a design space in.",
    ],
  },
  {
    title: "Freelance Software / Web Developer",
    org: "Upwork · Fiverr",
    period: "2017 — Present",
    points: [
      "8+ years building responsive, production web applications for international clients, delivered end to end.",
      "Full ownership of scoping, development, and delivery — the engineering discipline that carries into the research application work.",
    ],
  },
];

// CONFIRM: replace these with REAL quotes from your Upwork/Fiverr reviews, or delete this
// array (and the section will not render). Never invent a testimonial.
export const testimonials = [
  {
    quote: "[Paste a short, real client review here.]",
    author: "[Client name or role — e.g. 'Client, WordPress project']",
  },
  {
    quote: "[A second real review, if you have one you like.]",
    author: "[Client name or role]",
  },
];

// tag: "research" | "engineering" — drives the filter toggle in Projects.
export const projects = [
  {
    tag: "research",
    status: "Flagship",
    title: "SmartCFD — AI Surrogate for CFD",
    summary:
      "A POD-FCDNN reduced-order model that predicts full CFD flow fields in milliseconds instead of hours. Compresses solved fields with Proper Orthogonal Decomposition, trains a neural network to map the physical parameter to modal coefficients, and reconstructs the field. Validated across four canonical benchmarks (cavity, cylinder, backward-facing step, airfoil) against published references.",
    stack: ["ANSYS Fluent", "Python", "PyTorch", "POD / reduced-order modeling", "NumPy / SciPy"],
    links: [
      { label: "Case (interactive)", url: "https://claude.ai/code/artifact/5f1892e6-b273-4f01-bd50-3317bcc19fdc" },
    ],
  },
  {
    tag: "research",
    status: "In progress",
    title: "F-35 Transonic Surrogate + CFD Automation",
    summary:
      "A two-parameter (Mach × angle-of-attack) surrogate for a full F-35 configuration in transonic cruise. Includes a parametric automation pipeline that computes each operating point from compressible-flow relations and generates the Fluent journal, running a 25-point sweep unattended — an automated design-analysis framework, and the enabling speed layer for optimization.",
    stack: ["ANSYS Fluent", "Compressible RANS", "Python automation", "POD-FCDNN", "three.js / WebXR"],
    links: [],
  },
  {
    tag: "engineering",
    status: "Live",
    title: "Interactive 3D / VR Flow Viewer",
    summary:
      "A dependency-light web application (FastAPI backend, vanilla-JS client) that serves surrogate predictions in real time, plus a WebXR viewer that renders the 3D field as isosurfaces, animated streamlines, and an in-plane vortex/shock slice — viewable on a Meta Quest headset, with the Reynolds number adjustable in your hand.",
    stack: ["FastAPI", "JavaScript", "three.js", "WebXR", "Plotly"],
    links: [],
  },
];

// Started, not yet shipped — shown as a roadmap strip, keeping the portfolio honest.
export const buildingNext = [
  "Surrogate-driven optimization (coupling the surrogate to a genetic algorithm)",
  "Transonic shock visualization (M=1 sonic surface) in VR",
  "Rolling the 3D surrogate out to the cylinder, step, and airfoil cases",
];

export const skills = [
  {
    group: "CFD / Simulation",
    items: ["ANSYS Fluent", "Compressible & incompressible RANS", "Mesh & boundary-condition workflows", "Solver convergence & diagnostics"],
  },
  {
    group: "AI / Reduced-order modeling",
    items: ["Proper Orthogonal Decomposition (POD)", "Neural surrogate models (PyTorch)", "Model validation (leave-one-out, benchmarks)", "Applied machine learning"],
  },
  {
    group: "Automation & scientific computing",
    items: ["Parametric CFD automation (Fluent journals)", "Python (NumPy / SciPy)", "Design-of-experiments sweeps", "Git & reproducible pipelines"],
  },
  {
    group: "Software & visualization",
    items: ["FastAPI", "JavaScript", "three.js / WebXR (VR)", "Interactive flow-field visualization"],
  },
];
