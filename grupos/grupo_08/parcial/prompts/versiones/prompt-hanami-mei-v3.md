# Hanami + Mei · prompt v3 — rio de esquina, y cara a nivel de ojo

## Los tres pedidos

| Pedido | Como quedo |
|---|---|
| parque mas grande, gran parte de la imagen | **parque = todo el foreground, todo el izquierdo, casi todo el derecho** |
| agua solo en la esquina superior derecha | **un cuñito de rio, no mas** — explicito que no hay agua en otro lado |
| integrar a Mei | **medio fondo, escala de sus vecinos, cara visible** |

## Sobre la apertura: la deje en ingles

Escribiste la primera linea en español. La deje en ingles, y es una decision no un descuido: **los cinco prompts que funcionan abren con `Create a BRAND NEW image from scratch.`** Es la unica linea congelada del atlas, la que mata el modo edicion y el modo imagen de referencia, y cambiarle el idioma ahora seria reescribir la unica cosa que se sabe que sirve. Tu clausula de *"no existe imagen previa ni referencia"** va justo al lado, en ingles, porque aporta.

## Sobre la camara: a nivel de ojo no hay pelea

Las escenas anteriores peleaban entre `angulo alto` y `cara de frente` — una mira abajo, la otra mira arriba. **Aca no hay conflicto.** La camara esta a nivel de ojo adulto, ligeramente elevada: una cara que se gira tres cuartos se ve entera de forma natural, sin estirar el cuello, sin apoyarla en vapor ni en nada.

Asi que la cara de Mei es gratis aca. Es la primera escena del conjunto donde puedo dar los dos.

**Y no le hace falta fondo claro detras.** El vapor de Dotonbori existia porque a 40 grados y en el fondo la cara competia con todo. A nivel de ojo, con una figura a escala de sus vecinos, la cara ya se lee sola. Lo que sigue controlando la dificultad no es la cara: son los ocluyentes de abajo del cuello y el hecho de que esta entre otras caras tambien giradas.

## Una regla que vuelve a aparecer

**Nunca decir "one of the shoppers" / "one of the group".** Eso le asigna categoria, y la categoria tiene reglas — en Nakamise, ropa. Le deje al inicio del bloque de ella la misma negacion que uso Dotonbori: **no pertenece al grupo, su ropa no es parte del guardarropa del grupo.**

---

## EL PROMPT (copiar solo este bloque)

