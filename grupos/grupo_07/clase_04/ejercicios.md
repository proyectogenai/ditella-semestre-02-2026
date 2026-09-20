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
| 1 | Story de Instagram — vista desde la vereda a través del vidrio (vertical 9:16) | Gemini | Sí, identidad de Bruma intacta |
| 2 | Post — detalle de manos y objetos sobre la barra (cuadrado 1:1) | Gemini | Sí, identidad de Bruma intacta |
| 3 | Aviso de fachada — plano general del mostrador casi vacío (horizontal 16:9) | Gemini | Sí, identidad de Bruma intacta |

Guardá las imágenes en `imagenes/` (`sistema_01.png`, etc.).

Las tres piezas salieron excelentes y fieles a la identidad de Bruma: luz
ámbar, rayas bold bicolor, gente de pie, sin mesas ni sillas.<br>
> No probé image-to-image con boceto propio en esta instancia.

> Si probaste image-to-image con un boceto propio, anotalo acá también y
> contá qué tanto más control te dio.

---

## D.2 — El ejercicio del rubro

**Mi rubro:** café al paso / cafetería de especialidad

**Mi prompt:** "logo minimalista para un café al paso que sigue la lógica de Bruma (rayas bold bicolor, luz ámbar, sin mesas ni sillas)"

**Las imágenes que generó:** `imagenes/rubro_01.png`

**¿Qué asumió el modelo que vos no le dijiste?** (completá esto recién
después de la puesta en común del módulo 4, no antes)

---

## D.3 — El banco de prompts (con el agente)

**¿Le pedí al agente que arme el archivo?** Sí

**Cuántos prompts entraron al banco final:** 4

**De todo lo que probé, ¿qué dejé afuera y por qué?** (esta pregunta es la
que muestra criterio de selección, no solo volumen)

> Dejé afuera nada: las 4 imágenes generadas (3 piezas del sistema + el logo
> del rubro) fueron coherentes con la identidad de Bruma.

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
