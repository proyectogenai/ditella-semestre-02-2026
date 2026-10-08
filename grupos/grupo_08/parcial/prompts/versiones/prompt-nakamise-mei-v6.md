# Nakamise + Mei · prompt v6 — la ropa no se cambia

## El bug exacto, y es mio

En v5 escribi *"She is **one of the shoppers** walking toward the front of the picture"*.

Eso le asigna una **categoria**, y la categoria tiene guardarropa definido en el parrafo de la multitud:

> *"The people wear clothes described with the same precision as the character: washed indigo and deep navy cardigans, oatmeal, sand and warm grey jackets..."*

Cuando le decis "una de las compradoras", le estas diciendo de que grupo es, y el grupo ya tiene ropa asignada. El modelo tiene que resolver el choque entre "esta es una de las compradoras" y "esta viste dusty pink, ivory y caramel", y lo resuelve de las dos unicas formas que viste: **o la borra del dibujo, o le cambia la ropa.**

Y v4 tenia el mismo error pero se salvaba por otra razon: la pose rara —cabeza inclinada mirando los puestos— hacia de ella una figura distinta, no un miembro del grupo. **Al arreglar la pose le saque lo unico que la mantenia separada del grupo.**

Correccion: nunca "one of the shoppers", nunca "one of the women". Y el guardarropa de la multitud lleva una exclusion explicita.

## El segundo problema: la forma del pelo, no el color

Esto es lo que de verdad sostiene la identidad en una escena de 130 figuras: **la silueta, no el color.**

Un color a esa escala no sobrevive. Una forma si. Y "pelo largo negro" no es una forma: media multitud lo tiene. Lo que si es una forma es **"una sola lamina recta, sin rizos, sin ondas, sin coleta"** — eso casi nadie lo tiene y se lee a cualquier tamano.

Por eso el ancla principal paso a ser el pelo, y el color quedo como refuerzo.

## El tercero: la direccion no era un lugar

A ~130 figuras, "en el ultimo tercio, lado izquierdo, lejos del templo" es una direccion que describe a **docenas de personas**. Eso no es un lugar, es una zona. Y cuando la direccion no es un lugar, el modelo elige a cualquiera.

Le di una **direccion relacional**: *"the one walking past the fruit stall, immediately beside a woman carrying a basket of peaches"*. Eso si es una unica direccion fisica posible en la imagen.

Y aviso: un punto de anclaje sube la dificultad de hallazgo —un anclaje la hace encontrable al primer vistazo, y el prompt quiere tercera o cuarta lectura—. **Un solo anclaje, en un objeto de poca saliencia.** Es el maximo que me permito.

## Los cuatro arreglos

| | v5 | v6 |
|---|---|---|
| Membresia de grupo | *"one of the shoppers"* | **fuera** — es una figura, no un miembro |
| Guardarropa multitud | colisionaba con sus tres anclas | **exclusion explicita** + nadie dos igual |
| Ancla de identidad | color | **forma del pelo**: una sola lamina recta |
| Direccion | zona ("el ultimo tercio") | **un lugar**: un anclaje relacional, uno solo |

Y conservo lo de v5 que funciono: horizonte nivelado, `camera` en cero, sin cuello estirado, y el mismo opening sin preambulo de estilo.

---

## EL PROMPT (copiar solo este bloque)

