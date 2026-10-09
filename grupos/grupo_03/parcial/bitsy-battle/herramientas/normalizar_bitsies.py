"""Normaliza los Bitsies para la app con UNA escala común (la de la Bitsy Base).
pixelar.py lleva cada figura a 45 px de alto total, así que orejas, pelo o gorro achican el cuerpo.
Acá todas usan el factor de la Base y los cuerpos quedan iguales. Uso, desde la carpeta Pixelados:
    python bitsy-battle/herramientas/normalizar_bitsies.py
"""
import sys, pathlib
sys.path.insert(0, '.')  # correr desde la carpeta Pixelados
import pixelar
from PIL import Image, ImageEnhance
import numpy as np
SRC = pathlib.Path('Bitsies')
OUT = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else 'bitsy-battle/assets/bitsies'); OUT.mkdir(parents=True, exist_ok=True)
ARCH = {'base':'Bitsy base.jpg','mario':'Bitsy Mario.jpg','batman':'Bitsy Batman.jpg','dafne':'Bitsy Dafne.jpg',
        'hello_kitty':'Bitsy Hello Kitty.jpg','lisa_simpson':'Bitsy Lisa Simpson.jpg','puca':'Bitsy Puca.jpg','virus':'Bitsy virus.jpg'}
def figura(nombre):
    im = Image.open(SRC/ARCH[nombre])
    if im.width > 2000: im = im.resize((im.width//2, im.height//2), Image.BOX)
    corte = round(im.height * 0.74)
    im = im.crop((0, 0, im.width, corte))
    im = pixelar.quitar_fondo(im, 40)
    return pixelar.recortar(im, True)
base = figura('base')
factor = 45 / base.height
print('altura Base en el JPG:', base.height, 'px → factor', round(factor, 4))
for n in ARCH:
    f = figura(n)
    alto = max(1, round(f.height * factor))
    chico = pixelar.a_grilla(f, alto)
    # color: saturación un poco más alta y paleta propia de 32 colores (sin la paleta congelada de 48)
    rgb = ImageEnhance.Color(chico.convert('RGB')).enhance(1.2)
    q = rgb.quantize(colors=32, method=Image.MEDIANCUT, dither=Image.Dither.NONE).convert('RGB')
    out = q.convert('RGBA'); out.putalpha(chico.getchannel('A'))
    # saca las filas de pedestal (piedra gris) que quedan bajo los pies
    a = np.array(out)
    while a.shape[0] > 10:
        fila = a[-1]; op = fila[:, 3] > 0
        if not op.any(): a = a[:-1]; continue
        px = fila[op][:, :3].astype(float)
        mx, mn = px.max(1), px.min(1); lum = px.mean(1)
        piedra = ((mx - mn) < 45) & (lum > 60) & (lum < 200)
        if piedra.mean() > 0.5 and op.sum() > 0.6 * a.shape[1]: a = a[:-1]
        else: break
    out = Image.fromarray(a, 'RGBA')
    out.save(OUT/f'bitsy_{n}.png')
    print(f'{n:13s} JPG {f.width}x{f.height} → {out.width}x{out.height}')
