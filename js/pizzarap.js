/* ============================================================
   DATOS DE PIZZARAP
   - thumb: ruta de la portada PNG cuadrada (pon tus imágenes en img/pizzarap/)
             nombradas según el título de la canción.
   - status: "ok" | "no-disponible" | "proximamente"
   - glow: color o degradado del brillo (solo aplica si status es "ok")
   ============================================================ */
const pizzarap = [
  {
    title: "Estrellate nikolas",
    id: "r694Qsu1guk",
    thumb: "img/pizzarap/estrellate.png",
    status: "ok",
    // Tercio superior #a3b495, rayas #d7ab5e/#7d0f2a en el tercio medio, tercio inferior #45557d
    glow: "linear-gradient(180deg, #a3b495 0%, #a3b495 30%, #d7ab5e 38%, #7d0f2a 46%, #d7ab5e 54%, #45557d 66%, #45557d 100%)"
  },
  {
    title: "Se cansó del discord",
    thumb: "img/pizzarap/se-canso-del-discord.png",
    status: "no-disponible"
  },
  {
    title: "Inofrente",
    thumb: "img/pizzarap/inofrente.png",
    status: "no-disponible"
  },
  {
    title: "Pablo Dembow",
    id: "QiQ4IjHiB_s",
    thumb: "img/pizzarap/pablo-dembow.png",
    status: "ok",
    glow: "#ffffff"
  },
  {
    title: "CURRICULUM-FOBIA",
    id: "XAMPjkCA4lg",
    thumb: "img/pizzarap/curriculum-fobia.png",
    status: "ok",
    glow: "linear-gradient(90deg, #b7a998, #4f2f1e)"
  },
  {
    title: "EXPLOTAdO",
    thumb: "img/pizzarap/explotado.png",
    status: "proximamente"
  }
];

const grid = document.getElementById("pizzarap-grid");

pizzarap.forEach(s => {
  const card = document.createElement("article");
  card.className = "clip";

  const isPlayable = s.status === "ok";
  const wrapperTag = isPlayable ? "a" : "div";
  const wrapperAttrs = isPlayable
    ? `href="https://www.youtube.com/watch?v=${s.id}" target="_blank" rel="noopener" aria-label="Abrir ${s.title} en YouTube"`
    : `aria-disabled="true"`;

  if (isPlayable) card.style.setProperty("--glow", s.glow);
  else card.classList.add("clip-disabled");

  let statusLine = "";
  if (s.status === "no-disponible") {
    statusLine = `<p class="clip-status status-unavailable">No disponible</p>`;
  } else if (s.status === "proximamente") {
    statusLine = `<p class="clip-status status-soon">Próximamente</p>`;
  }

  card.innerHTML = `
    <${wrapperTag} class="clip-link" ${wrapperAttrs}>
      <span class="glow"></span>
      <span class="thumb thumb-square">
        ${s.thumb ? `<img src="${s.thumb}" alt="${s.title}" loading="lazy">` : ""}
      </span>
    </${wrapperTag}>
    <p class="clip-title">${s.title}</p>
    ${statusLine}`;

  const img = card.querySelector("img");
  if (img) img.addEventListener("error", e => e.target.remove());

  grid.appendChild(card);
});
