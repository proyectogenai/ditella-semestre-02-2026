# Nikkō + Mei · prompt v2

**Falla reportada: muy poca gente.** Y esta vez la culprit no es la integración de Mei: en Shibuya la densidad cayó cuando metí 85 palabras de identidad; acá metí 34 y la multitud sigue vacía. **La pérdida viene del prompt de la escena**, y son tres causas concretas, todas verificables en el texto original:

| Causa | Dónde | Qué hace |
|---|---|---|
| **No había número.** El único apuesto concreto a la densidad que funcionó en Shibuya v2 no estaba en esta versión: el bloque de identidad y el de colocación no lo tocan, y la escena de base nunca lo tuvo. | — | Decir "crowded" no es un pedido. |
| **El prompt se contradice sobre la escalera.** Dice "Density decreases slightly toward the top" *y* "no large empty spaces". Le autorizaste al modelo a vaciar la mitad superior de la escena. Además tu propia frase "the upper zones losing figure size and contrast rather than losing objects" mezclaba dos cosas: tamaño/contraste sí, cantidad no. | `Density decreases slightly toward the top...` | Vacía la profundidad, que es justo donde el ojo mira. |
| **La geometría no admite 80 figuras.** Una escalera vista desde el pie es una cuña angosta y en perspectiva: las figuras se comprimen y se funden solas por física, no por decisión del modelo. Pedir "muchas figuras" en el eje equivocado no funciona. | toda la `SCENE` | Por eso ahora el número está **distribuido por franja**, no suelto. |

## Qué cambió (solo `Capa 1`, que es la única capa que puede cambiar)

- **Primer plano:** la calle al pie de la ladera con **al menos cuarenta figuras** a tamaño completo.
- **Medio fondo:** el arranque de las escaleras **con al menos treinta figuras** shoulder to shoulder.
- **Cfondo:** **una docena** de figuras menores, packed and overlapping, para que la escalera lea llena hasta arriba.
- `Density decreases slightly toward the top` → `toward the top the staircase stays full of figures and only loses figure size and contrast, never emptiness`. Ahora la regla queda explícita: **menos tamaño, nunca menos gente.**
- `no large empty spaces` (negación) → `Every zone of the frame carries figures, props and vegetation, edge to edge`.

El bloque de identidad de Mei y el bloque de estilo quedaron **intactos**. Si este arreglo funciona, la distribución numérica por franja entra en la skill como parte de la regla de densidad, y no como un parche de esta página.

---

---

## EL PROMPT (copiá desde acá)

