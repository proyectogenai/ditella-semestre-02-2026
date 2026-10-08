# Nakamise + Mei · prompt v7 — cara visible sin ser protagonista

## La evidencia que me da la razon

Cinco prompts que funcionan. Los comparo con Nakamise v5 y tres de mis consejos anteriores quedan falsos:

| Consejo mio | Los cinco que funcionan | Veredicto |
|---|---|---|
| sacar `high detail` | **los cinco lo tienen** | **falso**, no era la causa |
| sacar `camera` | **los cuatro con multitud lo tienen** | **falso**, no era la causa |
| preambulo de estilo | ninguno lo tiene | cierto, hacia falta |

Asi que el fotorrealismo de Nakamise v2 no venia de ninguna de esas tres cosas. Era otra. No se cual todavia, pero ya no la vamos a buscar en el vocabulario.

**Y como la escena de v5 salio bien, aca no toco la escena. Solo el bloque de Mei.**

## Por que fallaba: dos requisitos que las otras cinco no tienen

| | Shibuya | Escalinata | Dotonbori | Bambu | Aeropuerto | Nakamise v5 |
|---|---|---|---|---|---|---|
| Escala respecto a sus vecinos | igual | menor | igual | igual | igual | **zona que encoge** |
| Vista | espaldas | espaldas | 3/4 espaldas | **perfil** | espaldas | **de frente** |
| Cara requerida | no | no | no | **si, perfil** | no | **si, frontal** |

Son las dos unicas variables que los otros cinco mantienen constantes, y son las dos que v5 rompe.

**Y se contradicen entre si.** Una cara frontal en el ultimo tercio es imposible: ahi toda figura esta encogiendo, y una cara que encoge no tiene pixeles. El modelo tiene que elegir, y elige mal — porque le pedi las dos cosas.

La pagina no tiene un problema de prompt. Tiene un problema de diseno de escena.

## La solucion: copiar la configuracion que ya funciono

Hay una sola escena del grupo que exige cara: **Bambu**, y sale en perfil, a escala de sus vecinos, con el fondo claro detras. Ese es el patron a copiar.

En Nakamise se traduce a tres cosas:

**1. Escala de sus vecinos, no de la zona que encoge.** Sale del ultimo tercio al medio fondo. Pierde dificultad — esa es la troca real — pero gana lo que pediste: la cara.

**2. Tres cuartos, no de frente.** De frente a escala completa es una mascara sobre un fondo de multitudes: se convierte en protagonista y rompe `no protagonist`. Tres cuartos deja ver los dos ojos y la nariz, asi que "se ve la cara" es cierto, pero no es un retrato. No hay forma de tener cara frontal Y no ser protagonista: son la misma instruccion.

**3. El mecanismo de Dotonbori: no contraste en ella, claridad detras.** Es lo unico que permite "se ve la cara pero no es obvia". Ella no se destaca: lo que se destaca es que atras hay una mancha clara.

Atras de ella hay un puesto de comida con vapor. El prompt ya lo pedia en la lista de props y nunca lo uso. El vapor es blanco, sube, y las cuatro siluetas de la derecha se recortan contra el — una sola direccion de lectura, hacia ella, sin aumentarle nada a su cuerpo.

Ojo: esto **no reduce** el numero de personas que la bancan. Las cuatro figuras del vapor son las que la bancan. Lo que baja es la dificultad, porque ahora se lee con dos reglas fijas en vez de buscandola entre todo.

## El otro arreglo: copiar el bloque anti-duplicado de Dotonbori

Dotonbori es la escena que nunca tuvo problemas de ropa, y es la unica que trae el bloque `MEI IS THE ONLY COPY`. Nakamise v6 solo tenia la exclusion en el guardarropa, y no alcanza. Le sumo el bloque.

## Los cuatro cambios

| | v5 | v7 |
|---|---|---|
| Profundidad | ultimo tercio,figures que encogen | **medio fondo, escala de sus vecinos** |
| Vista | de frente | **tres cuartos** |
| Legibilidad de la cara | "fully readable", sin fondo | **vapor detras, direccion unica de lectura** |
| Anti-duplicado | solo exclusion | **+ bloque ONLY COPY de Dotonbori** |
| Escena | — | **sin tocar** |

---

## EL PROMPT (copiar solo este bloque)

