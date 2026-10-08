# Nakamise + Mei · prompt v1

## Por qué te la viene haciendo de espaldas (y por qué no es culpa del modelo)

Este prompt **describe su propia multitud de espaldas**. En la banda del primer plano dice, textual:

> *"with large figures cropped by the frame and **seen from behind and above**"*

y el resto de la escena son personas caminando, comprando y subiendo la calle, todas en esa misma lógica. Para el modelo, **la figura canónica de esta calle es una espalda.** Una instrucción frontal mía peleando contra ese prior de escena no lo gana: hay que **meter figuras frontales en la descripción de la multitud** para que "de frente" sea una opción disponible dentro del cuadro.

Por eso el arreglo no es solo cambiar su línea. Es también:
- filas del medio con gente **mirando hacia la cámara**
- una lista de actividades de actividad que laamsungde frente: alguien mostrando una máscara, un vendedor llamando, gente posando para fotos
- su bloque dice *"the front of her dusty pink hoodie facing the camera"* y **la correa del tote cruzando el pecho** — una correa al hombro solo se dibuja si el modelo tiene el torso de frente. Es la señal más fiable para forzar la pose.

## El bloque viejo, otra vez

Este prompt también traía el bloque **"Recurring character"** con la Mei v1 (pelo castaño, blusa negra, jeans) y sus reglas de *hacela fácil de encontrar*: *"one of the most legible figures"*, *"calm uncluttered area directly behind her"*, *"higher contrast than the surrounding crowd"*, *"never in the middle of a dense crowd mass"*, *"the viewer locates her without searching"*. Borrado. **Segundo prompt seguido con el mismo bloque contaminado** — eso ya no es una escena, es el archivo de skill. Revisalo.

## Colocación: por actividad, no por topónimo

Sigo con lo del bambú: **nombrarle un lugar es ponerle un spotlight.** La ubico por lo que *está haciendo* y por su fila, y la saco del eje con una sola clausula relativa: *"off the central line, in the outer rows"*. El eje es el templo, y el templo es el punto de fuga: cerca del centro es cerca del atractor.

La oclusión es la de esta página: un rack de máscaras y una pila de cajas le cortan **de la cadera para abajo**, así que la cara y el pelo quedan limpios y el cuerpo se rompe. Es el mismo criterio que en el aeropuerto: se tapa el cuerpo, no la cara.

## Ojos

Bloque viejo (ojos grandes en todas las figuras) → congelado de v4, **con excepción única para ella**, que va de frente y necesita la cara dibujada. Pero acotada: *"while the other faces in her row keep the simple minimal features"*, porque si su cara es la única detallada del cuadro eso es un spotlight.

## Otros arreglos

| | |
|---|---|
| Bloque "Recurring character" | Borrado |
| Multitud | **Sin descripción de ropa.** Agregada, con la paleta que excluye sus tres anclas |
| Densidad | Sin números. Puse 25 en primer plano y ~100 en cinco filas en el medio |
| Primera línea | Saqué la cláusula "this is not an edit" |
| Oclusión | Rack de máscaras + cajas, de la cadera para abajo |

---

## EL PROMPT (copiá desde acá)

