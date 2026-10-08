# Dotonbori + Mei · prompt v1

## El problema de esta escena, y es al revés que en Nikkō

Tu prompt dice: *"Dominant color for this scene: **terracotta and muted vermilion with coral and dusty pink** on the shopfronts, awnings, signs and lanterns"*.

**Dusty pink es el color de la escena.** Es el color de los toldos, de los carteles, de los faroles, de las fachadas de las tiendas. La hoodie de Mei es dusty pink. O sea: en esta página su ancla de color **deja de funcionar** — no porque esté escondido, sino porque desaparece dentro del ambiente.

Eso invierte el problema. En Shibuya y Nikkō el riesgo era que fuera demasiado fácil; acá el riesgo es que **sea imposible de encontrar**:

- El pelo negro largo → sigue funcionando (es el valor oscuro más oscuro del cuadro).
- El pantalón ivory → se funde con la calle y las fachadas claras.
- El tote caramel → se funde con la madera y el terracota.
- La hoodie dusty pink → se funde con los toldos.

**Consecuencia de sistema (y es buena):** si en Shibuya la encontrás por contraste de valor y en Nikkō por fusión de silueta, acá la encontrás por **silueta contra el mostrador oscuro**. Cada página exige una lectura distinta de los mismos tres anclas. Eso es exactamente lo que hace que un atlas tenga lógica de búsqueda en vez de ser ocho fotos parecidas. Anotalo para el documento de proceso.

**Pero si desaparece del todo**, el arreglo es de posición, no de prompt: tiene que quedar en el borde externo del mostrador, con la calle clara de fondo, no adentro de la tienda.

## Decisiones de colocación

- **Perfil comprando en un local.** Cumple tu regla de "intercambio con otra persona" y es la postura que más se mimetiza: si varios clientes están en el mismo mostrador en la misma postura, ella se pierde por **gesto**, no por disfraz.
- **El oclusor propio de esta escena: la cortina de tiras de plástico.** Tu prompt lista `plastic strip curtains` en los shop fronts. Esvertical, corta la silueta en bandas y deja ver la figura fragmentada detrás. Es el mismo principio que el bambú de Arashiyama — que te va a servir para la escena 6.
- **Derecha, filas del medio.** La derecha es la zona pesada y cargada: máxima densidad, que es lo que pedís. El canal izquierdo queda descartado (tu propio prompt lo limita a un quinto de agua sin gente: no hay dónde esconderse).
- **Fuera del eje.** El punto de fuga está arriba al centro, así que "primer plano" es la hilera cortada por el borde inferior: no va ahí.

## Lo que le apliqué de las otras escenas (para que las páginas sean el mismo sistema)

1. **Bloque de ojos de Shibuya v4** (los ojos grandes solo en primer plano). El prompt que me pasaste tenía la versión vieja.
2. **Ropa de la multitud descrita al mismo nivel que Mei** — el aprendizaje de Nikkō v4. Sin esto, ella es la única frase detallada del cuadro.
3. **Números por franja**: 30 figuras cortadas por el borde, 80 en las filas del medio.
4. **Saqué "this is not an edit..."** — el bug de ChatGPT.

---

## EL PROMPT (copiá desde acá)

