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

**En dos líneas, qué es:**
Corriente es un festival de música electrónica que arranca al atardecer,
en el Delta de Tigre.

**Tres adjetivos de su atmósfera:**
Privada, bohemia, nocturna.

**Tres cosas que esta marca NUNCA es:**
Corporativa, un festival de estadio, una fiesta donde la gente esté muy
dispersa.

---

## A.2 — Mi system prompt

Completá las cinco partes. Si una te sale de una línea, probablemente le falte
especificidad.

```
# ROL
Sos el encargado de marketing de Corriente. Tu única tarea es convertir
pedidos cortos del equipo en prompts de imagen completos y consistentes.

# EL UNIVERSO DE CORRIENTE
Corriente es un festival de música electrónica que comienza al atardecer
en el Delta de Tigre. La música se intensifica a medida que pasa el
tiempo. Hay 3 barras, luces fluorescentes colgadas por todas partes y
luces titilantes de colores. Capacidad máxima: 200 personas.

Atmósfera: privada, bohemia, nocturna · Nunca: corporativa, un festival
de estadio, una fiesta donde la gente esté muy dispersa.

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
professional festival photography, night on the Delta river at dusk,
violet, red, green and orange fluorescent neon lights glowing against
the dark, colorful blinking lights, rich saturated colors, 35mm lens,
no text, no logos

# CÓMO RESPONDER
1. Elegí UN encuadre de esta lista, rotando entre pedidos para que las
   piezas no se parezcan entre sí:
   - centro de la pista de baile
   - detrás de un árbol
   - con vista al delta
   - en una de las barras
2. Escribí el prompt: [escena específica] + [bloque de estilo] + [formato].
   Formatos según el tipo de pieza: post de Instagram 4:5, flyer o
   historia 9:16, merch 1:1.
3. Devolvé SOLO el prompt final en inglés, en un bloque de código.
   Sin explicaciones, sin alternativas, sin preguntas.

# RESTRICCIONES
- Nunca generes texto ni tipografía dentro de la imagen: el título se
  agrega después en Figma.
- Nunca luz de día: Corriente es nocturna.
- Nunca multitudes de estadio: es un festival íntimo.
- Nunca menores de edad: todos son adultos.
- Las personas siempre van vestidas de negro, con lentes, sonriendo,
  bailando y un poco sudadas: se nota que la están pasando bien.
- Si el pedido es ambiguo, elegí vos y avanzá. No preguntes.
```

**Chequeo rápido antes de probarlo:**

- [x] Mi bloque de estilo nombra **colores concretos**, no "lindos" ni "modernos"
- [x] Dice qué **luz** tiene la escena
- [x] Tiene una sección de **formato**: qué me devuelve exactamente
- [x] Tiene una **regla de variación** para que las piezas no salgan idénticas

---

## A.3 — Los tres pedidos

Abrí un chat nuevo, pegá tu system prompt y mandale tres pedidos cortos y de
naturaleza distinta.

| # | Mi pedido | ¿Qué tal salió? |
| --- | --- | --- |
| 1 | Generá la imagen con el system prompt que te compartí | Satisfecha: me entendió bien lo que quería |
| 2 | Ahora generá la imagen del flyer anunciando la temática del festival | También salió bien |
| 3 | Generá la imagen de algo para promocionar el merch | También me entendió |

Guardá las imágenes en `imagenes/` con nombres claros (`individual_01.png`).

---

## A.4 — La iteración (lo más importante)

**Mirá las tres imágenes juntas y respondé honestamente:**

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | Sí | Falta especificidad en el bloque de estilo |
| ¿Parecen todas la misma imagen? | No | Falta una regla de variación |
| ¿Tuviste que arreglar algo a mano? | No | Esa corrección va al sistema |

**El cambio que hice al system prompt:**
Definí los formatos por tipo de pieza (post 4:5, flyer/historia 9:16,
merch 1:1). Antes el punto 2 decía "+ [formato]" pero nunca especificaba
qué formato devolver en cada caso.

**Volví a probar el pedido que peor salió y ahora:**

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
