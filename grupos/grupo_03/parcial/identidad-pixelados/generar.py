#!/usr/bin/env python3
"""
generar.py — genera una escena de Pixelados desde la skill.

Arma el prompt uniendo dos cosas: la capa 1 del mundo, que vive en
mundos/<nombre>.txt, y el bloque madre, que lo lee del SKILL.md. Adjunta las
referencias y le pide la imagen a Gemini en 3:2 y 4K.

    python generar.py avenida

Necesita la variable de entorno GEMINI_API_KEY y:
    pip install google-genai
"""

import base64
import datetime
import pathlib
import sys

from google import genai

AQUI = pathlib.Path(__file__).parent

REFERENCIAS = [
    "referencias/luca.png",
    "referencias/donna.png",
    "referencias/imagen-madre.jpg",
]

CABECERA = (
    "The attached images are STYLE REFERENCES ONLY. Take from them the drawing "
    "style and the look of the world. Do NOT include the two human characters "
    "in the scene.\n\nGenerate:\n\n"
)


def bloque_madre():
    """Saca el bloque madre del SKILL.md: el primer bloque de codigo despues del
    titulo del campo 2. Se lee de ahi a proposito, para que el SKILL.md siga
    siendo la unica fuente de verdad y no haya dos versiones dando vueltas."""
    texto = (AQUI / "SKILL.md").read_text(encoding="utf-8")
    desde = texto.index("## 2 ")
    return texto[desde:].split("```")[1].strip()


def capa_1(mundo):
    """La capa 1 es lo unico que cambia entre escenas. Un archivo por mundo."""
    ruta = AQUI / "mundos" / (mundo + ".txt")
    if not ruta.exists():
        sys.exit("no existe %s\nescribi ahi la capa 1 de ese mundo." % ruta)
    return ruta.read_text(encoding="utf-8").strip()


def adjuntos():
    """Las referencias, en base64. Si falta alguna avisa y sigue: el bloque
    madre esta escrito para sostenerse solo."""
    entradas = []
    for rel in REFERENCIAS:
        p = AQUI / rel
        if not p.exists():
            print("   aviso: falta %s, genero sin esa referencia" % rel)
            continue
        tipo = "image/jpeg" if p.suffix.lower() in (".jpg", ".jpeg") else "image/png"
        entradas.append({
            "type": "image",
            "data": base64.b64encode(p.read_bytes()).decode(),
            "mime_type": tipo,
        })
    return entradas


def main():
    if len(sys.argv) < 2:
        sys.exit("uso: python generar.py <mundo>\nejemplo: python generar.py avenida")

    mundo = sys.argv[1]
    prompt = CABECERA + capa_1(mundo) + "\n\n" + bloque_madre()

    salida = AQUI / "escenas"
    salida.mkdir(exist_ok=True)
    sello = datetime.datetime.now().strftime("%Y%m%d-%H%M")
    base = salida / ("%s_%s" % (mundo, sello))

    print("generando '%s' en 3:2 y 4K..." % mundo)

    client = genai.Client()
    interaction = client.interactions.create(
        model="gemini-3-pro-image",
        input=[{"type": "text", "text": prompt}] + adjuntos(),
        response_format={"type": "image", "aspect_ratio": "3:2", "image_size": "4K"},
    )

    png = base.with_suffix(".png")
    png.write_bytes(base64.b64decode(interaction.output_image.data))

    # El prompt exacto queda al lado de la imagen. Es la documentacion del
    # proceso que pide el parcial, sin trabajo extra.
    base.with_suffix(".txt").write_text(prompt, encoding="utf-8")

    print("listo:  escenas/%s" % png.name)
    print("prompt: escenas/%s" % base.with_suffix(".txt").name)


if __name__ == "__main__":
    main()
