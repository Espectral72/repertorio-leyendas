/* ============================================================
   DATOS DE EXTRAS
   - thumb: ruta de la miniatura PNG (pon tus imágenes en img/extras/)
             el nombre de archivo va según el título del vídeo,
             no numerado, para que sea más fácil identificarlas.
   - dateISO: fecha en formato AAAA-MM-DD, se usa solo para ordenar
   - date: fecha en formato legible, se usa para mostrar en pantalla
   - glow:  color o degradado del brillo al pasar el ratón
   ============================================================ */
const extras = [
  {
    title: "Encerrados en los BACKROOMS en MINECRAFT",
    date: "13 Mayo 2025", dateISO: "2025-05-13",
    id: "AuZpUX57eNo",
    thumb: "img/extras/minecraft_backrooms.png",
    glow: "linear-gradient(180deg, #dad4da 50%, #98a527 50%)"
  },
  {
    title: "Como tan muchachos",
    date: "12 Noviembre 2023", dateISO: "2023-11-12",
    id: "zcGmrTNqxrU",
    thumb: "img/extras/muchachos.png",
    // Degradado "triangular": azul abajo-izq, rojo arriba, marrón abajo-der
    glow: "radial-gradient(circle at 0% 100%, #59a6d0, transparent 62%), radial-gradient(circle at 50% 0%, #d2013b, transparent 62%), radial-gradient(circle at 100% 100%, #9b7748, transparent 62%)"
  },
  {
    title: 'Nuestra aventura en "Escape The Backrooms" - #2',
    date: "1 Julio 2023", dateISO: "2023-07-01",
    id: "VXF19eACYQM",
    thumb: "img/extras/backrooms2.png",
    glow: "#002f00"
  },
  {
    title: 'Nuestra aventura en "Escape The Backrooms" - #1',
    date: "30 Junio 2023", dateISO: "2023-06-30",
    id: "zh-zrkTuxzs",
    thumb: "img/extras/backrooms1.png",
    glow: "#e0cb53"
  },
  {
    title: "Nuestra experiencia en Ferrocarriles Pacheco - Roblox Clips",
    date: "4 Octubre 2022", dateISO: "2022-10-04",
    id: "LhY7BbjzE1s",
    thumb: "img/extras/pacheco.png",
    glow: "#a9cfda"
  },
  {
    title: "El videojuego más terrorífico que he jugado - DOORS [ROBLOX]",
    date: "21 Agosto 2022", dateISO: "2022-08-21",
    id: "pc1yeKh4mB0",
    thumb: "img/extras/doors.png",
    glow: "#29160f"
  },
  {
    title: "Cara a cara Mejores momentos [GTA5] - Clips",
    date: "25 Abril 2022", dateISO: "2022-04-25",
    id: "IkBDXpVv0Ik",
    thumb: "img/extras/gta5.png",
    glow: "#85aaef"
  },
  {
    title: "ME PICAN LOS KOKOS",
    date: "17 Marzo 2022", dateISO: "2022-03-17",
    id: "4t_OFbw-J54",
    thumb: "img/extras/kokos.png",
    glow: "#373246"
  },
  {
    title: "4 Minutos de Sustillos",
    date: "27 Febrero 2022", dateISO: "2022-02-27",
    id: "mlVelnFdHEc",
    thumb: "img/extras/sustillos.png",
    glow: "#cd9c5a"
  },
  {
    title: "Clips Random Sea of thieves XD",
    date: "4 Diciembre 2021", dateISO: "2021-12-04",
    id: "HCRLQmE0sr8",
    thumb: "img/extras/seaofthieves.png",
    glow: "#05203d"
  },
  {
    title: "Enseño a jugar a un noob en Rainbow Six",
    date: "4 Diciembre 2021", dateISO: "2021-12-04",
    id: "I9LCfJWVdwE",
    thumb: "img/extras/R6.png",
    glow: "#ad5a3c"
  },
  {
    title: "Licenciados en comedia - Devour",
    date: "10 Octubre 2021", dateISO: "2021-10-10",
    id: "lXeJBqG3nbQ",
    thumb: "img/extras/devour.png",
    glow: "#fcfed7"
  }
];

const grid = document.getElementById("extras-grid");
const sortBtn = document.getElementById("sort-toggle");
let order = "desc"; // "desc" = más reciente primero (por defecto)

function render() {
  const sorted = [...extras].sort((a, b) =>
    order === "desc"
      ? b.dateISO.localeCompare(a.dateISO)
      : a.dateISO.localeCompare(b.dateISO)
  );

  grid.innerHTML = "";
  sorted.forEach(c => {
    const card = document.createElement("article");
    card.className = "clip";
    card.style.setProperty("--glow", c.glow);

    card.innerHTML = `
      <a class="clip-link" href="https://www.youtube.com/watch?v=${c.id}"
         target="_blank" rel="noopener" aria-label="Abrir ${c.title} en YouTube">
        <span class="glow"></span>
        <span class="thumb">
          <img src="${c.thumb}" alt="${c.title}" loading="lazy">
        </span>
      </a>
      <p class="clip-title">${c.title}</p>
      <p class="clip-date">${c.date}</p>`;

    card.querySelector("img").addEventListener("error", e => e.target.remove());
    grid.appendChild(card);
  });
}

sortBtn.addEventListener("click", () => {
  order = order === "desc" ? "asc" : "desc";
  sortBtn.textContent = order === "desc"
    ? "Más recientes primero"
    : "Más antiguos primero";
  sortBtn.dataset.order = order;
  render();
});

render();
