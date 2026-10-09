# Shinkansen + Mei · prompt v2 — mas arriba, cara de frente, mas gente

## Los tres pedidos

| Pedido | Como quedo |
|---|---|
| mas desde arriba | **40 → 50 grados**, con el horizonte nivelado escrito |
| ver la cara de Mei | **caminando hacia el frente del cuadro**, cabeza en posicion natural — la misma receta que funciono en Nakamise v5 |
| mas gente | **~170 figuras contadas** contra el bloque sin numeros que tenia v1 |

## Por que 50 y no mas

La regla es la misma que uso en Nakamise:

| Angulo | Que se ve de una cara |
|---|---|
| 40 grados | cara completa |
| 50 grados | cara completa, un poco aplastada — sigue legible |
| 55 grados | frente y ojos, la nariz se aplana |
| 65+ grados | coronilla. La cara desaparece |

**50 es el maximo prudente**, y 55 todavia da frente y ojos. Mas alla de eso no hay cara, y cualquier pedido de cara frontal queda imposible. Si queres ir a 55, se puede — pero es el ultimo escalon antes de perder la cara.

## La receta que ya funciono

Nakamise v5 es la unica vez que pedimos cara de frente en una calle a angulo alto, y **salio la cara**. La frase que la sostuvo es esta:

> *"she walks with her head in its natural upright position, so her face turns squarely out of the picture"*

No es un parche: una persona caminando hacia vos tiene la cabeza vertical, y a 50 grados de camara la cara queda a 50 grados — aplastada pero legible. **Lo que no se puede es estirar el cuello mirando arriba**, que fue el error de Nakamise v4 y salio con la cara rara.

Y como la camara esta mirando abajo, la mitad que viene hacia el frente tiene la cara presentada al punto de vista. Por eso pido que **parte de la multitud venga hacia el frente**: asi ella no es la unica cara girada, que es lo que la volveria protagonista.

## Sobre "mas gente"

v1 no tenia ningun numero. Todos los prompts que funcionan cuentan: *"about a hundred shoppers in five parallel rows"*, *"at least sixty figures"* y asi. **La densidad sin numero es una promesa que el modelo no cumple.**

Le sume conteos en las tres capas: ~30 en el foreground cortado por el borde, ~120 en cuatro renglones a lo largo del anden, y figuras progresivamente menores hasta la esquina. Eso es ~170 cuerpos contados, contra la version v1.

---

## EL PROMPT (copiar solo este bloque)

