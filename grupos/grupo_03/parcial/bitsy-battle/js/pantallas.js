// pantallas.js — menús: inicio, ingresar señal, colección, mapa, equipo, resultado, salida, ajustes
window.BB = window.BB || {};

const $ = (id) => document.getElementById(id);

BB.ir = function (nombre) {
  document.querySelectorAll('.vista').forEach((v) => v.classList.remove('activa'));
  $('v-' + nombre).classList.add('activa');
  $('modal').hidden = true;
  const pintar = BB.pantallas[nombre];
  if (pintar) pintar();
};

BB.pintarSenal = function (cont, nuevo = -1) {
  const n = BB.senal();
  cont.innerHTML = '';
  for (let i = 0; i < 8; i++) {
    const s = document.createElement('i');
    if (i < n) s.className = 'on' + (i === nuevo ? ' nuevo' : '');
    cont.appendChild(s);
  }
};

// ---------------- Ficha de un Bitsy (modal) ----------------
BB.mostrarFicha = function (id, { revelar = false, aviso = '' } = {}) {
  const d = BB.datos.porId[id];
  const sp = BB.sprites[id];
  const stat = (nom, v, max) => `<div class="stat"><span>${nom}</span><span class="barra"><i style="width:${Math.round(v / max * 100)}%"></i></span><span>${v}</span></div>`;
  $('ficha').innerHTML = `
    ${aviso ? `<p class="aviso">${aviso}</p>` : ''}
    <div class="ficha-top">
      <img class="sprite ${revelar ? 'revelar' : ''}" src="${sp.src}" alt="${d.nombre}">
      <div><h3>${d.nombre}</h3><p class="rol">${d.rol}</p></div>
    </div>
    ${stat('PV', d.stats.pv, 140)}${stat('ATQ', d.stats.atq, 15)}${stat('DEF', d.stats.def, 15)}${stat('VEL', d.stats.vel, 15)}
    <ul>${d.movimientos.map((m) => `<li>${m.nombre}<small>${m.desc}</small></li>`).join('')}</ul>
    <button class="btn btn-primario" id="ficha-cerrar">CERRAR</button>`;
  $('modal').hidden = false;
  $('ficha-cerrar').onclick = () => { BB.audio.sonar('tecla'); $('modal').hidden = true; };
};

BB.carta = function (id, { bloqueada = false, badge = '' } = {}) {
  const d = BB.datos.porId[id];
  const c = document.createElement('button');
  c.className = 'carta' + (bloqueada ? ' bloqueada' : '');
  c.innerHTML = `<img class="sprite" src="${BB.sprites[id].src}" alt="">
    <span class="nombre">${bloqueada ? '???' : d.nombre.replace('Bitsy ', '')}</span>${badge ? `<span class="badge">${badge}</span>` : ''}`;
  return c;
};

// ---------------- Estado de la batalla que se va a jugar ----------------
BB.combate = null; // { tipo: 'mundo' | 'final' | 'rapida', mundo, rival, fondo }
let equipo = [];

