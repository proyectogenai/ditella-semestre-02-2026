# Nikkō + Mei · prompt v4

## Leé esto antes de generar

**El test de "fácil de encontrar" no es válido si lo hacés vos.** Conocés el prompt: sabés que está en los primeros escalones, al lado de la cola de las locales. Nadie la encontraría en dos segundos si no supiera dónde mirar. **El único test válido es que alguien que no vio el prompt la busque** — "buscá a la chica de la hoodie rosa". Mandales v2, v3 y v4 a tu compañera o a Pilar, sin explicar qué cambió, y que voten.

**Y la palanca real, que no es "más gente".**

La atención de un modelo de imagen sigue a la **especificidad**, no al tamaño. En una multitud, la figura que standout es la que está descrita con más detalle. En tu prompt hay **una sola figura detallada**: Mei, con nombre, tres anclas, un bolso con nombre y medio párrafo de colocación. El resto es "people walking, chatting". Ella es la única frase del cuadro que el modelo tiene que renderizar con detalle. Sumar gente no la esconde: agranda el público de una sola persona.

Por eso el cambio de fondo de esta versión es **anonimizar por igualación**: la multitud ahora también tiene ropa descrita con el mismo nivel de precisión (yukata indigo con patrones, cárdigans salvia y dusty rose, bufandas terracota, mochilas navy, totes caramelo y crema). "No figure in this crowd is less specific than another." Cuando ella deja de ser la única frase detallada del cuadro, deja dehighlight.

**Lo que también cambió:**
- **Cantidades:** 60 figuras en la calle del pie (antes 40), 50 en el arranque de las escaleras (antes 30).
- **Más locales:** la fila de la izquierda ya tenía noren, faroles y cola de visitantes. Sigue igual; lo que agregué fue ropa en toda la multitud.
- **Colocación de Mei:** de ~140 palabras a 40. Todo el detalle de geometría del hueco (cedar trunk, shoulder, gap) se fue: cada cláusula era un foco. Ahora es una frase.

**Lo que saqué:** los dos decoys con hoodie rosa. No discretizan la señal, la multiplican — son tres manchas rosa en vez de una.

---

---

## EL PROMPT (copiá desde acá)

