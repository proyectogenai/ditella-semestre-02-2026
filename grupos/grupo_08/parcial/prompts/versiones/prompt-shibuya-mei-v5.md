# Shibuya + Mei · prompt v5

**Falla reportada: muchas personas vestidas igual que el personaje.** La causa es exacta y es mía.

## Por qué pasó

Los decoys que metí en v3 — *"Two other figures of the mid-ground also wear a softly oversized dusty pink hoodie... they are not Mei"* — fueron tomados del grupo 09, y acá **no sobrevivieron el contacto con el modelo**. Le pediste dos figuras con ese atributo y te devolvió muchas: el modelo leyó "dusty pink hoodie" como una característica de la multitud y la generalizó. Cuanto más saliente es el atributo, más lo extiende. Es un límite real del truco de los falsos positivos, y queda escrito: **funciona con objetos grises (falsos faroles, falsos nudos de tela), no con ropa de una figura-described**.

## Por qué la solución que propusiste no va a funcionar

*"Que no haya muchas personas vestidas igual que Mei"* falla por dos motivos:

1. Es una **negación**, y tu P1 ya lo documentó: los modelos leen mal las negaciones. Decir "no X" planta X.
2. **Vuelve a nombrar la dusty pink hoodie.** Nombra el atributo exacto que querés único y lo refuerza.

Por eso el arreglo es sustraer y redistribuir, no prohibir.

## Qué cambió

| | |
|---|---|
| **Se borraron los decoys.** | Era la fuente de la duplicación. |
| **La multitud ahora tiene ropa descrita con la misma precisión que Mei** |—"no figure in this crowd is less specific than another". Es el aprendizaje de Nikkō v4: la atención va a la especificidad, así que hay que igualar el nivel de detalle para que ella deje de standout. |
| **La paleta de la multitud excluye sus tres anclas a propósito** | Nada de dusty pink, nada de ivory wide-leg, nada de tote caramel. En su lugar: indigo, navy, oatmeal, arena, gris cálido, oliva, musgo, carbón, marrón. |
| **Unicidad enunciada en positivo** | "she is the only person in... the only person in... the only person carrying..." + "every other figure wears a different combination of clothes". Expresado como posesión única, no como prohibición. |

## La regla que sale de esto, para la skill

> **Las tres anclas de Mei son únicas entre las figuras, no en el ambiente.**

Eso importa porque en Dotonbori el dusty pink es el color de los toldos y los faroles: su hoodie se funde con el ambiente, pero sigue siendo la única *persona* con esa ropa. Si escribís la regla como "nada dusty pink en la escena", rompés esa página. La distinción figura / ambiente es lo que hace que el sistema sobreviva las 8 páginas.

---

## EL PROMPT v4 (copiá desde acá)

