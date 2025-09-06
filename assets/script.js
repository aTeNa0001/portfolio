async function loadProjects() {
  const res = await fetch("assets/projects.json");
  const projects = await res.json();
  const container = document.querySelector("#projects-grid");
  container.innerHTML = projects.map(p => `
    <div class="col-md-4">
      <div class="card h-100 project-card">
        ${p.image ? `<img src="${p.image}" class="card-img-top">` : ""}
        <div class="card-body">
          <h5 class="card-title">${p.title}</h5>
          <p class="card-text">${p.description}</p>
          <a href="${p.repo}" target="_blank" class="btn btn-outline-secondary">GitHub</a>
          ${p.demo ? `<a href="${p.demo}" target="_blank" class="btn btn-primary">Demo</a>` : ""}
        </div>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#projects-grid")) {
    loadProjects();
  }
});
