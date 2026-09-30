/*
  Edit the S object below to personalize the site. Project text is intentionally
  placeholder copy until Chandru's own project details are added.
*/
const S = {
  name: "Chandru",
  email: "chandruraja467@gmail.com",
  availability: "[Add your availability]",
  year: new Date().getFullYear(),
  projects: [
    { id: "01", title: "[Project title]", kind: "UI/UX · DIGITAL PRODUCT", year: "[YEAR]", art: "one", summary: "[Add a short description of the project, its audience, and the design challenge.]" },
    { id: "02", title: "[Project title]", kind: "3D · VISUAL DESIGN", year: "[YEAR]", art: "two", summary: "[Add a short description of the project, its audience, and the design challenge.]" },
    { id: "03", title: "[Project title]", kind: "PRODUCT DESIGN · UI", year: "[YEAR]", art: "three", summary: "[Add a short description of the project, its audience, and the design challenge.]" },
    { id: "04", title: "[Project title]", kind: "INTERFACE · VISUAL SYSTEM", year: "[YEAR]", art: "four", summary: "[Add a short description of the project, its audience, and the design challenge.]" }
  ],
  services: [
    { title: "Product & UI design", description: "Clear, considered interfaces for useful digital products.", symbol: "↗" },
    { title: "UX research & flows", description: "User journeys and structure that make products easier to understand.", symbol: "⌁" },
    { title: "Prototyping", description: "Clickable explorations that bring ideas into focus early.", symbol: "◌" },
    { title: "Design systems", description: "Flexible visual foundations for consistent experiences.", symbol: "▦" },
    { title: "Visual design", description: "Distinctive art direction and detail across digital touchpoints.", symbol: "✳" },
    { title: "3D visualization", description: "Dimensional forms and 3D assets that add character to a concept.", symbol: "◉" }
  ],
  process: [
    { title: "Discover", description: "Understand the people, context, and opportunity." },
    { title: "Define", description: "Frame the problem and align on what matters." },
    { title: "Explore", description: "Open up ideas through flows, form, and prototypes." },
    { title: "Refine", description: "Test the details and bring the strongest direction together." },
    { title: "Deliver", description: "Prepare a clear, thoughtful handoff for what comes next." }
  ]
};

const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);

function applyContent() {
  document.querySelectorAll("[data-name]").forEach((element) => { element.textContent = S.name; });
  document.querySelectorAll("[data-email]").forEach((element) => { element.textContent = S.email; });
  document.querySelectorAll("[data-email-link]").forEach((element) => { element.href = `mailto:${S.email}`; });
  document.querySelectorAll("[data-availability]").forEach((element) => { element.textContent = S.availability; });
  document.querySelectorAll("[data-year]").forEach((element) => { element.textContent = S.year; });
  if (document.querySelector("#project-grid")) renderProjects();
  if (document.querySelector("#service-list")) renderServices();
  if (document.querySelector("#process-list")) renderProcess();
  if (document.querySelector("#case-study")) renderCaseStudy();
}

function renderProjects() {
  const grid = document.querySelector("#project-grid");
  grid.innerHTML = S.projects.map((project, index) => `
    <a class="project-card reveal" href="work.html?project=${encodeURIComponent(project.id)}" aria-label="Open case study: ${escapeHTML(project.title)}, ${escapeHTML(project.kind)}">
      <div class="project-cover">
        <span class="cover-label">PROJECT VISUAL / PLACEHOLDER</span>
        <div class="cover-art cover-${escapeHTML(project.art)}" aria-hidden="true">${artMarkup(project.art)}</div>
        <span class="cover-number">${escapeHTML(project.id)} / 04</span>
      </div>
      <div class="project-meta"><div><h3>${escapeHTML(project.title)}<span class="project-arrow" aria-hidden="true">↗</span></h3><p class="project-kind">${escapeHTML(project.kind)}</p></div><span class="project-year">${escapeHTML(project.year)}</span></div>
    </a>`).join("");
}

