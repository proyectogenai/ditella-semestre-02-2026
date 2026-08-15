# Clase 2 · Ejercicios

**Copiá este archivo a tu carpeta de grupo antes de empezar:**

```
cp clases/clase_02/ejercicios.md grupos/grupo_XX/clase_02/
```

Después completalo ahí. Es tu hoja de trabajo de la clase y parte del
entregable.

> 🎓 **Recordá cómo pedirle al agente.** Lo mecánico (comandos, errores,
> crear carpetas) que lo resuelva él. Lo que es criterio de diseño lo escribís
> vos, y él te guía con preguntas. Si querés trabajar así, pegale esto al
> inicio del chat:
> *"Trabajemos en modo tutor: guiame de a un paso por vez, hacéme las preguntas
> que necesites y esperá mi respuesta antes de seguir. No escribas por mí las
> partes que son decisión de diseño."*

---

# PARTE A · Individual

## A.1 — Mi marca

**Marca elegida:** Corriente

**En dos líneas, qué es:** Corriente es un festival de música electrónica en una isla del Delta al que se llega solo en lancha. Dos días, un escenario, la cabina de DJ y luces led que llegan hasta el cielo: una atmósfera hipnótica, salvaje y tropical.

**Tres adjetivos de su atmósfera:** hipnótico, salvaje, tropical

**Tres cosas que esta marca NUNCA es:** de día, urbana, un evento corporativo

---

## A.2 — Mi system prompt

Completá las cinco partes. Si una te sale de una línea, probablemente le falte
especificidad.

```
# ROL
Sos el director de arte del festival. Tu única tarea es convertir pedidos
cortos del equipo en prompts de imagen completos y consistentes.

# EL UNIVERSO DE CORRIENTE
Corriente es un festival de música electrónica en una isla del Delta al que
se llega solo en lancha. Dos días, un escenario, la cabina de DJ y luces led
que llegan hasta el cielo: una atmósfera hipnótica, salvaje y tropical.
Su mundo visual: la isla con agua alrededor y lanchas, luz nocturna, la
cabina con el DJ y mucha gente disfrutando.
Atmósfera: hipnótico, salvaje y tropical · Nunca: de día, urbano, corporativo.

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
cinematic photography, led lights that reach the sky and reflect on the
water, pink, white and green, nocturnal movie grain, 35mm lens, shallow
depth of field, no text, no logos, natural unposed composition

# CÓMO RESPONDER
1. Elegí UN encuadre de esta lista, rotando entre pedidos para que las
   piezas no se parezcan entre sí:
   - la espalda del DJ con la gente disfrutando de fondo
   - vista aérea del festival desde un dron
   - un fotógrafo retratando a dos personas puntuales del festival
2. Escribí el prompt: [escena específica] + [bloque de estilo] + 9:16
3. Devolvé SOLO el prompt final en inglés, en un bloque de código, sin
   explicaciones, sin alternativas, sin preguntas.

# RESTRICCIONES
- never show daylight, sunlight or daytime skies — everything always happens at night
- never show city skylines, buildings, streets or cars — only the island, the river and the boats
- never a corporate event aesthetic — no suits, no conference stage, no corporate branding
- Si el pedido es ambiguo, elegí vos y avanzá. No preguntes.
```

**Chequeo rápido antes de probarlo:**

- [x] Mi bloque de estilo nombra **colores concretos** (pink, white, green), no "lindos" ni "modernos"
- [x] Dice qué **luz** tiene la escena (led nocturno que se refleja en el agua)
- [x] Tiene una sección de **formato**: me devuelve solo el prompt en inglés, 9:16
- [x] Tiene una **regla de variación** (tres encuadres que rotan)

---

## A.3 — Los tres pedidos

Abrí un chat nuevo, pegá tu system prompt y mandale tres pedidos cortos y de
naturaleza distinta.

| # | Mi pedido | ¿Qué tal salió? |
| --- | --- | --- |
| 1 | la imagen del flyer de la primera noche | Muy bien, se ve la marca |
| 2 | algo para promocionar la llegada en lancha | Muy bien, otra pieza de la misma marca |
| 3 | un momento íntimo entre dos personas en el festival | Muy bien, distinta y consistente |

Guardá las imágenes en `imagenes/` con nombres claros (`individual_01.png`).

---

## A.4 — La iteración (lo más importante)

**Mirá las tres imágenes juntas y respondé honestamente:**

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | Sí | Falta especificidad en el bloque de estilo |
| ¿Parecen todas la misma imagen? | No | Falta una regla de variación |
| ¿Tuviste que arreglar algo a mano? | No | Esa corrección va al sistema |

**El cambio que hice al system prompt:** Ninguno: funcionó a la primera. La regla de variación (tres encuadres que rotan) la incluí desde el inicio, aprendiendo del caso Nocturna — ese era su error clásico y lo evitamos antes de escribir el sistema.

**Volví a probar el pedido que peor salió y ahora:** No hizo falta: los tres pedidos salieron de la misma marca y distintos entre sí (masivo / aéreo / íntimo).

---

# PARTE B · Grupal

## B.1 — La marca del grupo

**Marca elegida y por qué:**

## B.2 — Qué tomamos de cada asistente

| De quién | Qué le tomamos | Por qué |
| --- | --- | --- |
| | | |
| | | |
| | | |

**Qué decidimos dejar afuera y por qué:**

## B.3 — La prueba cruzada

Cada integrante, desde **su propia compu** y en un **chat limpio**:

| Integrante | Su pedido (tipo) | Imagen |
| --- | --- | --- |
| | ambiente | |
| | detalle | |
| | anuncio | |

**Las tres imágenes juntas, ¿parecen de la misma marca?**

**Si no: ¿qué regla le falta al asistente del grupo?**

> Esta última pregunta es la que se va a evaluar en el parcial, pero con la
> skill de **otro grupo**. Un sistema que solo funciona en las manos de quien
> lo escribió no es un sistema.

---

# Entregable

En `grupos/grupo_XX/clase_02/`:

```
clase_02/
├── ejercicios.md                  ← este archivo, completado
├── asistente_nombre_apellido.md   ← uno por integrante (3)
├── asistente_grupal.md
└── imagenes/
```

Y el push de siempre:

```
git pull
git add grupos/grupo_XX/
git commit -m "grupo XX: clase 02"
git push
```
