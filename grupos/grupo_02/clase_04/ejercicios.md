# Clase 4 · Ejercicios

**Copiá este archivo a tu carpeta de grupo antes de empezar:**

```
cp clases/clase_04/ejercicios.md grupos/grupo_XX/clase_04/
```

Después completalo ahí. Es tu hoja de trabajo de la clase y parte del
entregable.

> 🎓 **Modo tutor, como siempre.** Lo mecánico (armar el archivo del banco
> de prompts, instalar, comandos de git) que lo resuelva el agente. Qué
> prompt probar y qué imagen entra al banco, eso es criterio tuyo. Frase
> para pegar al chat si querés reforzarlo:
> *"Trabajemos en modo tutor: guiame de a un paso por vez y no decidas por
> mí qué prompts entran al banco — preguntame por qué me gustó cada imagen
> antes de guardarla."*

---

## D.1 — Piezas reales para tu sistema

**Prompts que le pedí a mi skill de la C3 (anotá los que generaron algo que te sirvió):**

| # | Prompt | Herramienta | ¿Se sintió coherente con mi marca? |
| --- | --- | --- | --- |
| 1 | A premium Argentine mate "Cherba" gourd with a hand-embroidered fabric base, intricate colorful thread patterns, soft natural daylight, neutral beige background, elegant flat-lay composition, high-end product photography, sharp focus, 4k, minimalist aesthetic, Instagram post style | ChatGPT | Sí, acertado. Mejoraría el bordado |
| 2 | Close-up shot of a mate gourd brimming with yerba mate, bombilla straw slightly tilted, steam rising gently, soft morning sunlight, wooden table background with bokeh, cozy artisanal atmosphere, editorial food photography, rich natural colors, detailed texture of yerba mate leaves | ChatGPT | Sí, me re gustó |
| 3 | Two friends sharing mate outdoors on a sunny day, one person holding a Cherba mate gourd with bombilla straw, passing it in the traditional Argentine way, natural relaxed conversation, green park or backyard setting, casual comfortable clothing, golden hour backlight, candid lifestyle photography, vibrant natural colors, warm atmosphere, editorial style, 4:5 format | ChatGPT | Sí, le quedó muy bien |
| 4 | A Cherba mate gourd with metal bombilla straw, centered on a pure white background, studio product photography, soft even lighting, no shadows, clean minimalist composition, high resolution, sharp focus, e-commerce catalog style, 4k, professional product shot, front-facing angle | ChatGPT | Sí, le quedó muy bien |

Guardá las imágenes en `imagenes/` (`sistema_01.png`, etc.).

> De los 4 que generé, el Nº1 (flat-lay) quedó acertado pero el modelo me
> puso "fabric base"; el universo de Cherba es calabaza **revestida en
> cuero**, así que lo corregiría pidiendo la base bordada pero el mate de
> cuero, y no tela.

> Si probaste image-to-image con un boceto propio, anotalo acá también y
> contá qué tanto más control te dio.

---

## D.2 — El ejercicio del rubro

**Mi rubro:**

**Mi prompt:**

**Las imágenes que generó:** (nombres de archivo en `imagenes/`)

**¿Qué asumió el modelo que vos no le dijiste?** (completá esto recién
después de la puesta en común del módulo 4, no antes)

---

## D.3 — El banco de prompts (con el agente)

**¿Le pedí al agente que arme el archivo?** Sí

**Cuántos prompts entraron al banco final:** 4

**De todo lo que probé, ¿qué dejé afuera y por qué?** No salieron malas
imágenes, pero ajusté la nº1: el modelo me puso "fabric base" y el universo
de Cherba es calabaza revestida en **cuero**. Corregiría ese detalle para
que el mate de la escena sea coherente con la marca, no los guardé tal cual
como venían.

---

# Entregable

En `grupos/grupo_XX/clase_04/`:

```
clase_04/
├── banco_de_prompts.md    ← al menos 4-6 prompts documentados
└── imagenes/              ← las que generaste
```

Cada entrada del banco: el prompt completo, la herramienta, los
parámetros (aspect ratio, seed si la usaste), y una línea de para qué
sirvió.

Y el push de siempre:

```
git pull
git add grupos/grupo_XX/
git commit -m "grupo XX: clase 04"
git push
```
