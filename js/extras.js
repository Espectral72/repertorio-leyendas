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
    title: "JUGANDO CON SECRETIVE FOXX *DEVOUR*🤠🩸 #1",
    date: "29 Diciembre 2022", dateISO: "2022-12-29",
    id: "RC2ygpHVeD0",
    thumb: "img/extras/secretive_foxx_devour.png",
    glow: "#fd0002"
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
    title: "50 SUSTOS SOBRE MI",
    date: "9 Marzo 2022", dateISO: "2022-03-09",
    id: "upZLH19ObWc",
    thumb: "img/extras/50_sustos.png",
    glow: "#038da5"
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
  },
  {
    title: "Evento Temporada 7 - [Fortnite] Kevin tiene primos",
    date: "14 Septiembre 2021", dateISO: "2021-09-14",
    id: "OkL-_ZhTDEU",
    thumb: "img/extras/fortnite_kevin_primos.png",
    glow: "#d7836e"
  },
  {
    title: "Aventura Submarina - [Sea Of Thieves] La Perla Hundida #2",
    date: "2 Julio 2021", dateISO: "2021-07-02",
    id: "obHFSRcTWIM",
    thumb: "img/extras/sot_perla_hundida.png",
    glow: "#1b758d"
  },
  {
    title: "Viajamos a otro Mundo! - [Sea Of Thieves] La vida Pirata #1",
    date: "23 Junio 2021", dateISO: "2021-06-23",
    id: "AYObnC2_-C0",
    thumb: "img/extras/sot_vida_pirata.png",
    glow: "linear-gradient(180deg, #c2838e 50%, #2b2235 50%)"
  },
  {
    title: "Fortnite Temporada 7 en un Video",
    date: "9 Junio 2021", dateISO: "2021-06-09",
    id: "693YnNXR67U",
    thumb: "img/extras/fortnite_temporada7.png",
    glow: "#2f4d07"
  },
  {
    title: "NO TENGO PARA SKINS PERO SI PARA PEGATINAS :)",
    date: "5 Mayo 2021", dateISO: "2021-05-05",
    id: "DcAW9SP68_s",
    thumb: "img/extras/pegatinas.png",
    glow: "#5a5859"
  },
  {
    title: "3 tontos (menos yo) en un juego de miedo - [DEVOUR]",
    date: "5 Mayo 2021", dateISO: "2021-05-05",
    id: "ARyQKGjQuO0",
    thumb: "img/extras/3_tontos_devour.png",
    glow: "#403728"
  },
  {
    title: "Un dia normal en GTA #2",
    date: "26 Abril 2021", dateISO: "2021-04-26",
    id: "taPRhNzkBXA",
    thumb: "img/extras/gta_dia_normal2.png",
    glow: "#07347b"
  },
  {
    title: "Un Battle Royale un poco Especial",
    date: "7 Abril 2021", dateISO: "2021-04-07",
    id: "ufHx2iyWHFU",
    thumb: "img/extras/battle_royale_especial.png",
    glow: "#f4d18f"
  },
  {
    title: "Torneo el Suelo es lava TheGrefg - [Fortnite]",
    date: "15 Enero 2021", dateISO: "2021-01-15",
    id: "7nhxMlXBwEE",
    thumb: "img/extras/suelo_es_lava.png",
    glow: "linear-gradient(180deg, #a495aa 50%, #db6f55 50%)"
  },
  {
    title: "Un dia normal en GTA Roleplay",
    date: "5 Enero 2021", dateISO: "2021-01-05",
    id: "dYZV_UDURcE",
    thumb: "img/extras/gta_roleplay.png",
    glow: "#e7dac3"
  },
  {
    title: "Momento GTA5 [Clips]",
    date: "23 Diciembre 2020", dateISO: "2020-12-23",
    id: "SHN_9qV1j2E",
    thumb: "img/extras/momento_gta5.png",
    glow: "#895b32"
  },
  {
    title: "Recopilacion sustos de alejandro xd",
    date: "11 Noviembre 2020", dateISO: "2020-11-11",
    id: "osUA5nukR18",
    thumb: "img/extras/recopilacion_sustos.png",
    glow: "#8286a3"
  },
  {
    title: "El mejor duo de Cazafantasmas [Phasmophobia]",
    date: "20 Octubre 2020", dateISO: "2020-10-20",
    id: "VhYizc8ZZ3A",
    thumb: "img/extras/phasmophobia.png",
    glow: "#594f50"
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

    // Si no existe la miniatura local, usa la de YouTube automáticamente
    const img = card.querySelector("img");
    const fallbacks = [
      `https://img.youtube.com/vi/${c.id}/maxresdefault.jpg`,
      `https://img.youtube.com/vi/${c.id}/hqdefault.jpg`
    ];
    img.addEventListener("error", () => {
      const next = fallbacks.shift();
      if (next) img.src = next;   // prueba la siguiente opción
      else img.remove();          // si no hay ninguna, queda el marcador ▶
    });
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
