# Nakamise + Mei · prompt v5 — nivel horizonte, y sin estirar el cuello

## Lo que funciono, y lo que hay que sacarle

| | |
|---|---|
| **Funciono** | salio ilustracion, y la cara de Mei se ve. Los dos objetivos de v4 logrados. |
| **Fallo 1** | la imagen sale torcida, como una foto mal encuadrada |
| **Fallo 2** | la cara de Mei sale rara |

Antes de arreglar nada: **v4 no llevaba el preambulo de estilo y aun asi salio ilustrada.** Mi teoria de que el preambulo era el arreglo era falsa, o innecesaria. Esto se documento porque cambia lo que hay que hacer en las demas paginas: el archivo se queda **sin** preambulo, igual que lo que probaste. Lo que si cambio contra la version fotorrealista fue `camera` x9 -> 0 y `high detail` fuera. **Ese es ahora el sospechoso numero uno.**

## Fallo 1: la foto torcida no es el angulo

Son dos cosas distintas y las confundi:

- **angulo alto** = elevacion. Miras hacia abajo. Es lo que pediste.
- **torcida** = rotacion. La imagen esta girada en su propio plano. Es lo que salio.

Y la causa esta en mi prompt: te di **tres instrucciones fuera de eje al mismo tiempo**. *"built on a diagonal"*, *"tilted down around 40 degrees"*, *"vanishing point on the right side"*. Tres ejes competing, ninguna ancla ortogonal. El modelo no puede consolidar eso y elige rotar.

La palabra culpable es **`tilted`**. *Tilt* significa rotar, no mirar hacia abajo. Es literalmente la palabra del error.

**El tecnica real, y es lo que hace todo ilustrador:** en vista alta, **el horizonte se mantiene nivelado**. Miras hacia abajo, pero el borde lejano del dibujo queda horizontal. Se puede tener el punto de fuga a la derecha y la composicion asimetrica sin que la imagen se incline.

**Asimetrica no es imagen torcida.** Se puede tener el VP fuera del centro y el horizonte nivelado. Eso lodice explicitamente en el prompt nuevo, porque el modelo no lo deduce.

## Fallo 2: la cara rara es el cuello estirado

La posicion que te puse — *"stands with her head tilted back, looking up"* — **es una mala pose**, y ahora se nota: la cara quedo rara porque **estaba estirando el cuello mas de lo que un cuello da**.

Y es avoidable. Estas las dos formas naturales de que una cara se lea desde un punto de vista alto:

| | como se ve la cara | veredicto |
|---|---|---|
| acostada boca arriba | frente completa | natural en un parque |
| caminando hacia el frente del dibujo | frente a 40 grados | natural en una calle |

El problema de v4 es que en una calle **nadie camina mirando para arriba con el cuello estirado**. Es una pose de shrug, no de compras. El modelo la dibujo y por eso la cara salio rara: estaba fulfilliendo una instruccion anatomicamente mauvaise.

**La solucion es que este en la mitad que viene hacia el frente del dibujo**, que ya existe en la escena: *"half of them walking toward the front of the picture"*. Una persona caminando hacia vos, con la cabeza vertical natural, a 40 grados de camara te da la cara a 40 grados — aplastada pero legible, y sin ningun esfuerzo anatomico.

Ella deja de mirar los puestos. La gente de al lado puede seguir mirando arriba, pero ella camina.

Y un detalle extra: **deja de ser el unico con la cabeza inclinada**, y eso era una marca de singularidad que no le convenia.

## La cara: menos reglas, no mas

Tambien le quito una instruccion. v4 pedia *"her face keeps the same big eyes and the same small open mouth as the foreground figures, only reduced in size"*.

Eso es pedirle a una cara de pocos pixeles que se parezca a una cara de muchos pixeles. El modelo tiene que negociar esas dos cosas a la vez, y cuando no puede, inventa: de ahi la cara rara. Ahora no le pido que se parezca a nadie — **le pido que se dibuje bien en el estilo de su fila**, y nada mas.

## Cambios

| | v4 | v5 |
|---|---|---|
| Horizonte | sin ancla, salio torcido | **nivelado explicito**, sin inclinacion, verticales verticales |
| `tilted down 40 grados` | si — *tilt* = rotar | **`looking down at about 40 degrees`** |
| `built on a diagonal` | 2 veces | **1 vez**, reformulado como recorrido de lectura |
| Posicion de Mei | cuello estirado mirando arriba | **caminando hacia el frente del dibujo**, en la mitad que viene |
| Ojos de Mei | "los mismos que el foreground" | **"los mismos que su fila"**, sin comparacion |
| Boca | "small open mouth" | small mouth |
| Preambulo de estilo | ausente | ausente — se queda asi |

