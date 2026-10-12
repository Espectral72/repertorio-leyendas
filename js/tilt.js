/* ============================================================
   EFECTO TILT 3D en las miniaturas
   Cárgalo DESPUÉS del script de cada página:
     <script src="js/clips.js"></script>
     <script src="js/tilt.js"></script>
   Funciona también con las tarjetas que Extras vuelve a generar
   al cambiar el orden (usa MutationObserver).
   ============================================================ */
(() => {
  const grid = document.querySelector(".grid");
  if (!grid) return;

  // Sin efecto si el usuario prefiere menos movimiento
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  /* ---------- Ajustes ---------- */
  const TILT_MAX    = 8;   // grados máximos de inclinación
  const PERSPECTIVE = 900; // px

  function addTilt(link) {
    if (link.dataset.tilt) return;
    link.dataset.tilt = "1";

    link.addEventListener("pointermove", e => {
      if (e.pointerType !== "mouse") return;
      const r = link.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;   // 0 → 1
      const y = (e.clientY - r.top)  / r.height;  // 0 → 1
      const rotY = (x - 0.5) * 2 * TILT_MAX;
      const rotX = (0.5 - y) * 2 * TILT_MAX;
      link.style.transition = "transform .08s ease-out";
      link.style.transform =
        `perspective(${PERSPECTIVE}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.05)`;
    });

    link.addEventListener("pointerleave", () => {
      link.style.transition = "";  // vuelve a la transición suave del CSS
      link.style.transform = "";
    });
  }

  function setup(card) {
    if (card.classList.contains("clip-disabled")) return; // PizzaRap "No disponible"
    const link = card.querySelector(".clip-link");
    if (link) addTilt(link);
  }

  grid.querySelectorAll(".clip").forEach(setup);

  // Tarjetas nuevas (p. ej. al reordenar en Extras)
  new MutationObserver(mutations => {
    mutations.forEach(m => m.addedNodes.forEach(n => {
      if (n.nodeType === 1 && n.classList.contains("clip")) setup(n);
    }));
  }).observe(grid, { childList: true });
})();
