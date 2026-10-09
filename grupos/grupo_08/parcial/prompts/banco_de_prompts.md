# Banco de Prompts — Parcial · Mei

**Proyecto:** Identidad generativa "El diario de Mei" · **Grupo:** 08 · **Herramienta:** ChatGPT / Gemini

Para cada entrada: el prompt, la herramienta, los parámetros y de qué sirvió o qué aprendí.
Entran los prompts que enseñaron algo (funcionaron o fallaron de forma interesante).

---

## Evolución que importa (en orden)

### P1 — Primer intento Shibuya: el chibi que no era Mei

**Prompt original (fallido por estilo):**
```
Generá una ilustración 2D de el cruce peatonal de Shibuya en Tokio durante primavera, con cerezos en flor de sakura de fondo. Es una escena muy densa, estilo "¿dónde está Wally?": hay muchísimas personas cruzando en todas direcciones, cada una haciendo algo distinto... En medio de la multitud, pequeña en escala pero reconocible, está Mei... Estilo: Ilustración digital 2D estilo chibi contemporáneo y character design editorial...
```

- **Qué falló:** salió demasiado Ghibli/anime y "infantilizado". El bloque de estilo pedía "chibi" y "evitá infantil" al mismo tiempo: dos señales contradictorias, y el modelo obedece a la más fuerte ("chibi").
- **Aprendizaje:** los modelos de imagen son malos con las negaciones. No digas "evitá X": decí qué SÍ es. Y "chibi" es una palabra que arrastra un universo entero.

### P2 — El personaje canónico de Mei (la imagen que viaja)

Panel de presentación de cuerpo entero, de frente, fondo limpio de papel crema, estilo gouache adulto, con cámara analógica y diario con postales. **Esta es la imagen de referencia que se adjunta en todas las escenas.**

- **Aprendizaje:** la referencia canónica tiene que ser simple y frontal: es lo que el modelo va a copiar. De fondo limpio, sin decoración.
- **Rasgos no negociables de Mei (van idénticos en todas las escenas):**
  1. anteojos redondos grandes
  2. pelo negro liso hasta los hombros
  3. figura adulta joven, baja (ya no chibi)
  4. cámara analógica
  5. diario de la abuela con postales

### P3 — El hallazgo: la referencia visual como ancla de estilo (LA REGLA DE ORO)

**Prompt que funcionó:**
```
siguiendo esta referencia visual, crea una escena densa que este el cruce de shibuya tokio, que todas las personas que creas tengan el estilo de la imagen que te adjunte
```

- **Qué logró:** la escena coincidió con el estilo de la referencia de Mei.
- **Por qué funciona:** no describir el estilo con palabras — pedir que TODAS las figuras se dibujen en el estilo de la imagen adjunta. El estilo se ancla en un referente visual, no en texto. Es el equivalente a `--sref` de Midjourney, sin Midjourney.
- **Aprendizaje mayor:** cuando un character sheet se adjunta solo para "el personaje", el modelo no tiene de dónde sacar el estilo de una escena poblada. La referencia visual tiene que gobernar TODA la escena, no solo a Mei.

---

## BLOQUE MADRE — versión consolidada del sistema

Estructura de 5 capas (aprendida en clase). Solo la capa 1 cambia por escena;
capas 2-5 se congelan y van idénticas en las 8 páginas.

### CAPA 1 · Escena (¿Cambia? SÍ — una por cada página)
> Lugar, momento, situación. Ejemplo: _The Shibuya pedestrian crossing in Tokyo during spring, cherry blossoms in bloom, dense crowd crossing in all directions._

### CAPA 2 · Técnica (Fija)
> Editorial travel-journal illustration. Digital 2D, soft cel-shading, warm watercolor-like paper texture, clean thin and irregular linework in the color of the base form (never black, never hard outlines), handcrafted finish. Adult, contemporary — not anime, not kawaii, not childish.

### CAPA 3 · Paleta (Fija)
> Muted, warm, nostalgic, desaturated — zero digital glow.
> - **Urban backgrounds:** pearl greys, washed creams, soft sand tones for asphalt, buildings and pavement. Soft, blurred cozy urban atmosphere.
> - **Spring accents:** pale pinks, pastels, warm ivories concentrated in cherry blossoms and small scattered details.
> - **Character clothing (muted & cozy):** washed blues and deep navy for coats and uniforms (Mei's sweater, the crowd's jackets); earth browns, beiges and warm greys for casual streetwear.
> - **Accent color:** small, controlled bursts of intense color — brick red or vermilion on backpacks, sneaker details, key accessories — used to guide the eye without breaking the harmony.
> - **Light and shadow:** no hard contrast, Minimal, soft, diffuse shadows.

### CAPA 4 · Referencias (Fija — se adjunta personaje-mei.png)
> All figures in the scene must be drawn in the style of the attached reference image. Do not invent a new style.
> `[adjuntar: caracterizacion + personaje-mei.png]`

### CAPA 5 · Calidad (Fija)
> High detail, dense Wimmelbilder composition, many people each doing something different, small details to discover on a second look. Mei appears only ONCE, small but recognizable, never giant, never in the foreground. No text.

---

## CAPA 1 · Las 8 escenas de las postales (cambia por página)

Escena confirmada de arranque: Shibuya. El mapa completo del viaje — correcciones aceptadas
(centro de esquí → santuarios de Nikkō; festival de verano → hanami de primavera).

