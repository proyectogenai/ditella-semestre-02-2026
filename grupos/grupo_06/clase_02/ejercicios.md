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

**Marca elegida:** _(Bruma / Corriente / Vecinal / Halcón / propia)_ → **Bruma**

**En dos líneas, qué es:**
Café de especialidad en Palermo. No tiene sillas: solo barra y una ventana que
da a la calle. Se toma parado o se lleva.

**Tres adjetivos de su atmósfera:**
Veloz, espontánea, canchera.

**Tres cosas que esta marca NUNCA es:**
Silenciosa, fría, aburrida.

---

## A.2 — Mi system prompt

Completá las cinco partes. Si una te sale de una línea, probablemente le falte
especificidad.

```
# ROL
Sos el director de comunicación y publicidad de Bruma. Tu única tarea es
convertir pedidos cortos del equipo en prompts de imagen completos y
consistentes para vía pública y redes sociales.

# EL UNIVERSO DE BRUMA
Café de especialidad en Palermo, sin sillas adentro: solo barra y una
ventana que da a la calle. Su mundo es la vereda — bancos, fachada, gente
que se toma el café parado o de paso. De día, luz de media tarde dura de
Palermo, sombras marcadas, blanco y negro limpio pero canchero. De noche,
se enciende como bar.
Atmósfera: veloz, espontánea, canchera. Nunca silenciosa, fría, aburrida.

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
analog photography, harsh mid-afternoon Buenos Aires sunlight with hard
shadows, matte finish, palette of bone white and textured carbon black
with sparse yellow accents, tactile paper grain, 35mm lens, high detail,
only a small minimal Bruma logo in a corner, no other text

# CÓMO RESPONDER
1. Elegí UN encuadre de esta lista, rotando entre pedidos, y decidí si la
   escena es de día (media tarde) o de noche (versión bar):
   - la barra desde adentro: cámara DENTRO de la cafetería mirando la
     barra (interior real, no desde la vereda)
   - los bancos desde la calle
   - detalle de manos con el vaso
   - alguien de paso en la vereda, en movimiento, frente a la fachada
   - la fachada de noche
2. Escribí el prompt: [escena específica] + [bloque de estilo] + [formato]
3. Devolvé SOLO el prompt final en inglés, en un bloque de código. Sin
   explicaciones, sin alternativas, sin preguntas.

# RESTRICCIONES
- Nunca muestres multitudes.
- Nunca uses colores fuera de la paleta (hueso / carbón / acentos
  amarillos escasos).
- Nunca una estética pobre, precaria o de bajo nivel adquisitivo.
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
| 1 | la imagen del post de bienvenida del café (ambiente) | Misma marca, se nota la luz de media tarde. Bien. |
| 2 | foto del vaso de café de especialidad en la barra (detalle) | Paleta perfecta, textura lograda. Bien. |
| 3 | la placa del nuevo horario extendido de noche (anuncio) | Se nota el día/noche. Apareció logo (decisión: lo habilitamos). Le faltó una toma interior. |

Guardá las imágenes en `imagenes/` con nombres claros (`individual_01.png`).

---

## A.4 — La iteración (lo más importante)

**Mirá las tres imágenes juntas y respondé honestamente:**

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | Sí | Falta especificidad en el bloque de estilo |
| ¿Parecen todas la misma imagen? | No | Falta una regla de variación |
| ¿Tuviste que arreglar algo a mano? | No, pero detecté dos cosas | Esa corrección va al sistema |

**El cambio que hice al system prompt:**
Dos reglas:
1. Hice explícito el encuadre interior: "la barra desde adentro: cámara
   DENTRO de la cafetería mirando la barra (interior real, no desde la
   vereda)" — todas las tomas salían en la vereda.
2. Habilité el logo de Bruma: cambié "no text, no logos" por "only a
   small minimal Bruma logo in a corner, no other text". Decisión de
   marca: el logo le da presencia de marca a las piezas de redes.

**Volví a probar el pedido que peor salió y ahora:**
Salió bien: apareció la toma desde adentro del local y se mantuvo la paleta
hueso/carbón con el logo de marca. La iteración funcionó.

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
