# Nakamise + Mei · prompt v3 — fixing the realistic render

**The word "camera" appears 9 times in v2. That is what broke it.**

## Measured: photographic vocabulary per prompt

| Page | photo/camera terms | Result |
|---|---|---|
| Shibuya v5 | **18** | worked |
| Nakamise v1 | 32 | - |
| **Airport v2** | **34** | **worked** |
| Hanami v1 | 42 | realistic |
| Nakamise v2 | **44** | realistic |

The breakpoint sits between 34 and 42. Breakdown of v2:

```
camera                            9
seen from                         6
toward the camera                 6
turned toward the camera          3
```

**I wrote "camera" nine times, all of it to force the frontal pose.** `turned toward the camera`, `half of them walking toward the camera`, `a continuous spread of faces is seen frontally`, `her face turned up toward the camera`.

**"camera" is the single strongest photorealism cue in an image prompt.** I put it nine times: in the framing paragraph, in the crowd paragraph and in hers. The airport prompt had one brief framing clause and nothing else; Nakamise v2 has a whole paragraph about camera, perspective and vanishing point.

So I fixed the pose problem by injecting the word that breaks the style. The frontal pose worked. It just carried a toll.

## The replacements

| v2 | v3 | why |
|---|---|---|
| *toward the camera* (6) | **toward the front of the picture** | neutral, keeps the same spatial meaning |
| *turned toward the camera* (3) | **turned back to face the viewer** | neutral |
| *the camera no longer aligned with the street axis* | **the viewpoint no longer aligned with the street axis** | "viewpoint" is a composition term, not a lens term |
| *tilted down around 28 degrees* | *tilted down around 28 degrees* | kept — degrees of angle are composition, not photography |
| **style block in paragraph 14** | **style block in the first 40 words** | strongest position |
| `high detail` (a photorealism cue) | `rich illustrated detail` | |
| `` (a negation, last line) | **positive medium assertion + named photo artifacts** | negation at the end was the weakest possible place |

## Length

2,113 → **under 900 words.** The prop inventories were cut roughly in half. That costs some density, and the way to get it back is a short second reinforcement prompt, **not** a longer single prompt.

**If this still comes out realistic, the cause is no longer the prompt.** At that point it is worth testing the same text with the style paragraph moved to the very top and nothing else changed, and if that still fails, it is a behaviour change on ChatGPT's side and the honest response is to report it rather than keep rewriting.

---

## THE PROMPT (paste only this block, not the file)