```
Create a BRAND NEW image from scratch. Horizontal 16:9 landscape format, edge-to-edge composition, high detail, many people each doing something different, small details to discover on a second look, no blur, no motion blur, no glow, no vignette, no border, no frame. No petals in the air, no confetti, nothing floating or falling: all pink blossoms stay attached to the trees. No written words, no legible text, no logos, no watermark, no UI.

Mei appears exactly once in this image: straight black hair falling in one smooth sheet to below her shoulder blades, a softly oversized dusty pink hoodie, ivory wide-leg trousers, a caramel brown tote bag over one shoulder.

a broad and wide food street running alongside a narrow canal on a luminous spring afternoon, seen from high on the upper right side at the moment the light turns: the crowd and the market clutter compete for attention, and no single area focuses solely on the people. High-angle framing from an upper-floor corner on the right-hand side of the street, tilted down and looking diagonally along the street. The street is physically wide — a broad roadway plus a generous sidewalk, wide enough for several rows of pedestrians standing side by side, three or four bodies deep across its width, with dozens of people visible in the same frame — and it fills the foreground and the middle ground, taking the right two thirds to three quarters of the picture. The canal is a narrow bright ribbon squeezed against the far left edge, taking no more than a fifth of the frame, its stone embankment, railing and moored boats partly cropped by the border. Deep vanishing point near the upper center, where street, canal and distant buildings converge, and the lines of the façades, the awnings, the canal edge, the railing and the pedestrian flow all lead toward it. Clearly asymmetric composition: the right side and the center are heavy, darker and extremely loaded — food shops, open fronts, stalls, stacked signage, giant three-dimensional signs and a dense crowd filling the whole width of the street; the left side stays more open and luminous — a slim strip of water, a bridge, sakura and distant architecture. The division is not rigid: crowd and structures overlap around the center, connecting both areas; the image feels very rich but never suffocating thanks to the relative emptiness of water and sky. Every sector is packed with market environment, not just people: food shops with counters, grills and steam, wooden stalls, hanging cloth awnings and split curtains, stacked crates, barrels, baskets, jars and bottles, giant three-dimensional signs of an octopus and a crab projecting over the street, layers of small shop signs and vertical banners, strings of lanterns, menu boards, bottles and modelled food, plastic strip curtains, buckets, mops, crates of fruit, delivery carts, parked bicycles, a scooter, bollards, guardrails, planters with tree trunks, utility poles and cables; on the left, the slim canal with its stone embankment, moored boats with passengers, a low bridge crowded with people, the riverside promenade and distant architecture. Large masses of blooming sakura overhang the street and partially occlude figures, breaking sightlines; awnings, lantern strings, signposts, branches, crates, counters and shadows constantly hide or half-hide bodies, so a figure could easily be camouflaged among the scene. Bottom of the frame: the nearest corner of the broad street seen from above, with large figures cropped by the frame and seen from behind and above — a foreground row of about thirty people cut by the bottom edge, then three parallel rows of bodies behind them, shoulder to shoulder — people queuing at a stall, someone lifting a bowl to their mouth, a vendor sliding food across a counter, a child holding an adult's hand, a person checking the time. Mid-ground: the wide street completely full across its whole width, about eighty figures in five parallel rows walking in both directions, buying, eating, chatting, looking at their phones, holding drinks, carrying bags and backpacks, wearing earphones, vendors cooking over griddles, customers standing at the counters, passengers boarding a boat, people leaning on the canal railing. The crowd wears clothes described with the same precision as the character: washed indigo yukata with pale geometric patterns, oatmeal and sand-coloured coats, sage green and dusty rose cardigans, terracotta and muted vermilion scarves, navy backpacks, canvas tote bags in caramel and cream, straw hats, cameras around necks, plastic bags of fruit, small wheeled suitcases. No figure in this crowd is less specific than another. Background: the narrow canal receding into the distance, a bridge, layered buildings with windows, balconies, hanging plants, laundry and signage, boats, trees and tiny silhouettes fading into clarity. Completely balanced density: heavy visual overload distributed between crowd and market props, naturally integrated, nothing feeling forced. Three or more overlapping layers of depth, no large empty spaces. Small secondary situations to discover on a second look, with many spots where a person stays half-hidden by an object or a shadow. Dominant color for this scene: terracotta and muted vermilion with coral and dusty pink on the shopfronts, awnings, signs and lanterns, warm wood brown and warm stone grey in the architecture, cream, ivory and sand in the street and façades, sakura pink and salmon as spring accents, small bursts of olive and moss green in the vegetation, greyish blue and washed light blue in the sky and the shadows, brownish charcoal in the darkest accents; light is warm, filtered and slightly from behind, so the narrow strip of water reads bright and the crowd keeps soft cool shadows. The canal remains a minor supporting element only: no wide river, no large open water surface, no boats in the foreground.


Density grammar: three or more overlapping layers of depth, no large empty spaces, no sector empty and no sector focused only on the crowd; visual overload distributed equally between people and the environment, integrated naturally; visual hierarchy with no single human protagonist, characters always at a third or fourth reading level; props, structures, vegetation, furniture, branches, posts, awnings and shadows constantly hiding or half-hiding bodies, so a figure can easily be camouflaged among the scene.


Character style: contemporary animated cartoon caricature, like a modern cartoon series — bold simplified shapes, exaggerated rounded proportions, overly large heads, stubby simple limbs, hair as large soft rounded masses. The figures of the foreground have big expressive cartoon eyes with a big dark pupil filling not more than half of the iris, still framed by a ring of visible white sclera, tiny noses and small mouths; expressiveness comes mainly from the eyes, body posture and head direction. The figures of the mid-ground and the background keep simple minimal features — tiny noses, small mouths, small simplified eyes — and read as compact shapes inside the crowd.


Architecture and nature more detailed and precise than the characters, but equally illustrated, in the same crafted language.


Finish: editorial travel-journal illustration, digital 2D, soft cel-shading, warm watercolor-like paper texture, clean thin and irregular linework in the color of the base form (never black, never hard outlines), handcrafted, adult and contemporary.


Muted, warm, nostalgic, strongly desaturated — zero digital glow, no hard contrast, no photorealism. Core tokens always present: sakura pink, dusty pink, salmon and peach as spring accents; cream, ivory, beige and sand; warm wood brown, terracotta, brick red and muted vermilion as small controlled accent bursts on key objects; navy, greyish blue and washed light blue; olive green, moss green and forest green; warm stone grey and brownish charcoal.


Ground and large surfaces: the asphalt of the streets, the road markings, the pavement and every large flat plane stay inside a mid-value range — warm grey and beige, never a black mass. Surfaces keep visible texture, seams, cracks, painted lines and paper grain. No ink stains, no blotches, no dark smudges, no holes of pure black, no oily gloss on the road. Dark values appear only in hair, clothing, backpacks, signage and small shadowed zones, never spread over a large area.


Light is warm, natural and diffuse, with no harsh solar direction and minimal soft diffuse shadows, no hard black shadows. Dark values concentrate in hair, clothing, backpacks and shadowed zones; light values in the sky, the light sources and the most illuminated surfaces. Small contained points of warm yellow light only where the scene has real lamps or lanterns, with no halos. No dominant absolute black or optical white. Even metal, glass, water and machinery keep a slight paper-grain irregularity, and water is pictorial with fragmented brushstrokes and warm reflected highlights.


Mid-century Japanese and Swiss travel posters, Jean-Jacques Sempé, Tove Jansson, Mary Blair, Heinz Edelmann, New Yorker editorial illustration and the colour-line tradition of Winsor McCay, Maira Kalman's travel-journal voice.


MEI — exactly one, in the middle rows of the crowd on the right side of the street, at a shop counter, seen in profile while buying something, half behind the shop's hanging plastic strip curtain, with a string of lanterns crossing above her at head height. Her long black hair falls below her shoulder blades; she wears a dusty pink hoodie, ivory trousers and a caramel tote bag over one shoulder. Several other customers stand at the counters beside her in the same posture, so she is one figure among many, with no more attention on her than on any other, and no quality that sets her apart from the crowd around her.

MEI IS THE SINGLE EXCEPTION to the no-protagonist rule: exactly one figure in this crowd is the character; every other figure is one more person in the multitude.


NOT anime, NOT Ghibli, NOT Studio Ghibli, NOT Miyazaki, NOT manga, NOT Pixar or 3D render, NOT photorealism, NOT pencil animation look, NOT airbrush or 3D plastic shading. Avoid anime eye shapes, soft dreamy anime gradients and hard black outlines.
```