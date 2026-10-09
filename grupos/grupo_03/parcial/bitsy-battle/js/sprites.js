// sprites.js — carga los PNG de los Bitsies y prepara variantes (infectado, desconectado, destello)
window.BB = window.BB || {};

BB.sprites = {};  // id → { img, normal, infectado, gris, blanco, fallback }

function lienzo(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }

function teñir(img, color, alfa) {
  const c = lienzo(img.width, img.height), x = c.getContext('2d');
  x.drawImage(img, 0, 0);
  x.globalCompositeOperation = 'source-atop';
  x.globalAlpha = alfa; x.fillStyle = color; x.fillRect(0, 0, c.width, c.height);
  return c;
}

function enGris(img) {
  const c = lienzo(img.width, img.height), x = c.getContext('2d');
  x.drawImage(img, 0, 0);
  const d = x.getImageData(0, 0, c.width, c.height);
  for (let i = 0; i < d.data.length; i += 4) {
    const g = (d.data[i] * 0.3 + d.data[i + 1] * 0.59 + d.data[i + 2] * 0.11) * 0.55;
    d.data[i] = d.data[i + 1] = d.data[i + 2] = g;
  }
  x.putImageData(d, 0, 0);
  return c;
}

function infectar(img) {
  // tono verde-azulado del Virus + líneas cortadas
  const c = teñir(img, '#19E3D0', 0.35), x = c.getContext('2d');
  x.globalCompositeOperation = 'source-atop';
  x.fillStyle = 'rgba(255,51,88,.6)';
  for (let y = 3; y < c.height; y += 9) x.fillRect(0, y, c.width, 1);
  return c;
}

function cargarImagen(src) {
  return new Promise((ok) => {
    const im = new Image();
    im.onload = () => ok(im);
    im.onerror = () => ok(null);
    im.src = src;
  });
}

BB.cargarSprites = async function () {
  const base = await cargarImagen('assets/bitsies/bitsy_base.png');
  for (const b of BB.datos.bitsies) {
    let img = await cargarImagen(b.sprite);
    let fallback = false;
    if (!img) { img = base; fallback = true; } // falta el PNG → silueta de la Base con glitch
    BB.sprites[b.id] = {
      img, fallback,
      src: fallback ? 'assets/bitsies/bitsy_base.png' : b.sprite,
      normal: img,
      infectado: infectar(img),
      gris: enGris(img),
      blanco: teñir(img, '#FBF8FF', 1)
    };
  }
  // los secuaces y guardianes sin disfraz son siluetas de la Base, siempre glitcheadas
  ['fragmento', 'archivo'].forEach((id) => { if (BB.sprites[id]) BB.sprites[id].fallback = true; });
};

// Dibuja un sprite con cortes horizontales desplazados (efecto glitch)
BB.dibujarGlitch = function (x, fuente, dx, dy, intensidad = 1) {
  const h = fuente.height, w = fuente.width;
  let y = 0;
  while (y < h) {
    const alto = 2 + Math.floor(Math.random() * 6);
    const corr = Math.random() < 0.35 * intensidad ? Math.round((Math.random() * 2 - 1) * 3 * intensidad) : 0;
    x.drawImage(fuente, 0, y, w, Math.min(alto, h - y), dx + corr, dy + y, w, Math.min(alto, h - y));
    y += alto;
  }
};

// Fuente de pixeles 3x5 para números de daño (nítida a cualquier escala)
const GLIFOS = {
  '0': '111101101101111', '1': '010110010010111', '2': '111001111100111', '3': '111001111001111',
  '4': '101101111001001', '5': '111100111001111', '6': '111100111101111', '7': '111001010010010',
  '8': '111101111101111', '9': '111101111001111', '+': '000010111010000', '-': '000000111000000',
  'E': '111100110100111', 'S': '111100111001111', 'Q': '111101101111001', 'U': '101101101101111',
  'I': '111010010010111', 'V': '101101101101010', 'Ó': '111101101101111', '!': '010010010000010',
  'Z': '111001010100111', 'A': '010101111101101', 'T': '111010010010010', 'D': '110101101101110',
  'O': '111101101101111', 'K': '101101110101101', 'P': '111101111100100', 'R': '110101110101101',
  'F': '111100110100100', 'L': '100100100100111', 'N': '110101101101101', ' ': '000000000000000'
};
BB.textoPixel = function (x, txt, cx, y, color, escala = 1) {
  const ancho = txt.length * 4 * escala - escala;
  const x0 = Math.round(cx - ancho / 2);
  for (let pasada = 0; pasada < 2; pasada++) { // 0 = sombra, 1 = color
    let px = x0;
    x.fillStyle = pasada === 0 ? '#0B0820' : color;
    for (const ch of txt) {
      const g = GLIFOS[ch];
      if (g) {
        for (let i = 0; i < 15; i++) {
          if (g[i] !== '1') continue;
          const gx = px + (i % 3) * escala + (pasada === 0 ? escala : 0);
          const gy = y + Math.floor(i / 3) * escala + (pasada === 0 ? escala : 0);
          x.fillRect(gx, gy, escala, escala);
        }
      }
      px += 4 * escala;
    }
  }
};
