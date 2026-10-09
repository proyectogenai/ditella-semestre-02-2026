# Hanami + Mei · prompt v2 — la cara de Mei en un parque

## Me pegaste la version original, no la que arregle

El bloque `Recurring character` que viene en tu texto es el viejo: **pelo castano, blusa negra, jeans claros, sneakers negras**. Eso es Mei v1, la que congelamos hace rato. Si lo pegas tal cual, no solo te sale la Mei equivocada: el bloque incluye las reglas que nos estaban arruinando las escenas — *"one of the most legible figures in her area"*, *"a calm, uncluttered area of pavement directly behind her"*, *"her contrast a little higher"*, *"without searching"*.

Y **esta escena no tiene pavement.** Es pasto. La regla pide pavement limpio y leccion; el modelo cumple o ignora. Peor: es una pagina de pasto verde, y un cuerpo con contraste mas alto sobre pasto es un reflector humano. Eso es exactamente un spotlight.

Por eso aca **no** va el bloque viejo. Va la integracion de Mei v2 con las reglas de dificultad que si usamos.

## El problema de color: dusty pink es el color de la escena

Esto es peor que en Nakamise. Aca la paleta **es** sakura pink, dusty pink, salmon y peach. El sauce dusty pink, las mantas cream e ivory, los faroles terracotta. Si digo "la unica con hoodie dusty pink", o me equivoco de persona, o la sentence se cumple con la gente del fondo y nada.

La solucion es **repartir los valores entre los otros y dejar unica la combinacion**:

| Ancla | Por que sola no sirve | Que hago |
|---|---|---|
| Pelo negro largo | hay otras de pelo largo y oscuro | otras figuras con pelo largo |
| Pantalones ivory | cream e ivory aparecen en mantas y sabanas | otras figuras conENO claro |
| Tote caramel | hay bolsas de cuero pardas | otras figuras con bolsa parda |

Lo unico que no se repite es **la combinacion entera en una sola figura**: pelo negro en una hoja + hoodie dusty pink + ivory + tote caramel. Ningun otro tiene las cuatro.

Esto es mejor que darle un color unico, porque ademas **impide el efecto reflector**: si hay otras de pelo negro y otras con ropa clara, ninguna attr sola hace pop. Solo el conjunto.

## La cara: 40 grados y por que acostarse la resuelve

Mismo conflicto que Nakamise: a 40 grados mirandola desde arriba, una cara de pie se ve aplastada.

Pero aca hay una solucion **mucho mejor que en la calle**, porque es lo que la gente hace en un parque:

**Esta acostada boca arriba, mirando al cielo.** Una cara que apunta al cielo es la unica que un punto de vista alto ve de frente completa. Y en un picnic es lo mas natural del mundo: gente acostada, mirando las flores.

Por eso ademas:
- Se camufla mejor: esta **horizontal**, entre mantas, canastos y gente tambien acostada. De pie en un parque es un vertical entre horizontales; acostada es una horizontal mas.
- La mochila y la correa del tote se leen bien en el torso.
- No es un parche: dozens de personas en la escena estan mirando las flores.

Y no la pongo como la unica: hay varias personas acostadas mirando el cielo. Su cara es una cara mas entre las que miran arriba.

## Otros cambios

| | tu texto | v2 |
|---|---|---|
| Bloque `Recurring character` | viejo, Mei v1, pide pavement | eliminado, integracion Mei v2 |
| `high detail` | presente | **rich illustrated detail** |
| Preambulo de estilo | ausente | restituido en las primeras palabras |
| `camera looking diagonally` | `camera` x3 en total | `the viewpoint` / `a folded map` |
| Unica por color | imposible, pink por todos lados | unica la **combinacion** |
| Cara de Mei | se pierde a 40 grados | **acostada boca arriba, cara al cielo** |
| Escala | "one of the most legible" | media, tercera o cuarta lectura |

Sobre `camera`: en la escena aparece 3 veces — *"the camera looking diagonally"*, *"cameras and film cameras on a strap"*, *"cameras, drinks"* en la lista de micro-escenas. Las tres salen. En Nakamise todavia no sabemos si la palabra es la culpable, asi que en las dos paginas queda **cero**.

---

## EL PROMPT (copiar solo este bloque)

