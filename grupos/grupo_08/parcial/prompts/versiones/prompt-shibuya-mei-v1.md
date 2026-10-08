# Shibuya + Mei · prompt con la identidad integrada

**Base:** tu prompt de la escena, copiado textual. **Intervine solo en 3 lugares.**

## Qué cambió

| # | Dónde | Qué agregué |
|---|---|---|
| 1 | Después de la línea de formato | Bloque de identidad de Mei (la versión de 60 palabras) |
| 2 | Antes de la lista `NOT` | Bloque de colocación + la excepción al "no protagonist" |
| 3 | — | Nada. Tu texto quedó intacto |

**Dos ajustes dentro del bloque de identidad, y por qué:**

- **Saqué la frase "At 40 pixels tall..."**. El modelo no sabe cuántos píxeles mide tu figura en el lienzo: esa frase sirve para documentar el criterio, no para generar. Va en el doc de proceso, no en el prompt.
- **Agregué la ropa** ("a softly oversized dusty pink hoodie and ivory wide-leg trousers"). La versión de 60 decía solo "her color anchor is dusty pink", que es ambiguo: no dice si el dusty pink es su ropa o una etiqueta. Sin eso, el modelo le puede poner un vestido random.

**Y una decisión de ubicación:** puse la excepción al `no protagonist` justo **antes** de la lista `NOT`, no al final. Si el prompt termina con la lista negativa de estilo, el cierre de estilo queda apretado; si termina con una frase sobre el personaje, el modelo le da más peso al último renglón y Mei se vuelve protagonista. Era el riesgo exacto de la regla que ya tenés escrita.

## Por qué Shibuya sí y dónde

Dos correcciones que salieron de tu propio prompt:

- **No puede ser el guardrail.** En tu prompt el guardrail está en el borde inferior del cuadro = primer plano, y vos prohibiste primer plano. Uso un poste de señalética con un cartel de tienda, que en tu prompt está en profundidad media.
- **Nunca sobre valor oscuro.** Tu tote caramel y tu pantalón ivory están en el mismo rango de valor que el asfalto y las rayas: eso es camuflaje y está bien. Pero si el fondo detrás es oscuro (el bus, los taxis, una mochila negra, una zona en sombra), desaparece entera. Por eso agregué "the pale crossing stripes sit right behind her as a light backdrop": el pelo negro necesita un fondo claro para leerse.

## Los 6 chequeos después de generar

1. ¿Aparece **una sola vez**?
2. ¿Se encuentra en **2 segundos** mirando sin buscar?
3. ¿El pelo negro se lee **contra las rayas claras** (no contra el bus ni una mochila)?
4. ¿La hoodie dusty pink se pierde dentro de una masa de sakura? Si sí, corré el oclusor.
5. ¿Mide lo mismo que las figuras de su lado?
6. ¿Al alejar la vista deja de parecer un pegado?

Guardala como `escena-shibuya9.png`. Tenés un experimento limpio: `escena-shibuya1` es este mismo prompt sin los 3 bloques, así que el delta entre las dos es exactamente lo que aportó la identidad. Eso va directo al documento de proceso.

---

## EL PROMPT (copiá todo desde acá)

