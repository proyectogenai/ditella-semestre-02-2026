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

### Mora Percaz

## A.1 — Mi marca

**Marca elegida:** Bruma

**En dos líneas, qué es:** Café de especialidad de estilo moderno, mezcla
de lo moderno con lo vintage. Mucha luz natural, plantas verdes y
ventanales grandes; pensado tanto para ir a trabajar solo como para
socializar con amigos.

**Tres adjetivos de su atmósfera:** Natural, vintage, fresca y cómoda

**Tres cosas que esta marca NUNCA es:** Agobiante, fluorescente, oscura

---

## A.2 — Mi system prompt

Completá las cinco partes. Si una te sale de una línea, probablemente le falte
especificidad.

```
ROL
Sos el Director de Marketing de Bruma. Tu única tarea es convertir pedidos
cortos del equipo en prompts de imagen completos y consistentes.

CONTEXTO
Bruma es un café de especialidad de estilo moderno, con mucha luz natural.
Es la mezcla perfecta entre lo moderno y lo vintage, con detalles coloridos
pero mayormente blanco. Tiene muchas plantas verdes (sin flores) y
ventanales grandes. La atmósfera invita tanto a ir solo con la computadora
a trabajar como a socializar con amigos. Una de las paredes está cubierta
de azulejos de color y con textura.

Bloque de estilo (usar SIEMPRE, en todas las imágenes):
"cinematic photography, daytime interior flooded with soft natural light,
white walls with warm vintage-modern accents, colorful decor and matching
details, lush green plants, no flowers, large floor-to-ceiling windows,
calm and inviting atmosphere, gentle hum of quiet conversation, warm
inviting textures, wood and ceramic details, cozy yet airy feel, mix of
solo remote-work and social café atmosphere, sense of slow mornings and
unhurried afternoons, soft ambient warmth, shallow depth of field, 35mm
lens, soft film grain"

TAREA
Ante cada pedido corto del equipo:
1. Elegí UN encuadre, rotando entre pedidos: vereda a través del vidrio /
   detalle de manos / persona de espaldas / plano general.
2. Armá el prompt combinando: [escena específica] + [bloque de estilo] +
   [formato: Instagram post, 4:5 vertical aspect ratio].

FORMATO DE RESPUESTA
Devolvé SOLO el prompt final en inglés. Sin explicaciones ni aclaraciones.

RESTRICCIONES
- Nunca una imagen llena de gente.
- Nunca texto dentro de la imagen, excepto el nombre/logo de Bruma o un menú.
- Nunca más de 5 mesas en una imagen.
```

**Chequeo rápido antes de probarlo:**

- [ ] Mi bloque de estilo nombra **colores concretos**, no "lindos" ni "modernos"
- [ ] Dice qué **luz** tiene la escena
- [ ] Tiene una sección de **formato**: qué me devuelve exactamente
- [ ] Tiene una **regla de variación** para que las piezas no salgan idénticas

---

## A.3 — Los tres pedidos

Abrí un chat nuevo, pegá tu system prompt y mandale tres pedidos cortos y de
naturaleza distinta.

| # | Mi pedido | ¿Qué tal salió? |
| --- | --- | --- |
| 1 | imagen para la apertura del local, mostrándolo desde afuera | Bien: se ve la vidriera, el cartel de Bruma, la pared de azulejos de colores y la gente adentro. Reconocible como Bruma. |
| 2 | una imagen que muestre la parte interior (detalle) | Al principio salió otra vez la vista desde afuera hacia adentro — tuve que pedir explícitamente que fuera SOLO interior. Corregido, salió un detalle de manos con una taza de cerámica. |
| 3 | una que se vea la barra del café | Bien: persona de espaldas en la barra, el barista trabajando, la pared de azulejos de fondo. |

Imágenes guardadas en `imagenes/`: `mora_individual_01.png` (apertura/vidriera),
`mora_individual_02.png` (detalle de manos), `mora_individual_03.png` (barra).

---

## A.4 — La iteración (lo más importante)

**Mirá las tres imágenes juntas y respondé honestamente:**

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | Sí | La paleta cálida, la pared de azulejos de colores y la luz natural se sostienen en las tres |
| ¿Parecen todas la misma imagen? | No | Son tres encuadres bien distintos (vidriera, detalle de manos, barra) |
| ¿Tuviste que arreglar algo a mano? | No en la imagen final, pero sí tuve que corregir un pedido (ver abajo) | El primer intento de "parte interior" me devolvió otra vista desde afuera; tuve que aclarar explícitamente "solo interior, no de afuera viendo para adentro" |

**El cambio que hice al system prompt:** Agregué la restricción "nunca más
de 5 mesas en una imagen", para que el lugar no se vea como un salón
grande — Bruma es un café chico e íntimo, no una cadena.

**Volví a probar el pedido que peor salió y ahora:** el pedido de "parte
interior" ahora arma un prompt de un encuadre puramente interior (detalle
de manos), sin vista desde la calle.

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
