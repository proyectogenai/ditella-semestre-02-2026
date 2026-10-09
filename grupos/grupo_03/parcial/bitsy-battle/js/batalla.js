// batalla.js — motor de batalla 4v4 por turnos + dibujo en el canvas
// El motor funciona también sin pantalla (modo simulación) para probar el balance.
window.BB = window.BB || {};

// Tamaño lógico del canvas: vertical en celular, apaisado en el monitor de escritorio
let ANCHO = 192, ALTO = 208;
let COLS = [27, 73, 119, 165];
let PISO = { rival: 86, jugador: 186 };
BB.esEscritorio = () => window.matchMedia('(min-width: 900px) and (min-height: 560px)').matches;
BB.medidasLienzo = function () {
  if (BB.esEscritorio()) {
    ANCHO = 256; ALTO = 224; COLS = [40, 99, 158, 217]; PISO = { rival: 94, jugador: 196 };
  } else {
    ANCHO = 192; ALTO = 208; COLS = [27, 73, 119, 165]; PISO = { rival: 86, jugador: 186 };
  }
};

// Colores del canvas (los mismos que css/estilo.css)
const C = {
  negro: '#0B0820', claro: '#FBF8FF', gris: '#CBC4FF', naranja: '#FF8A1F', amarillo: '#FFD23F',
  rojo: '#FF3358', verde: '#2DF58C', teal: '#19E3D0', violeta: '#C25BFF', rosa: '#FF5FB8', grilla: '#3A2D9A'
};

// multiplicador por etapas de stat (−3 … +3)
const mult = (e) => (e >= 0 ? 1 + 0.25 * e : 1 / (1 - 0.25 * e));

BB.crearUnidad = function (id, bando, idx, opc = {}) {
  const d = BB.datos.porId[id];
  const n = opc.nivel || 1;
  const nombre = opc.nombre || (opc.infectado && d.jugable ? d.nombre + ' infectado' : d.nombre) + (opc.sufijo || '');
  const pv = Math.round(d.stats.pv * n);
  return {
    uid: bando + idx, id, bando, idx, d, nombre,
    infectado: !!opc.infectado,
    maxPv: pv, pv,
    base: { atq: d.stats.atq * n, def: d.stats.def, vel: d.stats.vel }, // el nivel sube PV y ATQ
    etapas: { atq: 0, def: 0, vel: 0 },
    veneno: 0, aturdido: 0, inmune: false, esquiva: false, alFinal: false, vivo: true,
    // animación
    dy: 0, temblor: 0, destello: 0, muerte: 0
  };
};

BB.stat = (u, s) => u.base[s] * mult(u.etapas[s]);