| # | Postal | Escena (CAPA 1) | Qué hace Mei | Reto |
|---|---|---|---|---|
| 1 | La llegada | Aeropuerto de Tokio, sala de arribos | Sale de migraciones, mira el diario | Fácil |
| 2 | La ciudad | Cruce de Shibuya | Fotografía la multitud | Medio |
| 3 | El templo | Senso-ji Asakusa, calle de tiendas Nakamise | Entre visitantes, diario abierto | Medio |
| 4 | El viaje | Andén del Shinkansen, costa primaveral | Espera el tren, mira el celular | Fácil-medio |
| 5 | La montaña | Santuarios de Nikkō en primavera | Sube escaleras del santuario | Difícil |
| 6 | El bosque | Arashiyama, Kioto — bosque de bambú | Chiquita entre los bambúes | Difícil |
| 7 | El mercado | Dotonbori, Osaka — calle de comidas | Compra en un puesto | Medio-difícil |
| 8 | La fiesta | Hanami junto al río, bajo los cerezos | Sentada en la manta con su diario | Fácil (cierre) |

### GEN 1 · Aeropuerto Internacional de Tokio — sala de arribos

```
The international arrivals hall of Tokyo's airport during spring. Dense
Wimmelbilder scene: travelers arriving and greeting family, people waiting
behind the barrier with signs, luggage carts, a coffee kiosk, sakura sold in
small plastic cups by a flower stand, late afternoon light through the huge
windows.

Mei comes out of the immigration area looking at her grandmother's travel
diary, small in the crowd, recognizable by her round glasses and black bob.

[CAPAS 2 a 5 del bloque madre]
```

### GEN 2 · Cruce de Shibuya — ok (prueba original)

### GEN 3 · Templo Senso-ji, Asakusa — calle Nakamise

```
Nakamise, the shopping street leading to Senso-ji temple in Asakusa, Tokyo,
during spring. Dense Wimmelbilder scene: souvenir stalls with paper lanterns
and teriyaki snacks, tourists and locals browsing, monks passing through,
sakura branches visible over the temple roof in the background.

Mei is among the visitors, holding her open diary while she looks at a stall
with vintage postcards. Small, recognizable by her round glasses, black bob
and red backpack.

[CAPAS 2 a 5 del bloque madre]
```

### GEN 4 · Andén del Shinkansen — costa primaveral

```
Platform of a Shinkansen bullet train station in Japan during spring, rural
coastline and hills with cherry blossoms visible beyond the tracks. Dense
Wimmelbilder scene: commuters and travelers boarding, the white train
waiting, families with children, station attendants, vending machines, a
small bento stand.

Mei waits near the edge of the platform looking at her phone, small among
the crowd, recognizable by her round glasses, black bob and red backpack.

[CAPAS 2 a 5 del bloque madre]
```

### GEN 5 · Santuarios de Nikkō en primavera

```
The decorated shrine streets of Nikkō in spring, stone steps climbing toward
a temple surrounded by cedar trees and cherry blossoms. Dense Wimmelbilder
scene: pilgrims and tourists in colorful yukata, lanterns, souvenir stalls,
people taking photos, incense smoke, a stone torii gate.

Mei climbs the wide stone steps of the shrine, small and hard to find among
people and vegetation, recognizable by her round glasses, black bob and red
backpack.

[CAPAS 2 a 5 del bloque madre]
```

### GEN 6 · Bosque de bambú de Arashiyama, Kioto

```
Arashiyama Bamboo Grove in Kyoto during spring. Dense Wimmelbilder scene:
hundreds of tall green bamboo stalks, shafts of soft light filtering down,
many visitors walking the narrow path, some with traditional kimono, others
with tourists' umbrellas and cameras.

Mei is very small among the bamboo and the visitors, standing still looking
up at the canopy, recognizable by her round glasses, black bob and red
backpack.

[CAPAS 2 a 5 del bloque madre]
```

### GEN 7 · Dotonbori, Osaka — calle de comidas

```
Dotonbori street and canal in Osaka during spring, daytime the colorful food
street. Dense Wimmelbilder scene: giant three-dimensional signs (a crab, an
octopus), food stalls selling takoyaki and okonomiyaki, crowds eating while
walking, small boats in the canal, paper lanterns hanging, sakura in the
distance.

Mei buys something at a small food stall, small among the crowd, recognizable
by her round glasses, black bob and red backpack.

[CAPAS 2 a 5 del bloque madre]
```

### GEN 8 · Hanami — picnic bajo los cerezos junto al río

```
A spring hanami picnic along a river under full cherry blossom trees. Dense
Wimmelbilder scene: families and friends sitting on blue blankets, food
baskets, paper lanterns, children running, petals falling through the air,
a band playing far away under the trees.

Mei is sitting on a blanket by the river, writing in her grandmother's
diary, small but recognizable by her round glasses, black bob and red
backpack. Closing scene of the journey.

[CAPAS 2 a 5 del bloque madre]
```

---

## Pendiente (próxima prueba)

### P4 — Insertar a Mei en la escena densa

Mismo prompt ganador (P3) + instrucción de que Mei aparezca UNA sola vez, integrada, haciendo algo (en Shibuya: fotografiando la multitud).

- Lo que hay que verificar: que se distinga, que aparezca una sola vez, y que el estilo de la multitud coincida con la Mei canónica.
- Si no se sostiene → opción híbrida: escena generada sin Mei + Mei compuesta después (consigna lo permite explícitamente).

---

## Metadatos del sistema (para la skill)

- **Herramienta:** ChatGPT y Gemini (pago). Sin Midjourney.
- **Estación:** primavera / sakura.
- **Estilo:** gouache/acuarela de cuaderno de viaje, tinta + mancha, registro adulto.
- **Paleta:** cálida, nostálgica, desaturada, estilo acuarela/gouache sobre papel — autoría del grupo.
- **Modelo:** a confirmar cuál se usó en cada imagen.