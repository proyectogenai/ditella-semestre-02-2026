# Bloques canónicos en inglés

Se copian TAL CUAL en los prompts. Si hay que cambiar uno, se cambia acá y
nada más. Lo que va entre `<...>` se completa con lo de la escena.

## STYLE BLOCK
Va en todo prompt que arranca un chat nuevo o regenera desde cero.
```
STYLE: 3D style, smooth softened shapes, barely pointy, not realistic, furry. PALETTE: ice blue (#91d3eb), snow white and blue as the base, with the characters' colors spread across the landscape (violet, lilac, pink, deep sky blues); red appears on many elements at once, never as a single standout accent. REFERENCES: Pixar style, round kawaii cartoon characters, cozy winter world, 3D animated film still. QUALITY: high quality, smooth clean textures, professional animation lighting, no text, no logos.
```

## RENDER ANCHOR
Inmediatamente después del STYLE BLOCK. Evita que ChatGPT derive a pintura o
2D. En las ediciones dentro del mismo chat, con la imagen adjunta, ambos se
reemplazan por `Keep the same style as before.`
```
CLEAN 3D ANIMATION RENDER, Pixar-movie still; NOT a painting, not painterly. Clean 3D animated film render, professional soft winter lighting, smooth clean textures, plush fuzzy materials, no text, no logos.
```

## SEEK AND FIND
Va en todo prompt 1, justo después del párrafo de apertura. Es lo que hace
que la imagen sea DIFÍCIL: la dificultad se decide en el prompt 1 (escala y
densidad), no en el 3. `<...>` = el lugar.
```
SEEK AND FIND: this is a page of a very hard seek-and-find picture book, in the spirit of a "Where's Waldo?" page. The <place> is enormous and the camera is far away, so every small monster is very small in the picture — each one about a twentieth of the picture's height, never bigger — and there are so many of them, all different, that the eye has to search the picture slowly, face by face. No figure is big enough to be read at a glance; the picture is dense with small faces and small objects from edge to edge, with no large monsters anywhere.
```

## CAMERA
Sección CAMERA AND FOCUS de toda escena general (prompt 1). Probada en el
mercado. Se completan los `<...>`. En interiores, "at one end of the
<place>" pasa a ser "in one corner of the <room>".
```
CAMERA AND FOCUS: a very wide establishing shot of the whole <place>, pulled far back. The camera stands at one end of the <place>, raised slightly above the heads of the small monsters (about the height of a stall awning), looking across it in a frontal three-quarter view with a slight sideways rotation — never aerial, never top-down. Wide-angle lens. The whole layout of the <place> reads at a glance: <cómo corre la vista: the street runs from the bottom of the frame deep into the distance, with stalls on both sides and the lantern arch in the middle distance>. All six big set pieces are fully visible, none cut off by the frame and none filling the foreground. The near band is thin, with only a few elements at the bottom corners; most of the picture is the middle and far distance. The horizon sits close to the top edge<, with a strip of snowy rooftops and sky / in interiors: with the upper walls and part of the ceiling>. Everything is in sharp focus from front to back, no blur, no bokeh. 16:9 wide panoramic format.
```

