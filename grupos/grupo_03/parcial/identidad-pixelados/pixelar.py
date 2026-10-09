#!/usr/bin/env python3
"""
pixelar.py — convierte una imagen generada en pixel art de verdad.

El modelo devuelve algo que PARECE pixel art: no tiene grilla (los "pixeles"
son formas de tamanos distintos con los bordes suavizados) y trae cientos de
miles de colores. Este script le impone las dos cosas que faltan: una grilla
real y una paleta chica.

    python pixelar.py escena.png --ancho 787 --colores 16 --escala 6

Necesita pillow:  pip install pillow
"""

import argparse
import pathlib
from PIL import Image


def a_grilla(im, ancho):
    """Achica la imagen a la grilla logica del proyecto.

    Usa el filtro BOX, que promedia bloques enteros en vez de interpolar: cada
    bloque de la imagen original se convierte en UN pixel con el color promedio
    de ese bloque. Por eso el resultado tiene bordes duros y no difusos.
    """
    alto = round(im.height * ancho / im.width)
    return im.resize((ancho, alto), Image.BOX)


def leer_paleta(ruta):
    """Lee una paleta congelada: un #RRGGBB por linea, ignorando comentarios."""
    colores = []
    for linea in pathlib.Path(ruta).read_text(encoding="utf-8").splitlines():
        if "#" in linea and not linea.lstrip().startswith("#"):
            h = linea.split("#")[1].strip()[:6]
            colores.append((int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16)))
    return colores


def cuantizar(im, colores, con_dither, paleta=None, por_color=False):
    """Reduce la imagen a pocos colores.

    Es lo mismo que imprimir a tintas planas: se eligen N tintas y todo el resto
    se redondea a la mas parecida. Con dither, los tonos intermedios se resuelven
    tramando dos colores a puntitos (queda sucio). Sin dither, cada zona toma un
    color plano (queda limpio).
    """
    modo = Image.FLOYDSTEINBERG if con_dither else Image.NONE

    if paleta:
        ref = Image.new("P", (1, 1))
        plana = [v for c in paleta for v in c]
        # El relleno repite el ultimo color en vez de negro: si se rellena con
        # ceros, PIL suma un negro extra que no estaba en la paleta congelada.
        ref.putpalette(plana + plana[-3:] * ((768 - len(plana)) // 3))
        return im.quantize(palette=ref, dither=modo).convert("RGB")

    if not por_color:
        # Por superficie. Es el default para ESCENAS: las masas grandes (el asfalto,
        # el cielo) necesitan varios tonos propios o se ven sucias y con bandas.
        return im.quantize(colors=colores, method=Image.MEDIANCUT, dither=modo).convert("RGB")

    # Un voto por color. Sirve para FICHAS DE PERSONAJE sobre fondo plano, donde
    # el fondo ocuparia media paleta sin aportar nada. Probado sobre una escena
    # de avenida da peor resultado: el asfalto se queda sin grises y se ensucia.
    unicos = sorted({c for _, c in im.getcolors(1 << 24)})
    lado = max(1, int(len(unicos) ** 0.5) + 1)
    muestra = Image.new("RGB", (lado, lado))
    muestra.putdata(unicos + [unicos[-1]] * (lado * lado - len(unicos)))
    elegidos = muestra.quantize(colors=colores, method=Image.MEDIANCUT, dither=Image.NONE)
    return im.quantize(palette=elegidos, dither=modo).convert("RGB")


def ampliar(im, escala):
    """Vecino mas cercano: amplia sin suavizar, cada pixel crece como cuadrado."""
    return im.resize((im.width * escala, im.height * escala), Image.NEAREST)


def guardar_paleta(im, destino):
    """Anota los colores que quedaron, para poder congelarlos y reusarlos."""
    usados = sorted({c for _, c in im.convert("RGB").getcolors(1 << 24)})
    texto = ["# Paleta — pegar en SKILL.md o pasar con --paleta", ""]
    texto += ["%02d  #%02X%02X%02X" % (i, r, g, b) for i, (r, g, b) in enumerate(usados)]
    destino.write_text("\n".join(texto) + "\n", encoding="utf-8")
    return usados


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("archivos", nargs="+")
    ap.add_argument("--ancho", type=int, default=787, help="ancho de la escena en pixeles logicos")
    ap.add_argument("--colores", type=int, default=16)
    ap.add_argument("--dither", action="store_true", help="tramado: queda sucio en vez de limpio")
    ap.add_argument("--por-color", action="store_true",
                    help="un voto por color en vez de por superficie. Para fichas de "
                         "personaje sobre fondo plano, no para escenas")
    ap.add_argument("--paleta", help="archivo de paleta congelada, en vez de calcular una nueva")
    ap.add_argument("--escala", type=int, default=6, help="ampliacion para imprenta")
    ap.add_argument("--salida", default="pixelado")
    args = ap.parse_args()

    destino = pathlib.Path(args.salida)
    destino.mkdir(parents=True, exist_ok=True)
    paleta = leer_paleta(args.paleta) if args.paleta else None

    for ruta in args.archivos:
        p = pathlib.Path(ruta)
        im = Image.open(p).convert("RGB")
        chica = cuantizar(a_grilla(im, args.ancho), args.colores, args.dither, paleta, args.por_color)

        chica.save(destino / (p.stem + ".png"))
        ampliar(chica, args.escala).save(destino / (p.stem + "@%dx.png" % args.escala))
        usados = guardar_paleta(chica, destino / (p.stem + "_paleta.txt"))

        print("%-28s %s -> %d x %d logicos, %d colores, %s" % (
            p.name, im.size, chica.width, chica.height, len(usados),
            "con dither" if args.dither else "limpio"))


if __name__ == "__main__":
    main()