```
Create a BRAND NEW image from scratch. Horizontal 16:9 landscape format, edge-to-edge composition, many people each doing something different, small details to discover on a second look, no blur, no motion blur, no glow, no vignette, no border, no frame. No petals in the air, no confetti, nothing floating or falling: all pink blossoms stay attached to the trees. No written words, no legible text, no logos, no watermark, no UI.

Mei appears exactly once in this image: straight black hair falling in one smooth sheet to below her shoulder blades, a softly oversized dusty pink hoodie, ivory wide-leg trousers, a caramel brown tote bag over one shoulder.

SCENE: the traditional shopping street of Nakamise, crowded and bidirectional, on a luminous spring afternoon. The composition is asymmetric: the street runs from the lower left toward the upper right, and every stall roof, lantern row, counter and pavement line narrows toward a great temple placed off-centre in the upper right third, seen three-quarters from the side. The vanishing point is on the right side of the frame. The left side and the near foreground are side territory that the eye crosses without converging, so the depth of the street pulls to the right and the picture stays asymmetric. The viewpoint is elevated well above the street, looking down at the ground at about 40 degrees, diagonally across and along the street rather than straight down it, so the whole pavement and the crowds spread along it stay visible at once. The whole picture is level and upright: the horizon line and every roofline, awning edge, post, column and stall front stay parallel to the edges of the frame, all the verticals stand straight up and down, and nothing in the image is rotated or rolled. Asymmetry comes from where things are placed, not from the picture being tilted.
Two continuous rows of wooden stalls with fabric awnings line both sides, with counters and shelves, hanging rows of red paper lanterns, strings of lanterns crossing overhead, carved signs, banners and noren curtains, masks, framed pictures, fans, umbrellas, ceramics, tea tins, textiles, food stalls with steam, baskets of fruit, display racks, mannequins in kimono, stone paving, bollards, potted plants and abundant blooming sakura at both ends and along the sides. Stalls, awnings, lantern rows, columns, stacked goods, signboards and branches constantly hide or half-hide bodies, so a figure could easily be camouflaged among the scene.
Bottom of the picture: a foreground row of about twenty-five shoppers cut by the bottom edge, seen from behind and above, then three parallel rows behind them — people bargaining, a vendor handing something over, a child holding an adult's hand, someone holding a mask up to their face. Middle distance: the street full across its whole width, about a hundred shoppers in five parallel rows, half of them walking toward the front of the picture and half climbing away from it — browsing, buying, talking, holding drinks, carrying bags, posing for photographs in rented kimono. The half coming forward is seen from the front, so a continuous spread of faces reads frontally along the whole street. A few people in each row stop to look up at the high stall fronts, the hanging lantern rows and the signs, and the rest keep walking. The people wear clothes described with the same precision as the character: washed indigo and deep navy cardigans, oatmeal, sand and warm grey jackets, charcoal trousers, olive and moss green scarves, greyish blue shirts, canvas tote bags in olive and faded indigo, navy backpacks, straw hats, cameras around necks, folded papers and cloth bags in their hands. Not one of them wears a dusty pink hoodie, not one wears ivory wide-leg trousers and not one carries a caramel brown tote bag, and no two of them are dressed alike. Their hair is tied up, in short cuts, in curls, in braids, under hats or grey and streaked, and not one of them wears it as one long straight dark sheet falling below the shoulder blades. No figure in this crowd is less specific than another.
Background: a progressively smaller and simpler crowd filling the narrowing street, then the temple above the crowd with sakura forming a pink canopy around its great gate, the bold reds reading as measured warm accents. The last stretch of the street stays full of figures and only loses figure size and contrast, never emptiness. Wimmelbilder logic at two scales, human density and commercial density, so the image rewards a second and third reading. No human protagonist: the eye reads the temple, then the sakura and the lanterns, then the crowd, then the stalls. Dominant colour: muted vermilion, brick red and terracotta in the temple, the stall fronts, the signs and the lanterns; dusty pink, sakura pink, salmon and coral in the blossoms and the fabrics; wood brown in the timber; beige, cream, ivory and warm grey in the paving; navy, greyish blue and brownish charcoal in the clothing and under the eaves; small sectors of pale blue sky and olive green above. Light is warm and diffuse from above and from the far right end of the street, with small contained warm areas on the stalls from lamps and no halos.

MEI — exactly one figure, and she does not belong to the shoppers' group: she is the single person in this crowd whose clothes are not part of the crowd's wardrobe. She is in the middle distance of the street, in the third row from the front of the picture, on the left-hand side, at the same height and at the same scale as the figures beside her, not smaller and not larger than the row she stands in. Her one position is fixed: she is walking across the street past a food stall whose grills send up a tall pale cloud of steam, and the steam is directly behind her. She is seen in three-quarter view, her body angled along the street and her face turned across the picture toward the far side, so the shape of her face, both eyes, her nose and the line of her mouth all read, while her head keeps the natural upright position of someone walking and her neck is not strained. Nothing is different about her: she is the same value as the figures beside her, in the same light, with no outline, no halo and no extra contrast. What makes her readable is only this: the steam behind her is pale and soft and almost empty, and her head, her hair and her three-quarter face are the darker shapes cut into it, so the eye has one single clear direction to travel and lands on her face by contrast of background, not because she is brighter or more finished than anyone else. A handful of other figures stand in front of and beside her in that steam as darker shapes too, so hers is one dark shape among a few and not the only one. From the waist down she is broken by the crowd and by the merchandise around her: the counter of the stall, a stack of boxes and the shoulders of two shoppers in front of her cut across her body, so her head, her hair and her face stay clear while the rest of her is camouflaged. Many other shoppers in her row are also seen three-quarters and across the street, so her face is one face among many in that row. Her long black hair falls below her shoulder blades as one straight dark shape with no curl, no wave and nothing tied up; she wears a dusty pink hoodie, ivory wide-leg trousers and a caramel brown tote bag over one shoulder. Her three anchors appear on one figure only: she is the only person in a dusty pink hoodie, the only person in ivory wide-leg trousers and the only person carrying a caramel brown tote bag, and every other figure wears a different combination of clothes.

MEI IS THE SINGLE EXCEPTION to the no-protagonist rule: exactly one figure in this crowd is the character; every other figure is one more person in the multitude.

MEI IS THE ONLY COPY: exactly one figure in the whole image has straight black hair falling in one smooth sheet below her shoulder blades; exactly one wears a dusty pink hoodie; exactly one wears ivory wide-leg trousers; exactly one carries a caramel brown tote bag over one shoulder. Never two similar girls, never a twin, never a pair, never two friends or sisters dressed the same, never a duplicate, never a second copy of her anywhere in the frame: not in the background, not at another stall, not in a queue, not under the lanterns, not in a window or a reflection. No other figure shares her hair, her hoodie, her trousers or her bag. If two figures end up looking alike, one of them is redrawn as a completely different person with different hair, different clothes and different accessories, and only one figure in the image is Mei.

Density grammar: three or more overlapping layers of depth, no large empty spaces, no sector empty and no sector focused only on the crowd; visual overload distributed equally between people and the environment, integrated naturally; visual hierarchy with no single human protagonist, characters always at a third or fourth reading level; props, structures, vegetation, furniture, branches, posts, awnings and shadows constantly hiding or half-hiding bodies, so a figure can easily be camouflaged among the scene.

Character style: contemporary animated cartoon caricature, like a modern cartoon series — bold simplified shapes, exaggerated rounded proportions, overly large heads, stubby simple limbs, hair as large soft rounded masses. The figures of the foreground have big expressive cartoon eyes with a big dark pupil filling not more than half of the iris, still framed by a ring of visible white sclera, tiny noses and small mouths; expressiveness comes mainly by the eyes, body posture and head direction. The figures of the mid-ground and the background keep simple minimal features — tiny noses, small mouths, small simplified eyes — and read as compact shapes inside the crowd. Mei is the single exception to that second rule: her three-quarter face is drawn with the same big eyes and the same small mouth as the foreground figures have, only reduced in size, while the faces behind her keep the simple minimal features.

Architecture and nature more detailed and precise than the characters, but equally illustrated, in the same crafted language.

Finish: editorial travel-journal illustration, digital 2D, soft cel-shading, warm watercolor-like paper texture, clean thin and irregular linework in the colour of the base form, never black and never hard outlines, handcrafted, adult and contemporary. Muted, warm, nostalgic, strongly desaturated — zero digital glow, no hard contrast. Ground and every large flat plane stay inside a mid-value range of warm grey and beige, never a black mass, with visible texture, seams, cracks, painted lines and paper grain. Dark values only in hair, clothing, backpacks, signage and small shadowed zones. Light warm, natural and diffuse, with minimal soft diffuse shadows and no hard black shadows. Small contained points of warm yellow light only where the scene has real lamps or lanterns, with no halos. No dominant absolute black or optical white.

Mid-century Japanese and Swiss travel posters, Jean-Jacques Sempé, Tove Jansson, Mary Blair, Heinz Edelmann, New Yorker editorial illustration and the colour-line tradition of Winsor McCay, Maira Kalman's travel-journal voice.

NOT anime, NOT Ghibli, NOT Studio Ghibli, NOT Miyazaki, NOT manga, NOT Pixar, NOT photorealism, NOT pencil animation look, NOT airbrush or 3D plastic shading. Avoid anime eye shapes, soft dreamy anime gradients and hard black outlines.

Drawn illustration throughout: flat 2D, visible brush and paper texture, thin irregular linework, no photographic rendering.
```

## La regla general, que aplica a todo el atlas

Esta escena era imposible de resolver con prompt, y conviene que quede escrito por que:

**En una multitud, "que se vea la cara" y "que no sea evidente" son el mismo requisito, no dos.** La cara es lo que mas draws el ojo en una figura. Por eso las otras cinco escenas que funcionan **no piden cara**: la muestran de espaldas o de perfil. Y la única que la pide, Bambu, lo hace en perfil y no de frente.

Asi que lo que se puede pedir es: **cara que se ve contra un fondo claro, no cara que se destaca por si misma.** De frente a escala completa es un retrato, y un retrato en una multitud es un protagonista. No hay redaccion que evite eso.

Si en esta pagina el requisito es "cara visible", la unica variable libre es el fondo. Todo lo demas esta bloqueado por las otras cinco escenas que si funcionan.