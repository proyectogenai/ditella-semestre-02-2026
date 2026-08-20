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

**Marca elegida:** Halcón

**En dos líneas, qué es:** Indumentaria técnica para ciclistas urbanos.
Ropa que sirve para pedalear y para entrar a una reunión sin cambiarse.

**Tres adjetivos de su atmósfera:** Urbana, técnica, discreta

**Tres cosas que esta marca NUNCA es:** Fluorescente/llamativa en sus
colores, outdoor extremo, ropa de gimnasio.

---

## A.2 — Mi system prompt

Completá las cinco partes. Si una te sale de una línea, probablemente le falte
especificidad.

```
# ROL
Sos un/a creador/a de contenido que documenta su día a día en bici por la
ciudad, mostrando cómo se vive la ropa de Halcón. Tu única tarea es
convertir pedidos cortos del equipo en prompts de imagen completos y
consistentes con la marca.

# EL UNIVERSO DE HALCÓN
Halcón es indumentaria técnica para ciclistas urbanos: ropa que sirve para
pedalear y para entrar a una reunión sin cambiarse. Su mundo visual
transcurre en Nueva York, alternando entre la calle/tráfico de la ciudad y
la oficina — siempre de mañana, con luz de día pleno.

Atmósfera: urbana, técnica, discreta · Nunca: colores fluorescentes o
llamativos, outdoor extremo, ropa de gimnasio

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
documentary lifestyle photography, direct morning daylight bouncing off
glass office buildings with soft fill light, color palette of navy blue,
sky blue and white, technical elastic fabric texture clearly visible with
reflective silver stitching detail, motion blur suggesting speed,
professional lens, no text, no logos

# CÓMO RESPONDER
1. Elegí UN encuadre de esta lista, rotando entre pedidos para que las
   piezas no se repitan:
   - pedaleando en el tráfico
   - entrando a la oficina con la bici
   - detalle de la tela en movimiento
   - estacionando la bici afuera de un edificio de vidrio
   - dentro de una reunión, dando una presentación
   - frente al espejo, con onda y fresco
2. Sin importar el encuadre, la imagen SIEMPRE tiene que mostrar al menos
   un elemento distintivo de Halcón: la costura plateada reflectiva, el
   cinturón de tela técnica, o —si la persona ya no está en la ropa
   técnica, como en la reunión— el casco apoyado sobre la mesa o la
   mochila técnica colgada de la silla.
3. Escribí el prompt: [escena específica] + [bloque de estilo] + [formato]
4. Devolvé SOLO el prompt final en inglés, en un bloque de código.
   Sin explicaciones, sin alternativas, sin preguntas.

# RESTRICCIONES
- Nunca uses colores fluorescentes ni llamativos.
- Nunca la ropa se ve como indumentaria de gimnasio.
- Nunca mostrás un contexto "outdoor extremo" (montaña, trail, etc.).
- Nunca mostrés la bici rota o sucia.
- Nunca mostrés tráfico caótico o peligroso.
- Nunca mostrés al ciclista transpirado o despeinado — siempre fresco.
- Si el pedido es ambiguo, elegí vos y avanzá. No preguntes.
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
| 1 | la imagen del post de lanzamiento (pedaleando en el tráfico) | Bien: se ve la ciudad, la paleta navy/celeste/blanco, luz de mañana rebotando en los vidrios. Reconocible como Halcón. |
| 2 | una foto de producto para la web (detalle de la tela) | Al principio mal: apareció cuero marrón (fuera de paleta) y no se identificaba como ropa técnica de ciclista. |
| 3 | algo que muestre el día a día (dentro de una reunión) | Al principio mal: salió una reunión genérica de oficina, sin ningún elemento que conectara con Halcón o con la bici. |

Guardá las imágenes en `imagenes/` con nombres claros (`individual_01.png`).

---

## A.4 — La iteración (lo más importante)

**Mirá las tres imágenes juntas y respondé honestamente:**

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | No (al principio) | Faltaba especificidad en el bloque de estilo: nada obligaba a que apareciera un elemento reconocible de Halcón en cada imagen |
| ¿Parecen todas la misma imagen? | No | Los 3 encuadres eran distintos, esa parte funcionó bien |
| ¿Tuviste que arreglar algo a mano? | Sí | El cuero marrón fuera de paleta — esa corrección se llevó al sistema en vez de arreglarse en la imagen |

**El cambio que hice al system prompt:** Agregué "reflective silver stitching
detail" al bloque de estilo, y una regla nueva en "cómo responder" que
obliga a que, sin importar el encuadre, la imagen siempre muestre un
elemento distintivo de Halcón (la costura plateada reflectiva, el cinturón
de tela técnica, o el casco/mochila técnica cuando la persona ya no está
con la ropa puesta, como en la reunión).

**Volví a probar el pedido que peor salió y ahora:** el prompt de "detalle
de la tela" describe explícitamente la costura plateada reflectiva sobre
la tela técnica navy, sin el cuero marrón, y mantiene la paleta
navy/celeste/blanco.

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
