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

**Marca elegida:** Propia — Jornal Invictus (@jornal.invictus)

**En dos líneas, qué es:** Bakery en Saavedra especializada en masa madre, de
alta calidad. Ambiente cálido, música relajante pero con energía, cocina
abierta al público para ver lo que se consume.

**Tres adjetivos de su atmósfera:** Modernidad · Sabor · Calidez

**Tres cosas que esta marca NUNCA es:** Colores brillantes · Fast food ·
Imágenes básicas

---

## A.2 — Mi system prompt

Completá las cinco partes. Si una te sale de una línea, probablemente le falte
especificidad.

```
# ROL
Sos el Community Manager de @jornal.invictus (como aparece en Instagram). Tu
única tarea es trasladar los pedidos del usuario en prompts de imágenes para
carrouseles de la marca para el feed y las stories de la red social.
Priorizá originalidad, quitar ruido visual y enfatizar en la calidad.

# EL UNIVERSO DE JORNAL
Es una "bakery" en Saavedra especializada en masa madre con productos de alta
calidad. El ambiente es cálido, música relajante pero sin perder la energía,
cocina abierta al público para visualizar la realidad de lo que se consume,
tonos marrones, tierra y modernidad.
Atmósfera: MODERNIDAD - SABOR - CALIDEZ · Nunca: colores brillantes - fast
food - imágenes básicas

# BLOQUE DE ESTILO (va SIEMPRE, sin modificar)
fotografía editorial de bakery, luz natural cálida de mañana, tonos tierra y
terracota (#6B4226, #E85D3D), acentos negro carbón, sombras suaves,
profundidad de campo baja, texturas visibles (miga, corteza, madera,
cerámica), composición asimétrica en primer plano, sin texto, sin logos,
momento natural y no posado

# CÓMO RESPONDER
1. Elegí UN encuadre de esta lista, rotando entre pedidos para que las piezas
   no se parezcan entre sí:
   - plano detallado del plato, enfoque en el acabado final (textura, salsa, corte)
   - zoom in a la comida con fondo blur (mesa u otros elementos desenfocados)
   - manos bien arregladas interactuando con la mesa o el plato, sin mostrar rostro
   - detalle de personal con delantal negro, en acción (sirviendo, preparando)
   - plano de alguien disfrutando la experiencia, cuerpo parcial, sin rostro, vínculo con la mesa
   - plano de clientes compartiendo un momento en la mesa, cuerpo parcial, sin mostrar rostro, vínculo cercano entre los fotografiados, coherente con la estética cálida y moderna del lugar
2. Escribí el prompt: [escena específica] + [bloque de estilo] + [formato]
3. Devolvé SOLO el prompt final en inglés, en un bloque de código. Sin
   explicaciones, sin alternativas, sin preguntas.

# RESTRICCIONES
- Nunca generes texto ni tipografía dentro de la imagen: eso se agrega
  después en edición.
- Nunca uses luz fría como luz principal: siempre luz cálida.
- Nunca muestres rostros, aunque haya personas en cuadro.
- Nunca uses colores brillantes o saturados: la paleta se mantiene en tonos
  tierra, marrones, naranja oscuro, blanco, arena y crema.
- Si el pedido es ambiguo, elegí vos el encuadre y avanzá. No preguntes.
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
| 1 | "Necesito una foto para el post de esta semana del croissant de pistacho, es nuestro producto estrella del mes." | Me pareció acertado el acercamiento sobre lo que quería lograr con el pedido de la imagen. Coherencia en la paleta de colores, el uso del zoom in y el blur, la estética rústica y moderna del lugar. Enfoque en la calidad y uso de los ingredientes en el producto final. |
| 2 | "Para una story del jueves — algo que muestre el ambiente a la mañana, cuando abrimos y el lugar está tranqui." | Es coherente con el pedido inicial. Me hubiera gustado un enfoque más centrado en una mesa normal con clientes, no en el personal — eso lo aclaré en el pedido 3. Buen uso de la paleta de colores, alimentos y utensilios de cocina. Me gustó mucho. |
| 3 | "Foto para el carrousel de aniversario, mostrando al equipo trabajando en la cocina abierta." | Muy parecida a la opción anterior, por lo cual considero que hay algo en cuanto a lo que debía seguir especificando para lograr distintos enfoques. Insisto en el buen uso de la paleta, foco y detalle visual de la fotografía. |

**Prompts generados por el asistente (en inglés, como pide el FORMATO):**

```
1. Close-up editorial shot of a pistachio croissant, focus on the flaky golden layers, crushed pistachio topping and glossy glaze catching the light, resting on a rustic ceramic plate with crumbs scattered naturally around it, warm natural morning light, earthy and terracotta tones (#6B4226, #E85D3D), charcoal black accents, soft shadows, shallow depth of field, visible textures of crumb, crust, wood and ceramic, asymmetrical foreground composition, no text, no logos, natural unposed moment, square format, 1:1 aspect ratio, optimized for Instagram feed post

2. Well-groomed hands arranging fresh bread and pastries on a wooden counter as the bakery opens in the early morning quiet, soft steam rising from a nearby coffee cup, face not shown, warm natural morning light streaming through the window, earthy and terracotta tones (#6B4226, #E85D3D), charcoal black accents, soft shadows, shallow depth of field, visible textures of crumb, crust, wood and ceramic, asymmetrical foreground composition, no text, no logos, natural unposed moment, vertical format, 9:16 aspect ratio, optimized for Instagram Stories

3. Close-up of a baker in a black apron working at the open kitchen counter, hands shaping dough with flour dust in the air, face not shown, part of the open kitchen visible to guests passing by, warm natural morning light, earthy and terracotta tones (#6B4226, #E85D3D), charcoal black accents, soft shadows, shallow depth of field, visible textures of crumb, crust, wood and ceramic, asymmetrical foreground composition, no text, no logos, natural unposed moment, vertical format, 4:5 aspect ratio, optimized for Instagram carousel post
```

Guardá las imágenes en `imagenes/` con nombres claros (`individual_01.png`).

---

## A.4 — La iteración (lo más importante)

**Mirá las tres imágenes juntas y respondé honestamente:**

| Pregunta | Sí / No | Si la respuesta es mala, qué falta |
| --- | --- | --- |
| ¿Parecen de la misma marca? | Sí, sin dudas | — |
| ¿Parecen todas la misma imagen? | En parte: la 1 se distingue bien, pero la 2 y la 3 se parecen entre sí | Falta una regla de variación más fuerte — el encuadre "personal en acción" y el de "alguien disfrutando la experiencia" terminaron resolviéndose casi igual |
| ¿Tuviste que arreglar algo a mano? | No | — |

**Otra cosa que noté:** hay una contradicción en el propio system prompt —
las restricciones dicen "nunca... logos" y a la vez el encuadre de personal
pide "delantal negro **y logo Jornal**". Eso también puede estar
empujando al asistente a resolver ese encuadre de forma rara.

**El cambio que hice al system prompt:** Saqué "y logo Jornal" del encuadre de
personal (contradecía la restricción de "nunca logos") y agregué una sexta
opción de encuadre —clientes compartiendo un momento en la mesa— para que el
pedido 3 tuviera una alternativa real en vez de resolverse casi igual que el
pedido 2.

**Volví a probar el pedido que peor salió y ahora:** Reintenté el pedido 3
con el system prompt corregido (sin la contradicción del logo y con el
encuadre nuevo de clientes). Me quedé sin tokens en ChatGPT, así que lo
probé en Gemini — el resultado en `imagenes/prueba_gemini/` (ver
`individual_03_retest.jpg` vs `individual_02.jpg`) mejoró: el problema de
que se pareciera al pedido 2 es notablemente menor que en la primera tanda
con ChatGPT. Queda pendiente confirmar si el mismo prompt corregido da un
resultado igual de bueno en ChatGPT cuando tenga tokens de nuevo.

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
