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
Café de especialidad cool, con onda, que grita y que llama, pero que tiene sentido. Es "Graphic Maximalism" con rayas, colores y las cosas en BOLD: un café llamativo que se distingue de la arquitectura y el urbanismo que vemos hoy en la calle.

**Tres adjetivos de su atmósfera:**
Gráfica, potente, eléctrica.

**Tres cosas que esta marca NUNCA es:**
Simple, minimalista, clásica (como Blanca Cafe).

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
- Nunca generes texto ni tipografía dentro de la imagen
- Nunca uses luz fría o luz artificial como luz principal
- Nunca muestres más de 6 personas en cuadro
- Si el pedido es ambiguo, elegí vos y avanzá. No preguntes
```

**Chequeo rápido antes de probarlo:**

- [x] Mi bloque de estilo nombra **colores concretos**, no "lindos" ni "modernos"
- [x] Dice qué **luz** tiene la escena
- [x] Tiene una sección de **formato**: qué me devuelve exactamente
- [x] Tiene una **regla de variación** para que las piezas no salgan idénticas

El system prompt final completo está en `asistente_clementina_ogallar.md`.

---

## A.3 — Los tres pedidos

Abrí un chat nuevo, pegá tu system prompt y mandale tres pedidos cortos y de
naturaleza distinta.

| # | Mi pedido | ¿Qué tal salió? |
| --- | --- | --- |
| 1 | Ambiente: imagen del local vista desde la vereda, con gente | Salió con la paleta y las rayas de la marca, pero el negro predominaba de más en los patrones |
| 2 | Detalle: primer plano de manos y objetos sobre la mesada | Bien, plano chico con el detalle correcto; se ve el mostrador y los objetos |
| 3 | Mockup: pieza gráfica de Bruma dentro del local, en la barra | La pieza quedó bien pero el sistema imaginó patrones con mil colores y el espacio con lugares para sentarse adentro, que yo no quería |

Guardá las imágenes en `imagenes/` con nombres claros (`individual_01.png`).

---

## A.4 — La iteración (lo más importante)

**Mirá las tres imágenes juntas y respondé honestamente:**

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | Sí | — |
| ¿Parecen todas la misma imagen? | No | Diferencia de planos y espacios, pero dentro de un mismo sistema |
| ¿Tuviste que arreglar algo a mano? | Sí | Faltó especificar mejor el uso del negro, el espacio (sin lugares para sentarse) y los patrones de rayas y el contraste de colores |

**El cambio que hice al system prompt:**
Sumé tres precisiones al system prompt: el negro como acento secundario (nunca como color dominante), el local como mostrador sin mesas ni sillas ni lugares para sentarse (cliente en la vereda, empleado adentro), y los patrones rayados en dúos de dos colores contrastantes (nunca más de dos colores por patrón). Además sumé a RESTRICCIONES que, ante un pedido ambiguo, el agente prefiera los dúos de dos colores y el negro como acento.

**Volví a probar el pedido que peor salió y ahora:**
Iteré in situ sobre las primeras pruebas (ajustando sobre la imagen, sin tocar el system prompt) y esas correcciones que hice a mano fueron las que volqué al system prompt: el negro pasa a ser secundario, el espacio es solo mostrador sin asientos, y los patrones se mantienen en dúos de dos colores.

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