```
Create a BRAND NEW image from scratch — there is no previous image and no reference image. Horizontal 16:9 landscape format, edge-to-edge composition, high detail, many people each doing something different, small details to discover on a second look, no blur, no motion blur, no glow, no vignette, no border, no frame. No petals in the air, no confetti, nothing floating or falling: all pink blossoms stay attached to the trees. No written words, no legible text, no logos, no watermark, no UI.

Mei appears exactly once in this image. She shares the crowd's contemporary cartoon language: bold simplified shapes, rounded exaggerated proportions, an oversized head, stubby limbs, a tiny nose, small mouth, and big expressive eyes with generous white sclera around big dark pupils. She wears a softly oversized dusty pink hoodie and ivory wide-leg trousers, and carries a caramel brown tote bag over one shoulder. Her silhouette anchor is long straight black hair forming one large soft rounded mass past her shoulders, which stays readable when she is seen from behind.

the scramble crossing of Shibuya on a luminous spring afternoon, seen from high behind and above at the moment the light turns: the crowd and the city clutter compete for attention, and no single area focuses solely on the people. High-angle framing from an upper-floor corner of the station, looking down over the crossing so the full X of the scramble diagonals is completely visible, with the vanishing point near the upper center; the white stripes of the crossing, the streets, the railings and the façades all draw the eye toward the station. Every sector is packed with urban environment, not just people: the curved glass façade of a monumental station building wrapping a corner in the background, an elevated railway line crossing above the street, a tall tower of department store windows, blank luminous billboard screens mounted on the façades, a wall of small shop signs and vertical banners, traffic lights on poles, street lamps, bollards, guardrails, planters with tree trunks, benches, mailboxes, newsstands, kiosks, parked bicycles, taxis and a bus stopped at the curb, utility poles, fire hydrants, delivery carts. Large masses of blooming sakura on both sides overlap the buildings and partially occlude figures, breaking sightlines; branches, railings, signposts, billboards and poles constantly hide or half-hide bodies, so a figure could easily be camouflaged among the scene. Bottom of the frame: the nearest corner of the sidewalk seen from above, with large figures cropped by the frame and seen from behind and above — people leaning on the guardrail waiting, someone tying a shoe, a child holding an adult's hand, a person checking the time. Mid-ground: the diagonals of the crossing completely full, people crossing in every direction, chatting, looking at their phones, holding drinks, carrying bags and backpacks, wearing earphones, riding bicycles, walking a dog, posing for photographs at the edge of the stripes. Background: layered buildings with windows, balconies, hanging plants, laundry and signage, vehicles, trees and tiny silhouettes fading into clarity. Completely balanced density: heavy visual overload distributed between crowd and city props, naturally integrated, nothing feeling forced. Three overlapping layers of depth, no large empty spaces. Small secondary situations to discover on a second look, with many spots where a person stays half-hidden by an object or a shadow. Dominant color for this scene: warm stone grey, concrete beige, cream and ivory in the crossing and façades, olive and moss green in the trees, sakura pink and salmon as spring accents, brick red and muted vermilion in small controlled bursts on signage, lanterns and key accessories; light is warm, filtered and slightly from behind, so the station glass reads bright and the crowd keeps soft cool shadows.


Density grammar: three or more overlapping layers of depth, no large empty spaces, no sector empty and no sector focused only on the crowd; visual overload distributed equally between people and the environment, integrated naturally; visual hierarchy with no single human protagonist, characters always at a third or fourth reading level; props, structures, vegetation, furniture, branches, posts, awnings and shadows constantly hiding or half-hiding bodies, so a figure can easily be camouflaged among the scene.


Character style: contemporary animated cartoon caricature, like a modern cartoon series — bold simplified shapes, exaggerated rounded proportions, overly large heads, simple minimal features, tiny noses, small mouths, stubby simple limbs, hair as large soft rounded masses. Big expressive cartoon eyes with generous white sclera around a relatively small dark pupil: the eye can be large and full of life, but the pupil never fills more than half of the eye and is always surrounded by visible white space — never solid-black eyes, never oversized pupils; expressiveness comes mainly from the eyes, body posture and head direction.


Architecture and nature more detailed and precise than the characters, but equally illustrated, in the same crafted language.


Finish: editorial travel-journal illustration, digital 2D, soft cel-shading, warm watercolor-like paper texture, clean thin and irregular linework in the color of the base form (never black, never hard outlines), handcrafted, adult and contemporary.


Muted, warm, nostalgic, strongly desaturated — zero digital glow, no hard contrast, Core tokens always present: sakura pink, dusty pink, salmon and peach as spring accents; cream, ivory, beige and sand; warm wood brown, terracotta, brick red and muted vermilion as small controlled accent bursts on key objects; navy, greyish blue and washed light blue; olive green, moss green and forest green; warm stone grey and brownish charcoal.


Ground and large surfaces: the asphalt of the streets, the road markings, the pavement and every large flat plane stay inside a mid-value range — warm grey and beige, never a black mass. Surfaces keep visible texture, seams, cracks, painted lines and paper grain. No ink stains, no blotches, no dark smudges, no holes of pure black, no oily gloss on the road. Dark values appear only in hair, clothing, backpacks, signage and small shadowed zones, never spread over a large area.


Light is warm, natural and diffuse, with no harsh solar direction and minimal soft diffuse shadows, no hard black shadows. Dark values concentrate in hair, clothing, backpacks and shadowed zones; light values in the sky, the light sources and the most illuminated surfaces. Small contained points of warm yellow light only where the scene has real lamps or lanterns, with no halos. No dominant absolute black or optical white. Even metal, glass, water and machinery keep a slight paper-grain irregularity, and water is pictorial with fragmented brushstrokes and warm reflected highlights.


Mid-century Japanese and Swiss travel posters, Jean-Jacques Sempé, Tove Jansson, Mary Blair, Heinz Edelmann, New Yorker editorial illustration and the colour-line tradition of Winsor McCay, Maira Kalman's travel-journal voice.


MEI'S PLACEMENT IN THIS SCENE — Mei appears EXACTLY ONCE, in the mid-ground on the left corner of the crossing, standing at the sidewalk edge where the wall of small shop signs and vertical banners is. A tall signpost crosses her body at chest height and a soft sakura branch hangs in front of her shoulders, so her head, her large black hair mass and the dusty pink of her hoodie stay fully readable while one arm and her legs disappear behind the post. The pale crossing stripes sit right behind her as a light backdrop, so her dark hair reads clearly against them. She is seen from behind and slightly above, at the same height as the figures beside her and neither taller nor shorter than the group she belongs to, talking to a stranger in the crowd. Every other figure is a different person: none of them repeats her long straight black hair, her dusty pink hoodie or her caramel brown tote bag. She sits on the same reading level as the rest of the crowd, under the same diffuse light, at the same scale and with the same degree of integration as every figure around her.

MEI IS THE SINGLE EXCEPTION to the no-protagonist rule: one figure in the crowd is the character, and finding her is what the eye is meant to do.


NOT anime, NOT Ghibli, NOT Studio Ghibli, NOT Miyazaki, NOT manga, NOT Pixar or 3D render, NOT pencil animation look, NOT airbrush or 3D plastic shading. Avoid anime eye shapes, soft dreamy anime gradients and hard black outlines.
```