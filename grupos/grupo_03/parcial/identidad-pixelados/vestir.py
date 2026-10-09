#!/usr/bin/env python3
"""
vestir.py — reconcilia un Bitsy generado contra el modelo base
==============================================================

La capa 2 del sistema. El modelo de imagen no puede garantizar la silueta de
Bitsy: arranca de ruido en cada generacion y no tiene memoria de la forma.
Este script no le pide que la respete — se la impone despues, con aritmetica.

Que impone, sin excepcion
-------------------------
* La silueta del modelo base: todo pixel de la base que la generacion no cubrio
  vuelve a su color original.
* Los ojos: se estampan desde la base, en sus coordenadas exactas. Un disfraz
  puede tapar la cabeza entera, nunca los ojos.
* Las zonas que el disfraz declaro NO cubrir: vuelven al blanco de la base.
* La paleta congelada del proyecto y la altura logica del elenco.

Que verifica, y por que puede rechazar
--------------------------------------
Mide cuanto tuvo que corregir. Un Bitsy que necesito reparar media silueta se
va a ver como un collage aunque el script lo deje geometricamente perfecto: en
ese caso conviene regenerar, no maquillar. El umbral es --tolerancia.

Uso
---
    python vestir.py generado.png --disfraz batman.txt --salida bitsies/

Necesita pixelar.py al lado (reusa su normalizacion) y sus dependencias.
"""

import argparse
import pathlib
import sys

import numpy as np
from PIL import Image
from scipy import ndimage

import pixelar


# --------------------------------------------------------------------------
# El modelo base, leido como especificacion
# --------------------------------------------------------------------------
class Base:
    """Todo lo que Bitsy es, deducido de su propio PNG.

    Nada aca esta hardcodeado a mano: si algun dia redibujan la base, el script
    se reajusta solo. Lo que si es fijo es QUE se mide.
    """

    def __init__(self, ruta: pathlib.Path):
        im = Image.open(ruta).convert("RGBA")
        datos = np.array(im)
        mascara = datos[:, :, 3] > 0
        ys, xs = np.nonzero(mascara)
        datos = datos[ys.min(): ys.max() + 1, xs.min(): xs.max() + 1]

        self.rgba = datos
        self.mascara = datos[:, :, 3] > 0
        self.alto, self.ancho = self.mascara.shape

        anchos = self.mascara.sum(axis=1)

        # El cuello es el angostamiento entre cabeza y torso: el minimo de ancho
        # en la franja media. De ahi salen las cuatro zonas del cuerpo.
        desde, hasta = int(self.alto * 0.40), int(self.alto * 0.70)
        self.cuello = desde + int(np.argmin(anchos[desde:hasta]))
        corte_piernas = self.cuello + max(1, round((self.alto - self.cuello) * 0.62))

        self.zonas = {
            "cabeza": (0, self.cuello),
            "cuello": (self.cuello, self.cuello + 1),
            "torso": (self.cuello + 1, corte_piernas),
            "piernas": (corte_piernas, self.alto),
        }

        # El blanco canonico: el color mas frecuente del cuerpo.
        rgb = self.rgba[:, :, :3][self.mascara]
        valores, cuenta = np.unique(rgb.reshape(-1, 3), axis=0, return_counts=True)
        self.blanco = tuple(int(v) for v in valores[int(np.argmax(cuenta))])

        self.ojos = self._buscar_ojos()

    def _buscar_ojos(self) -> np.ndarray:
        """Las dos manchas oscuras dentro de la cabeza. Son el unico rasgo que
        ningun disfraz puede tocar, asi que el script necesita saber exactamente
        que pixeles son."""
        rgb = self.rgba[:, :, :3].astype(int)
        oscuro = (rgb.sum(axis=2) < 200) & self.mascara
        oscuro[self.cuello:, :] = False

        etiquetas, cuantas = ndimage.label(oscuro)
        if cuantas < 2:
            raise SystemExit("no encontre los dos ojos en la base")
        tamanos = ndimage.sum(oscuro, etiquetas, range(1, cuantas + 1))
        dos = np.argsort(tamanos)[::-1][:2] + 1
        return np.isin(etiquetas, dos)

    def resumen(self) -> str:
        ys, xs = np.nonzero(self.ojos)
        return (
            f"base {self.ancho}x{self.alto} px logicos · "
            f"cuello en fila {self.cuello} · "
            f"ojos en filas {ys.min()}-{ys.max()}, columnas {xs.min()}-{xs.max()} · "
            f"blanco #{self.blanco[0]:02X}{self.blanco[1]:02X}{self.blanco[2]:02X}"
        )