BB.pantallas = {
  inicio() {
    BB.pintarSenal($('senal-barra'));
    $('senal-txt').textContent = `SEÑAL ${BB.senal()}/8`;
    const t = BB.datos.textos.inicio_bitsy;
    $('guia-txt').textContent = BB.senal() === 0 && BB.progreso.encontrados.length === 0 ? t[0] + ' ' + t[3] : BB.al(t);
  },

  ingresar() {
    BB.codigo = [];
    pintarCasilleros();
    $('ingresar-msg').textContent = '\u00a0';
    $('ingresar-msg').className = 'mensaje';
  },

  coleccion() {
    const g = $('col-grilla');
    g.innerHTML = '';
    const jugables = BB.datos.bitsies.filter((b) => b.jugable);
    jugables.forEach((b) => {
      const bloq = !BB.desbloqueado(b.id);
      const c = BB.carta(b.id, { bloqueada: bloq });
      c.onclick = () => {
        BB.audio.sonar('tecla');
        if (bloq) {
          const m = BB.datos.mundos.find((x) => x.variante === b.id);
          $('ficha').innerHTML = `<p class="terminal">ARCHIVO BLOQUEADO</p><p>${m ? `Encontrá a Luca y Donna en la página ${m.pagina} (${m.nombre}).` : 'Vencé al Virus para recuperarlo.'}</p><button class="btn btn-primario" id="ficha-cerrar">CERRAR</button>`;
          $('modal').hidden = false;
          $('ficha-cerrar').onclick = () => { $('modal').hidden = true; };
        } else BB.mostrarFicha(b.id);
      };
      g.appendChild(c);
    });
    $('col-contador').textContent = `${jugables.filter((b) => BB.desbloqueado(b.id)).length}/${jugables.length}`;
  },

  mapa() {
    const m = $('mapa');
    m.innerHTML = '';
    BB.datos.mundos.forEach((mu) => {
      const enc = BB.progreso.encontrados.includes(mu.id);
      const gan = BB.progreso.ganados.includes(mu.id);
      const b = document.createElement('button');
      b.className = 'mundo' + (enc ? '' : ' bloqueado') + (gan ? ' ganado' : '');
      if (enc) b.style.backgroundImage = `url(${mu.fondo})`;
      b.innerHTML = `<span class="carpeta">C:\\MUNDO_0${mu.pagina}</span>
        <span class="mnombre">${enc ? mu.nombre : 'CARPETA CORRUPTA'}</span>
        <span class="estado">${gan ? '✔ SEÑAL OK' : enc ? '► PELEAR' : '✖ FALTA LA PÁGINA'}</span>`;
      b.onclick = () => {
        if (!enc) { BB.audio.sonar('error'); b.classList.add('temblor'); setTimeout(() => b.classList.remove('temblor'), 600); return; }
        BB.audio.sonar('elegir');
        BB.combate = { tipo: 'mundo', mundo: mu, rival: mu.equipo_rival, fondo: mu.fondo, titulo: mu.nombre };
        BB.ir('equipo');
      };
      m.appendChild(b);
    });
    const listo = BB.senal() >= 8;
    const f = document.createElement('button');
    f.className = 'mundo final' + (listo ? '' : ' bloqueado');
    f.innerHTML = `<span class="carpeta">C:\\SISTEMA\\NUCLEO</span><span class="mnombre">${BB.progreso.virusVencido ? 'VIRUS VENCIDO' : 'NÚCLEO DEL VIRUS'}</span>
      <span class="estado">${listo ? '► BATALLA FINAL' : `✖ SEÑAL ${BB.senal()}/8`}</span>`;
    f.onclick = () => {
      if (!listo) { BB.audio.sonar('error'); $('modal').hidden = false; $('ficha').innerHTML = `<p>${BB.datos.textos.final_bloqueado}</p><button class="btn btn-primario" id="ficha-cerrar">OK</button>`; $('ficha-cerrar').onclick = () => { $('modal').hidden = true; }; return; }
      BB.audio.sonar('elegir');
      BB.combate = { tipo: 'final', rival: BB.datos.final.equipo_rival, fondo: BB.datos.final.fondo, titulo: BB.datos.final.nombre };
      BB.ir('equipo');
    };
    m.appendChild(f);
  },

  equipo() {
    if (!equipo.length) equipo = BB.progreso.ultimoEquipo.filter((id) => BB.desbloqueado(id)).slice(0, 4);
    $('equipo-volver').onclick = () => BB.ir(BB.combate.tipo === 'rapida' ? 'inicio' : 'mapa');
    $('equipo-rival-txt').textContent = 'RIVAL: ' + BB.combate.titulo;
    pintarEquipo();
  },

  ajustes() {
    $('btn-sonido').textContent = 'SONIDO: ' + (BB.progreso.sonido ? 'SÍ' : 'NO');
    $('ajustes-msg').textContent = '\u00a0';
    $('ajustes-creditos').textContent = BB.datos.textos.creditos;
    BB.confirmarBorrado = false;
    $('btn-borrar-partida').textContent = 'BORRAR PARTIDA';
  }
};

// ---------------- Ingresar señal ----------------
const SIMBOLOS = ['■', '▲', '●', '✦', '♥', '✖'];
BB.codigo = [];
let errores = 0;

function pintarCasilleros() {
  const cs = $('casilleros').children;
  $('casilleros').classList.remove('ok');
  for (let i = 0; i < 4; i++) {
    cs[i].textContent = BB.codigo[i] || '';
    cs[i].className = i === BB.codigo.length ? 'cursor' : '';
  }
}

BB.armarTeclado = function () {
  const t = $('teclado');
  SIMBOLOS.forEach((s) => {
    const b = document.createElement('button');
    b.className = 'btn';
    b.textContent = s;
    b.setAttribute('aria-label', 'símbolo ' + s);
    b.onclick = () => {
      if (BB.codigo.length >= 4) return;
      BB.audio.sonar('tecla');
      BB.codigo.push(s);
      pintarCasilleros();
    };
    t.appendChild(b);
  });
  $('btn-borrar').onclick = () => { BB.audio.sonar('tecla'); BB.codigo.pop(); pintarCasilleros(); };
  $('btn-ok').onclick = () => verificarCodigo();
};

