# Shinkansen + Mei · prompt v1 — camara derecha, punto de fuga arriba a la izquierda

## Los tres pedidos

| Pedido | Como quedo |
|---|---|
| mas desde arriba | **40 grados**, el mismo que ya probaron en Bambu y Hanami |
| desde el lado derecho | **camara alzada al lado del tren**, mirando a la izquierda |
| punto de fuga arriba a la izquierda | **extremo superior izquierdo**, con todas las lineas largas convergiendo ahi |

## La regla de Nakamise, aplicada desde el arranque

A nivel de ojo no hacía falta escribir el horizonte. **A 40 grados si**: si no lo escribis, el modelo rota la imagen y sale "la foto sacada torcida" — que fue exactamente el fallo de Nakamise v4.

Asi que la escena abre con el ancla: horizonte nivelado, todas las verticales verticales, nada rotado ni inclinado. Y **la palabra `tilted` no aparece en ninguna parte**, porque significa rotar, no mirar hacia abajo. Va `looking down at the ground at about 40 degrees`.

## Como queda la geometria

La camara esta arriba, a la derecha, mirando abajo a la izquierda. Entonces:

- **Derecha = cerca.** La masa ivory del tren, grande, corriendo hacia arriba a la izquierda.
- **Izquierda = lejos.** El edificio, las tiendas, las maquinas expendedoras, cruzando el anden, encogiendose hacia la misma esquina.
- **Centro abajo = el piso del anden**, con la gente esperando, caminando a lo largo y subiendo.

Es coherente: el lado de las tiendas ya estaba en recesion en el prompt viejo, con el punto de fuga "central-left". Ahora simplemente se va mas lejos. Y el paisaje costero que al final era "at the end" se mueve a la misma esquina, porque la esquina **es** el final del anden.

Una cosa que cambia de valor: la complejidad visual se corre hacia el fondo. El tren, al lado de la camara, es una masa grande y simple; las tiendas, al fondo, quedan densas pero chicas. Si despues te parece que el lado derecho queda vacio, no le agregues cosas al prompt — **subile el numero de figuras del foreground**, que es lo unico que ocupa el primer plano derecho sin pelear con la masa del tren.

## Sobre Mei: de espaldas, y es lo mejor que puede pasarle aca

No le pedi la cara. Los cinco prompts que funcionan la muestran de espaldas o tres cuartos de espalda, y esa es la configuracion probada — Shibuya, Escalinata, Dotonbori y Aeropuerto.

Y desde atras tiene una ventaja enorme que en las escenas de frente no tiene: **su rasgo mas fuerte es la hoja recta de pelo, y de espaldas es exactamente lo que se ve.** No necesita cara, no necesita fondo claro, no necesita nada mas. La hoja de pelo baja hasta debajo de los omoplatos, recta, sin rizos ni ondas, recortada sobre el piso del anden claro — eso se lee a cualquier escala.

Asi que esta pagina queda sin el conflicto angulo/cara que nos costo tres rondas.

**Si queres que se le vea la cara**, avisame: vuelve el conflicto, porque a 40 grados una cara frontal es el unico problema geometrico del conjunto. Tengo dos soluciones — perfil como en Bambu, o tres cuartos con fondo claro como en Dotonbori — pero son un cambio, no un ajuste.

---

## EL PROMPT (copiar solo este bloque)