```
Create a BRAND NEW image from scratch. Horizontal 16:9 landscape format, edge-to-edge composition, high detail, many people each doing something different, small details to discover on a second look, no blur, no motion blur, no glow, no vignette, no border, no frame. No petals in the air, no confetti, nothing floating or falling: all pink blossoms stay attached to the trees. No written words, no legible text, no logos, no watermark, no UI.

Mei appears exactly once in this image: straight black hair falling in one smooth sheet to below her shoulder blades, a softly oversized dusty pink hoodie, ivory wide-leg trousers, a caramel brown tote bag over one shoulder.


the traditional shopping street of Nakamise, crowded and bidirectional, on a luminous spring afternoon, seen from high above on an upper balcony at the moment the light turns: the human crowd and the commercial clutter compete for attention, and no single area focuses solely on the people. High-angle framing from an upper-floor balcony looking down along the street, tilted down around 35 degrees so the whole pavement and the crowds spread along it are visible at once, while the vertical central axis of the composition is preserved: the axis runs through the path, the crowd and finally the monumental architecture at the back. The commercial stalls on the left and right generate two large convergent diagonals; between them a central strip of circulation physically wide — broad enough for several rows of shoppers standing side by side, three or four bodies deep across its width — narrows progressively toward a great temple placed exactly on the axis, which works simultaneously as vanishing point and narrative destination. Two rows of traditional stalls, roofs, lanterns, counters and pavement lines all converge toward that same region, producing very strong depth even though the street is almost fully occupied by people. Relatively symmetric in its general structure but not in its details: each stall differs in products, goods and decoration. Every sector is packed with commercial environment, not just people: two continuous rows of wooden stalls with fabric awnings and tiled or cloth roofs, counters and shelves, hanging rows of red paper lanterns, strings of lanterns crossing the street, carved and painted signs, banners and noren curtains, masks, framed pictures, postcards, fans, umbrellas, kites, ceramics, tea tins, wooden figures, folding screens, textiles, bags and belts, food stalls with steam and grills, baskets of fruit, crates, barrels, display racks, mannequins and kimono, price tags, small awnings and side stalls, bollards, stone markers, stone paving, drain channels, utility poles and cables, potted plants, and abundant blooming sakura at both ends and along the sides. Large masses of blooming sakura overhang the street near the temple and partially occlude figures, breaking sightlines; stall awnings, lantern rows, columns, stacked goods, signboards and branches constantly hide or half-hide bodies, so a figure could easily be camouflaged among the scene. Bottom of the frame: the nearest stretch of the street seen from above, with large figures cropped by the frame and seen from behind and above — a foreground row of about twenty-five shoppers cut by the bottom edge, then three parallel rows of bodies behind them — people bargaining at a stall, someone lifting an object to look at it, a vendor handing something over, a child holding an adult's hand, a person checking the time, someone holding a mask up to their face. Mid-ground: the wide street completely full across its whole width, about a hundred shoppers and visitors in five parallel rows moving in both directions, browsing stalls, buying souvenirs, talking, looking at their phones, holding drinks, carrying bags and backpacks, wearing earphones, posing for photographs in kimono rented at the stalls, vendors calling attention to their goods, people examining masks and framed pictures. Several figures in the middle rows have turned toward the camera while they browse, so a number of faces are seen frontally across the width of the street: a shopper lifting a mask to her face, a vendor calling out with both hands raised, two friends posing for a photograph, a traveller stepping out of a stall doorway. The crowd wears clothes described with the same precision as the character: washed indigo and deep navy coats and cardigans, oatmeal, sand and warm grey jackets, charcoal trousers and indigo leggings, olive and moss green scarves, greyish blue shirts, brown leather shoes, canvas tote bags in olive and faded indigo, navy backpacks, straw hats, cameras around necks, plastic bags of fruit, small wheeled suitcases. No figure in this crowd is less specific than another. Background: a progressively smaller and simpler crowd filling the narrowing street, then the temple rising above the crowd with abundant sakura forming a pink canopy around the monumental architecture and its great gate, the bold reds of the temple structure and the large lanterns reading as measured warm accents. Wimmelbilder logic at two simultaneous scales: human density — people, groups, poses, accessories — and commercial density — masks, lanterns, framed pictures, postcards, objects, decorations — so the image rewards a second and third reading to discover small details. The visual hierarchy has no evident human protagonist: first the central temple and the perspective axis, then the sakura and the large red lanterns, then the human mass, then the individual stalls and products, then the micro-details, so the recurring character sits at a third or fourth reading level and can be integrated as a small figure without breaking the composition. Completely balanced density: heavy visual overload distributed between crowd and commercial props, naturally integrated, nothing feeling forced. Three or more overlapping layers of depth, no large empty spaces. Small secondary situations to discover on a second look, with many spots where a person stays half-hidden by an object or a shadow. Dominant color for this scene: muted vermilion, brick red and terracotta in the temple structure, the stall fronts, the signs and the lanterns, dusty pink, sakura pink, salmon and coral in the blossoms and the fabrics, wood brown and chocolate brown in the timber of the stalls, beige, cream, ivory and warm grey in the stone paving and the plaster walls, navy, greyish blue and brownish charcoal in the clothing and in the shadowed zones under the eaves, small sectors of pale blue sky and olive green above; light is warm and diffuse from above and from behind, illuminating the sakura, the architecture and part of the corridor, with small contained warm areas on the stalls from lamps and lanterns and no halos, while the shaded zones stay soft and keep their internal detail.


MEI — exactly one, one figure among the shoppers who have stopped in the outer rows of the middle distance, off the central line, seen from the front and from slightly above, her face and the front of her body fully visible, the front of her dusty pink hoodie facing the camera and the strap of her tote crossing her chest. A display rack of masks and a stack of boxes cut across her from the hips down, so her body is broken while her head, her hair and her face stay clear. Several other shoppers around her are also turned toward the camera, so her face is one face among many. Her long black hair falls below her shoulder blades; she wears a dusty pink hoodie, ivory trousers and a caramel tote bag over one shoulder. She is one figure among many, with no more attention on her than on any other, and no quality that sets her apart from the crowd around her. Her three anchors appear on one figure only: she is the only person in a dusty pink hoodie, the only person in ivory wide-leg trousers and the only person carrying a caramel brown tote bag, and every other figure wears a different combination of clothes.


MEI IS THE SINGLE EXCEPTION to the no-protagonist rule: exactly one figure in this crowd is the character; every other figure is one more person in the multitude.


Density grammar: three or more overlapping layers of depth, no large empty spaces, no sector empty and no sector focused only on the crowd; visual overload distributed equally between people and the environment, integrated naturally; visual hierarchy with no single human protagonist, characters always at a third or fourth reading level; props, structures, vegetation, furniture, branches, posts, awnings and shadows constantly hiding or half-hiding bodies, so a figure can easily be camouflaged among the scene.


Character style: contemporary animated cartoon caricature, like a modern cartoon series — bold simplified shapes, exaggerated rounded proportions, overly large heads, stubby simple limbs, hair as large soft rounded masses. The figures of the foreground have big expressive cartoon eyes with a big dark pupil filling not more than half of the iris, still framed by a ring of visible white sclera, tiny noses and small mouths; expressiveness comes mainly from the eyes, body posture and head direction. The figures of the mid-ground and the background keep simple minimal features — tiny noses, small mouths, small simplified eyes — and read as compact shapes inside the crowd. Mei is the single exception to that second rule: her face is turned toward the camera and is drawn with the same big eyes and the same small mouth as the foreground figures, only reduced in size, while the other faces in her row keep the simple minimal features.


Architecture and nature more detailed and precise than the characters, but equally illustrated, in the same crafted language.


Finish: editorial travel-journal illustration, digital 2D, soft cel-shading, warm watercolor-like paper texture, clean thin and irregular linework in the color of the base form (never black, never hard outlines), handcrafted, adult and contemporary.


Muted, warm, nostalgic, strongly desaturated — zero digital glow, no hard contrast, no photorealism. Core tokens always present: sakura pink, dusty pink, salmon and peach as spring accents; cream, ivory, beige and sand; warm wood brown, terracotta, brick red and muted vermilion as small controlled accent bursts on key objects; navy, greyish blue and washed light blue; olive green, moss green and forest green; warm stone grey and brownish charcoal.


Ground and large surfaces: the asphalt of the streets, the road markings, the pavement and every large flat plane stay inside a mid-value range — warm grey and beige, never a black mass. Surfaces keep visible texture, seams, cracks, painted lines and paper grain. No ink stains, no blotches, no dark smudges, no holes of pure black, no oily gloss on the road. Dark values appear only in hair, clothing, backpacks, signage and small shadowed zones, never spread over a large area.


Light is warm, natural and diffuse, with no harsh solar direction and minimal soft diffuse shadows, no hard black shadows. Dark values concentrate in hair, clothing, backpacks and shadowed zones; light values in the sky, the light sources and the most illuminated surfaces. Small contained points of warm yellow light only where the scene has real lamps or lanterns, with no halos. No dominant absolute black or optical white. Even metal, glass, water and machinery keep a slight paper-grain irregularity, and water is pictorial with fragmented brushstrokes and warm reflected highlights.


Mid-century Japanese and Swiss travel posters, Jean-Jacques Sempé, Tove Jansson, Mary Blair, Heinz Edelmann, New Yorker editorial illustration and the colour-line tradition of Winsor McCay, Maira Kalman's travel-journal voice.


NOT anime, NOT Ghibli, NOT Studio Ghibli, NOT Miyazaki, NOT manga, NOT Pixar or 3D render, NOT photorealism, NOT pencil animation look, NOT airbrush or 3D plastic shading. Avoid anime eye shapes, soft dreamy anime gradients and hard black outlines.
```

## Para saber si esta vez salió de frente

No lo mires vos — mirala **sin saber dónde está**, y si la primera cara que ves es la de ella, falló. La prueba específica es esta: **¿la correa de la bolsa se dibuja cruzada en el pecho?** Si la bolsa cuelga del hombro pero la correa no cruza el torso, el modelo la puso de espaldas aunque le hayas dicho de frente. Es la señal más rápida para diagnosticarlo sin generar otra vez.

**Y si vuelve a salir de espaldas, no es el prompt:** es que el prior de escena sigue siendo "figuras vistas desde el balcón, de espaldas". En ese caso la salida es componer — y novreintear el prompt.