function artMarkup(art) {
  if (art === "one") return `<div class="phone-shell"><div class="phone-top"></div><div class="phone-glow"></div><div class="phone-line"></div><div class="phone-line short"></div><div class="phone-tile-row"><i></i><i></i><i></i></div><div class="phone-line"></div><div class="phone-line short"></div></div>`;
  if (art === "two") return `<div class="sculpture"><div class="sculpture-grid"></div></div>`;
  if (art === "three") return `<div class="dashboard"><div class="dashboard-side"><i></i><i></i><i></i><i></i><i></i></div><div class="dashboard-main"><div class="dash-title"></div><div class="dash-caption"></div><div class="dash-cards"><i></i><i></i><i></i></div><div class="dash-chart"></div></div></div>`;
  return `<div class="cover-poster"><strong>FORM<br>STUDY</strong><small>VISUAL EXPLORATION</small></div>`;
}

function renderServices() {
  document.querySelector("#service-list").innerHTML = S.services.map((service, index) => `
    <article class="service-row reveal"><span class="service-number">0${index + 1}</span><h3>${escapeHTML(service.title)}</h3><p>${escapeHTML(service.description)}</p><span class="service-symbol" aria-hidden="true">${escapeHTML(service.symbol)}</span></article>`).join("");
}

function renderProcess() {
  document.querySelector("#process-list").innerHTML = S.process.map((step, index) => `
    <li class="process-step reveal"><span>0${index + 1} / 05</span><h3>${escapeHTML(step.title)}</h3><p>${escapeHTML(step.description)}</p></li>`).join("");
}

function renderCaseStudy() {
  const target = document.querySelector("#case-study");
  const requestedId = new URLSearchParams(window.location.search).get("project") || S.projects[0].id;
  const projectIndex = S.projects.findIndex((project) => project.id === requestedId);
  if (projectIndex < 0) {
    target.innerHTML = `<section class="section-wrap case-not-found"><p class="eyebrow"><span class="eyebrow-line"></span> Project not found</p><h1>This project isn’t here.</h1><p>Return to the selected work and choose another project.</p><a class="button button-primary" href="index.html#work">Back to selected work <span>↗</span></a></section>`;
    return;
  }
  const project = S.projects[projectIndex];
  const nextProject = S.projects[(projectIndex + 1) % S.projects.length];
  const placeholder = "[Add your project details here. Describe the decisions, design artifacts, and result using your own project facts.]";
  document.title = `${project.title.replaceAll("[", "").replaceAll("]", "")} — ${S.name} · Portfolio`;
  target.innerHTML = `
    <section class="case-hero section-wrap">
      <a class="case-back" href="index.html#work"><span aria-hidden="true">←</span> Back to selected work</a>
      <p class="case-kicker">PROJECT ${escapeHTML(project.id)} &nbsp;·&nbsp; ${escapeHTML(project.kind)}</p>
      <h1 class="case-title">${escapeHTML(project.title.split(" ")[0])}<br><em>${escapeHTML(project.title.split(" ").slice(1).join(" ") || "[Add project name]")}</em></h1>
      <p class="case-summary">${escapeHTML(project.summary)}</p>
      <div class="case-meta"><div><span>Role</span><span>[Add your role]</span></div><div><span>Timeline</span><span>[Add project timeline]</span></div><div><span>Team</span><span>[Add collaborators]</span></div><div><span>Tools</span><span>[Add tools used]</span></div></div>
      <div class="case-art"><div class="sculpture"><div class="sculpture-grid"></div></div><span class="case-art-note">PROJECT IMAGE / 3D ASSET — REPLACE WITH YOUR WORK</span></div>
    </section>
    <section class="case-body section-wrap">
      <article class="case-row"><span class="case-row-label">01 / Overview</span><div><h2>The idea behind it.</h2><p class="case-placeholder">${escapeHTML(placeholder)}</p></div></article>
      <article class="case-row"><span class="case-row-label">02 / Challenge & goals</span><div><h2>What needed to change.</h2><p class="case-placeholder">[Describe the user or business challenge. Add the goals that guided the design.]</p></div></article>
      <article class="case-row"><span class="case-row-label">03 / Research & insights</span><div><h2>What I learned.</h2><p class="case-placeholder">[Summarize the research methods and the most useful user insights.]</p><div class="case-insights"><article><span>INSIGHT 01</span><p>[Add a user insight]</p></article><article><span>INSIGHT 02</span><p>[Add a user insight]</p></article><article><span>INSIGHT 03</span><p>[Add a user insight]</p></article></div></div></article>
      <article class="case-row"><span class="case-row-label">04 / Design process</span><div><h2>From rough idea to clear direction.</h2><p class="case-placeholder">[Show your key flows, wireframes, explorations, and how the design developed.]</p><div class="case-gallery"><div>FLOW / WIREFRAME<br><br>[REPLACE WITH PROCESS VISUAL]</div><div>DESIGN EXPLORATION<br><br>[REPLACE WITH PROCESS VISUAL]</div></div></div></article>
      <article class="case-row"><span class="case-row-label">05 / Final design</span><div><h2>Made for people, shaped with depth.</h2><p class="case-placeholder">[Add final interface screens, 3D assets, and a description of the finished experience.]</p><div class="case-gallery"><div>FINAL UI / SCREEN 01<br><br>[REPLACE WITH PROJECT IMAGE]</div><div>3D / VISUAL ASSET<br><br>[REPLACE WITH YOUR 3D WORK]</div></div></div></article>
      <article class="case-row"><span class="case-row-label">06 / Decisions</span><div><h2>Small choices. Clear reasons.</h2><div class="case-insights"><article><span>DECISION 01</span><p>[What you chose, and why it helped.]</p></article><article><span>DECISION 02</span><p>[What you chose, and why it helped.]</p></article><article><span>DECISION 03</span><p>[What you chose, and why it helped.]</p></article></div></div></article>
      <article class="case-row"><span class="case-row-label">07 / Outcome & learning</span><div><h2>What came of the work.</h2><p class="case-placeholder">[Add verified outcomes, metrics if available, and what you learned. Do not add estimates as results.]</p></div></article>
      <div class="case-next"><span>NEXT PROJECT &nbsp; / &nbsp; ${escapeHTML(nextProject.id)}</span><a href="work.html?project=${encodeURIComponent(nextProject.id)}">${escapeHTML(nextProject.title)} <span aria-hidden="true">↗</span></a></div>
    </section>`;
  document.querySelectorAll(".case-back").forEach((link) => link.addEventListener("click", () => { try { sessionStorage.setItem("portfolioScrollToWork", "1"); } catch (_) {} }));
}