function verificarCodigo() {
  const msg = $('ingresar-msg');
  if (BB.codigo.length < 4) { BB.audio.sonar('error'); msg.className = 'mensaje error'; msg.textContent = 'FALTAN SÍMBOLOS'; return; }
  const cod = BB.codigo.join('');
  const T = BB.datos.textos;

  if (cod === BB.datos.maestro) {
    BB.datos.mundos.forEach((m) => {
      if (!BB.progreso.encontrados.includes(m.id)) BB.progreso.encontrados.push(m.id);
      if (m.variante && !BB.desbloqueado(m.variante)) BB.progreso.desbloqueados.push(m.variante);
    });
    BB.guardar();
    BB.audio.sonar('desbloqueo');
    msg.className = 'mensaje'; msg.textContent = T.maestro;
    $('casilleros').classList.add('ok');
    BB.codigo = [];
    return;
  }

  const mundo = BB.datos.mundos.find((m) => m.codigo === cod);
  if (!mundo) {
    errores++;
    BB.audio.sonar('error');
    msg.className = 'mensaje error';
    msg.textContent = T.error_codigo.replace('{n}', (errores % 9) + 1);
    $('ingresar-pista').textContent = BB.al(T.pistas_error);
    $('casilleros').classList.add('temblor');
    setTimeout(() => $('casilleros').classList.remove('temblor'), 600);
    BB.codigo = []; setTimeout(pintarCasilleros, 500);
    return;
  }
  if (BB.progreso.encontrados.includes(mundo.id)) {
    BB.audio.sonar('error');
    msg.className = 'mensaje'; msg.textContent = T.codigo_repetido;
    BB.codigo = []; setTimeout(pintarCasilleros, 500);
    return;
  }
  BB.progreso.encontrados.push(mundo.id);
  $('casilleros').classList.add('ok');
  BB.audio.sonar('desbloqueo');
  msg.className = 'mensaje';
  msg.textContent = `SEÑAL DE ${mundo.nombre.toUpperCase()} RECUPERADA`;
  if (mundo.variante && !BB.desbloqueado(mundo.variante)) {
    BB.progreso.desbloqueados.push(mundo.variante);
    BB.guardar();
    setTimeout(() => BB.mostrarFicha(mundo.variante, { revelar: true, aviso: '¡NUEVO DISFRAZ!' }), 500);
  } else {
    BB.guardar();
    $('ingresar-pista').textContent = T.mundo_sin_variante;
  }
  BB.codigo = [];
  setTimeout(pintarCasilleros, 900);
}

// ---------------- Elegir equipo ----------------
function pintarEquipo() {
  const slots = $('equipo-slots');
  slots.innerHTML = '';
  for (let i = 0; i < 4; i++) {
    const s = document.createElement('button');
    s.className = 'slot' + (equipo[i] ? ' lleno' : '');
    s.setAttribute('aria-label', equipo[i] ? 'Quitar ' + BB.datos.porId[equipo[i]].nombre : 'Lugar vacío');
    if (equipo[i]) s.innerHTML = `<img class="sprite" src="${BB.sprites[equipo[i]].src}" alt="">`;
    s.onclick = () => { if (equipo[i]) { BB.audio.sonar('tecla'); equipo.splice(i, 1); pintarEquipo(); } };
    slots.appendChild(s);
  }
  const g = $('equipo-grilla');
  g.innerHTML = '';
  BB.datos.bitsies.filter((b) => b.jugable && BB.desbloqueado(b.id)).forEach((b) => {
    const n = equipo.filter((x) => x === b.id).length;
    const c = BB.carta(b.id, { badge: n ? (b.repetible ? '×' + n : '✔') : '' });
    if (n) c.classList.add('elegida');
    c.onclick = () => {
      if (equipo.length >= 4 || (n && !b.repetible)) { BB.audio.sonar('error'); return; }
      BB.audio.sonar('tecla');
      equipo.push(b.id);
      pintarEquipo();
    };
    g.appendChild(c);
  });
  $('btn-pelear').disabled = equipo.length !== 4;
}

BB.batallaRapida = function () {
  const pool = BB.datos.bitsies.filter((b) => b.jugable && (b.id !== 'virus' || BB.progreso.virusVencido)).map((b) => b.id);
  const rival = [];
  while (rival.length < 4 && pool.length) rival.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
  const fondos = BB.datos.mundos.map((m) => m.fondo);
  BB.combate = { tipo: 'rapida', rival: rival.map((id) => ({ bitsy: id, infectado: true, nivel: 1 })), fondo: BB.al(fondos), titulo: 'BATALLA RÁPIDA' };
  BB.ir('equipo');
};

