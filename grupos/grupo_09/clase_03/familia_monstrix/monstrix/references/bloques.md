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

## FORM LOCK
Todo prompt con un personaje con nombre.
```
FORM LOCK: each of these figures keeps exactly the shape, proportions and features shown in its reference image and described here: same head-to-body ratio, same body type, same eyes, ears, nose, mouth and accessories. The ice-blue one keeps exactly the proportions of his reference: a big round head almost as wide as his body, a chubby rounded body, short stubby arms and short legs, all in one smooth soft shape. Being small in the picture only makes the whole figure smaller, evenly: it never squeezes, stretches or simplifies him. Only the pose and the viewing angle may change. Every figure stands on its own, next to the others but not merged with them; every body stays whole, round and undistorted.
```

## SIZE LOCK
Todo prompt de escena con personajes con nombre. Se elige la versión según la
escena y se completa el objeto de comparación.

Escenas con monstruitos de fondo (2 a 8): va dentro de la plantilla de
buscables (`recetas.md`, B), ya escrito:
```
SIZE: each of them is exactly as tall as the small monsters standing right next to them, never taller and never closer to the camera than them. The attached reference images show their design only, not their size: in this picture they are small figures in the crowd, the same scale as their neighbors.
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
NEGATIVE: no photorealism, no live action, no realistic <building / house / shop>, no realistic furniture, no realistic human proportions, no readable writing, no readable text, no letters, no numbers, no printed text, no logos, no hard materials, no hard edges, no sharp corners, no glass, no metal, no stone, no realistic wood, no realistic icicles, no shiny gold objects in the scenery, no fire, no flames, no embers, no catastrophic destruction, no flying, no levitation, no airborne objects, no sharp debris, no giant or oversized figures, no glow or halo around any figure, no spotlight, no aerial view, no top-down view, no isometric view, no close-up, no macro, no blur, no bokeh, no empty zone, no repeated identical prop, no wall of figures, no rows of figures, no identical monsters, no extra arms, no extra legs, no extra limbs, no distorted bodies, no mixed features between characters, no dots, no spikes, no pointy bumps, no studs, no quills, no bristles on the fur, no tight framing, no cropped set pieces, no large foreground objects, no low camera, no large monsters in the foreground, no figures looking at the camera, no uniform fill of identical objects, no orange objects, no brown wood, no beige burlap, no green vegetables
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
Edición (prompts 2 y 3):
```
no changed camera, no new composition, no camera moved closer
```
Buscables (prompt 3 y escena 8). Reemplaza al NEGATIVE BASE en ese prompt
(es una edición corta). `<...>` = el accesorio del familiar; en la escena 8
se repite la frase para cada uno de los siete.
```
no changed camera, no new composition, no camera moved closer, no new objects, no changed crowd, no figure bigger than the monsters next to it, no figure in front of the crowd, no figure in the foreground, no figure in the far distance, not centered, no second ice-blue figure wearing a red scarf and red earmuffs together, no second <violet figure with a red handbag on her arm>, no copies of either figure, no distorted faces, no merged eyes, no missing third eye, no uneven eyes, no flattened head, no stretched body, no shrunken or simplified body, no fused figures, no hybrid characters, no extra limbs, no duplicate limbs, no blob shapes, no figure highlighted, no readable text, no logos, no blur, no darkening
```