---

## EL PROMPT (copiar solo este bloque)

```
Create a BRAND NEW image from scratch. Horizontal 16:9 landscape format, edge-to-edge composition, many people each doing something different, small details to discover on a second look, no blur, no motion blur, no glow, no vignette, no border, no frame. No petals in the air, no confetti, nothing floating or falling: all pink blossoms stay attached to the trees. No written words, no legible text, no logos, no watermark, no UI.

Mei appears exactly once in this image: straight black hair falling in one smooth sheet to below her shoulder blades, a softly oversized dusty pink hoodie, ivory wide-leg trousers, a caramel brown tote bag over one shoulder.

SCENE: the traditional shopping street of Nakamise, crowded and bidirectional, on a luminous spring afternoon. The composition is asymmetric: the street runs from the lower left toward the upper right, and every stall roof, lantern row, counter and pavement line narrows toward a great temple placed off-centre in the upper right third, seen three-quarters from the side. The vanishing point is on the right side of the frame. The left side and the near foreground are side territory that the eye crosses without converging, so the depth of the street pulls to the right and the picture stays asymmetric. The viewpoint is elevated well above the street, looking down at the ground at about 40 degrees, diagonally across and along the street rather than straight down it, so the whole pavement and the crowds spread along it stay visible at once. The whole picture is level and upright: the horizon line and every roofline, awning edge, post, column and stall front stay parallel to the edges of the frame, all the verticals stand straight up and down, and nothing in the image is rotated or rolled. Asymmetry comes from where things are placed, not from the picture being tilted.
Two continuous rows of wooden stalls with fabric awnings line both sides, with counters and shelves, hanging rows of red paper lanterns, strings of lanterns crossing overhead, carved signs, banners and noren curtains, masks, framed pictures, fans, umbrellas, ceramics, tea tins, textiles, food stalls with steam, baskets of fruit, display racks, mannequins in kimono, stone paving, bollards, potted plants and abundant blooming sakura at both ends and along the sides. Stalls, awnings, lantern rows, columns, stacked goods, signboards and branches constantly hide or half-hide bodies, so a figure could easily be camouflaged among the scene.
Bottom of the picture: a foreground row of about twenty-five shoppers cut by the bottom edge, seen from behind and above, then three parallel rows behind them — people bargaining, a vendor handing something over, a child holding an adult's hand, someone holding a mask up to their face. Middle distance: the street full across its whole width, about a hundred shoppers in five parallel rows, half of them walking toward the front of the picture and half climbing away from it — browsing, buying, talking, holding drinks, carrying bags, posing for photographs in rented kimono. The half coming forward is seen from the front, so a continuous spread of faces reads frontally along the whole street. A few people in each row stop to look up at the high stall fronts, the hanging lantern rows and the signs, and the rest keep walking. The people wear clothes described with the same precision as the character: washed indigo and deep navy cardigans, oatmeal, sand and warm grey jackets, charcoal trousers, olive and moss green scarves, greyish blue shirts, canvas tote bags in olive and faded indigo, navy backpacks, straw hats, folded papers and cloth bags in their hands. No figure in this crowd is less specific than another.
Background: a progressively smaller and simpler crowd filling the narrowing street, then the temple above the crowd with sakura forming a pink canopy around its great gate, the bold reds reading as measured warm accents. The last stretch of the street stays full of figures and only loses figure size and contrast, never emptiness. Wimmelbilder logic at two scales, human density and commercial density, so the image rewards a second and third reading. No human protagonist: the eye reads the temple, then the sakura and the lanterns, then the crowd, then the stalls. Dominant colour: muted vermilion, brick red and terracotta in the temple, the stall fronts, the signs and the lanterns; dusty pink, sakura pink, salmon and coral in the blossoms and the fabrics; wood brown in the timber; beige, cream, ivory and warm grey in the paving; navy, greyish blue and brownish charcoal in the clothing and under the eaves; small sectors of pale blue sky and olive green above. Light is warm and diffuse from above and from the far right end of the street, with small contained warm areas on the stalls from lamps and no halos.

MEI — exactly one, one figure among the shoppers in the far third of the street, in the last full rows before the figures begin to shrink away, well away from the temple and away from the vanishing point in the upper right, so she sits at the far end of the depth and not in the busy near half. She is smaller than the foreground figures but still a fully drawn figure, not a speck. She is one of the shoppers walking toward the front of the picture, coming forward with the flow of the crowd, and she walks with her head in its natural upright position, so her face turns squarely out of the picture and is fully readable: her face, her eyes, the front of her hoodie and the strap of her tote crossing her chest are all visible, and no object ever crosses it. Her face is drawn in the same style as the other faces in her row, with the same big eyes and the same small mouth they all have, and only smaller in size. From the neck down she is broken by the crowd and by the merchandise around her: a display rack of masks, a stack of boxes and the shoulders of two shoppers in front of her cut across her body, so her head, her hair and her face stay clear while the rest of her is camouflaged. Many other shoppers in her row are also coming forward, so her face is one face among many in that row. Her long black hair falls below her shoulder blades; she wears a dusty pink hoodie, ivory trousers and a caramel brown tote bag over one shoulder. She is one figure among many, with no more attention on her than on any other, and no quality that sets her apart from the crowd around her. Her three anchors appear on one figure only: she is the only person in a dusty pink hoodie, the only person in ivory wide-leg trousers and the only person carrying a caramel brown tote bag, and every other figure wears a different combination of clothes.

MEI IS THE SINGLE EXCEPTION to the no-protagonist rule: exactly one figure in this crowd is the character; every other figure is one more person in the multitude.

Density grammar: three or more overlapping layers of depth, no large empty spaces, no sector empty and no sector focused only on the crowd; visual overload distributed equally between people and the environment, integrated naturally; visual hierarchy with no single human protagonist, characters always at a third or fourth reading level; props, structures, vegetation, furniture, branches, posts, awnings and shadows constantly hiding or half-hiding bodies, so a figure can easily be camouflaged among the scene.

Character style: contemporary animated cartoon caricature, like a modern cartoon series — bold simplified shapes, exaggerated rounded proportions, overly large heads, stubby simple limbs, hair as large soft rounded masses. The figures of the foreground have big expressive cartoon eyes with a big dark pupil filling not more than half of the iris, still framed by a ring of visible white sclera, tiny noses and small mouths; expressiveness comes mainly by the eyes, body posture and head direction. The figures of the mid-ground and the background keep simple minimal features — tiny noses, small mouths, small simplified eyes — and read as compact shapes inside the crowd. Mei is the single exception to that second rule: her face turned out of the picture is drawn with the same big eyes and the same small mouth as the faces around her in that row, only reduced in size, while the faces behind her keep the simple minimal features.

Architecture and nature more detailed and precise than the characters, but equally illustrated, in the same crafted language.

Finish: editorial travel-journal illustration, digital 2D, soft cel-shading, warm watercolor-like paper texture, clean thin and irregular linework in the colour of the base form, never black and never hard outlines, handcrafted, adult and contemporary. Muted, warm, nostalgic, strongly desaturated — zero digital glow, no hard contrast. Ground and every large flat plane stay inside a mid-value range of warm grey and beige, never a black mass, with visible texture, seams, cracks, painted lines and paper grain. Dark values only in hair, clothing, backpacks, signage and small shadowed zones. Light warm, natural and diffuse, with minimal soft diffuse shadows and no hard black shadows. Small contained points of warm yellow light only where the scene has real lamps or lanterns, with no halos. No dominant absolute black or optical white.

Mid-century Japanese and Swiss travel posters, Jean-Jacques Sempé, Tove Jansson, Mary Blair, Heinz Edelmann, New Yorker editorial illustration and the colour-line tradition of Winsor McCay, Maira Kalman's travel-journal voice.

NOT anime, NOT Ghibli, NOT Studio Ghibli, NOT Miyazaki, NOT manga, NOT Pixar, NOT pencil animation look, NOT airbrush or 3D plastic shading. Avoid anime eye shapes, soft dreamy anime gradients and hard black outlines.

Drawn illustration throughout: flat 2D, visible brush and paper texture, thin irregular linework, no photographic rendering.
```

## Dos reglas que salen de esta, y aplican a las otras paginas

**Regla 1 — toda pagina en angulo alto necesita horizonte nivelado escrito.** No lo deduce el modelo. Si no lo escribis, lo rota. Y la palabra prohibida es `tilted`: significa rotar, no mirar hacia abajo.

**Regla 2 — nadie estira el cuello para mostrar la cara.** Si la cara tiene que verse desde arriba, tiene que ser por la posicion del cuerpo: caminando hacia el frente, o acostada boca arriba. Un cuello estirado mirando arriba es una pose que no existe, y la cara sale rara de forma predecible.

Con estas dos, Hashima, Shibuya y las que faltan pueden ir directo a angulo alto sin pasar por esto. Si me queres, arranco con Hashima aplicando las dos reglas.