# --------------------------------------------------------------------------
# Alineacion
# --------------------------------------------------------------------------
def alinear(generado: np.ndarray, base: Base, margen: int = 8):
    """Busca el desplazamiento que mejor calza la generacion sobre la base.

    Se prueban todos los corrimientos dentro de un margen y gana el de mayor
    solapamiento. Es fuerza bruta sobre una imagen de 45 px: cuesta nada y es
    mas confiable que cualquier heuristica de centrado.
    """
    gm = generado[:, :, 3] > 0
    alto = max(base.alto, gm.shape[0]) + margen * 2
    ancho = max(base.ancho, gm.shape[1]) + margen * 2

    lienzo_base = np.zeros((alto, ancho), bool)
    oy = (alto - base.alto) // 2
    ox = (ancho - base.ancho) // 2
    lienzo_base[oy: oy + base.alto, ox: ox + base.ancho] = base.mascara

    mejor = (-1.0, 0, 0)
    for dy in range(-margen, margen + 1):
        for dx in range(-margen, margen + 1):
            y0 = oy + dy
            x0 = ox + dx
            if y0 < 0 or x0 < 0 or y0 + gm.shape[0] > alto or x0 + gm.shape[1] > ancho:
                continue
            prueba = np.zeros_like(lienzo_base)
            prueba[y0: y0 + gm.shape[0], x0: x0 + gm.shape[1]] = gm
            union = (lienzo_base | prueba).sum()
            if union:
                iou = (lienzo_base & prueba).sum() / union
                if iou > mejor[0]:
                    mejor = (iou, dy, dx)

    iou, dy, dx = mejor
    lienzo = np.zeros((alto, ancho, 4), np.uint8)
    y0, x0 = oy + dy, ox + dx
    lienzo[y0: y0 + generado.shape[0], x0: x0 + generado.shape[1]] = generado

    marco_base = np.zeros((alto, ancho, 4), np.uint8)
    marco_base[oy: oy + base.alto, ox: ox + base.ancho] = base.rgba
    return lienzo, marco_base, (oy, ox), iou


# --------------------------------------------------------------------------
# Reconciliacion
# --------------------------------------------------------------------------
def reconciliar(gen, marco_base, base: Base, origen, cubre, desborde, holgura):
    """Impone los invariantes sobre la generacion ya alineada."""
    oy, ox = origen
    mb = marco_base[:, :, 3] > 0
    salida = gen.copy()

    # 1 · Zona permitida: la silueta base mas los desbordes que el disfraz declaro.
    permitido = ndimage.binary_dilation(mb, iterations=holgura) if holgura else mb.copy()
    if desborde.get("arriba"):
        tope = np.nonzero(mb.any(axis=1))[0][0]
        franja = slice(max(0, tope - desborde["arriba"]), tope)
        columnas = np.nonzero(mb.any(axis=0))[0]
        permitido[franja, columnas.min(): columnas.max() + 1] = True
    for lado, eje in (("lados", None),):
        if desborde.get(lado):
            permitido = ndimage.binary_dilation(
                permitido, structure=np.array([[0, 0, 0], [1, 1, 1], [0, 0, 0]], bool),
                iterations=desborde[lado])
    salida[~permitido] = 0

    # 2 · Reponer la base donde la generacion no llego o no debia llegar.
    #
    # Ojo con la diferencia. Un hueco en el medio del disfraz es un defecto de
    # generacion y se tapa con la base. Pero que el disfraz sea mas angosto que
    # el cuerpo NO es un defecto: es un disfraz ajustado. Si se repone la base
    # tambien ahi, aparece un halo blanco rodeando toda la figura. Por eso el
    # relleno de huecos solo se aplica al interior de la silueta, dejando libre
    # el anillo exterior.
    vacio = salida[:, :, 3] == 0
    reponer = ndimage.binary_erosion(mb, iterations=2) & vacio

    # Las zonas que el disfraz declaro no cubrir vuelven a la base enteras,
    # incluido su borde: si Bitsy va en patas, las patas son las de siempre.
    for zona, (y0, y1) in base.zonas.items():
        if zona in cubre:
            continue
        banda = np.zeros_like(mb)
        banda[oy + y0: oy + y1, :] = True
        reponer |= mb & banda
    salida[reponer] = marco_base[reponer]

    # 3 · Los ojos, siempre, pasando por encima de todo lo demas.
    ojos = np.zeros_like(mb)
    ojos[oy: oy + base.alto, ox: ox + base.ancho] = base.ojos
    salida[ojos] = marco_base[ojos]

    corregido = reponer.sum() / mb.sum()
    return salida, corregido


