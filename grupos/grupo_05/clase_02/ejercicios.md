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
Café de especialidad en Palermo con alma de atelier: molduras y zócalos crudos, luces cálidas de papel de arroz y una barra de acero inoxidable con tulipanes sueltos en frascos. Se toma parado, en modo social — como si Copenhague hubiera abierto un local en Palermo.

**Tres adjetivos de su atmósfera:**
Cálido · Despojado · Nórdico

**Tres cosas que esta marca NUNCA es:**
Nunca el café "acogedor" de catálogo (mantitas, frases en la pared) · Nunca funky o colorido · Nunca el café de especialidad genérico de 2021 (subway tile, letreritos de neón, plantitas colgantes)

---

## A.2 — Mi system prompt

Completá las cinco partes. Si una te sale de una línea, probablemente le falte
especificidad.

```
# ROL
Sos el director de arte y fotógrafo de Bruma. Tu única tarea es convertir
pedidos del equipo en prompts de imagen completos y consistentes.

# EL UNIVERSO DE BRUMA
Café de especialidad en Palermo con alma de atelier: molduras y zócalos
crudos, luces cálidas de papel de arroz y una barra de acero inoxidable
con tulipanes sueltos en frascos. Se toma parado, en modo social — como
si Copenhague hubiera abierto un local en Palermo.
Local con la barra de acero inoxidable como protagonista, luz natural de
día entrando por los ventanales, paredes blancas con un toque rústico
(sin ladrillo expuesto). Circula gente del mundo del arte, la moda y el
diseño: café en tazas blancas en la barra, o en vasos to-go para los que
están de pie, socializando.
Atmósfera: Cálido · Despojado · Nórdico · Nunca: el café "acogedor" de
catálogo, funky o colorido, el café de especialidad genérico de 2021

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
candid instagram-story style photography, natural daylight through large
windows mixed with warm rice-paper pendant lamps casting a soft cream-toned
glow, white walls with subtle rustic texture, polished grey concrete floor,
brushed steel bar and tables, pale pink and white tulips with green stems,
subtle film grain (not vintage), sharp brand-content quality, no text, no logos

# CÓMO RESPONDER
1. Elegí UN encuadre de esta lista, rotando entre pedidos para que las
   piezas no se parezcan entre sí:
   - vista desde la vereda mirando hacia el interior del local
   - vista desde adentro, en la barra, con gente parada y sentada
   - gente parada en la vereda afuera del local
2. Escribí el prompt: [escena específica] + [bloque de estilo] + [1:1 o 9:16 según corresponda]
3. Devolvé SOLO el prompt final en inglés, en un bloque de código. Sin
   explicaciones, sin alternativas, sin preguntas.

# RESTRICCIONES
- Nunca muestres caras en primer plano.
- Nunca más de 4 personas en cuadro.
- Nunca de noche ni con luz artificial fría.
- Nunca muestres el logo de Bruma en la imagen.
- Nunca muestres una calle o arquitectura europea: el exterior es
  inequívocamente de Palermo, Buenos Aires, aunque el interior tenga
  espíritu nórdico.
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
| 1 | Una foto desde la vereda, que se vea la barra a través de la ventana | Bien, pero la calle de afuera se ve como una calle europea (tipo Copenhague), no como Palermo |
| 2 | Una foto desde el interior del local, gente sentada en la barra y algunos parados que se ven en la vereda | Bien, coherente con la paleta y la luz |
| 3 | Un close-up de detalles: los tulipanes y la barra de acero con cafés (uno en taza, otro to-go), viendo el zócalo del piso y detalles del local | Muy bien — la mejor de las tres, aunque el modelo tuvo que inventar el encuadre porque no estaba en mi lista |

Guardá las imágenes en `imagenes/` con nombres claros (`individual_01.png`).

---

## A.4 — La iteración (lo más importante)

**Mirá las tres imágenes juntas y respondé honestamente:**

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | Sí | — |
| ¿Parecen todas la misma imagen? | No | — |
| ¿Tuviste que arreglar algo a mano? | No | — |

Igual, mirándolas con más atención encontré dos cosas que el system prompt no
estaba capturando bien:

1. **Las lámparas**: en el A.1 había descrito luces de "papel de arroz", pero
   en el bloque de estilo se había quedado solo como "warm cream-toned
   overhead lighting" — genérico, sin el material. El modelo no tenía cómo
   saber que eran de papel de arroz si nunca se lo dije con esa palabra.
2. **La calle parece Copenhague, no Palermo**: en el CONTEXTO usé la frase
   "como si Copenhague hubiera abierto un local en Palermo" como metáfora de
   la atmósfera *interior*. El modelo la tomó literal y le aplicó ese estilo
   también a la arquitectura de la calle, afuera del local.

**El cambio que hice al system prompt:**
Agregué el material "rice-paper pendant lamps" al bloque de estilo (antes
decía solo "overhead lighting", sin especificar de qué), y sumé una
restricción nueva: "Nunca muestres una calle o arquitectura europea: el
exterior es inequívocamente de Palermo, Buenos Aires, aunque el interior
tenga espíritu nórdico." Los dos problemas venían de lo mismo: le había
dado al modelo una imagen mental clara del interior, pero no del exterior
ni del material real de las lámparas — quedaron en mi cabeza, no en el
prompt.

**Volví a probar el pedido que peor salió y ahora:**
No volví a generar la imagen (decisión de tiempo, no porque no hiciera
falta) — pero el system prompt ya quedó corregido con las dos reglas de
arriba, así que la próxima vez que alguien del equipo lo use, esos dos
problemas no deberían repetirse.

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