BB.Batalla = class {
  constructor({ jugador, rival, fondo, conPantalla = true, rapido = false }) {
    this.jugador = jugador.map((x, i) => BB.crearUnidad(x.id, 'jugador', i, x));
    this.rival = rival.map((x, i) => BB.crearUnidad(x.bitsy, 'rival', i, x));
    this.todos = [...this.jugador, ...this.rival];
    this.ultimoMov = { jugador: null, rival: null };
    this.cola = [];
    this.ronda = 0;
    this.actual = null;
    this.flotantes = [];
    this.seleccion = null; // { validos:[], resolver }
    this.conPantalla = conPantalla;
    this.rapido = rapido;
    this.fondoSrc = fondo;
    this.fin = null;
    if (conPantalla) this.prepararPantalla();
  }

  // ---------------- utilidades ----------------
  vivos(bando) { return (bando === 'jugador' ? this.jugador : this.rival).filter((u) => u.vivo); }
  otro(bando) { return bando === 'jugador' ? 'rival' : 'jugador'; }
  async pausa(ms) { if (this.conPantalla && !this.rapido) await BB.esperar(ms); }
  log(txt) { if (this.conPantalla) document.getElementById('log').textContent = txt; }
  sfx(n) { if (this.conPantalla) BB.audio.sonar(n); }
  flotar(u, txt, color) {
    if (!this.conPantalla) return;
    this.flotantes.push({ txt, color, x: COLS[u.idx], y: PISO[u.bando] - 50, t: 0 });
  }

  // ---------------- bucle principal ----------------
  async jugar() {
    if (this.conPantalla) { this.dibujando = true; this.cuadro(); BB.audio.musica(true); }
    while (!this.fin) {
      if (this.cola.length === 0) this.nuevaRonda();
      const u = this.cola.shift();
      if (!u.vivo) continue;
      this.actual = u;
      this.mostrarCola();
      await this.turno(u);
      this.revisarFin();
    }
    this.actual = null;
    if (this.conPantalla) { BB.audio.musica(false); await this.pausa(700); this.dibujando = false; }
    return this.fin;
  }

  ordenar(lista) {
    return lista.slice().sort((a, b) =>
      (a.alFinal - b.alFinal) ||
      (BB.stat(b, 'vel') - BB.stat(a, 'vel')) ||
      ((a.bando === 'jugador' ? 0 : 1) - (b.bando === 'jugador' ? 0 : 1)) ||
      (a.idx - b.idx));
  }

  // anti-empate: desde la ronda 9 la señal se degrada y todo golpe pega más fuerte
  degradacion() { return 1 + Math.max(0, this.ronda - 8) * 0.2; }

  nuevaRonda() {
    this.ronda++;
    if (this.ronda === 9) this.log('¡La señal se degrada! Los golpes pegan más fuerte');
    this.cola = this.ordenar(this.todos.filter((u) => u.vivo));
    this.todos.forEach((u) => { u.alFinal = false; });
  }

  revisarFin() {
    if (this.vivos('rival').length === 0) this.fin = 'victoria';
    else if (this.vivos('jugador').length === 0) this.fin = 'derrota';
  }

  async turno(u) {
    // veneno al empezar el turno
    if (u.veneno > 0) {
      u.veneno--;
      const d = Math.max(1, Math.round(u.maxPv * 0.08));
      this.log(`${u.nombre}: el veneno resta ${d} PV`);
      this.sfx('estado');
      await this.dañar(u, d, C.violeta);
      await this.pausa(450);
      if (!u.vivo) return;
    }
    if (u.aturdido > 0) {
      u.aturdido--;
      u.inmune = true; // no puede quedar aturdido dos turnos seguidos
      this.log(`${u.nombre} está aturdido y pierde el turno`);
      this.flotar(u, 'ZZZ', C.naranja);
      await this.pausa(750);
      return;
    }
    u.inmune = false;
    const eleccion = (u.bando === 'jugador' && this.conPantalla) ? await this.pedirJugada(u) : this.ia(u);
    if (eleccion === 'rendirse') { this.fin = 'derrota'; return; }
    await this.ejecutar(u, eleccion.mov, eleccion.objetivo);
  }

  // Copiar: se convierte en el último movimiento usado por un aliado
  resolver(u, mov) {
    if (mov.efectos && mov.efectos.some((e) => e.tipo === 'copiar')) {
      const ult = this.ultimoMov[u.bando];
      const copiado = ult || u.d.movimientos[0];
      return Object.assign({}, copiado, { copiado: true, nombre: 'Copiar ▸ ' + copiado.nombre });
    }
    return mov;
  }

  validos(u, mov) {
    if (mov.objetivo === 'rival' || mov.objetivo === 'dos_rivales') return this.vivos(this.otro(u.bando));
    if (mov.objetivo === 'aliado') return this.vivos(u.bando);
    return null; // no hace falta elegir
  }

  async ejecutar(u, movOriginal, objetivo) {
    const mov = this.resolver(u, movOriginal);
    if (!movOriginal.efectos || !movOriginal.efectos.some((e) => e.tipo === 'copiar')) this.ultimoMov[u.bando] = movOriginal;
    else if (!mov.copiado) this.ultimoMov[u.bando] = mov;

    // lista de objetivos
    const enemigos = this.vivos(this.otro(u.bando));
    let objs = [];
    switch (mov.objetivo) {
      case 'rival': objs = [objetivo && objetivo.vivo ? objetivo : BB.al(enemigos)]; break;
      case 'dos_rivales': {
        const primero = objetivo && objetivo.vivo ? objetivo : BB.al(enemigos);
        const resto = enemigos.filter((e) => e !== primero);
        objs = [primero]; if (resto.length) objs.push(BB.al(resto));
        break;
      }
      case 'rivales': objs = enemigos; break;
      case 'aliado': objs = [objetivo && objetivo.vivo ? objetivo : u]; break;
      case 'aliados': objs = this.vivos(u.bando); break;
      default: objs = [u];
    }

    this.log(`${u.nombre} usa ${mov.nombre.toUpperCase()}`);
    this.sfx('elegir');
    u.dy = u.bando === 'jugador' ? -6 : 6;
    await this.pausa(280);
    u.dy = 0;

    const acertados = new Set();
    if (mov.poder) {
      for (const t of objs) {
        for (let g = 0; g < (mov.golpes || 1); g++) {
          if (!t.vivo) break;
          if (t.esquiva) {
            t.esquiva = false;
            this.flotar(t, 'ESQUIVÓ!', C.gris);
            this.sfx('esquiva');
            await this.pausa(380);
            continue;
          }
          const azar = 0.9 + Math.random() * 0.2;
          const d = Math.max(1, Math.round(mov.poder * BB.stat(u, 'atq') / BB.stat(t, 'def') * azar * this.degradacion()));
          this.sfx('golpe');
          await this.dañar(t, d, C.claro);
          acertados.add(t);
          await this.pausa(260);
        }
      }
    }

    for (const ef of (mov.efectos || [])) {
      const destino = ef.a === 'propio' ? [u] : ef.a === 'aliados' ? this.vivos(u.bando) : objs;
      for (const t of destino) {
        if (!t.vivo) continue;
        // los efectos sobre un rival solo entran si el golpe pegó (o si el movimiento no hace daño)
        if (t.bando !== u.bando && mov.poder && !acertados.has(t)) continue;
        await this.aplicarEfecto(u, t, ef);
      }
    }
    await this.pausa(420);
  }

  async dañar(t, d, color) {
    t.pv = Math.max(0, t.pv - d);
    t.destello = 6; t.temblor = 6;
    this.flotar(t, '-' + d, color);
    if (t.pv <= 0 && t.vivo) {
      t.vivo = false; t.muerte = 1;
      t.veneno = 0; t.aturdido = 0; t.esquiva = false;
      await this.pausa(260);
      this.sfx('ko');
      this.flotar(t, 'KO', C.rojo);
      this.log(`${t.nombre} se desconectó`);
      await this.pausa(500);
    }
  }

  async aplicarEfecto(u, t, ef) {
    switch (ef.tipo) {
      case 'cura': {
        const c = Math.min(t.maxPv - t.pv, Math.round(t.maxPv * ef.pct / 100));
        t.pv += c;
        this.flotar(t, '+' + c, C.verde);
        this.sfx('cura');
        break;
      }
      case 'veneno':
        t.veneno = ef.turnos;
        this.flotar(t, 'VENENO', C.violeta);
        this.sfx('estado');
        break;
      case 'aturdir':
        if (t.inmune) { this.flotar(t, 'RESISTE', C.gris); break; }
        t.aturdido = Math.max(t.aturdido, ef.turnos);
        this.flotar(t, 'ZZZ', C.naranja);
        this.sfx('estado');
        break;
      case 'mod': {
        t.etapas[ef.stat] = Math.max(-3, Math.min(3, t.etapas[ef.stat] + ef.cambio));
        const s = ef.stat.toUpperCase();
        this.flotar(t, s + (ef.cambio > 0 ? '+' : '-'), ef.cambio > 0 ? C.verde : C.rojo);
        this.sfx(ef.cambio > 0 ? 'sube' : 'baja');
        break;
      }
      case 'esquiva':
        t.esquiva = true;
        this.flotar(t, 'ESQUIVA', C.gris);
        break;
      case 'al_final':
        t.alFinal = true;
        break;
    }
    await this.pausa(300);
  }

  // ---------------- CPU ----------------
  // 1) si puede dejar en 0 a alguien, lo hace · 2) cura si un aliado baja del 30%
  // 3) a veces usa un movimiento de apoyo · 4) ataca al de menos PV con su mejor golpe
  ia(u) {
    const enemigos = this.vivos(this.otro(u.bando));
    const aliados = this.vivos(u.bando);
    const movs = u.d.movimientos.map((m) => ({ orig: m, m: this.resolver(u, m) }));
    const dañoMin = (m, t) => (t.esquiva ? 0 : m.poder * (m.golpes || 1) * BB.stat(u, 'atq') / BB.stat(t, 'def') * 0.9 * this.degradacion());
    const esCura = (m) => (m.efectos || []).some((e) => e.tipo === 'cura') && !m.poder;
    const ofensivos = movs.filter((x) => x.m.poder);

    for (const x of ofensivos) {
      const lista = x.m.objetivo === 'rivales' ? enemigos : enemigos;
      for (const t of lista) {
        if (dañoMin(x.m, t) >= t.pv) return { mov: x.orig, objetivo: t };
      }
    }

    const herido = aliados.filter((a) => a.pv / a.maxPv < 0.3).sort((a, b) => a.pv / a.maxPv - b.pv / b.maxPv)[0];
    if (herido) {
      const cura = movs.find((x) => esCura(x.m) && (x.m.objetivo !== 'propio' || herido === u));
      if (cura) return { mov: cura.orig, objetivo: herido };
    }

    const apoyo = movs.filter((x) => !x.m.poder && !esCura(x.m));
    if (apoyo.length && Math.random() < 0.2) {
      const x = BB.al(apoyo);
      const mejor = aliados.slice().sort((a, b) => BB.stat(b, 'atq') - BB.stat(a, 'atq'))[0];
      return { mov: x.orig, objetivo: x.m.objetivo === 'aliado' ? mejor : u };
    }

    const blanco = enemigos.slice().sort((a, b) => a.pv - b.pv)[0];
    const valor = (m) => m.poder * (m.golpes || 1) * (m.objetivo === 'rivales' ? enemigos.length * 0.7 : m.objetivo === 'dos_rivales' ? Math.min(2, enemigos.length) * 0.8 : 1);
    const mejor = ofensivos.sort((a, b) => valor(b.m) - valor(a.m))[0];
    if (mejor) return { mov: mejor.orig, objetivo: blanco };
    return { mov: u.d.movimientos[0], objetivo: blanco };
  }

  // ---------------- interfaz del jugador ----------------
  prepararPantalla() {
    BB.medidasLienzo();
    this.cv = document.getElementById('lienzo');
    this.cv.width = ANCHO; this.cv.height = ALTO;
    this.cx = this.cv.getContext('2d');
    this.cx.imageSmoothingEnabled = false;
    this.fondo = null;
    if (this.fondoSrc) {
      const im = new Image();
      im.onload = () => { this.fondo = im; };
      im.src = this.fondoSrc;
    }
    this.cv.onclick = (ev) => this.click(ev);
    document.getElementById('log').textContent = '¡Empieza la batalla!';
    document.getElementById('movs').innerHTML = '';
    document.getElementById('actor').innerHTML = '';
  }

  click(ev) {
    if (!this.seleccion) return;
    const r = this.cv.getBoundingClientRect();
    const x = (ev.clientX - r.left) * ANCHO / r.width;
    const y = (ev.clientY - r.top) * ALTO / r.height;
    const u = this.seleccion.validos.find((v) => Math.abs(COLS[v.idx] - x) <= 23 && y >= PISO[v.bando] - 52 && y <= PISO[v.bando] + 10);
    if (u) { BB.audio.sonar('tecla'); this.seleccion.resolver(u); }
  }

  mostrarActor(u) {
    document.getElementById('actor').innerHTML =
      `<span>TURNO: ${u.nombre}</span><span class="pv">PV ${u.pv}/${u.maxPv}</span>`;
  }

  pedirJugada(u) {
    return new Promise((resolver) => {
      const movs = document.getElementById('movs');
      this.mostrarActor(u);
      this.log(`¿Qué hace ${u.nombre}?`);
      const elegirMov = () => {
        movs.innerHTML = '';
        u.d.movimientos.forEach((m) => {
          const real = this.resolver(u, m);
          const b = document.createElement('button');
          b.className = 'btn mov' + (real.copiado ? ' copia' : '');
          b.innerHTML = `<span class="mn">${real.nombre}</span><span class="md">${real.copiado ? real.desc : m.desc}</span>`;
          b.onclick = () => { BB.audio.sonar('elegir'); elegirObjetivo(m, real); };
          movs.appendChild(b);
        });
        const r = document.createElement('button');
        r.className = 'btn btn-chico';
        r.textContent = 'RENDIRSE';
        r.onclick = () => { movs.innerHTML = ''; resolver('rendirse'); };
        movs.appendChild(r);
      };
      const elegirObjetivo = (m, real) => {
        const validos = this.validos(u, real);
        const terminar = (obj) => { this.seleccion = null; movs.innerHTML = ''; resolver({ mov: m, objetivo: obj }); };
        if (!validos) return terminar(null);
        if (validos.length === 1) return terminar(validos[0]);
        this.log(real.objetivo === 'aliado' ? 'Tocá al aliado' : 'Tocá al rival');
        movs.innerHTML = '';
        const c = document.createElement('button');
        c.className = 'btn btn-chico';
        c.textContent = 'CANCELAR';
        c.onclick = () => { this.seleccion = null; this.log(`¿Qué hace ${u.nombre}?`); elegirMov(); };
        movs.appendChild(c);
        this.seleccion = { validos, resolver: terminar };
      };
      elegirMov();
    });
  }

  mostrarCola() {
    if (!this.conPantalla) return;
    const el = document.getElementById('cola');
    const ficha = (u, ahora) => {
      const sp = BB.sprites[u.id];
      const filtro = u.infectado ? 'filter:hue-rotate(140deg) saturate(.6) brightness(.85)' : '';
      return `<div class="ficha-cola ${u.bando}${ahora ? ' ahora' : ''}" title="${u.nombre}"><img class="sprite" src="${sp.src}" alt="" style="${filtro}"></div>`;
    };
    const proxima = this.ordenar(this.todos.filter((u) => u.vivo));
    el.innerHTML = ficha(this.actual, true) +
      this.cola.filter((u) => u.vivo).map((u) => ficha(u)).join('') +
      '<div class="sep"></div>' + proxima.slice(0, 4).map((u) => ficha(u)).join('');
    if (this.actual.bando === 'rival') {
      document.getElementById('actor').innerHTML = `<span style="color:var(--rojo)">TURNO RIVAL: ${this.actual.nombre}</span>`;
      document.getElementById('movs').innerHTML = '';
    }
  }

  // ---------------- dibujo ----------------
  cuadro() {
    if (!this.dibujando) return;
    this.dibujar();
    requestAnimationFrame(() => this.cuadro());
  }

  dibujar() {
    const x = this.cx, t = performance.now();
    x.fillStyle = C.negro; x.fillRect(0, 0, ANCHO, ALTO);
    if (this.fondo) {
      const s = Math.max(ANCHO / this.fondo.width, ALTO / this.fondo.height);
      const w = Math.round(this.fondo.width * s), h = Math.round(this.fondo.height * s);
      x.drawImage(this.fondo, Math.round((ANCHO - w) / 2), Math.round((ALTO - h) / 2), w, h);
      x.fillStyle = 'rgba(11,8,32,.38)'; x.fillRect(0, 0, ANCHO, ALTO);
    } else { // núcleo del Virus: grilla que se mueve
      x.strokeStyle = C.grilla; x.lineWidth = 1;
      const off = Math.floor(t / 80) % 12;
      for (let i = -12; i < ANCHO + 12; i += 12) { x.beginPath(); x.moveTo(i + 0.5 + off, 0); x.lineTo(i + 0.5 + off, ALTO); x.stroke(); }
      for (let j = 0; j < ALTO; j += 12) { x.beginPath(); x.moveTo(0, j + 0.5 + off); x.lineTo(ANCHO, j + 0.5 + off); x.stroke(); }
    }
    // pisos
    x.fillStyle = 'rgba(11,8,32,.5)';
    x.fillRect(0, PISO.rival - 4, ANCHO, 16);
    x.fillRect(0, PISO.jugador - 4, ANCHO, 16);

    const parpadeo = Math.floor(t / 250) % 2 === 0;
    for (const u of this.todos) this.dibujarUnidad(u, t, parpadeo);

    // flotantes
    this.flotantes = this.flotantes.filter((f) => f.t < 50);
    for (const f of this.flotantes) {
      f.t++;
      BB.textoPixel(x, f.txt, f.x, Math.round(f.y - f.t * 0.4), f.color, 1);
    }
  }

  dibujarUnidad(u, t, parpadeo) {
    const x = this.cx, sp = BB.sprites[u.id];
    let fuente = u.infectado ? sp.infectado : sp.normal;
    if (!u.vivo) fuente = sp.gris;
    if (u.destello > 0) { fuente = sp.blanco; u.destello--; }
    const cx = COLS[u.idx], piso = PISO[u.bando];
    let dx = Math.round(cx - fuente.width / 2), dy = piso - fuente.height + u.dy;
    if (u.temblor > 0) { dx += (u.temblor % 2 ? 2 : -2); u.temblor--; }

    // sombra
    x.fillStyle = 'rgba(0,0,0,.45)';
    x.fillRect(cx - 12, piso - 1, 24, 3);

    if (!u.vivo) {
      x.globalAlpha = 0.75;
      x.drawImage(fuente, dx, dy);
      x.globalAlpha = 1;
      // estática del desconectado
      for (let i = 0; i < 40; i++) {
        const px = dx + Math.floor(Math.random() * fuente.width), py = dy + Math.floor(Math.random() * fuente.height);
        x.fillStyle = Math.random() < 0.5 ? C.claro : '#5B4FA8';
        x.fillRect(px, py, 1, 1);
      }
      return;
    }
    if (u.infectado || sp.fallback) BB.dibujarGlitch(x, fuente, dx, dy, u.id === 'virus' ? 1.4 : 0.8);
    else x.drawImage(fuente, dx, dy);

    // turno actual: flecha
    if (this.actual === u && parpadeo) {
      x.fillStyle = C.naranja;
      const ty = dy - 7;
      x.fillRect(cx - 3, ty, 7, 1); x.fillRect(cx - 2, ty + 1, 5, 1); x.fillRect(cx - 1, ty + 2, 3, 1); x.fillRect(cx, ty + 3, 1, 1);
    }
    // objetivo elegible: corchetes
    if (this.seleccion && this.seleccion.validos.includes(u)) {
      x.fillStyle = parpadeo ? C.naranja : C.claro;
      const l = cx - 22, r = cx + 21, a = piso - 50, b = piso + 2;
      [[l, a, 1, 0], [r, a, -1, 0], [l, b, 1, 1], [r, b, -1, 1]].forEach(([px, py, sx, abajo]) => {
        x.fillRect(sx > 0 ? px : px - 4, py, 5, 1);
        x.fillRect(px, abajo ? py - 4 : py, 1, 5);
      });
    }
    // barra de PV
    const bw = 34, by = piso + 4, bx = cx - 17;
    x.fillStyle = C.negro; x.fillRect(bx - 1, by - 1, bw + 2, 5);
    const p = u.pv / u.maxPv;
    x.fillStyle = p > 0.5 ? C.verde : p > 0.25 ? C.amarillo : C.rojo;
    x.fillRect(bx, by, Math.max(1, Math.round(bw * p)), 3);
    // íconos de estado
    let ix = bx;
    const icono = (c) => { x.fillStyle = c; x.fillRect(ix, by + 5, 3, 3); ix += 4; };
    if (u.veneno) icono(C.violeta);
    if (u.aturdido) icono(C.naranja);
    if (u.esquiva) icono(C.gris);
    if (u.etapas.atq > 0 || u.etapas.def > 0 || u.etapas.vel > 0) icono(C.verde);
    if (u.etapas.atq < 0 || u.etapas.def < 0 || u.etapas.vel < 0) icono(C.rojo);
  }
};