# --------------------------------------------------------------------------
def recortar(im: np.ndarray) -> Image.Image:
    ys, xs = np.nonzero(im[:, :, 3] > 0)
    return Image.fromarray(im[ys.min(): ys.max() + 1, xs.min(): xs.max() + 1], "RGBA")


def parsear_desborde(txt: str) -> dict:
    fuera = {}
    for parte in filter(None, txt.split(",")):
        clave, _, valor = parte.partition("=")
        fuera[clave.strip()] = int(valor or 0)
    return fuera


def main() -> int:
    ap = argparse.ArgumentParser(
        description="Impone el modelo base de Bitsy sobre un disfraz generado.",
        formatter_class=argparse.ArgumentDefaultsHelpFormatter)
    ap.add_argument("generado", help="La imagen que devolvio el modelo")
    ap.add_argument("--base", default="referencias/bitsy-base.png")
    ap.add_argument("--paleta", default="referencias/paleta.txt")
    ap.add_argument("--cubre", default="cabeza,torso,piernas",
                    help="Zonas que el disfraz tiene permitido cubrir "
                         "(cabeza, cuello, torso, piernas). Las demas vuelven a la base")
    ap.add_argument("--desborde", default="arriba=6,lados=3",
                    help="Cuanto puede salirse de la silueta: arriba para gorros y pelo, "
                         "lados para capas y props")
    ap.add_argument("--holgura", type=int, default=1,
                    help="Pixeles de margen alrededor de la silueta base")
    ap.add_argument("--min-silueta", type=float, default=0.80,
                    help="Solapamiento minimo que tiene que traer la generacion contra "
                         "el modelo base para aceptarse. Por debajo de esto el script "
                         "podria arreglarla igual, pero la pieza ya no es Bitsy disfrazado: "
                         "es otro personaje con los ojos de Bitsy pegados")
    ap.add_argument("--escala", type=int, default=6)
    ap.add_argument("--salida", default="bitsies")
    args = ap.parse_args()

    base = Base(pathlib.Path(args.base))
    paleta = pixelar.leer_paleta(pathlib.Path(args.paleta))
    print(base.resumen())

    # Normalizacion identica a la del resto del elenco.
    im = Image.open(args.generado)
    im = pixelar.quitar_fondo(im, 40)
    im = pixelar.recortar(im, True)
    im = pixelar.a_grilla(im, base.alto)
    im = pixelar.aplicar_paleta(im, paleta)

    gen, marco_base, origen, iou_crudo = alinear(np.array(im), base)
    cubre = {z.strip() for z in args.cubre.split(",") if z.strip()}
    salida, corregido = reconciliar(gen, marco_base, base, origen, cubre,
                                    parsear_desborde(args.desborde), args.holgura)

    final = recortar(salida)
    destino = pathlib.Path(args.salida)
    (destino / "impresion").mkdir(parents=True, exist_ok=True)
    nombre = pathlib.Path(args.generado).stem.replace(" ", "_").lower()
    final.save(destino / f"{nombre}.png")
    pixelar.ampliar(final, args.escala).save(
        destino / "impresion" / f"{nombre}@{args.escala}x.png")

    print()
    print(f"  silueta que entrego el modelo   {iou_crudo:.2f} de solapamiento")
    print(f"  huecos que el script reparo     {corregido:.0%}")
    print(f"  zonas cubiertas por el disfraz  {', '.join(sorted(cubre))}")
    print(f"  ojos                            estampados desde la base")
    print(f"  paleta                          {len(paleta)} colores congelados")
    print(f"  salida                          {destino/f'{nombre}.png'} "
          f"({final.width}x{final.height})")

    if iou_crudo < args.min_silueta:
        print(f"\nRECHAZADA: la generacion trajo {iou_crudo:.2f} de solapamiento, "
              f"por debajo del {args.min_silueta:.2f} exigido.")
        print("El archivo quedo escrito igual, para poder mirarlo, pero esta pieza no "
              "va a leerse como el mismo Bitsy: el disfraz le cambio el cuerpo, no lo "
              "vistio. Conviene regenerar insistiendo en la silueta del modelo base "
              "antes que aceptarla.")
        return 1

    print("\nACEPTADA.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