```
Create a BRAND NEW image from scratch. Horizontal 16:9 landscape format, edge-to-edge composition, high detail, many people each doing something different, small details to discover on a second look, no blur, no motion blur, no glow, no vignette, no border, no frame. No petals in the air, no confetti, nothing floating or falling: all pink blossoms stay attached to the trees. No written words, no legible text, no logos, no watermark, no UI.

Mei appears exactly once in this image: straight black hair falling in one smooth sheet to below her shoulder blades, a softly oversized dusty pink hoodie, ivory wide-leg trousers, a caramel brown tote bag over one shoulder.

SCENE: the monumental stone staircase ascending to a shrine in a spring mountain town, on a luminous spring afternoon with light filtered through the trees, in extremely dense Wimmelbilder fashion, where the crowd and the shrine-town clutter compete for attention, and no single area focuses solely on the people. Framing from the foot of the street at the start of the slope, the camera oriented upward along the ascent, from about human height and slightly elevated, so the staircase begins wide in the lower half, narrows progressively and ends at the sanctuary placed exactly on the upper central axis: a powerfully marked central structure, almost symmetrical, with the vanishing point near the shrine. The lines of the steps, the edges of the path and the succession of stone lanterns all converge toward the temple, making the destination feel clearly elevated: crowd, staircase, ascent, shrine. Every sector is packed with environment, not just people: a commercial stall with a hanging cloth awning, flowers and lush vegetation on the left; a large stone torii, stone lanterns and small secondary structures on the right; wooden shopfronts and tiled roofs flanking the foot of the street; a wooden notice board; stone walls and a drainage channel; mossy steps worn pale at the centre; stone lanterns in succession along both edges; massive cedar trunks; wooden shrine gates, ropes and paper streamers; an offering box at the top of the stair; potted plants, brooms and buckets against a lantern base; small carved stone animal figures; goods, packages and produce displayed on the stall. Large masses of blooming sakura and cedar canopies on both sides overlap the architecture and partially occlude figures, breaking sightlines; lanterns, cedar trunks, branches, stall awnings and shrine gates constantly hide or half-hide bodies, so a figure could easily be camouflaged among the scene. Bottom of the frame: the street at the foot of the slope crowded with at least forty figures at full size, plus large foreground characters, stalls and objects overlapping and cropped by the frame — people walking, climbing, buying at the stall, looking at objects, chatting, taking photographs, observing the surroundings. Mid-ground: the beginning of the stairs packed shoulder to shoulder with at least thirty figures at nearly full size, among vegetation, lanterns and secondary architecture. Further up: the upper steps with a dozen smaller figures, packed and overlapping, so the staircase reads as full to its top end. Background: the shrine surrounded by cedars and sakura, luminous and simplified, with small silhouettes half-swallowed by the trees. Completely balanced density: heavy visual overload distributed between crowd and natural and architectural props, naturally integrated, nothing feeling forced. Every zone of the frame carries figures, props and vegetation, edge to edge; toward the top the staircase stays full of figures and only loses figure size and contrast, never emptiness, which keeps the staircase legible. Three or more overlapping layers of depth. Small secondary situations to discover on a second look, with many spots where a person stays half-hidden by an object or a shadow. Signboards, banners, plaques and carved surfaces carry only texture, never a legible character.


Density grammar: three or more overlapping layers of depth, no large empty spaces, no sector empty and no sector focused only on the crowd; visual overload distributed equally between people and the environment, integrated naturally; visual hierarchy with no single human protagonist, characters always at a third or fourth reading level; props, structures, vegetation, furniture, branches, posts, awnings and shadows constantly hiding or half-hiding bodies, so a figure can easily be camouflaged among the scene.


Character style: contemporary animated cartoon caricature, like a modern cartoon series — bold simplified shapes, exaggerated rounded proportions, overly large heads, stubby simple limbs, hair as large soft rounded masses. The figures of the foreground have big expressive cartoon eyes with a big dark pupil filling not more than half of the iris, still framed by a ring of visible white sclera, tiny noses and small mouths; expressiveness comes mainly from the eyes, body posture and head direction. The figures of the mid-ground and the background keep simple minimal features — tiny noses, small mouths, small simplified eyes — and read as compact shapes inside the crowd.


Architecture and nature more detailed and precise than the characters, but equally illustrated, in the same crafted language.


Finish: editorial travel-journal illustration, digital 2D, soft cel-shading, warm watercolor-like paper texture, clean thin and irregular linework in the color of the base form (never black, never hard outlines), handcrafted, adult and contemporary.


Muted, warm, nostalgic, strongly desaturated — zero digital glow, no hard contrast, no photorealism. Core tokens always present: sakura pink, dusty pink, salmon and peach as spring accents; cream, ivory, beige and sand; warm wood brown, terracotta, brick red and muted vermilion as small controlled accent bursts on key objects; navy, greyish blue and washed light blue; olive green, moss green and forest green; warm stone grey and brownish charcoal.


Ground and large surfaces: the asphalt of the streets, the road markings, the pavement and every large flat plane stay inside a mid-value range — warm grey and beige, never a black mass. Surfaces keep visible texture, seams, cracks, painted lines and paper grain. No ink stains, no blotches, no dark smudges, no holes of pure black, no oily gloss on the road. Dark values appear only in hair, clothing, backpacks, signage and small shadowed zones, never spread over a large area.


Light is warm, natural and diffuse, with no harsh solar direction and minimal soft diffuse shadows, no hard black shadows. Dark values concentrate in hair, clothing, backpacks and shadowed zones; light values in the sky, the light sources and the most illuminated surfaces. Small contained points of warm yellow light only where the scene has real lamps or lanterns, with no halos. No dominant absolute black or optical white. Even metal, glass, water and machinery keep a slight paper-grain irregularity, and water is pictorial with fragmented brushstrokes and warm reflected highlights.


Mid-century Japanese and Swiss travel posters, Jean-Jacques Sempé, Tove Jansson, Mary Blair, Heinz Edelmann, New Yorker editorial illustration and the colour-line tradition of Winsor McCay, Maira Kalman's travel-journal voice.


MEI'S PLACEMENT IN THIS SCENE — Mei appears EXACTLY ONCE, at the right edge of the crowded beginning of the staircase, off the central axis, at the same distance from the camera as the first string of stone lanterns. She climbs one step, seen from behind and from slightly below. A stone lantern stands in front of her at shoulder height, and the shoulder and dark hair of the pilgrim one step above her cross in front of her in turn, so her head, her long black hair and the dusty pink of her shoulder appear in the gap between the two. The pale worn centre of the steps is directly behind her as a light backdrop, so her dark hair reads clearly against it. Her long black hair merges with the dark hair masses of the pilgrims in front of her, so her outline is broken and she belongs to the crowd before she reads as a single person. She stays at the same scale as the figures on her step, under the same diffuse light filtered through the trees. Two other figures of the mid-ground also wear a softly oversized dusty pink hoodie, seen only from behind or in profile, without long black hair and without a tote bag: they are not Mei. Only she carries the caramel brown tote; no other figure repeats her long black hair falling past her shoulders.

MEI IS THE SINGLE EXCEPTION to the no-protagonist rule: exactly one figure in this crowd is the character; every other figure is one more person in the multitude.


NOT anime, NOT Ghibli, NOT Studio Ghibli, NOT Miyazaki, NOT manga, NOT Pixar or 3D render, NOT photorealism, NOT pencil animation look, NOT airbrush or 3D plastic shading. Avoid anime eye shapes, soft dreamy anime gradients and hard black outlines.
```