```
Flat 2D editorial illustration, digital, soft cel-shading, warm watercolor paper texture, thin irregular linework in the colour of the base forms, handcrafted and adult and contemporary — a drawn image, not a photograph: no lens, no depth of field, no bokeh, no photographic rendering, no 3D. Horizontal 16:9 landscape, edge to edge, rich illustrated detail. Every pink blossom stays attached to the trees: no petals in the air, no confetti, nothing floating or falling. No written words, no legible text, no logos, no watermark, no UI.

Mei appears exactly once in this image: straight black hair falling in one smooth sheet to below her shoulder blades, a softly oversized dusty pink hoodie, ivory wide-leg trousers, a caramel brown tote bag over one shoulder.

the traditional shopping street of Nakamise, crowded and bidirectional, on a luminous spring afternoon. The composition is built on a diagonal: the street runs from the lower right toward the upper left, and every stall roof, lantern row, counter and pavement line narrows toward a great temple placed off-centre in the upper left third, seen three-quarters from the side. The centre and right of the picture are side territory that the eye crosses without converging. The viewpoint is elevated, tilted down around 28 degrees, looking diagonally across and along the street rather than straight down it, so the whole pavement and the crowds spread along it stay visible at once.

Two continuous rows of wooden stalls with fabric awnings line both sides, with counters and shelves, hanging rows of red paper lanterns, strings of lanterns crossing overhead, carved signs, banners and noren curtains, masks, framed pictures, fans, umbrellas, ceramics, tea tins, textiles, food stalls with steam, baskets of fruit, display racks, mannequins in kimono, stone paving, bollards, potted plants and abundant blooming sakura at both ends and along the sides. Stalls, awnings, lantern rows, columns, stacked goods, signboards and branches constantly hide or half-hide bodies, so a figure could easily be camouflaged among the scene.

Bottom of the picture: a foreground row of about twenty-five shoppers cut by the bottom edge, then three parallel rows behind them — people bargaining, a vendor handing something over, a child holding an adult's hand, someone holding a mask up to their face. Half of them are seen from behind and above; several are turned back to face the viewer.

Middle distance: the street full across its whole width, about a hundred shoppers in five parallel rows, half of them walking toward the front of the picture and half climbing away from it — browsing, buying, talking, holding drinks, carrying bags, posing for photographs in rented kimono. The half coming forward is seen from the front, so a continuous spread of faces reads frontally along the whole street. The people wear clothes described with the same precision as the character: washed indigo and deep navy cardigans, oatmeal, sand and warm grey jackets, charcoal trousers, olive and moss green scarves, greyish blue shirts, canvas tote bags in olive and faded indigo, navy backpacks, straw hats, folded papers and cloth bags in their hands. No figure in this crowd is less specific than another.

Background: a progressively smaller and simpler crowd filling the narrowing street, then the temple above the crowd with sakura forming a pink canopy around its great gate, the bold reds reading as measured warm accents. Wimmelbilder logic at two scales, human density and commercial density, so the image rewards a second and third reading. No human protagonist: the eye reads the temple, then the sakura and the lanterns, then the crowd, then the stalls. Dominant colour: muted vermilion, brick red and terracotta in the temple, the stall fronts, the signs and the lanterns; dusty pink, sakura pink, salmon and coral in the blossoms and the fabrics; wood brown in the timber; beige, cream, ivory and warm grey in the paving; navy, greyish blue and brownish charcoal in the clothing and under the eaves; small sectors of pale blue sky and olive green above. Light is warm and diffuse from above and from the far side of the street, with small contained warm areas on the stalls from lamps and no halos.

MEI — exactly one, one figure among the shoppers who have stopped in the outer rows on the far side of the street, well away from the temple and from the vanishing point, seen from the front, her face and the front of her body fully visible, the front of her dusty pink hoodie facing out of the picture and the strap of her tote crossing her chest. A display rack of masks and a stack of boxes cut across her from the hips down, so her body is broken while her head, her hair and her face stay clear. Several other shoppers around her are also turned to face the viewer, so her face is one face among many. Her long black hair falls below her shoulder blades; she wears a dusty pink hoodie, ivory trousers and a caramel brown tote bag over one shoulder. She is one figure among many, with no more attention on her than on any other, and no quality that sets her apart from the crowd around her. Her three anchors appear on one figure only: she is the only person in a dusty pink hoodie, the only person in ivory wide-leg trousers and the only person carrying a caramel brown tote bag, and every other figure wears a different combination of clothes.

MEI IS THE SINGLE EXCEPTION to the no-protagonist rule: exactly one figure in this crowd is the character; every other figure is one more person in the multitude.

Density grammar: three or more overlapping layers of depth, no large empty spaces, no sector empty and no sector focused only on the crowd; visual overload distributed equally between people and the environment, integrated naturally; visual hierarchy with no single human protagonist, characters always at a third or fourth reading level; props, structures, vegetation, furniture, branches, posts, awnings and shadows constantly hiding or half-hiding bodies, so a figure can easily be camouflaged among the scene.

Character style: contemporary animated cartoon caricature, like a modern cartoon series — bold simplified shapes, exaggerated rounded proportions, overly large heads, stubby simple limbs, hair as large soft rounded masses. The figures of the foreground have big expressive cartoon eyes with a big dark pupil filling not more than half of the iris, still framed by a ring of visible white sclera, tiny noses and small mouths; expressiveness comes mainly from the eyes, body posture and head direction. The figures of the mid-ground and the background keep simple minimal features — tiny noses, small mouths, small simplified eyes — and read as compact shapes inside the crowd. Mei is the single exception to that second rule: her face is turned toward the front of the picture and is drawn with the same big eyes and the same small mouth as the foreground figures, only reduced in size, while the other faces in her row keep the simple minimal features.

Architecture and nature more detailed and precise than the characters, but equally illustrated, in the same crafted language.

Finish: editorial travel-journal illustration, digital 2D, soft cel-shading, warm watercolor-like paper texture, clean thin and irregular linework in the colour of the base form, never black and never hard outlines, handcrafted, adult and contemporary. Muted, warm, nostalgic, strongly desaturated — zero digital glow, no hard contrast. Ground and every large flat plane stay inside a mid-value range of warm grey and beige, never a black mass, with visible texture, seams, cracks, painted lines and paper grain. Dark values only in hair, clothing, backpacks, signage and small shadowed zones. Light warm, natural and diffuse, with minimal soft diffuse shadows and no hard black shadows. Small contained points of warm yellow light only where the scene has real lamps or lanterns, with no halos. No dominant absolute black or optical white.

Mid-century Japanese and Swiss travel posters, Jean-Jacques Sempé, Tove Jansson, Mary Blair, Heinz Edelmann, New Yorker editorial illustration and the colour-line tradition of Winsor McCay, Maira Kalman's travel-journal voice.

NOT anime, NOT Ghibli, NOT Studio Ghibli, NOT Miyazaki, NOT manga, NOT Pixar, NOT pencil animation look, NOT airbrush or 3D plastic shading. Avoid anime eye shapes, soft dreamy anime gradients and hard black outlines.

Drawn illustration throughout: flat 2D, visible brush and paper texture, thin irregular linework, no photographic rendering.
```

## Lo que hay que mirar en esta vuelta

Dos cosas, y son distintas:

1. **¿Volvió a ser ilustración?** Si sí, la causa era la palabra "camera" y el diagnóstico queda cerrado.
2. **¿Sigue saliendo de frente?** Porque ahora dice *"facing out of the picture"* y *"turned back to face the viewer"* en vez de "toward the camera". Si la frontalidad se perdió al sacar la palabra, entonces el tradeoff es real y hay que buscar una tercera palabra — y el candidato es **"the front of the picture"**, que ya está en el texto para la multitud.

Si pasa una y no la otra, sabés exactamente cuál de las dos palabras hacía cada trabajo.