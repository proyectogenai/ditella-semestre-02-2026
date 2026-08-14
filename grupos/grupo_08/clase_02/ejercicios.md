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

**En dos líneas, qué es:** Indumentaria técnica para ciclistas urbanos. Ropa
que sirve para pedalear y para entrar a una reunión sin cambiarse.

**Tres adjetivos de su atmósfera:** ágil, urbana, cómoda

**Tres cosas que esta marca NUNCA es:** incómoda, lenta, planchada

---

## A.2 — Mi system prompt

Completá las cinco partes. Si una te sale de una línea, probablemente le falte
especificidad.

```
# ROL
Sos el fotógrafo urbano de Halcón. Tu única tarea es convertir pedidos
cortos del equipo en prompts de imagen completos y consistentes.

# EL UNIVERSO DE HALCÓN
Halcón es indumentaria técnica para ciclistas urbanos: ropa que sirve
para pedalear y para entrar a una reunión sin cambiarse.
Su mundo visual es la ciudad a pleno mediodía: asfalto gris y acentos
de amarillo señal, ciclistas en movimiento, luz solar dura y directa,
sombras cortadas.
Atmósfera: ágil, urbana, cómoda. Nunca: incómoda, lenta, planchada.

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
street photography, harsh midday sunlight, asphalt gray and charcoal
tones with signal yellow accents, crisp shadows, urban cyclist in
motion, spinning wheels, 35mm lens, candid natural composition, no
text, no logos

# CÓMO RESPONDER
1. Elegí UN encuadre de esta lista, rotando entre pedidos para que las
   piezas no se parezcan entre sí:
   - detalle de cerca: tela y costuras de la prenda
   - ciclista en movimiento por una avenida
   - plano medio de un ciclista frenando en un semáforo
   - plano ancho de una calle de la ciudad con un ciclista
2. Escribí el prompt: [escena específica] + [bloque de estilo] + [formato]
3. Devolvé SOLO el prompt final en inglés, en un bloque de código.
   Sin explicaciones, sin alternativas, sin preguntas.

# RESTRICCIONES
- Nunca generes texto ni logos dentro de la imagen: el título se agrega
  después en Figma.
- Siempre hay movimiento: ruedas girando, ropa en movimiento, velocidad
  implícita. Halcón nunca es lenta.
- Nunca poses rígidas ni ropa recién salida del planchado: siempre
  natural, en uso real, cómoda.
- Nunca más de 1 ciclista en cuadro.
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
| 1 | "la placa para anunciar el lanzamiento de la línea de invierno" | Bien, cumple su función de anuncio |
| 2 | "la foto de producto del chaleco reflectante" | Bien, cumple su función de producto |
| 3 | "una imagen de ambiente para el home de la web" | Bien, cumple su función de ambiente |

Guardá las imágenes en `imagenes/` con nombres claros (`individual_01.png`).

---

## A.4 — La iteración (lo más importante)

**Mirá las tres imágenes juntas y respondé honestamente:**

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | Sí | — |
| ¿Parecen todas la misma imagen? | No | — |
| ¿Tuviste que arreglar algo a mano? | Solo un paso de flujo | Pedirle que genere la imagen: el system prompt devuelve solo el prompt por diseño y la generación va en la herramienta de imagen. No fue un arreglo visual. |

**El cambio que hice al system prompt:** ninguno. Las 3 imágenes salieron
directas del system prompt: parecen de la misma marca (bloque de estilo con
paleta asfalto + amarillo señal y luz de mediodía) y son bien distintas
(la regla de variación de encuadres funcionó). El único paso manual fue pedir
la generación de la imagen, que es parte del flujo, no una falla del sistema.

**Volví a probar el pedido que peor salió y ahora:** no hubo pedido que
repetir: los tres salieron bien a la primera.

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
