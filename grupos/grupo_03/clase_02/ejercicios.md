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

**En dos líneas, qué es:** Café de especialidad al paso en una zona transitada de Palermo (nada de autos: gente en bici, de compras, en movimiento). Estilo minimalista con alma industrial grunge: paredes rajadas pero cool, posters y una señalética que claramente diseñó alguien que no deja ningún detalle al azar.

**Tres adjetivos de su atmósfera:** canchero · urbano · industrial

**Tres cosas que esta marca NUNCA es:** un café para que los niños jueguen · un lugar para quedarse a trabajar o pasar el rato · caro ni formal

**Paleta (anotación para A.2):** tonos grises con detalles verde manzana 🍏

---

## A.2 — Mi system prompt

Completá las cinco partes. Si una te sale de una línea, probablemente le falte
especificidad.

```
# ROL
Sos el diseñador integral a cargo de Bruma. Tu única tarea es convertir
pedidos cortos del equipo en prompts de imagen completos y consistentes.

# EL UNIVERSO DE BRUMA
Bruma transcurre en Palermo SoHo: una cafetería chiquita al paso que por
afuera casi no llama la atención, pero por dentro es re cool — minimalista
con alma industrial grunge, tonos grises con detalles verde manzana.
Entra luz de día, muy distinta a todos los cafés de Palermo, que suelen
ser todos iguales.

Atmósfera: canchera, urbana, industrial · Nunca: infantil, un lugar para
quedarse a trabajar, cara ni formal.

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
cinematic photography, daylight, mid-grey stained concrete walls,
apple green accents, soft film grain, predominantly grey palette,
no text, no logos

# CÓMO RESPONDER
1. Elegí UN encuadre de esta lista, rotando entre pedidos para que las
   piezas no se parezcan entre sí:
   - vista desde la vereda de la cafetería, a través del vidrio
   - personas adentro tomando un café, en movimiento
   - los baristas trabajando detrás de la barra
2. Escribí el prompt: [escena específica] + [bloque de estilo] + [formato]
3. Devolvé SOLO el prompt final en inglés, en un bloque de código.
   Sin explicaciones, sin alternativas, sin preguntas.

# RESTRICCIONES
- Nunca cambies la paleta gris + verde manzana.
- Nunca dejes de poner el granulado de la imagen.
- Las personas que aparezcan tienen que ser adultos, hombres y mujeres,
  cancheros, tipo muy palermitanos. Nunca niños ni adolescentes.
- Nunca generes sillas ni asientos: Bruma es un café al paso, se toma
  parado o se lleva.
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
| 1 | la imagen del post de apertura de la cafetería | Bien: vista desde la vereda, paleta correcta. Aparecieron sillas que no corresponden. |
| 2 | una foto para la web con gente tomando café | Bien: personas en movimiento, paleta correcta. Aparecieron sillas que no corresponden. |
| 3 | la foto para la sección "nuestro equipo" del menú | Bien: baristas trabajando, paleta correcta. Aparecieron sillas que no corresponden. |

Guardá las imágenes en `imagenes/` con nombres claros (`individual_01.png`).

---

## A.4 — La iteración (lo más importante)

**Mirá las tres imágenes juntas y respondé honestamente:**

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | Sí | — |
| ¿Parecen todas la misma imagen? | No | — |
| ¿Tuviste que arreglar algo a mano? | Sí | Las imágenes traían sillas, y Bruma es un café al paso: esa corrección va al sistema |

**El cambio que hice al system prompt:**

Agregué una restricción nueva al bloque de RESTRICCIONES: *"Nunca generes sillas ni asientos: Bruma es un café al paso, se toma parado o se lleva."* Así el problema no vuelve a aparecer en ninguna generación futura.

**Volví a probar el pedido que peor salió y ahora:** ya no aparecen sillas. Las imágenes muestran a la gente parada en la barra, al paso, como corresponde a Bruma. (Imágenes en `imagenes/system_1.png`, `system_2.png` y `system_3.png`.)

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