```
Create a BRAND NEW image from scratch. There is no previous image and no reference image. Horizontal 16:9 landscape format, edge-to-edge composition, no blur, no motion blur, no glow, no vignette, no border, no frame. No petals in the air, no confetti, nothing floating or falling: all pink blossoms stay attached to the trees. No written words, no legible text, no logos, no watermark, no UI.

Mei appears exactly once in this image: straight black hair falling in one smooth sheet to below her shoulder blades, a softly oversized dusty pink hoodie, ivory wide-leg trousers, a caramel brown tote bag over one shoulder.

SCENE: a Shinkansen platform on a luminous warm spring afternoon, dense in Wimmelbilder fashion but more ordered than a city crossing — the station imposes a functional structure where travelers mostly wait, walk lengthwise or board the train, rather than circulating in every direction. The viewpoint is elevated well above the platform, on the right-hand side, looking down at the ground at about 40 degrees, diagonally across and along the platform, so the platform floor, the waiting passengers and the boarding groups spread out below and stay visible at once. The whole picture is level and upright: the horizon line and every roofline, beam, column, platform edge and train line stay parallel to the edges of the frame, all the verticals stand straight up and down, and nothing in the image is rotated or rolled; the angle is high, but the picture is not canted.
The vanishing point sits in the extreme upper-left corner of the frame, and every long line converges there: roof beams, platform edges, the train's own lines, light fixtures and the succession of columns all advance from the foreground toward that corner, producing a strong sense of length and journey — here the infrastructure itself is the visual destination, not a temple. The composition is clearly asymmetric: the right-hand side and the foreground are dominated by the long ivory-white mass of the train, close to the camera, running up toward the upper left and reading as the largest light mass in the picture; the left-hand side holds the station building, shops, benches, vending machines and greater visual complexity, seen across the platform and receding toward the same corner; between both, the platform floor stays legible. Over the roof of the train on the right, a strip of open exterior landscape and pastel sky stays visible.
Layers: at the very bottom, large foreground figures partially cropped, with luggage and shopfronts close to the camera; in the mid-ground, travelers with suitcases, vendors, machines and small conversing groups — passengers buying food, looking toward the train, station staff —; further back, progressively smaller figures along the platform; at the extreme upper-left corner, at the end of the platform where all the lines converge, the bright coastal landscape of mountains, water and sakura beyond the open station. Columns, moving luggage, signs, pillars and boarding groups constantly hide or half-hide bodies, so a figure could easily be camouflaged among the scene. No petals in the air, no confetti, nothing floating or falling — all pink blossoms stay attached to the trees. Completely balanced density: heavy visual overload distributed between crowd and railway infrastructure, naturally integrated, nothing feeling forced. Three or more overlapping layers of depth, no large empty spaces. Small secondary situations to discover on a second look, with many spots where a person stays half-hidden by an object or a shadow. No text.

MEI — exactly one figure, and she does not belong to any group of travelers and does not carry their wardrobe: she is the single person in this scene whose clothes are not part of the crowd's wardrobe. She is in the mid-ground, slightly left of the centre of the frame, walking lengthwise along the platform away from the viewer, at the same height and at the same scale as the figures beside her, not larger and not smaller than the row she belongs to, and never the tallest or the closest figure. She is seen from behind and slightly above, in three-quarter back view: her shoulder and the strap of her tote read, but her face is not turned toward the viewer. A column on the platform, a rolling suitcase being pulled beside her and the shoulder and the back of the traveler walking just ahead of her cut across her body, while her head and the full sheet of her hair stay clear above them. Her hair is her strongest trait from this angle: it falls from her part as one long straight unbroken dark sheet down to below her shoulder blades, with no curl, no wave, no braid and nothing tied up, and it reads as a single clean shape cut against the pale platform floor. Several other travelers walk beside and ahead of her in the same direction with their backs to the viewer, so she is one back among many and not the only figure seen from behind. Her three anchors appear on one figure only: she is the only person in a dusty pink hoodie, the only person in ivory wide-leg trousers and the only person carrying a caramel brown tote bag over one shoulder, and every other figure wears a different combination of clothes. Not one of them wears a dusty pink hoodie, not one wears ivory wide-leg trousers, not one carries a caramel brown tote bag, and no two of them are dressed alike. Their hair is tied up, in short cuts, in curls, in braids, under hats or grey and streaked, and not one of them wears it as one long straight dark sheet falling below the shoulder blades.

MEI IS THE SINGLE EXCEPTION to the no-protagonist rule: exactly one figure in this scene is the character; every other figure is one more person in the multitude.

MEI IS THE ONLY COPY: exactly one figure in the whole image has straight black hair falling in one smooth sheet below her shoulder blades; exactly one wears a dusty pink hoodie; exactly one wears ivory wide-leg trousers; exactly one carries a caramel brown tote bag over one shoulder. Never two similar girls, never a twin, never a pair, never two friends or sisters dressed the same, never a duplicate, never a second copy of her anywhere in the frame: not in the background, not on another part of the platform, not in a queue, not aboard the train, not in a window or a reflection. No other figure shares her hair, her hoodie, her trousers or her bag. If two figures end up looking alike, one of them is redrawn as a completely different person with different hair, different clothes and different accessories, and only one figure in the image is Mei.

Density grammar: three or more overlapping layers of depth, no large empty spaces, no sector empty and no sector focused only on the crowd; visual overload distributed equally between people and the environment, integrated naturally; visual hierarchy with no single human protagonist, characters always at a third or fourth reading level; props, structures, vegetation, furniture, branches, posts, awnings and shadows constantly hiding or half-hiding bodies, so a figure can easily be camouflaged among the scene.

Style: contemporary animated cartoon caricature, like a modern cartoon series — bold simplified shapes, exaggerated rounded proportions, overly large heads, simple minimal features, tiny noses, small mouths, stubby simple limbs, hair treated as large rounded soft masses. Big expressive cartoon eyes with generous white sclera around a relatively small dark pupil: the eye can be large and full of life, but the pupil never fills more than half of the eye and is always surrounded by visible white space — never solid-black eyes, never oversized pupils, never pupils filling almost the whole eye. NOT anime, NOT Ghibli, NOT Studio Ghibli, NOT Miyazaki, NOT photorealism, NOT realistic — avoid anime eye shapes, avoid soft dreamy anime gradients, avoid pencil animation look, avoid hard black outlines.

Architecture and infrastructure more detailed and precise than characters, but equally illustrated — strong conceptual contrast between geometric infrastructure and organic landscape.

Editorial travel-journal illustration finish. Digital 2D, soft cel-shading, warm watercolor-like paper texture, clean thin and irregular linework in the color of the base form (never black, never hard outlines), handcrafted finish. Adult, contemporary.

Muted, warm, nostalgic, desaturated palette balanced between natural tones and industrial neutrals — zero digital glow, no hard contrast, no photorealism. Dominant combination: ivory + cream + beige + warm grey + greyish blue + wood brown + navy + washed blue + brownish charcoal, balanced by dusty pink, salmon, olive green, moss green, pastel sky blue and small terracotta accents; the train is ivory-white with a soft blue band, reading as the largest light mass against the darker station. Spring accents: pale pink sakura outside, pastel sky; light comes mainly from the exterior, right and background — warm natural light mixed with soft interior light, no hard shadows; shadows are diffuse, soft, relatively flat, with delicate blue-grey tones on the train and a bit more contrast on the roof structure, never reaching harsh blacks. Contrast strategic: dark values concentrate on hair, backpacks, information panels and shadowed underside of the roof; light values on train, sky and landscape; contrast strong in the foreground and decreasing with distance, with atmospheric depth but no blur. Even metal, glass and the train body keep a slight paper-grain irregularity so the technological elements stay inside the same crafted language. Architecture and infrastructure more detailed and precise than characters, but equally illustrated. High detail, many people each doing something different, small details to discover on a second look.

Mid-century Japanese and Swiss travel posters, Jean-Jacques Sempé, Tove Jansson, Mary Blair, Heinz Edelmann, New Yorker editorial illustration and the colour-line tradition of Winsor McCay, Maira Kalman's travel-journal voice.

Drawn illustration throughout: flat 2D, visible brush and paper texture, thin irregular linework, no photographic rendering.
```

## Tres notas sobre la dificultad

**El punto de fuga en la esquina es la cosa mas dificil que pediste.** Un VP en el borde del cuadro es mucho mas agresivo que uno en el centro: toda la escena tira hacia una esquina y el ojo la sigue ahi sin resistencia. En Nakamise el VP a la derecha funciono, pero estaba a media distancia; **extremo superior izquierdo** es una version mas fuerte. Si te queda demasiado forzado o muy vacio el lado derecho, el ajuste es subir figuras en el foreground, no tocar la geometria.

**El tren es la masa mas grande del cuadro.** Y ocupa la derecha, que es la cercana a la camara. Si algo domina, es eso — no Mei, pero el prompt se apoya en el tren. Si queres que el equilibrio se corra a la multitud, basta con que el foreground derecho cargue mas cuerpos.

**Y es la ultima escena que necesita que la figura se lea de atras.** Con esto quedan ocho escenas con tres configuraciones de pose distintas: de espaldas, perfil, y tres cuartos con fondo claro. Si queres abrir la cuarta — cara de frente — decimelo antes de escribirla, porque esa si tiene limite geometrico y no quiero descubrirlo gastando generaciones.