```
Create a BRAND NEW image from scratch. Horizontal 16:9 landscape format, edge-to-edge composition, high detail, many people each doing something different, small details to discover on a second look, no blur, no motion blur, no glow, no vignette, no border, no frame. No petals in the air, no confetti, nothing floating or falling: all pink blossoms stay attached to the trees. No written words, no legible text, no logos, no watermark, no UI.

Mei appears exactly once in this image: straight black hair falling in one smooth sheet to below her shoulder blades, a softly oversized dusty pink hoodie, ivory wide-leg trousers, a caramel brown tote bag over one shoulder.

SCENE: the monumental stone staircase ascending to a shrine in a spring mountain town, on a luminous spring afternoon with light filtered through the trees, in extremely dense Wimmelbilder fashion, where the crowd and the shrine-town clutter compete for attention, and no single area focuses solely on the people. Framing from the foot of the street at the start of the slope, the camera oriented upward along the ascent, from about human height and slightly elevated, so the staircase begins wide in the lower half, narrows progressively and ends at the sanctuary placed exactly on the upper central axis: a powerfully marked central structure, almost symmetrical, with the vanishing point near the shrine. The lines of the steps, the edges of the path and the succession of stone lanterns all converge toward the temple, making the destination feel clearly elevated: crowd, staircase, ascent, shrine. Every sector is packed with environment, not just people: a continuous row of small wooden shopfronts on the left, each one with a hanging cloth awning and a noren curtain, shelves of goods and produce displayed at the entrance, small paper lanterns under the eaves, potted flowers and lush vegetation between them, and a queue of visitors browsing and buying shoulder to shoulder; a large stone torii, stone lanterns and small secondary structures on the right; wooden shopfronts and tiled roofs flanking the foot of the street; a wooden notice board; stone walls and a drainage channel; mossy steps worn pale at the centre; stone lanterns in succession along both edges; massive cedar trunks; wooden shrine gates, ropes and paper streamers; an offering box at the top of the stair; potted plants, brooms and buckets against a lantern base; small carved stone animal figures; goods and produce stacked on the shop counters. Large masses of blooming sakura and cedar canopies on both sides overlap the architecture and partially occlude figures, breaking sightlines; lanterns, cedar trunks, branches, stall awnings and shrine gates constantly hide or half-hide bodies, so a figure could easily be camouflaged among the scene. Bottom of the frame: the street at the foot of the slope crowded with at least sixty figures at full size, plus large foreground characters, stalls and objects overlapping and cropped by the frame — people walking, climbing, buying at the stall, looking at objects, chatting, taking photographs, observing the surroundings. Mid-ground: the beginning of the stairs packed shoulder to shoulder with at least fifty figures at nearly full size, among vegetation, lanterns and secondary architecture, with a dense cluster of visitors gathered at the first steps where the shopfronts end and no gap of empty ground between them. Further up: the upper steps with a dozen smaller figures, packed and overlapping, so the staircase reads as full to its top end. Background: the shrine surrounded by cedars and sakura, luminous and simplified, with small silhouettes half-swallowed by the trees. The crowd wears clothes described with the same precision as the character: washed indigo yukata with pale geometric patterns, oatmeal and sand-coloured coats, sage green and dusty rose cardigans, terracotta and muted vermilion scarves, navy backpacks, canvas tote bags in caramel and cream, straw hats, scarves, umbrellas held at the side, cameras around necks, plastic bags of fruit, small wheeled suitcases. No figure in this crowd is less specific than another. Completely balanced density: heavy visual overload distributed between crowd and natural and architectural props, naturally integrated, nothing feeling forced. Every zone of the frame carries figures, props and vegetation, edge to edge; toward the top the staircase stays full of figures and only loses figure size and contrast, never emptiness, which keeps the staircase legible. Three or more overlapping layers of depth. Small secondary situations to discover on a second look, with many spots where a person stays half-hidden by an object or a shadow. Signboards, banners, plaques and carved surfaces carry only texture, never a legible character.


Density grammar: three or more overlapping layers of depth, no large empty spaces, no sector empty and no sector focused only on the crowd; visual overload distributed equally between people and the environment, integrated naturally; visual hierarchy with no single human protagonist, characters always at a third or fourth reading level; props, structures, vegetation, furniture, branches, posts, awnings and shadows constantly hiding or half-hiding bodies, so a figure can easily be camouflaged among the scene.


Character style: contemporary animated cartoon caricature, like a modern cartoon series — bold simplified shapes, exaggerated rounded proportions, overly large heads, stubby simple limbs, hair as large soft rounded masses. The figures of the foreground have big expressive cartoon eyes with a big dark pupil filling not more than half of the iris, still framed by a ring of visible white sclera, tiny noses and small mouths; expressiveness comes mainly from the eyes, body posture and head direction. The figures of the mid-ground and the background keep simple minimal features — tiny noses, small mouths, small simplified eyes — and read as compact shapes inside the crowd.


Architecture and nature more detailed and precise than the characters, but equally illustrated, in the same crafted language.


Finish: editorial travel-journal illustration, digital 2D, soft cel-shading, warm watercolor-like paper texture, clean thin and irregular linework in the color of the base form (never black, never hard outlines), handcrafted, adult and contemporary.


Muted, warm, nostalgic, strongly desaturated — zero digital glow, no hard contrast, Core tokens always present: sakura pink, dusty pink, salmon and peach as spring accents; cream, ivory, beige and sand; warm wood brown, terracotta, brick red and muted vermilion as small controlled accent bursts on key objects; navy, greyish blue and washed light blue; olive green, moss green and forest green; warm stone grey and brownish charcoal.


Ground and large surfaces: the asphalt of the streets, the road markings, the pavement and every large flat plane stay inside a mid-value range — warm grey and beige, never a black mass. Surfaces keep visible texture, seams, cracks, painted lines and paper grain. No ink stains, no blotches, no dark smudges, no holes of pure black, no oily gloss on the road. Dark values appear only in hair, clothing, backpacks, signage and small shadowed zones, never spread over a large area.


Light is warm, natural and diffuse, with no harsh solar direction and minimal soft diffuse shadows, no hard black shadows. Dark values concentrate in hair, clothing, backpacks and shadowed zones; light values in the sky, the light sources and the most illuminated surfaces. Small contained points of warm yellow light only where the scene has real lamps or lanterns, with no halos. No dominant absolute black or optical white. Even metal, glass, water and machinery keep a slight paper-grain irregularity, and water is pictorial with fragmented brushstrokes and warm reflected highlights.


Mid-century Japanese and Swiss travel posters, Jean-Jacques Sempé, Tove Jansson, Mary Blair, Heinz Edelmann, New Yorker editorial illustration and the colour-line tradition of Winsor McCay, Maira Kalman's travel-journal voice.


MEI — exactly one, inside the crowd on the first steps beside the row of shops, climbing, seen from behind, partly behind other visitors. Her long black hair falls below her shoulder blades; she wears a dusty pink hoodie, ivory trousers and a caramel tote bag over one shoulder. She is one figure among many, with no more attention on her than on any other, and no quality that sets her apart from the crowd around her.

MEI IS THE SINGLE EXCEPTION to the no-protagonist rule: exactly one figure in this crowd is the character; every other figure is one more person in the multitude.


NOT anime, NOT Ghibli, NOT Studio Ghibli, NOT Miyazaki, NOT manga, NOT Pixar or 3D render, NOT pencil animation look, NOT airbrush or 3D plastic shading. Avoid anime eye shapes, soft dreamy anime gradients and hard black outlines.
```