```
Create a BRAND NEW image from scratch. There is no previous image and no reference image. Horizontal 16:9 landscape format, edge-to-edge composition, no blur, no motion blur, no glow, no vignette, no border, no frame. No petals in the air, no confetti, nothing floating or falling: all pink blossoms stay attached to the trees. No written words, no legible text, no logos, no watermark, no UI.

Mei appears exactly once in this image: straight black hair falling in one smooth sheet to below her shoulder blades, a softly oversized dusty pink hoodie, ivory wide-leg trousers, a caramel brown tote bag over one shoulder.

SCENE: a hanami picnic afternoon on the grassy bank of a river, dense in Wimmelbilder fashion but relaxed and open — the density comes from many small static groups and picnic objects rather than moving bodies. The camera looks diagonally along the shore from about adult eye level, slightly elevated. The park is the subject of the picture and takes almost all of it: the whole foreground, the entire left side, the centre and nearly all of the right side are park — grass, trees, blankets and picnickers — filling the frame edge to edge. The water is only a small supporting element: a short stretch of river visible in the upper right corner and nowhere else, cut by the top edge and the right edge, with no wide river crossing the frame, no large open water surface, and no water of any kind in the foreground, in the centre, along the left or along the bottom. Asymmetric and organic composition with no dominant geometric center: a great cherry tree enters from the upper-left edge like a natural roof framing the scene from above, and the small corner of water in the upper right is the only opening out of an otherwise continuous park. Deep perspective but less rigid than the architectural scenes — no single obvious vanishing point; depth is built through the diagonal of the bank, the progressive shrinking of people, and the continuity of the grass, with a small bridge and a distant simplified city sitting behind the corner of water. Reading direction: lower-left foreground → park and shore → the last stretch of grass → the small corner of water in the upper right → the bridge and the distant city behind it, a more relaxed spatial feeling than a perfectly converging central perspective. Wimmelbilder logic where each picnic blanket works as an independent micro-scene: food, animals, backpacks, cameras, drinks, people chatting, resting, watching the landscape — the eye can settle on one sector and find small narratives without needing to read the whole image. Layers: at the very bottom, large cropped foreground figures and picnic objects; in the mid-ground, picnic groups scattered across the grass among blankets, lanterns and bushes; further back, progressively smaller figures; at the very back and only in the upper right corner, a short visible stretch of river with one or two small boats, a small bridge and a distant simplified city. Trees, bushes, blankets, lanterns and people constantly hide or half-hide bodies, so a figure could easily be camouflaged among the scene. No petals in the air, no confetti, nothing floating or falling — all pink blossoms stay attached to the trees. Completely balanced density: heavy visual overload distributed between people, picnic props and landscape, naturally integrated, nothing feeling forced. Three or more overlapping layers of depth, no large empty spaces. Small secondary situations to discover on a second look, with many spots where a person stays half-hidden by an object or a shadow. No text.

MEI — exactly one figure, and she does not belong to any of the picnic groups and does not carry their wardrobe: she is the single person in this scene whose clothes are not part of the crowd's wardrobe. She is in the mid-ground, a little to the left of the centre of the frame, standing at the edge of one blanket among a group of other standing picnickers, at the same height and at the same scale as the figures beside her, not larger and not smaller than the row she belongs to, and never the tallest or the closest figure. She is turned three-quarters toward the viewer, her body angled along the bank, so the shape of her face, both eyes, her nose and the line of her mouth all read, with her head in its natural upright position and her neck not strained. Nothing crosses her face: it is never covered by a branch, a lantern, a parasol or another figure. From the neck down she is broken by the picnic things around her: a basket and a rolled blanket in front of her, a low windbreak, and the shoulder and the head of a seated picnicker lower in the frame cut across her body, so her head, her hair and her face stay clear while the rest of her is camouflaged. Several other figures in that same row are also turned three-quarters toward the viewer, and another looks across the scene, so her face is one face among many in that row and not the only one turned out of the picture. Her long black hair falls below her shoulder blades as one straight dark shape with no curl, no wave and nothing tied up; she wears a softly oversized dusty pink hoodie, ivory wide-leg trousers and a caramel brown tote bag over one shoulder. Her three anchors appear on one figure only: she is the only person in a dusty pink hoodie, the only person in ivory wide-leg trousers and the only person carrying a caramel brown tote bag, and every other figure wears a different combination of clothes. Not one of them wears a dusty pink hoodie, not one wears ivory wide-leg trousers, not one carries a caramel brown tote bag, and no two of them are dressed alike.

MEI IS THE SINGLE EXCEPTION to the no-protagonist rule: exactly one figure in this scene is the character; every other figure is one more person in the multitude.

MEI IS THE ONLY COPY: exactly one figure in the whole image has straight black hair falling in one smooth sheet below her shoulder blades; exactly one wears a dusty pink hoodie; exactly one wears ivory wide-leg trousers; exactly one carries a caramel brown tote bag over one shoulder. Never two similar girls, never a twin, never a pair, never two friends or sisters dressed the same, never a duplicate, never a second copy of her anywhere in the frame: not in the background, not on another blanket, not in a group further off, not under the cherry tree, not in a window or a reflection. No other figure shares her hair, her hoodie, her trousers or her bag. If two figures end up looking alike, one of them is redrawn as a completely different person with different hair, different clothes and different accessories, and only one figure in the image is Mei.

Density grammar: three or more overlapping layers of depth, no large empty spaces, no sector empty and no sector focused only on the crowd; visual overload distributed equally between people and the environment, integrated naturally; visual hierarchy with no single human protagonist, characters always at a third or fourth reading level; props, structures, vegetation, furniture, branches, posts, awnings and shadows constantly hiding or half-hiding bodies, so a figure can easily be camouflaged among the scene.

Style: contemporary animated cartoon caricature, like a modern cartoon series — bold simplified shapes, exaggerated rounded proportions, overly large heads, simple minimal features, tiny noses, small mouths, stubby simple limbs, hair treated as large rounded soft masses. Big expressive cartoon eyes with generous white sclera around a relatively small dark pupil: the eye can be large and full of life, but the pupil never fills more than half of the eye and is always surrounded by visible white space — never solid-black eyes, never oversized pupils, never pupils filling almost the whole eye. NOT anime, NOT Ghibli, NOT Studio Ghibli, NOT Miyazaki, NOT realistic — avoid anime eye shapes, avoid soft dreamy anime gradients, avoid pencil animation look, avoid hard black outlines.

Architecture and nature more detailed and precise than characters, but equally illustrated.

Editorial travel-journal illustration finish. Digital 2D, soft cel-shading, warm watercolor-like paper texture, clean thin and irregular linework in the color of the base form (never black, never hard outlines), handcrafted finish. Adult, contemporary.

Muted, warm, springy, pastel, earthy, moderately desaturated palette — zero digital glow — one of the most balanced pink-green-blue images of the series. Dominant combination: sakura pink + dusty pink + salmon + peach + cream + ivory + beige + sand + wood brown, balanced by olive green, moss green, yellowish green, greyish blue, washed light blue, navy, warm grey, terracotta and small muted vermilion accents. Spring accents: abundant pale-pink sakura, bright flowers catching the light; light is warm and diffuse from the upper-right, with soft shaded areas under the trees, no harsh solar direction. No hard contrast: darker values concentrate on hair, the main trunk, navy clothing and some shadows; lighter values on sakura, sky, reflections and lit blankets; no dominant absolute black or optical white. Landscape — grass, trees, water — receives richer tonal variation than the simple figures; the water is pictorial, with fragmented brushstrokes and pink-blue reflections. Architecture and nature more detailed and precise than characters, but equally illustrated. High detail, many people each doing something different, small details to discover on a second look.

Mid-century Japanese and Swiss travel posters, Jean-Jacques Sempé, Tove Jansson, Mary Blair, Heinz Edelmann, New Yorker editorial illustration and the colour-line tradition of Winsor McCay, Maira Kalman's travel-journal voice.

Drawn illustration throughout: flat 2D, visible brush and paper texture, thin irregular linework, no photographic rendering.
```

