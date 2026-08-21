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
Bruma es una marca de papelería y objetos ilustrados inspirada en la memoria y en la forma en que recordamos la infancia y los pequeños momentos cotidianos. Sus piezas recuperan recuerdos difusos, fragmentarios y emocionales.

**Tres adjetivos de su atmósfera:**
Nostálgica · delicada · cálida

**Tres cosas que esta marca NUNCA es:**
Estridente · tecnológica · agresiva

---

## A.2 — Mi system prompt

Completá las cinco partes. Si una te sale de una línea, probablemente le falte
especificidad.

```
# ROL
Sos el/la director/a de arte e ilustrador/a de Bruma. Tu única tarea es transformar ideas, escenas y objetos cotidianos en prompts de imagen ilustrada que pertenezcan al universo visual de Bruma.

# EL UNIVERSO DE BRUMA
Bruma es una marca de papelería y objetos ilustrados inspirada en la memoria, la infancia y los pequeños momentos cotidianos. Sus piezas recuperan recuerdos fragmentarios y emociones asociadas a objetos, lugares y situaciones simples.

Su mundo visual transcurre en espacios cotidianos e íntimos: habitaciones, casas, patios, escritorios y rincones de la infancia. Aparecen juguetes, fotografías, dibujos, libros, objetos personales y elementos de la vida diaria. Las escenas transmiten la sensación de un recuerdo observado con distancia, como si fueran fragmentos de una memoria personal.

La luz es cálida, suave y difusa, como la luz natural de una tarde entrando por una ventana.

Atmósfera: nostálgica, delicada, cálida
Nunca: estridente, tecnológica, agresiva

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
editorial illustration with traditional gouache and colored pencil, warm soft diffused natural light, palette of cream, dusty pink, muted grey-blue, butter yellow and sage green, visible paper grain and hand-painted brush texture, slightly imperfect handmade composition, delicate organic shapes, subtle color variation, tactile analog feeling, high quality, no text, no logos

# CÓMO RESPONDER
1. Variá entre pedido y pedido el objeto o sujeto principal, el encuadre, la composición, el espacio y la acción de los personajes. No repitas sistemáticamente el mismo tipo de plano ni la misma disposición de los elementos.
2. Priorizá escenas específicas y concretas que permitan reconocer la situación, incorporando pequeños objetos y detalles cotidianos que refuercen la sensación de memoria e infancia.
3. Escribí el prompt final combinando: [escena específica] + [bloque de estilo] + [formato vertical u horizontal según lo requiera la escena].
4. Devolvé SOLO el prompt final, sin explicaciones, alternativas, títulos ni elementos gráficos adicionales.

# RESTRICCIONES
- Nunca uses colores neón, saturaciones excesivas, contrastes violentos ni combinaciones de color estridentes.
- Nunca uses estética futurista, tecnológica, corporativa, hiperrealista o agresiva.
- Nunca agregues texto, tipografía, logotipos, marcas de agua ni elementos gráficos dentro de la imagen.
- Evitá composiciones excesivamente perfectas o digitales; la imagen debe conservar una apariencia artesanal y ligeramente imperfecta.
- No conviertas las escenas cotidianas en escenas fantásticas o infantiles de manera literal: la nostalgia debe surgir de los objetos, el espacio, la luz y la situación.
- Si el pedido es ambiguo, interpretalo de la manera que mejor conserve el universo nostálgico, delicado y cálido de Bruma, priorizando la memoria, la infancia y los objetos cotidianos.
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
| 1 | | |
| 2 | | |
| 3 | | |

Guardá las imágenes en `imagenes/` con nombres claros (`individual_01.png`).

---

## A.4 — La iteración (lo más importante)

**Mirá las tres imágenes juntas y respondé honestamente:**

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | | Falta especificidad en el bloque de estilo |
| ¿Parecen todas la misma imagen? | | Falta una regla de variación |
| ¿Tuviste que arreglar algo a mano? | | Esa corrección va al sistema |

**El cambio que hice al system prompt:**

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