```
Create a BRAND NEW image from scratch — there is no previous image and no reference image.

Flat 2D editorial illustration, digital, soft cel-shading, warm watercolor paper texture, thin irregular linework in the colour of the base forms, handcrafted and adult and contemporary — a drawn image, not a photograph: no lens, no depth of field, no bokeh, no photographic rendering, no 3D. Horizontal 16:9 landscape, edge to edge, rich illustrated detail. Every pink blossom stays attached to the trees: no petals in the air, no confetti, nothing floating or falling. No written words, no legible text, no logos, no watermark, no UI.

Mei appears exactly once in this image: straight black hair falling in one smooth sheet to below her shoulder blades, a softly oversized dusty pink hoodie, ivory wide-leg trousers, a caramel brown tote bag over one shoulder.

SCENE: a hanami picnic afternoon on the grassy terraces of a large urban park, on a luminous spring day, seen from high above at a steep high angle, looking down across the grass so the whole ground plane and the small groups spread along it are visible at once: the people and the picnic props compete for attention, and no single area focuses solely on the people. High-angle framing from an upper terrace or hilltop edge of the park, tilted down around 40 degrees, with the viewpoint looking diagonally along the slope of the lawn: the park occupies most of the foreground and the left side, while the right side opens into a broad luminous area of grass and low treelines, with no water anywhere in the image. Asymmetric and organic composition with no dominant geometric center: a great cherry tree enters from the upper-left edge like a natural roof framing the scene from above, its trunk rising from the lawn and its branches spreading across the top of the frame, while the open grass on the right balances it. Deep perspective but less rigid than an architectural scene — no single obvious vanishing point; depth is built through the diagonal of the slope, the progressive shrinking of the groups, a line of trees and a distant pavilion and rooftops at the back, and the continuity of the lawn. Reading direction: lower-left foreground → grass and groups → open lawn and treeline → distant trees, pavilion and city rooftops, a more relaxed spatial feeling than a perfectly converging central perspective. The lawn is physically wide and open — broad enough for many picnic groups spread side by side, several groups deep across its width, with dozens of people visible in the same frame — while the density still fills it, because the groups, blankets, props and vegetation spread over the whole area without large empty patches. Every sector is packed with picnic environment, not just people: dozens of picnic blankets and sheets spread on the grass, picnic baskets, coolers, bento boxes, teapots, cups, plates, bottles, glass and thermos flasks, portable gas stoves, folding stools, small folding tables, futons, cushions, parasols, blankets and towels, backpacks, tote bags, folded maps and paper guidebooks, binoculars, folded tripods, books, fans, handbags, dogs and small pets, children with toys, bicycles lying on the grass, paper lanterns and small lamps standing on the ground, bamboo sticks and poles, bags of trash, mats, windbreaks, ropes, stones, worn dirt patches on the grass, gravel paths, low wooden fences, hedges, bushes, ferns and undergrowth, fallen petals resting on the ground, and more trees receding into the distance. Large masses of blooming sakura overlap the lawn and partially occlude figures, breaking sightlines; the big trunk, branches, bushes, hedges, blankets, lanterns, parasols and people constantly hide or half-hide bodies, so a figure could easily be camouflaged among the scene. Bottom of the frame: the nearest stretch of lawn seen from above, with large figures cropped by the frame and seen from behind and above — a foreground group around a blanket cut by the bottom edge, then several more groups behind them — people unpacking food, someone pouring tea, a person lying on the blanket, two people talking, a child running between the groups, someone adjusting a hat, a person checking the time. Mid-ground: the wide lawn completely full across its width, many separate groups of picnickers spread over the grass, sitting, standing, eating, chatting, resting, watching the landscape, playing, walking between the blankets, unpacking baskets, small families, small groups of friends, people sharing food, people with parasols and lanterns, dogs, and a scatter of people lying on their backs on blankets looking up at the blossom canopy. Background: progressively smaller figures among the trees and bushes, then more cherry trees, a low pavilion or shelter, fences and distant city rooftops and a pale sky above the treeline. Wimmelbilder logic where each picnic blanket works as an independent micro-scene: food, animals, backpacks, maps, drinks, people chatting, resting, watching the landscape — the eye can settle on one sector and find small narratives without needing to read the whole image. Completely balanced density: heavy visual overload distributed between people, picnic props and landscape, naturally integrated, nothing feeling forced. Three or more overlapping layers of depth, no large empty spaces. Small secondary situations to discover on a second look, with many spots where a person stays half-hidden by an object or a shadow. Dominant color for this scene: sakura pink, dusty pink, salmon and peach in the blossoms and the flowers, olive green, moss green and yellowish green in the grass, the foliage and the distant treelines, cream, ivory, beige and sand in the blankets and the picnic props, warm wood brown in the baskets, the fences and the pavilion, warm stone grey and brownish charcoal in the tree trunks and in the darkest accents, terracotta and small muted vermilion bursts in the lanterns, the books and the key accessories; light is warm and diffuse from the upper-right, illuminating the sakura, the flowers and the lit blankets, with soft shaded areas under the trees and no harsh solar direction. No water, no river, no lake, no boats, no bridge, no reflections, no blue surface reading as liquid anywhere in the image.

MEI — exactly one, lying on her back on a blanket in the mid-ground, in one of the thirds or quadrants of the lawn well away from the foreground, one figure among the picnickers and not the subject. Her head is turned up toward the blossom canopy above her, and because she is lying face-up her face, her eyes, the front of her hoodie and the strap of her tote crossing her chest are all visible to a viewpoint high above, and they are never crossed by any object. Her face keeps the same big eyes and the same small open mouth as the other figures, only reduced in size. From the chest down she is broken by the picnic things around her: the roll of a folded blanket, a basket, a folded parasol lying flat and the shoulder of the person lying beside her cut across her body, so her head, her hair and her face stay clear while the rest of her is camouflaged. Several other picnickers near her are also lying on their backs looking up at the blossoms, so her upturned face is one face among many looking at the sky. Her long black hair falls below her shoulder blades and spreads on the blanket; she wears a dusty pink hoodie, ivory wide-leg trousers and a caramel brown tote bag over one shoulder. She is one figure among many, with no more attention on her than on any other. Because this scene is full of both light and dark values, no single one of her traits is unique on its own: several other figures have long dark hair, several other figures wear pale cream or ivory, and a few carry brown leather bags. What is unique is the combination on one single figure — the straight black hair falling in one sheet, the dusty pink hoodie, the ivory wide-leg trousers and the caramel brown tote all on the same person — and no one else in this crowd wears all four at once.

MEI IS THE SINGLE EXCEPTION to the no-protagonist rule: exactly one figure in this crowd is the character; every other figure is one more person in the multitude.

Density grammar: three or more overlapping layers of depth, no large empty spaces, no sector empty and no sector focused only on the crowd; visual overload distributed equally between people and the environment, integrated naturally; visual hierarchy with no single human protagonist, characters always at a third or fourth reading level; props, structures, vegetation, furniture, branches, posts, awnings and shadows constantly hiding or half-hiding bodies, so a figure can easily be camouflaged among the scene.

Character style: contemporary animated cartoon caricature, like a modern cartoon series — bold simplified shapes, exaggerated rounded proportions, overly large heads, simple minimal features, tiny noses, small mouths, stubby simple limbs, hair as large soft rounded masses. Big expressive cartoon eyes with generous white sclera around a relatively small dark pupil: the eye can be large and full of life, but the pupil never fills more than half of the eye and is always surrounded by visible white space — never solid-black eyes, never oversized pupils; expressiveness comes mainly from the eyes, body posture and head direction.

Architecture and nature more detailed and precise than the characters, but equally illustrated, in the same crafted language.

Finish: editorial travel-journal illustration, digital 2D, soft cel-shading, warm watercolor-like paper texture, clean thin and irregular linework in the color of the base form (never black, never hard outlines), handcrafted, adult and contemporary.

Muted, warm, nostalgic, strongly desaturated — zero digital glow, no hard contrast, Core tokens always present: sakura pink, dusty pink, salmon and peach as spring accents; cream, ivory, beige and sand; warm wood brown, terracotta, brick red and muted vermilion as small controlled accent bursts on key objects; navy, greyish blue and washed light blue; olive green, moss green and forest green; warm stone grey and brownish charcoal.

Ground and large surfaces: every large flat plane stays inside a mid-value range — warm grey, olive and beige, never a black mass. Surfaces keep visible texture, seams, cracks, painted lines and paper grain. No ink stains, no blotches, no dark smudges, no holes of pure black, no oily gloss. Dark values appear only in hair, clothing, backpacks, signage and small shadowed zones, never spread over a large area.

Light is warm, natural and diffuse, with no harsh solar direction and minimal soft diffuse shadows, no hard black shadows. Dark values concentrate in hair, clothing, backpacks and shadowed zones; light values in the sky, the most illuminated surfaces and the blossom canopy. Small contained points of warm yellow light only where the scene has real lamps or lanterns, with no halos. No dominant absolute black or optical white. Even metal, glass and machinery keep a slight paper-grain irregularity.

Mid-century Japanese and Swiss travel posters, Jean-Jacques Sempé, Tove Jansson, Mary Blair, Heinz Edelmann, New Yorker editorial illustration and the colour-line tradition of Winsor McCay, Maira Kalman's travel-journal voice.

NOT anime, NOT Ghibli, NOT Studio Ghibli, NOT Miyazaki, NOT manga, NOT Pixar or 3D render, NOT pencil animation look, NOT airbrush or 3D plastic shading. Avoid anime eye shapes, soft dreamy anime gradients and hard black outlines.

Drawn illustration throughout: flat 2D, visible brush and paper texture, thin irregular linework, no photographic rendering.
```

## Lo que tengo que decirte del nivel de dificultad

Esta es **la pagina mas facil del atlas**, y no por el personaje: por el terreno. El pasto es un campo de color plano y uniforme, y la silueta de la combinacion — pelo negro + rosa + ivory + caramel — es una silueta horizontal que se lee contra el verde sin necesidad de subirle el contraste.

Ojo con eso. **Facil de encontrar no es facil de esconder.** Si la encontrás al primer vistazo, esta demasiado limpia: el `no protagonist` se rompio. Lo correcto aca es que se encuentre en la **segunda o tercera mirada**, no en la primera.

Y si te sale fotorrealista, el culpable numero uno es el que ya quitamos: `high detail` en la primera linea. Decime si volvio a pasar, porque con dos paginas asi puedo separar la palabra de la longitud.