/* ============================================================
   DATOS DE LOS CLIPS
   - thumb: ruta de la miniatura PNG (pon tus imágenes en img/clips/)
   - glow:  color o degradado del brillo al pasar el ratón
   ============================================================ */
const clips = [
  { n: 1,  date: "13 Mayo 2022",       id: "n27QtTn9VfY", thumb: "img/clips-random/1.png",
    glow: "#e76eff" },
  { n: 2,  date: "27 Diciembre 2022",  id: "yKDTaVJ-VPc", thumb: "img/clips-random/2.png",
    glow: "linear-gradient(135deg,#00d4ff,#6a5cff,#ff5fd2,#ff3b3b,#ffe600)" },
  { n: 3,  date: "24 Marzo 2023",      id: "2Rr1KUpvZdU", thumb: "img/clips-random/3.png",
    glow: "linear-gradient(135deg,#a5ff45,#ff0004)" },
  { n: 4,  date: "27 Mayo 2023",       id: "0BlwjjMCayc", thumb: "img/clips-random/4.png",
    glow: "linear-gradient(135deg,#74f07f,#ff469f,#fcea09,#06f9fd)" },
  { n: 5,  date: "11 Agosto 2023",     id: "rlOO7fjlOl4", thumb: "img/clips-random/5.png",
    glow: "#f2ff00" },
  { n: 6,  date: "24 Enero 2024",      id: "uBxSEUjZgQ8", thumb: "img/clips-random/6.png",
    glow: "#feb976" },
  { n: 7,  date: "30 Mayo 2024",       id: "pUA970pf70o", thumb: "img/clips-random/7.png",
    glow: "linear-gradient(135deg,#ff2bd6,#8a4bff)" },
  { n: 8,  date: "2 Octubre 2024",     id: "OJDIvfTi0hA", thumb: "img/clips-random/8.png",
    glow: "#fdb025" },
  { n: 9,  date: "29 Marzo 2025",      id: "aD9-qXg1K-c", thumb: "img/clips-random/9.png",
    glow: "#7fd4ff" },
  { n: 10, date: "6 Diciembre 2025",   id: "84SXWmk4Kp0", thumb: "img/clips-random/10.png",
    glow: "linear-gradient(90deg,#c19ad4,#d4af37)" }
];

const grid = document.getElementById("clips-grid");

clips.forEach(c => {
  const card = document.createElement("article");
  card.className = "clip";
  card.style.setProperty("--glow", c.glow);

  card.innerHTML = `
    <a class="clip-link" href="https://www.youtube.com/watch?v=${c.id}"
       target="_blank" rel="noopener" aria-label="Abrir Clips Random #${c.n} en YouTube">
      <span class="glow"></span>
      <span class="thumb" data-n="${c.n}">
        <img src="${c.thumb}" alt="Clips Random #${c.n}" loading="lazy">
      </span>
    </a>
    <p class="clip-title">Clips Random #${c.n}</p>
    <p class="clip-date">${c.date}</p>`;

  // Si la miniatura aún no existe, se muestra un marcador
  card.querySelector("img").addEventListener("error", e => {
    e.target.remove();
  });

  grid.appendChild(card);
});
