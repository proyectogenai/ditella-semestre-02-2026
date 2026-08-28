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
| 1 | Prompt 15 del banco de `tapa-chrisu` (con Chrisu, tanda "sin variación") — Chrisu de espaldas/tres cuartos, mirando por encima del hombro hacia cámara, en el sendero del campo de lavandas | Gemini (Nano Banana 2) | Sí — resume bien el ambiente y la atmósfera que buscaba, y muestra cómo Chrisu queda incorporado a la escena (aunque el parecido físico todavía no es 100% fiel). La uso como composición ancla: de acá en más pienso variar plano, ángulo y postura corporal partiendo de este mismo mundo. |

Guardada en `imagenes/sistema_01.jpg`.

> Si probaste image-to-image con un boceto propio, anotalo acá también y
> contá qué tanto más control te dio.

---

## D.2 — El ejercicio del rubro

**Mi rubro:** Comida y gastronomía del futuro

**Mi prompt:**

Escena de gastronomía del futuro: una cocina profesional con una pared de
vidrio que conecta directamente con el lugar de origen del ingrediente que
se está usando en ese momento — se ve el proceso de producción real (la
materia prima, quien la trabaja) al lado de donde se cocina, en la misma
toma, sin separación entre "atrás" y "adelante". Estilo fotografía
documental, luz natural, sin retoque publicitario de food photography — se
siente más un registro real de proceso que una foto de menú.

**Las imágenes que generó:** `rubro_01.jpg`, `rubro_02.jpg` (mismo prompt,
dos veces) y `rubro_03.jpg` (le pedí que cambiara la materia prima a
vaca).

**¿Qué asumió el modelo que vos no le dijiste?** (completá esto recién
después de la puesta en común del módulo 4, no antes)

_Nota informal, no oficial todavía:_ al cambiar la materia prima a vaca,
el modelo interpretó "futuro" como alta tecnología / laboratorio (biorreactores,
microscopios, pantallas de datos, "ganadería celular") — lo opuesto a lo
que buscaba, que era algo natural, trazable y casi retro. El default de
"futuro" del modelo tira para sci-fi/tech, no hacia la idea de
transparencia y proceso real del prompt.

---

## D.3 — El banco de prompts (con el agente)

**¿Le pedí al agente que arme el archivo?** Sí

**Cuántos prompts entraron al banco final:** 4

**De todo lo que probé, ¿qué dejé afuera y por qué?** (esta pregunta es la
que muestra criterio de selección, no solo volumen)

De los 20 prompts del banco de `tapa-chrisu`, dejé afuera las repeticiones
"sin variación" (son el mismo texto copiado 5 veces, no aportan nada
nuevo al banco) y la mayoría de las variaciones de plano/ángulo — ya elegí
la que mejor resumía la escena (la composición ancla) y no tenía sentido
documentar cada variante de cámara, solo la que de verdad sirve de
referencia. Del ejercicio del rubro (D.2), dejé afuera `rubro_02.jpg`
porque es idéntica a `rubro_01.jpg` (mismo prompt, sin aprendizaje nuevo);
me quedé con el prompt original y la variante de la vaca porque esa
combinación es la que mostró algo real sobre cómo el modelo interpreta
"futuro".

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