```
Create a BRAND NEW image from scratch. Horizontal 16:9 landscape format, edge-to-edge composition, high detail, many people each doing something different, small details to discover on a second look, no blur, no motion blur, no glow, no vignette, no border, no frame. No petals in the air, no confetti, nothing floating or falling: all pink blossoms stay attached to the trees. No written words, no legible text, no logos, no watermark, no UI.

Mei appears exactly once in this image: straight black hair falling in one smooth sheet to below her shoulder blades, a softly oversized dusty pink hoodie, ivory wide-leg trousers, a caramel brown tote bag over one shoulder.

the scramble crossing of Shibuya on a luminous spring afternoon, seen from high behind and above at the moment the light turns: the crowd and the city clutter compete for attention, and no single area focuses solely on the people. High-angle framing from an upper-floor corner of the station, looking down over the crossing so the full X of the scramble diagonals is completely visible, with the vanishing point near the upper center; the white stripes of the crossing, the streets, the railings and the façades all draw the eye toward the station. Every sector is packed with urban environment, not just people: the curved glass façade of a monumental station building wrapping a corner in the background, an elevated railway line crossing above the street, a tall tower of department store windows, blank luminous billboard screens mounted on the façades, a wall of small shop signs and vertical banners, traffic lights on poles, street lamps, bollards, guardrails, planters with tree trunks, benches, mailboxes, newsstands, kiosks, parked bicycles, taxis and a bus stopped at the curb, utility poles, fire hydrants, delivery carts. Large masses of blooming sakura on both sides overlap the buildings and partially occlude figures, breaking sightlines; branches, railings, signposts, billboards and poles constantly hide or half-hide bodies, so a figure could easily be camouflaged among the scene. Bottom of the frame: the nearest corner of the sidewalk seen from above, with large figures cropped by the frame and seen from behind and above — people leaning on the guardrail waiting, someone tying a shoe, a child holding an adult's hand, a person checking the time. Mid-ground: the diagonals of the crossing completely full, at least sixty to eighty distinct figures crossing in every direction, chatting, looking at their phones, holding drinks, carrying bags and backpacks, wearing earphones, riding bicycles, walking a dog, posing for photographs at the edge of the stripes. The crowd wears clothes described with the same precision as the character: washed indigo and deep navy coats and cardigans, oatmeal, sand and warm grey jackets, olive and moss green scarves, charcoal trousers, brown leather shoes, cream and beige tote bags, navy backpacks, straw hats, cameras around necks, plastic bags of fruit, small wheeled suitcases. No figure in this crowd is less specific than another. Background: layered buildings with windows, balconies, hanging plants, laundry and signage, vehicles, trees and tiny silhouettes fading into clarity. Completely balanced density: heavy visual overload distributed between crowd and city props, naturally integrated, nothing feeling forced. Three overlapping layers of depth, no large empty spaces. Small secondary situations to discover on a second look, with many spots where a person stays half-hidden by an object or a shadow. Dominant color for this scene: warm stone grey, concrete beige, cream and ivory in the crossing and façades, olive and moss green in the trees, sakura pink and salmon as spring accents, brick red and muted vermilion in small controlled bursts on signage, lanterns and key accessories; light is warm, filtered and slightly from behind, so the station glass reads bright and the crowd keeps soft cool shadows.


Density grammar: three or more overlapping layers of depth, no large empty spaces, no sector empty and no sector focused only on the crowd; visual overload distributed equally between people and the environment, integrated naturally; visual hierarchy with no single human protagonist, characters always at a third or fourth reading level; props, structures, vegetation, furniture, branches, posts, awnings and shadows constantly hiding or half-hiding bodies, so a figure can easily be camouflaged among the scene.


Character style: contemporary animated cartoon caricature, like a modern cartoon series — bold simplified shapes, exaggerated rounded proportions, overly large heads, stubby simple limbs, hair as large soft rounded masses. The figures of the foreground have big expressive cartoon eyes with a big dark pupil filling not more than half of the iris, still framed by a ring of visible white sclera, tiny noses and small mouths; expressiveness comes mainly from the eyes, body posture and head direction. The figures of the mid-ground and the background keep simple minimal features — tiny noses, small mouths, small simplified eyes — and read as compact shapes inside the crowd.


Architecture and nature more detailed and precise than the characters, but equally illustrated, in the same crafted language.


Finish: editorial travel-journal illustration, digital 2D, soft cel-shading, warm watercolor-like paper texture, clean thin and irregular linework in the color of the base form (never black, never hard outlines), handcrafted, adult and contemporary.


Muted, warm, nostalgic, strongly desaturated — zero digital glow, no hard contrast, no photorealism. Core tokens always present: sakura pink, dusty pink, salmon and peach as spring accents; cream, ivory, beige and sand; warm wood brown, terracotta, brick red and muted vermilion as small controlled accent bursts on key objects; navy, greyish blue and washed light blue; olive green, moss green and forest green; warm stone grey and brownish charcoal.


Ground and large surfaces: the asphalt of the streets, the road markings, the pavement and every large flat plane stay inside a mid-value range — warm grey and beige, never a black mass. Surfaces keep visible texture, seams, cracks, painted lines and paper grain. No ink stains, no blotches, no dark smudges, no holes of pure black, no oily gloss on the road. Dark values appear only in hair, clothing, backpacks, signage and small shadowed zones, never spread over a large area.


Light is warm, natural and diffuse, with no harsh solar direction and minimal soft diffuse shadows, no hard black shadows. Dark values concentrate in hair, clothing, backpacks and shadowed zones; light values in the sky, the light sources and the most illuminated surfaces. Small contained points of warm yellow light only where the scene has real lamps or lanterns, with no halos. No dominant absolute black or optical white. Even metal, glass, water and machinery keep a slight paper-grain irregularity, and water is pictorial with fragmented brushstrokes and warm reflected highlights.


Mid-century Japanese and Swiss travel posters, Jean-Jacques Sempé, Tove Jansson, Mary Blair, Heinz Edelmann, New Yorker editorial illustration and the colour-line tradition of Winsor McCay, Maira Kalman's travel-journal voice.


MEI'S PLACEMENT IN THIS SCENE — Mei appears EXACTLY ONCE, in the mid-ground on the left corner of the crossing, at the sidewalk edge where the wall of shop signs and vertical banners is. Two overlapping things cross in front of her: a tall signpost at shoulder height, and the shoulder and dark hair of the figure walking just ahead of her. Her head, her hair and the dusty pink of her shoulder appear in the gap between them. She stands at the same height and at the same depth as the figures beside her, her long black hair merging with the dark hair masses of the figures in front of her, so her outline is broken and she belongs to the crowd before she reads as a single person. She is seen from behind and slightly above, talking to a stranger beside her. She sits on the same reading level, under the same diffuse light and at the same scale as every figure around her. Her three anchors appear on one figure only: she is the only person in a dusty pink hoodie, the only person in ivory wide-leg trousers and the only person carrying a caramel brown tote bag, and every other figure wears a different combination of clothes.

MEI IS THE SINGLE EXCEPTION to the no-protagonist rule: exactly one figure in this crowd is the character; every other figure is one more person in the multitude.


NOT anime, NOT Ghibli, NOT Studio Ghibli, NOT Miyazaki, NOT manga, NOT Pixar or 3D render, NOT photorealism, NOT pencil animation look, NOT airbrush or 3D plastic shading. Avoid anime eye shapes, soft dreamy anime gradients and hard black outlines.
```