## Sobre el agua: es un pedido explicito y repetido

El rio actual: *"the river opens toward the right and continues to the back"* + *"a wide horizontal opening on the right"* + *"the river with boats, a small bridge and a distant city"*. Son tres frases que le dicen al modelo que hay mucha agua.

Las cambie por **cuatro frases negativas**: no hay agua en el foreground, en el centro, en el izquierdo ni en el abajo; no hay rio ancho; no hay gran superficie de agua; el agua es solo un cuñito en la esquina superior derecha cortado por dos bordes del marco.

Si aun asi sale mucho agua, no agregues texto — **sacale el puente al fondo**. Un puente es un eje de lectura enorme que el modelo va a apoyar en un rió, y ahi es cuando se desborda.

## Sobre la dificultad, para que no te sorprenda

Esta es **facil**. Camara a nivel de ojo, escala de sus vecinos, cara girada tres cuartos visible, sin ocluyente sobre la cara, y tres anclas más un bloque `ONLY COPY`.

Y no hay que empujarla para esconderla, porque **el pedido fue que la cara se vea**. Lo que sigue es la misma cuenta de siempre: si la encontras al primer vistazo, esta muy limpia; lo correcto es segunda o tercera mirada. Si te queda muy fácil, el jugador no es la cara — es sacarle el anclaje de estar al lado del blanket, no tocar la composicion del parque.