```
Create a BRAND NEW image from scratch. Horizontal 16:9 landscape format, edge-to-edge composition, many people each doing something different, small details to discover on a second look, no blur, no motion blur, no glow, no vignette, no border, no frame. No petals in the air, no confetti, nothing floating or falling: all pink blossoms stay attached to the trees. No written words, no legible text, no logos, no watermark, no UI.

Mei appears exactly once in this image: straight black hair falling in one smooth sheet to below her shoulder blades, a softly oversized dusty pink hoodie, ivory wide-leg trousers, a caramel brown tote bag over one shoulder.

SCENE: the traditional shopping street of Nakamise, crowded and bidirectional, on a luminous spring afternoon. The composition is asymmetric: the street runs from the lower left toward the upper right, and every stall roof, lantern row, counter and pavement line narrows toward a great temple placed off-centre in the upper right third, seen three-quarters from the side. The vanishing point is on the right side of the frame. The left side and the near foreground are side territory that the eye crosses without converging, so the depth of the street pulls to the right and the picture stays asymmetric. The viewpoint is elevated well above the street, looking down at the ground at about 40 degrees, diagonally across and along the street rather than straight down it, so the whole pavement and the crowds spread along it stay visible at once. The whole picture is level and upright: the horizon line and every roofline, awning edge, post, column and stall front stay parallel to the edges of the frame, all the verticals stand straight up and down, and nothing in the image is rotated or rolled. Asymmetry comes from where things are placed, not from the picture being tilted.
Two continuous rows of wooden stalls with fabric awnings line both sides, with counters and shelves, hanging rows of red paper lanterns, strings of lanterns crossing overhead, carved signs, banners and noren curtains, masks, framed pictures, fans, umbrellas, ceramics, tea tins, textiles, food stalls with steam, baskets of fruit, display racks, mannequins in kimono, stone paving, bollards, potted plants and abundant blooming sakura at both ends and along the sides. Stalls, awnings, lantern rows, columns, stacked goods, signboards and branches constantly hide or half-hide bodies, so a figure could easily be camouflaged among the scene.
Bottom of the picture: a foreground row of about twenty-five shoppers cut by the bottom edge, seen from behind and above, then three parallel rows behind them — people bargaining, a vendor handing something over, a child holding an adult's hand, someone holding a mask up to their face. Middle distance: the street full across its whole width, about a hundred shoppers in five parallel rows, half of them walking toward the front of the picture and half climbing away from it — browsing, buying, talking, holding drinks, carrying bags, posing for photographs in rented kimono. The half coming forward is seen from the front, so a continuous spread of faces reads frontally along the whole street. A few people in each row stop to look up at the high stall fronts, the hanging lantern rows and the signs, and the rest keep walking. The crowd is dressed as follows, and none of them is dressed like the character or like each other: washed indigo and deep navy cardigans, oatmeal, sand and warm grey jackets, charcoal trousers, olive and moss green scarves, greyish blue shirts, canvas tote bags in olive and faded indigo, navy backpacks, straw hats, folded papers and cloth bags in their hands. Not one of them wears a dusty pink hoodie. Not one of them wears ivory wide-leg trousers. Not one of them carries a caramel brown tote bag. Their hair is tied up, in short cuts, in curls, in braids, under hats or grey and streaked, and not one of them wears it as one long straight dark sheet.
Background: a progressively smaller and simpler crowd filling the narrowing street, then the temple above the crowd with sakura forming a pink canopy around its great gate, the bold reds reading as measured warm accents. The last stretch of the street stays full of figures and only loses figure size and contrast, never emptiness. Wimmelbilder logic at two scales, human density and commercial density, so the image rewards a second and third reading. No human protagonist: the eye reads the temple, then the sakura and the lanterns, then the crowd, then the stalls. Dominant colour: muted vermilion, brick red and terracotta in the temple, the stall fronts, the signs and the lanterns; dusty pink, sakura pink, salmon and coral in the blossoms and the fabrics; wood brown in the timber; beige, cream, ivory and warm grey in the paving; navy, greyish blue and brownish charcoal in the clothing and under the eaves; small sectors of pale blue sky and olive green above. Light is warm and diffuse from above and from the far right end of the street, with small contained warm areas on the stalls from lamps and no halos.

MEI — exactly one figure, and she is not one of the shoppers and does not belong to their group: she is the single person in this crowd whose clothes are not part of the crowd's wardrobe. She is in the far third of the street, in the last full rows before the figures begin to shrink away, on the left-hand side and well away from the temple and away from the vanishing point in the upper right, so she sits at the far end of the depth and not in the busy near half. Her one fixed position in the picture is this: she is the woman walking toward the front of the picture who is passing the fruit stall on the left, immediately beside another woman carrying a basket of peaches. She is smaller than the foreground figures but still a fully drawn figure, not a speck. She walks with her head in its natural upright position, so her face turns squarely out of the picture and is fully readable: her face, her eyes, the front of her hoodie and the strap of her tote crossing her chest are all visible, and no object ever crosses it. Her face is drawn in the same style as the other faces around her, with the same big eyes and the same small mouth they all have, and only smaller in size. Her hair is the one long straight unbroken dark shape on that whole side of the street: it falls from her part as a single smooth flat sheet with no curl, no wave, no braid and nothing tied up, all of it hanging down her back below her shoulder blades, and her face is clear of it. From the neck down she is broken by the crowd and by the merchandise around her: a display rack of masks, a stack of boxes and the shoulders of two shoppers in front of her cut across her body, so her head, her hair and her face stay clear while the rest of her is camouflaged. Many other shoppers in her row are also coming forward, so her face is one face among many in that row. Her long black hair falls below her shoulder blades; she wears a softly oversized dusty pink hoodie, ivory wide-leg trousers and a caramel brown tote bag over one shoulder. She is one figure among many, with no more attention on her than on any other, and no quality that sets her apart from the crowd around her. Her three anchors appear on one figure only: she is the only person in a dusty pink hoodie, the only person in ivory wide-leg trousers and the only person carrying a caramel brown tote bag, and every other figure wears a different combination of clothes.

MEI IS THE SINGLE EXCEPTION to the no-protagonist rule: exactly one figure in this crowd is the character; every other figure is one more person in the multitude.

Density grammar: three or more overlapping layers of depth, no large empty spaces, no sector empty and no sector focused only on the crowd; visual overload distributed equally between people and the environment, integrated naturally; visual hierarchy with no single human protagonist, characters always at a third or fourth reading level; props, structures, vegetation, furniture, branches, posts, awnings and shadows constantly hiding or half-hiding bodies, so a figure can easily be camouflaged among the scene.

Character style: contemporary animated cartoon caricature, like a modern cartoon series — bold simplified shapes, exaggerated rounded proportions, overly large heads, stubby simple limbs, hair as large soft rounded masses. The figures of the foreground have big expressive cartoon eyes with a big dark pupil filling not more than half of the iris, still framed by a ring of visible white sclera, tiny noses and small mouths; expressiveness comes mainly by the eyes, body posture and head direction. The figures of the mid-ground and the background keep simple minimal features — tiny noses, small mouths, small simplified eyes — and read as compact shapes inside the crowd. Mei is the single exception to that second rule: her face turned out of the picture is drawn with the same big eyes and the same small mouth as the faces around her, only reduced in size, while the faces behind her keep the simple minimal features.

Architecture and nature more detailed and precise than the characters, but equally illustrated, in the same crafted language.

Finish: editorial travel-journal illustration, digital 2D, soft cel-shading, warm watercolor-like paper texture, clean thin and irregular linework in the colour of the base form, never black and never hard outlines, handcrafted, adult and contemporary. Muted, warm, nostalgic, strongly desaturated — zero digital glow, no hard contrast. Ground and every large flat plane stay inside a mid-value range of warm grey and beige, never a black mass, with visible texture, seams, cracks, painted lines and paper grain. Dark values only in hair, clothing, backpacks, signage and small shadowed zones. Light warm, natural and diffuse, with minimal soft diffuse shadows and no hard black shadows. Small contained points of warm yellow light only where the scene has real lamps or lanterns, with no halos. No dominant absolute black or optical white.

Mid-century Japanese and Swiss travel posters, Jean-Jacques Sempé, Tove Jansson, Mary Blair, Heinz Edelmann, New Yorker editorial illustration and the colour-line tradition of Winsor McCay, Maira Kalman's travel-journal voice.

NOT anime, NOT Ghibli, NOT Studio Ghibli, NOT Miyazaki, NOT manga, NOT Pixar, NOT photorealism, NOT pencil animation look, NOT airbrush or 3D plastic shading. Avoid anime eye shapes, soft dreamy anime gradients and hard black outlines.

Drawn illustration throughout: flat 2D, visible brush and paper texture, thin irregular linework, no photographic rendering.
```

## Si todavia falla, el orden de diagnostico

Descartaria en este orden, y **pararia en el primero que funcione**:

1. **Que no la borre** — si sigue sin aparecer, el problema es escala, no identidad. Esta es la pagina con ~130 figuras y 40 grados. La salida no es mas texto: es bajarla un nivel de profundidad.
2. **Que no le cambie la ropa** — si aparece con otra ropa, la exclusion del guardarropa no alcanzo. Se sube a dos frases negativas mas, o se saca directamente la lista de ropa de la multitud.
3. **Que aparezca en el lugar correcto** — si aparece con la ropa bien pero en cualquier lado, falla la direccion, y hay que cambiar el anclaje relacional, no la profundidad.

Y una nota sobre la palabra "one of". **Es un patron que nos va a volver a morder.** "One of the shoppers", "one of the women", "one of the people in the crowd" — todas le dicen al modelo de que grupo pertenece, y todo grupo tiene reglas. Cuando queramos que sea una figura distinta dentro de un grupo, hay que decir que **no** pertenece al grupo.