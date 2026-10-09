// main.js — arranque de la app
(async function () {
  // el audio del navegador solo arranca después de un toque
  document.addEventListener('pointerdown', () => BB.audio.iniciar(), { once: true });
  BB.cargarProgreso();
  try {
    await BB.cargarDatos();
    await BB.cargarSprites();
  } catch (e) {
    document.getElementById('cargando-txt').innerHTML =
      'ERROR 0xFF: NO SE PUDIERON LEER LOS DATOS.<br><br>' +
      'Abrí la app desde un servidor (GitHub Pages, o "Live Server" en VS Code), ' +
      'no con doble clic sobre index.html. Ver README.';
    console.error(e);
    return;
  }
  BB.armarTeclado();
  BB.armarEventos();
  BB.ir('inicio');
})();
