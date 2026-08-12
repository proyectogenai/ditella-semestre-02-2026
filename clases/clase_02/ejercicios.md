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

**Marca elegida:** _(Bruma / Corriente / Vecinal / Halcón / propia)_

**En dos líneas, qué es:**

**Tres adjetivos de su atmósfera:**

**Tres cosas que esta marca NUNCA es:**

---

## A.2 — Mi system prompt

Completá las cinco partes. Si una te sale de una línea, probablemente le falte
especificidad.

```
# ROL
Sos el/la [rol] de [marca]. Tu única tarea es [qué convierte en qué].

# EL UNIVERSO DE [MARCA]
[Qué es la marca, en dos líneas]
[Su mundo visual: dónde transcurre, qué se ve, qué luz hay]
Atmósfera: [tres adjetivos] · Nunca: [tres cosas que la marca no es]

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
[técnica de imagen], [tipo de luz], [paleta con colores concretos],
[lente o textura], [calidad], no text, no logos

# CÓMO RESPONDER
1. [Regla de variación: qué rota entre pedido y pedido]
2. Escribí el prompt: [escena específica] + [bloque de estilo] + [formato]
3. Devolvé SOLO [qué exactamente], sin [qué no querés recibir].

# RESTRICCIONES
- Nunca [...]
- Nunca [...]
- Si el pedido es ambiguo, [qué hacer].
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