## LOCAL CROWD
Sección de personajes del prompt 1 (escenas 2 a 8). Da el efecto de "mar de
parecidos" sin clones. `<...>` = los colores y el accesorio del familiar de
la escena (escena 2: "violet and lilac ones with long bodies, some with a
red handbag").
```
THE LOCAL CROWD: the place is full of small furry monsters of one local species, so many that they are everywhere among the heaps and along the walkways, all small (about a fifth of the height of the big set pieces) and mostly in the middle and far distance. At first glance they look alike — chubby, fuzzy, with soft fur in ice blue, sky blue, pale blue, periwinkle, lilac and violet, among them <colores y accesorio del familiar> — but no two of them are the same. Each one differs from all the others in: the number of eyes (one, two, four or five — never two eyes with a smaller third eye above them), the ears (cat ears, bunny ears, round ears, drooping ears or no ears), the body (round, pear-shaped, long, flat or tall), the size of the head, the exact shade of the fur, and at most one small accessory (a red scarf, or red earmuffs, or a red hat, or red mittens, or a red bag, or nothing — never a red scarf and red earmuffs together). Each one is busy doing something different.
```

## FAMILY TRAITS
Va una vez por prompt, antes de las fichas, siempre que aparezca algún
Monstrix (todos menos la mejor amiga).
```
FAMILY TRAITS: the members of this furry family share the same face: two round white eyes with black pupils, side by side and the same size, plus one smaller round white eye with a black pupil centered just above them, clearly separate from the other two; a round black nose; cat ears. Their fur covers their whole body, smooth and continuous. When they have fangs, the fangs hang only below the mouth line.
```

## FACE LOCK
Va en todo prompt 3 (buscables), justo después de FAMILY TRAITS. Ataca los
errores que se repitieron en las escenas 3 a 8: la cara que cambia de
especie (osito, mapache, perro), las orejas de oso, el pelo gris, el tercer
ojo que se achica a un puntito, y el personaje subido a un mueble, un tren o
un techo. Si en el prompt está la mejor amiga, se agrega al final la última
frase (entre corchetes acá; en el prompt va sin corchetes); si no está, se
saca.
```
FACE LOCK: each figure keeps the round face of its reference (cat-like for the members of the family), never a dog, wolf, raccoon, bear or mouse face, no long snout, no dark mask around the eyes, never round bear ears instead of pointed cat ears. In every face of this family the third eye is round and white with a black pupil, about two thirds the size of the other two, centered just above them and clearly visible, never a tiny dot and never missing. Each figure's fur is exactly the color written for it, never gray. Each figure stands on the floor at ground level, never on a bench, a table, a step, a heap, a train, a roof or any furniture. [The pink figure is not part of the family: she has only two eyes, no third eye, no cat ears and no fangs.]
```

## SMALL BUT CLEAN
Va en todo prompt 3, después del FACE LOCK (y de los DO NOT CONFUSE, si
hay). A tamaño chico la cara tiene pocos píxeles: este bloque hace que
ChatGPT la simplifique bien en vez de romperla. El paréntesis "(a heart
shape for the pink figure)" va solo si está la mejor amiga.
```
SMALL BUT CLEAN: each face is drawn with simple, clean shapes that read clearly: the eyes are clean white circles with black pupils, all three clearly separate, the third one centered above the other two; the nose is one round black shape (a heart shape for the pink figure); the mouth is one simple line with its fangs. A simple, correct face is always better than a detailed, broken one. Each figure has crisp, clean outlines, as sharp as the monsters around it, without any glow or highlight.
```

## DO NOT CONFUSE
Van en el prompt 3 entre el FACE LOCK y el SMALL BUT CLEAN. Probados en la
escena 8: sin ellos, ChatGPT mezcló a papá con el hermano (los dos azules) y
dibujó a la mejor amiga como las nenas rosas de alrededor.
- **Los dos azules**: va SIEMPRE que papá y el hermano están en el mismo
  prompt (escena 8). Se los pone además lejos uno del otro.
```
DO NOT CONFUSE THE TWO BLUE FIGURES: the big-bellied one (from the <Nº> image) and the student (from the <Nº> image) are two different characters, far apart in the picture, and each keeps only its own features. The big-bellied one has a thick mustache, a big round belly, a red neckerchief, violet overalls and dark boots, and no tie. The student has no mustache, no belly, no neckerchief and no overalls: he has a medium build, half-closed eyes, thin eyebrows, a slight closed smile and a red tie.
```
  y en el NEGATIVE: `no mustache on the student, no tie on the big-bellied figure, no overalls on the student`
- **La mejor amiga**: va SIEMPRE que está ella (escenas 7 y 8).
```
DO NOT CONFUSE THE PINK FIGURE WITH THE PINK GIRLS AROUND HER: the pink figure (from the <Nº> image) is copied from her own reference, not from the pink girls around her. Unlike them, she has a heart-shaped nose, never a round nose; tiny rounded ears on the very top of her head, never round ears on the sides; and a thin delicate gold chain with one tiny red pendant, never a necklace of beads. She keeps her own face from her reference: two round white cartoon eyes with black pupils and a wide smile with no teeth.
```

## FORM LOCK
Todo prompt con un personaje con nombre.
```
FORM LOCK: each of these figures keeps exactly the shape, proportions and features shown in its reference image and described here: same head-to-body ratio, same body type, same eyes, ears, nose, mouth and accessories. The ice-blue one keeps exactly the proportions of his reference: a big round head almost as wide as his body, a chubby rounded body, short stubby arms and short legs, all in one smooth soft shape. Being small in the picture only makes the whole figure smaller, evenly: it never squeezes, stretches or simplifies him. Only the pose and the viewing angle may change. Every figure stands on its own, next to the others but not merged with them; every body stays whole, round and undistorted.
```

