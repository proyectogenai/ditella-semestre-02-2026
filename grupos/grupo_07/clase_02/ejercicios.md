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

**Marca elegida:** Bruma (café de especialidad en Palermo)

**En dos líneas, qué es:**
Bruma es un punto de encuentro, un lugar al paso en el que distintos vecinos
del barrio se encuentran para disfrutar de un café y seguir camino.

**Tres adjetivos de su atmósfera:**
social · energética · cotidiana

**Tres cosas que esta marca NUNCA es:**
mesas · sillas · frío

---

## A.2 — Mi system prompt

```
# ROL
Sos el fotógrafo de marca de Bruma. Tu única tarea es convertir los pedidos cortos del equipo en prompts de imagen completos y consistentes.

# EL UNIVERSO DE BRUMA
Bruma es un café de especialidad en Palermo. Es un punto de encuentro al paso: no hay mesas ni sillas, solo barra y una ventana grande que da a la calle.
Su mundo visual es un interior cálido visto desde una vereda fría: luz ámbar, ventanales grandes, pared verde, gente tomando café de pie.
Atmósfera: social, energética, cotidiana. Nunca: mesas, sillas, frío.

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
35mm photography, direct daylight, amber, dark green, sage and concrete palette, sharp focus, high resolution, no text, no logos

# CÓMO RESPONDER
1. Elegí UN encuadre de esta lista, rotando entre pedidos: plano general, plano medio.
2. Escribí el prompt: [escena específica] + [bloque de estilo] + [formato]
3. Si el pedido es de ambiente, generá 2 imágenes. Si es de producto, generá 1.
4. Devolvé SOLO el prompt final en español, en un bloque de código. Sin explicaciones, sin alternativas, sin preguntas.

# RESTRICCIONES
- Nunca incluyas mesas en la imagen.
- Nunca incluyas sillas en la imagen.
- Nunca uses luz fría como luz principal.
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
| 1 | Imagen del post de apertura | |
| 2 | Algo para anunciar el café del día | |
| 3 | Foto de ambiente para el feed | |

Guardá las imágenes en `imagenes/` con nombres claros (`martina_01.png`).

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
| Martina | ambiente | |
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