BB.empezarBatalla = async function () {
  BB.progreso.ultimoEquipo = equipo.slice();
  BB.guardar();
  // la Base repetida se numera: Bitsy Base 2, 3…
  const conteo = {};
  const jugador = equipo.map((id) => {
    conteo[id] = (conteo[id] || 0) + 1;
    const total = equipo.filter((x) => x === id).length;
    return { id, sufijo: total > 1 ? ' ' + conteo[id] : '' };
  });
  const combate = BB.combate;
  BB.ir('batalla');
  const b = new BB.Batalla({ jugador, rival: combate.rival, fondo: combate.fondo });
  const res = await b.jugar();
  mostrarResultado(res, combate);
};

function mostrarResultado(res, combate) {
  const T = BB.datos.textos;
  let nuevo = -1;
  let txt = '';
  if (res === 'victoria') {
    BB.audio.sonar('victoria');
    if (combate.tipo === 'mundo' && !BB.progreso.ganados.includes(combate.mundo.id)) {
      BB.progreso.ganados.push(combate.mundo.id);
      nuevo = BB.senal() - 1;
      txt = `Segmento de señal recuperado en ${combate.mundo.nombre}.` + (BB.senal() >= 8 ? ' ¡La señal está completa! El núcleo del Virus está abierto.' : '');
    } else if (combate.tipo === 'final') {
      const primera = !BB.progreso.virusVencido;
      BB.progreso.virusVencido = true;
      if (!BB.desbloqueado('virus')) BB.progreso.desbloqueados.push('virus');
      BB.guardar();
      if (primera) { BB.ir('salida'); $('salida-txt').textContent = T.salida_texto; $('salida-creditos').textContent = T.creditos; return; }
      txt = 'El Virus volvió a caer.';
    } else txt = combate.tipo === 'rapida' ? 'Buena pelea. Ese equipo funciona.' : 'Este mundo ya tenía su señal. Igual sirve para practicar.';
    BB.guardar();
  } else {
    BB.audio.sonar('derrota');
    txt = T.derrota_bitsy;
  }
  BB.ir('resultado');
  $('res-titulo').textContent = res === 'victoria' ? T.victoria : T.derrota;
  $('res-titulo').className = 'resultado-titulo' + (res === 'victoria' ? '' : ' perdio');
  BB.pintarSenal($('res-barra'), nuevo);
  $('res-senal').textContent = `SEÑAL ${BB.senal()}/8`;
  $('res-txt').textContent = txt;
  $('res-seguir').onclick = () => BB.ir(combate.tipo === 'rapida' ? 'inicio' : 'mapa');
  $('res-reintentar').onclick = () => { BB.combate = combate; BB.ir('equipo'); };
}

BB.armarEventos = function () {
  document.querySelectorAll('[data-ir]').forEach((b) => b.addEventListener('click', () => { BB.audio.sonar('tecla'); BB.ir(b.dataset.ir); }));
  document.querySelector('[data-accion="rapida"]').onclick = () => { BB.audio.sonar('tecla'); BB.batallaRapida(); };
  $('btn-pelear').onclick = () => { BB.audio.sonar('elegir'); BB.empezarBatalla(); };
  $('btn-sonido').onclick = () => { BB.audio.setSonido(!BB.progreso.sonido); BB.pantallas.ajustes(); actualizarMute(); BB.audio.sonar('tecla'); };
  $('btn-borrar-partida').onclick = () => {
    if (!BB.confirmarBorrado) { BB.confirmarBorrado = true; $('btn-borrar-partida').textContent = '¿SEGURO? TOCÁ DE NUEVO'; BB.audio.sonar('error'); return; }
    BB.borrarProgreso(); equipo = [];
    $('ajustes-msg').textContent = 'PARTIDA BORRADA';
    $('btn-borrar-partida').textContent = 'BORRAR PARTIDA';
    BB.confirmarBorrado = false;
  };
  $('mute').onclick = () => { BB.audio.setSonido(!BB.progreso.sonido); actualizarMute(); if ($('v-ajustes').classList.contains('activa')) BB.pantallas.ajustes(); };
  $('modal').onclick = (e) => { if (e.target === $('modal')) $('modal').hidden = true; };
  actualizarMute();
};

function actualizarMute() {
  $('mute').classList.toggle('off', !BB.progreso.sonido);
  $('mute').setAttribute('aria-label', BB.progreso.sonido ? 'Silenciar' : 'Activar sonido');
}