## SIZE LOCK
Escenas con monstruitos de fondo (2 a 8): va dentro de la plantilla de
buscables (`recetas.md`, B y D), ya escrito:
```
SIZE: each of them stands on the same ground level as the small monsters right next to them, the same size as them, never taller, never standing on top of anything and never closer to the camera than them. The attached reference images show their design only, not their size: in this picture they are small figures in the crowd, the same scale as their neighbors.
```

Escena 1 (la casa, sin monstruitos):
```
SIZE: the ice-blue figure is small in the picture: shorter than one of the sofa cushions next to him and much smaller than every piece of furniture, in the middle distance of the room, never in the foreground. The attached reference image shows his design only, not his size in this picture.
```

## NEGATIVE BASE
Todo prompt de escena (prompts 1 a 3). `<...>` = el tipo de lugar. Cuando
entra el abuelo (escena 6 y escena 8), se saca "no brown wood", por su
bastón.
```
NEGATIVE: no photorealism, no live action, no realistic <building / house / shop>, no realistic furniture, no realistic human proportions, no readable writing, no readable text, no letters, no numbers, no printed text, no logos, no hard materials, no hard edges, no sharp corners, no glass, no metal, no stone, no realistic wood, no realistic icicles, no shiny gold objects in the scenery, no fire, no flames, no embers, no catastrophic destruction, no flying, no levitation, no airborne objects, no sharp debris, no giant or oversized figures, no glow or halo around any figure, no spotlight, no aerial view, no top-down view, no isometric view, no close-up, no macro, no blur, no bokeh, no empty zone, no repeated identical prop, no wall of figures, no rows of figures, no identical monsters, no extra arms, no extra legs, no extra limbs, no distorted bodies, no mixed features between characters, no dots, no spikes, no pointy bumps, no studs, no quills, no bristles on the fur, no tight framing, no cropped set pieces, no large foreground objects, no low camera, no large monsters in the foreground, no big readable faces, no cozy close view, no small room, no sparse crowd, no figures looking at the camera, no uniform fill of identical objects, no orange objects, no brown wood, no beige burlap, no green vegetables
```

## AGREGADOS AL NEGATIVE
Se suman al final del NEGATIVE BASE según el prompt de la secuencia.

Sin familia (prompts 1 y 2):
```
no main character, no named character, no family members, nobody wearing a red scarf and red earmuffs together, no identical monsters, no copies of the reference character, no two monsters with the same design
```
Escena 1, prompt 1 (la casa vacía):
```
no monsters, no people, no animals, no living creatures, no silhouettes, no hands; the only faces are on still plush toys with button eyes
```
Interiores (prompt 1 de la casa, la universidad, el museo y la tienda):
```
no roofless building, no missing ceiling, no cutaway, no dollhouse section, no open sky above the room, no snow inside except a small drift at the doors
```
Edición (prompts 2 y 3):
```
no changed camera, no new composition, no camera moved closer
```
Buscables (prompt 3, todas las escenas). Reemplaza al NEGATIVE BASE en ese
prompt (es una edición). Es el negativo exacto de la escena 8. Donde dice
`<NO SECOND de cada personaje>` van las frases NO SECOND de `fichas.md`
(una por cada personaje del prompt) y, si corresponde, los agregados de los
DO NOT CONFUSE y de la mejor amiga (también en `fichas.md`). En la escena 8
se suman además "no group of these figures, no two of these figures
together, no reunion, no central hug".
```
no changed camera, no new composition, no new scene, no redrawn background, no camera moved closer, no new objects, no changed crowd, no softening, no loss of sharpness, no figure bigger than the monsters next to it, no giant figures, no figure larger than the crowd, no figure standing on top of objects, no figure on top of trains or roofs, no figure on benches or furniture, no figure seen from behind, no figure merged with a monster of the crowd, no gray fur, no dark mask, no dog face, no wolf face, no raccoon face, no bear ears, no long snout, no tiny third eye, no smudged eyes, no melted features, no figure in the foreground, no figure in the far distance, no figure facing the camera, not centered, <NO SECOND de cada personaje>, no copies of any figure, no three eyes in a row, no teddy-bear face, no bear muzzle, no blurred or smudged face, no tiny eyes, no distorted faces, no merged eyes, no uneven eyes, no flattened head, no stretched body, no shrunken or simplified body, no fused figures, no hybrid characters, no mixed features between characters, no extra limbs, no duplicate limbs, no missing arms, no missing legs, no armless figure, no floating tools, no blob shapes, no glow, no figure highlighted, no changed format, no cropped edges, no new foreground, no readable text, no logos, no blur, no darkening
```