```
Create a BRAND NEW image from scratch. There is no previous image and no reference image. Horizontal 16:9 landscape format, edge-to-edge composition, no blur, no motion blur, no glow, no vignette, no border, no frame. No petals in the air, no confetti, nothing floating or falling: all pink blossoms stay attached to the trees. No written words, no legible text, no logos, no watermark, no UI.

Mei appears exactly once in this image: straight black hair falling in one smooth sheet to below her shoulder blades, a softly oversized dusty pink hoodie, ivory wide-leg trousers, a caramel brown tote bag over one shoulder.

SCENE: a Shinkansen platform on a luminous warm spring afternoon, dense in Wimmelbilder fashion but more ordered than a city crossing — the station imposes a functional structure where travelers mostly wait, walk lengthwise or board the train, rather than circulating in every direction. The viewpoint is elevated well above the platform, on the right-hand side, looking down at the ground at about 50 degrees, steeply but never straight down, diagonally across and along the platform, so the whole platform floor, the waiting passengers and the boarding groups spread out below and stay visible at once. The whole picture is level and upright: the horizon line and every roofline, beam, column, platform edge and train line stay parallel to the edges of the frame, all the verticals stand straight up and down, and nothing in the image is rotated or rolled; the angle is very high, but the picture is not canted and nothing is tilted.
The vanishing point sits in the extreme upper-left corner of the frame, and every long line converges there: roof beams, platform edges, the train's own lines, light fixtures and the succession of columns all advance from the foreground toward that corner, producing a strong sense of length and journey — here the infrastructure itself is the visual destination, not a temple. The composition is clearly asymmetric: the right-hand side and the foreground are dominated by the long ivory-white mass of the train, close to the camera, running up toward the upper left and reading as the largest light mass in the picture; the left-hand side holds the station building, shops, benches, vending machines and greater visual complexity, seen across the platform and receding toward the same corner; between both, the platform floor stays legible. Over the roof of the train on the right, a strip of open exterior landscape and pastel sky stays visible.
Layers: at the very bottom, a foreground row of about thirty large travelers partially cropped by the bottom edge, with luggage, shopfronts and columns close to the camera, seen from behind and above; in the mid-ground, the whole width of the platform packed with about a hundred and twenty travelers in four parallel rows running along the platform — people walking in both directions, passengers with suitcases and trolleys, vendors, station staff, small conversing groups, people buying food at the counters and the machines, people looking toward the train and people boarding it; further back, progressively smaller and more compressed figures filling the whole length of the platform right up to the corner, never thinning out; at the extreme upper-left corner, at the end of the platform where all the lines converge, the bright coastal landscape of mountains, water and sakura beyond the open station. The half of the crowd walking toward the front of the picture is seen from the front, so a continuous spread of faces reads frontally along the whole platform, and every figure in it is dressed with the same precision as every other. Columns, moving luggage, signs, pillars and boarding groups constantly hide or half-hide bodies, so a figure could easily be camouflaged among the scene. No petals in the air, no confetti, nothing floating or falling — all pink blossoms stay attached to the trees. Completely balanced density: heavy visual overload distributed between crowd and railway infrastructure, naturally integrated, nothing feeling forced. Three or more overlapping layers of depth, no large empty spaces. Small secondary situations to discover on a second look, with many spots where a person stays half-hidden by an object or a shadow. No text.

MEI — exactly one figure, and she does not belong to any group of travelers and does not carry their wardrobe: she is the single person in this scene whose clothes are not part of the crowd's wardrobe. She is in the mid-ground, slightly left of the centre of the frame, in the middle of the packed rows, at the same height and at the same scale as the figures beside her, not larger and not smaller than the row she belongs to, and never the tallest or the closest figure. She is walking toward the front of the picture, coming forward with the flow of the crowd, and she walks with her head in its natural upright position, so her face turns squarely out of the picture and is fully readable: her face, her eyes, the front of her hoodie and the strap of her tote crossing her chest are all visible, and no object ever crosses it. Her face is drawn in the same style as the other faces around her, with the same big eyes and the same small mouth they all have, and only reduced in size. From the neck down she is broken by the crowd and by the railway furniture around her: a platform column, a rolling suitcase being pulled beside her and the shoulders and backs of two travelers in front of her cut across her body, so her head, her hair and her face stay clear while the rest of her is camouflaged. Many other travelers in her row are also coming forward, so her face is one face among many in that row. Her long black hair falls below her shoulder blades as one straight dark shape with no curl, no wave and nothing tied up; she wears a softly oversized dusty pink hoodie, ivory wide-leg trousers and a caramel brown tote bag over one shoulder. Her three anchors appear on one figure only: she is the only person in a dusty pink hoodie, the only person in ivory wide-leg trousers and the only person carrying a caramel brown tote bag over one shoulder, and every other figure wears a different combination of clothes. Not one of them wears a dusty pink hoodie, not one wears ivory wide-leg trousers, not one carries a caramel brown tote bag, and no two of them are dressed alike. Their hair is tied up, in short cuts, in curls, in braids, under hats or grey and streaked, and not one of them wears it as one long straight dark sheet falling below the shoulder blades.

MEI IS THE SINGLE EXCEPTION to the no-protagonist rule: exactly one figure in this scene is the character; every other figure is one more person in the multitude.

MEI IS THE ONLY COPY: exactly one figure in the whole image has straight black hair falling in one smooth sheet below her shoulder blades; exactly one wears a dusty pink hoodie; exactly one wears ivory wide-leg trousers; exactly one carries a caramel brown tote bag over one shoulder. Never two similar girls, never a twin, never a pair, never two friends or sisters dressed the same, never a duplicate, never a second copy of her anywhere in the frame: not in the background, not on another part of the platform, not in a queue, not aboard the train, not in a window or a reflection. No other figure shares her hair, her hoodie, her trousers or her bag. If two figures end up looking alike, one of them is redrawn as a completely different person with different hair, different clothes and different accessories, and only one figure in the image is Mei.

Density grammar: three or more overlapping layers of depth, no large empty spaces, no sector empty and no sector focused only on the crowd; visual overload distributed equally between people and the environment, integrated naturally; visual hierarchy with no single human protagonist, characters always at a third or fourth reading level; props, structures, vegetation, furniture, branches, posts, awnings and shadows constantly hiding or half-hiding bodies, so a figure can easily be camouflaged among the scene.

Style: contemporary animated cartoon caricature, like a modern cartoon series — bold simplified shapes, exaggerated rounded proportions, overly large heads, simple minimal features, tiny noses, small mouths, stubby simple limbs, hair treated as large rounded soft masses. Big expressive cartoon eyes with generous white sclera around a relatively small dark pupil: the eye can be large and full of life, but the pupil never fills more than half of the eye and is always surrounded by visible white space — never solid-black eyes, never oversized pupils, never pupils filling almost the whole eye. NOT anime, NOT Ghibli, NOT Studio Ghibli, NOT Miyazaki, NOT realistic — avoid anime eye shapes, avoid soft dreamy anime gradients, avoid pencil animation look, avoid hard black outlines.

Architecture and infrastructure more detailed and precise than characters, but equally illustrated — strong conceptual contrast between geometric infrastructure and organic landscape.

Editorial travel-journal illustration finish. Digital 2D, soft cel-shading, warm watercolor-like paper texture, clean thin and irregular linework in the color of the base form (never black, never hard outlines), handcrafted finish. Adult, contemporary.

Muted, warm, nostalgic, desaturated palette balanced between natural tones and industrial neutrals — zero digital glow, no hard contrast, Dominant combination: ivory + cream + beige + warm grey + greyish blue + wood brown + navy + washed blue + brownish charcoal, balanced by dusty pink, salmon, olive green, moss green, pastel sky blue and small terracotta accents; the train is ivory-white with a soft blue band, reading as the largest light mass against the darker station. Spring accents: pale pink sakura outside, pastel sky; light comes mainly from the exterior, right and background — warm natural light mixed with soft interior light, no hard shadows; shadows are diffuse, soft, relatively flat, with delicate blue-grey tones on the train and a bit more contrast on the roof structure, never reaching harsh blacks. Contrast strategic: dark values concentrate on hair, backpacks, information panels and shadowed underside of the roof; light values on train, sky and landscape; contrast strong in the foreground and decreasing with distance, with atmospheric depth but no blur. Even metal, glass and the train body keep a slight paper-grain irregularity so the technological elements stay inside the same crafted language. Architecture and infrastructure more detailed and precise than characters, but equally illustrated. High detail, many people each doing something different, small details to discover on a second look.

Mid-century Japanese and Swiss travel posters, Jean-Jacques Sempé, Tove Jansson, Mary Blair, Heinz Edelmann, New Yorker editorial illustration and the colour-line tradition of Winsor McCay, Maira Kalman's travel-journal voice.

Drawn illustration throughout: flat 2D, visible brush and paper texture, thin irregular linework, no photographic rendering.
```

## Dos advertencias sobre lo que cambio

**50 grados con el punto de fuga en la esquina es lo mas agresivo que llevamos en todo el atlas.** Son dos fuerzas juntas: el angulo empuja hacia abajo, y el VP en el extremo superior izquierdo tira la imagen hacia esa esquina. Si te queda muy forzado, la variable que hay que bajar es el VP — pasar el punto de fuga a media distancia de la esquina — y **no el angulo**, porque el angulo lo pediste y el VP es lo que se puede sacrificar.

**La cara de Mei ahora depende de la mitad que viene hacia el frente.** Si el modelo la pone en la mitad que se aleja, la cara se pierde. Por eso la frase clave no es sobre ella: es *"The half of the crowd walking toward the front of the picture is seen from the front, so a continuous spread of faces reads frontally along the whole platform."* Ella es una de esas caras. Si la mitad sale de espaldas, ella sale de espaldas tambien.

Y una nota sobre la dificultad: **este prompt esta bastante lleno.** ~170 cuerpos, angulo alto, VP en la esquina, y ademas una cara de frente. Si se vuelve demasiado denso y el modelo simplifica, no le saques la cara — **baja el conteo de figuras**, que es lo unico que se puede sacrificar sin romper lo que pediste.