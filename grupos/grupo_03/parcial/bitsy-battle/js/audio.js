// audio.js — sonidos chiptune generados con Web Audio (no hay archivos de audio)
window.BB = window.BB || {};

BB.audio = (function () {
  let ctx = null, master = null, musicaGain = null;
  let timerMusica = null, paso = 0, proxima = 0;

  function iniciar() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = BB.progreso.sonido ? 0.5 : 0;
    master.connect(ctx.destination);
    musicaGain = ctx.createGain();
    musicaGain.gain.value = 0.22;
    musicaGain.connect(master);
  }

  function nota(frec, inicio, dur, tipo = 'square', vol = 0.25, destino = master, deslizar = 0) {
    if (!ctx) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = tipo;
    o.frequency.setValueAtTime(frec, inicio);
    if (deslizar) o.frequency.exponentialRampToValueAtTime(Math.max(30, frec * deslizar), inicio + dur);
    g.gain.setValueAtTime(vol, inicio);
    g.gain.exponentialRampToValueAtTime(0.001, inicio + dur);
    o.connect(g); g.connect(destino);
    o.start(inicio); o.stop(inicio + dur + 0.02);
  }

  function ruido(inicio, dur, vol = 0.2) {
    if (!ctx) return;
    const n = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, n, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const s = ctx.createBufferSource();
    const g = ctx.createGain();
    g.gain.value = vol;
    s.buffer = buf; s.connect(g); g.connect(master); s.start(inicio);
  }

  const efectos = {
    tecla: (t) => nota(880, t, 0.05, 'square', 0.15),
    elegir: (t) => { nota(660, t, 0.06); nota(990, t + 0.05, 0.08); },
    golpe: (t) => { ruido(t, 0.12, 0.3); nota(220, t, 0.12, 'square', 0.25, master, 0.4); },
    esquiva: (t) => nota(500, t, 0.18, 'triangle', 0.3, master, 2.5),
    cura: (t) => [523, 659, 784, 1047].forEach((f, i) => nota(f, t + i * 0.06, 0.1, 'triangle', 0.25)),
    sube: (t) => [440, 554, 659].forEach((f, i) => nota(f, t + i * 0.05, 0.08, 'square', 0.15)),
    baja: (t) => [659, 554, 440].forEach((f, i) => nota(f, t + i * 0.05, 0.08, 'square', 0.15)),
    estado: (t) => { nota(300, t, 0.2, 'sawtooth', 0.15, master, 0.5); ruido(t + 0.05, 0.1, 0.1); },
    ko: (t) => { nota(440, t, 0.5, 'square', 0.25, master, 0.1); ruido(t, 0.4, 0.15); },
    error: (t) => { nota(140, t, 0.15, 'square', 0.3); nota(110, t + 0.15, 0.25, 'square', 0.3); },
    desbloqueo: (t) => { ruido(t, 0.25, 0.2); [392, 523, 659, 784, 1047].forEach((f, i) => nota(f, t + 0.25 + i * 0.08, 0.14, 'square', 0.2)); },
    victoria: (t) => [523, 523, 523, 659, 784, 659, 784, 1047].forEach((f, i) => nota(f, t + i * 0.11, 0.12, 'square', 0.22)),
    derrota: (t) => [392, 349, 311, 262].forEach((f, i) => nota(f, t + i * 0.2, 0.22, 'triangle', 0.3))
  };

  function sonar(nombre) {
    iniciar();
    if (!ctx || !efectos[nombre]) return;
    efectos[nombre](ctx.currentTime + 0.01);
  }

  // Música de batalla: bajo + arpegio en La menor, 8 compases en loop
  const BAJO = [110, 110, 87.31, 87.31, 130.81, 130.81, 98, 98];
  const ARP = [[440, 523, 659], [440, 523, 659], [349, 440, 523], [349, 440, 523], [523, 659, 784], [523, 659, 784], [392, 494, 587], [392, 494, 587]];
  const SEMI = 0.14;

  function programar() {
    while (proxima < ctx.currentTime + 0.2) {
      const compas = Math.floor(paso / 8) % 8;
      const p = paso % 8;
      if (p % 2 === 0) nota(BAJO[compas], proxima, SEMI * 1.8, 'triangle', 0.5, musicaGain);
      nota(ARP[compas][p % 3] * (p >= 6 ? 2 : 1), proxima, SEMI * 0.8, 'square', 0.12, musicaGain);
      if (p === 4) ruido(proxima, 0.04, 0.05);
      proxima += SEMI; paso++;
    }
  }

  function musica(encender) {
    iniciar();
    if (!ctx) return;
    clearInterval(timerMusica); timerMusica = null;
    if (encender) {
      paso = 0; proxima = ctx.currentTime + 0.05;
      timerMusica = setInterval(programar, 60);
    }
  }

  function setSonido(si) {
    BB.progreso.sonido = si;
    BB.guardar();
    if (master) master.gain.value = si ? 0.5 : 0;
  }

  return { iniciar, sonar, musica, setSonido };
})();
