// datos.js — carga los JSON de /data y guarda el progreso en el navegador
window.BB = window.BB || {};

BB.datos = {
  bitsies: [],   // lista completa de bitsies.json
  porId: {},     // acceso rápido: BB.datos.porId.mario
  mundos: [],
  final: null,
  maestro: '',
  textos: {}
};

BB.cargarDatos = async function () {
  const leer = async (ruta) => {
    const r = await fetch(ruta, { cache: 'no-cache' });
    if (!r.ok) throw new Error(ruta + ' → ' + r.status);
    return r.json();
  };
  const [b, m, t] = await Promise.all([
    leer('data/bitsies.json'),
    leer('data/mundos.json'),
    leer('data/textos.json')
  ]);
  BB.datos.bitsies = b.bitsies;
  b.bitsies.forEach((x) => { BB.datos.porId[x.id] = x; });
  BB.datos.mundos = m.mundos;
  BB.datos.final = m.final;
  BB.datos.maestro = m.codigo_maestro || '';
  BB.datos.textos = t;
};

// ---------- Progreso (localStorage, siempre dentro de try/catch) ----------
const CLAVE = 'bitsy-battle-v1';

BB.progresoVacio = function () {
  return {
    desbloqueados: ['base'], // ids de Bitsies jugables
    encontrados: [],         // ids de mundos cuyo código se ingresó
    ganados: [],             // ids de mundos con la batalla ganada
    virusVencido: false,
    sonido: true,
    ultimoEquipo: []
  };
};

BB.progreso = BB.progresoVacio();

BB.cargarProgreso = function () {
  try {
    const crudo = localStorage.getItem(CLAVE);
    if (crudo) BB.progreso = Object.assign(BB.progresoVacio(), JSON.parse(crudo));
  } catch (e) { /* sin almacenamiento: se juega igual, sin guardar */ }
};

BB.guardar = function () {
  try { localStorage.setItem(CLAVE, JSON.stringify(BB.progreso)); } catch (e) { /* nada */ }
};

BB.borrarProgreso = function () {
  const sonido = BB.progreso.sonido;
  BB.progreso = BB.progresoVacio();
  BB.progreso.sonido = sonido;
  BB.guardar();
};

// ---------- Ayudas ----------
BB.al = (lista) => lista[Math.floor(Math.random() * lista.length)];
BB.esperar = (ms) => new Promise((r) => setTimeout(r, ms));
BB.senal = () => BB.progreso.ganados.length;
BB.desbloqueado = (id) => BB.progreso.desbloqueados.includes(id);