function setupTheme() {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;
  let theme = "dark";
  try { theme = localStorage.getItem("chandru-portfolio-theme") || "dark"; } catch (_) {}
  root.dataset.theme = theme;
  const updateLabel = () => {
    const light = root.dataset.theme === "light";
    toggle.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
    toggle.querySelector(".theme-icon").textContent = light ? "☼" : "◐";
  };
  updateLabel();
  toggle.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("chandru-portfolio-theme", root.dataset.theme); } catch (_) {}
    updateLabel();
  });
}

function setupMobileMenu() {
  const button = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#mobile-menu");
  if (!button || !menu) return;
  const close = () => { button.setAttribute("aria-expanded", "false"); button.setAttribute("aria-label", "Open navigation menu"); menu.hidden = true; document.body.classList.remove("menu-open"); };
  button.addEventListener("click", () => {
    const opening = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(opening)); button.setAttribute("aria-label", opening ? "Close navigation menu" : "Open navigation menu");
    menu.hidden = !opening; document.body.classList.toggle("menu-open", opening);
  });
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") close(); });
}

function setupReveals() {
  const items = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible"); currentObserver.unobserve(entry.target);
    });
  }, { threshold: .08, rootMargin: "0px 0px -35px 0px" });
  items.forEach((item, index) => { item.style.setProperty("--delay", `${Math.min(index % 5, 4) * 45}ms`); observer.observe(item); });
}

function setupTilt() {
  const visual = document.querySelector("[data-tilt]");
  if (!visual || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  visual.addEventListener("pointermove", (event) => {
    const bounds = visual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    visual.style.setProperty("--tilt-x", `${x * 11}deg`);
    visual.style.setProperty("--tilt-y", `${-y * 9}deg`);
    visual.classList.add("is-tilting");
  });
  visual.addEventListener("pointerleave", () => { visual.classList.remove("is-tilting"); visual.style.removeProperty("--tilt-x"); visual.style.removeProperty("--tilt-y"); });
}

applyContent();
setupTheme();
setupMobileMenu();
setupReveals();
setupTilt();
