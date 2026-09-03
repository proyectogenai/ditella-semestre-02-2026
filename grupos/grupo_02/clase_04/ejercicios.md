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
| 1 | Overhead flat lay of a Cherba mate wrapped in tan leather with an intricately embroidered base, surrounded by dried yerba leaves, a small linen cloth, and wildflowers on a weathered wooden table. + bloque de estilo + 4:5 | ChatGPT (prompt) → Gemini Nano Banana (imagen) | Sí — paleta tierra, materiales naturales, vibra campestre chic |
| 2 | Medium shot of a hand holding a Cherba mate... local con estanterías de maderas + bloque de estilo + 16:9 | ChatGPT (prompt) → Gemini Nano Banana (imagen) | Sí — el local, la luz cálida, los materiales |
| 3 | Slightly angled shot of two Cherba mates... tag "2x1" con twine + bloque de estilo + 4:5 | ChatGPT (prompt) → Gemini Nano Banana (imagen) | Sí — promo, producto, detalle artesanal |

Guardá las imágenes en `imagenes/` (`sistema_01.png`, etc.).

> Si probaste image-to-image con un boceto propio, anotalo acá también y
> contá qué tanto más control te dio.

---

## D.2 — El ejercicio del rubro

**Mi rubro:**
Productos de salud y bienestar del futuro

**Mi prompt:**
Una persona usando anteojos con luz roja para disminuir las ojeras, en el baño de su casa, fotografía realista con iluminación cálida de interior. (sin indicar género ni edad, a propósito)

**Las imágenes que generó:** (nombres de archivo en `imagenes/`)
3 imágenes muy similares entre sí; no les puse una regla de variación. En las tres aparece una mujer joven, con bata blanca y celular en la mano.

**¿Qué asumió el modelo que vos no le dijiste?** (completá esto recién
después de la puesta en común del módulo 4, no antes)
- Mujer joven (asumió género y edad de "la persona que se cuida")
- Bata blanca (asumió qué iba vestida en su casa)
- Celular en la mano (asumió el celular como parte del ritual)
- Las tres imágenes casi idénticas → falta regla de variación para piezas distintas

---

## D.3 — El banco de prompts (con el agente)

**¿Le pedí al agente que arme el archivo?** Sí

**Cuántos prompts entraron al banco final:**
4 (3 de Cherba + 1 del rubro como ejemplo de sesgo)

**De todo lo que probé, ¿qué dejé afuera y por qué?** (esta pregunta es la
que muestra criterio de selección, no solo volumen)
Dejé afuera el prompt de los anteojos en la versión "solo una persona" sin
detalle (el primero), porque generó imágenes demasiado genéricas y sin valor
de marca. En el banco quedaron los que demostraron consistencia de sistema
(los de Cherba) y el del rubro porque documenta un fallo interesante (el
sesgo + la falta de regla de variación), que es de donde se aprende.

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
