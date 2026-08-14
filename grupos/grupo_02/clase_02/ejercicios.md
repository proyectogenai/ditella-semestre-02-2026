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

**Marca elegida:** Bruma

**En dos líneas, qué es:**
Café de especialidad en Palermo. No tiene sillas: solo barra y una ventana
que da a la calle. Se toma parado o se lleva.

**Tres adjetivos de su atmósfera:**
chill, descontracturado, pasajero

**Tres cosas que esta marca NUNCA es:**
ruidosa, fría, ajena

---

## A.2 — Mi system prompt

Completá las cinco partes. Si una te sale de una línea, probablemente le falte
especificidad.

```
# ROL
Sos el director de diseño de Bruma. Tu única tarea es convertir pedidos
cortos del equipo en prompts de imagen completos y consistentes.

# EL UNIVERSO DE BRUMA
Interiores cálidos, colores tierra. Gente parada tomando un café,
charlando entre ellos. Atmósfera cálida y personal, descontracturada y
pasajera. La marca no es ruidosa, fría, ajena.

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
photorealistic editorial photography, warm cinematic lighting with soft
side light, earthy and green color palette: terracotta #A0522D, ochre
#C19A4B, sand beige #D8C3A5, olive green #6B705C, and forest green
#344E41, 35mm lens with fine analog film grain texture, high resolution,
professional poster composition, sharp details, no text, no logos

# CÓMO RESPONDER
1. Elegí UN elemento o momento diferente relacionado con el café en cada
   pedido: vertiendo café recién preparado / la barra a través de la
   ventana / manos sosteniendo una taza de café caliente / personas
   disfrutando de un café de pie
2. Escribí el prompt: [escena específica] + [bloque de estilo] + [4:5]
3. Devolvé SOLO el prompt final en inglés, sin explicaciones.

# RESTRICCIONES
- Nunca más de 2 personas.
- Nunca texto dentro de la imagen.
- Si el pedido es ambiguo, elegí vos y continuá.
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
| 1 | La foto del local para el post de apertura de Instagram (ambiente) | Bien, mantuvo la paleta tierra y la luz cálida |
| 2 | La taza de la barra para el menú de la semana (producto) | Bien, distinta de la anterior pero de la misma marca |
| 3 | Algo para el flyer del happy hour (anuncio) | Bien, varió el momento sin romper el estilo |

Guardá las imágenes en `imagenes/` con nombres claros (`individual_01.png`).

**Prompts exactos que devolvió el asistente (uno por imagen):**

1. _people enjoying a coffee standing together during a relaxed happy hour
   at a warm neighborhood café, one person holding a freshly served coffee
   while casually chatting with another person near the bar, intimate and
   spontaneous atmosphere, inviting interior with earthy materials and
   subtle evening ambiance, photorealistic editorial photography, warm
   cinematic lighting with soft side light, earthy and green color palette:
   terracotta #A0522D, ochre #C19A4B, sand beige #D8C3A5, olive green
   #6B705C, and forest green #344E41, 35mm lens with fine analog film grain
   texture, high resolution, professional poster composition, sharp details,
   no text, no logos, 4:5_

2. _a warm neighborhood café storefront at opening time, viewed from the
   street with the inviting interior visible through the windows, subtle
   signs of a freshly opened space without any readable text or logos, warm
   earthy materials, terracotta and olive accents, soft morning atmosphere,
   photorealistic editorial photography, warm cinematic lighting with soft
   side light, earthy and green color palette: terracotta #A0522D, ochre
   #C19A4B, sand beige #D8C3A5, olive green #6B705C, and forest green
   #344E41, 35mm lens with fine analog film grain texture, high resolution,
   professional poster composition, sharp details, no text, no logos, 4:5_

3. _close-up of a warm ceramic coffee cup resting on the café counter,
   freshly prepared coffee with subtle steam rising, surrounded by a simple
   wooden counter and softly blurred earthy-toned café interior, intimate
   everyday atmosphere, photorealistic editorial photography, warm cinematic
   lighting with soft side light, earthy and green color palette: terracotta
   #A0522D, ochre #C19A4B, sand beige #D8C3A5, olive green #6B705C, and
   forest green #344E41, 35mm lens with fine analog film grain texture, high
   resolution, professional poster composition, sharp details, no text, no
   logos, 4:5_

---

## A.4 — La iteración (lo más importante)

**Mirá las tres imágenes juntas y respondé honestamente:**

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | Sí | Falta especificidad en el bloque de estilo |
| ¿Parecen todas la misma imagen? | No | Falta una regla de variación |
| ¿Tuviste que arreglar algo a mano? | No | Esa corrección va al sistema |

**El cambio que hice al system prompt:**
Ninguno. Salieron bien a la primera: las tres respetaron la paleta tierra/verde, la luz cálida y el formato 4:5.

**Volví a probar el pedido que peor salió y ahora:**
No hizo falta iterar.

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
