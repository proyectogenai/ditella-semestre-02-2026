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

## FAMILY TRAITS
Va una vez por prompt, antes de las fichas, siempre que aparezca algún
Monstrix (todos menos la mejor amiga).
```
FAMILY TRAITS: the members of this furry family share the same face: two round white eyes with black pupils plus a smaller third eye centered between and slightly above them, a round black nose and cat ears. Their fur covers their whole body, smooth and continuous. When they have fangs, the fangs hang only below the mouth line.
```

## FORM LOCK
Todo prompt con un personaje con nombre.
```
FORM LOCK: each of these figures keeps exactly the shape, proportions and features shown in its reference image and described here: same head-to-body ratio, same body type, same eyes, ears, nose, mouth and accessories. Only the pose and the viewing angle may change. Whatever hides a figure is a separate object standing in front of it; every body stays whole, round and undistorted.
```

## SIZE LOCK
Todo prompt de escena con personajes con nombre. Se elige la versión según la
escena y se completa el objeto de comparación.

Escenas con monstruitos de fondo (2 a 8):
```
SIZE: every figure described above is small in the picture, the same height as the small background monsters and never taller, standing in the middle or far distance, never in the foreground. The ice-blue one is the smallest of all: no taller than the small background monsters, slightly smaller if anything, and shorter than the <objeto concreto al lado suyo> next to him. The attached reference images show the design of each figure only, not its size in this picture.
```

Escena 1 (la casa, sin monstruitos):
```
SIZE: the ice-blue figure is small in the picture: shorter than one of the sofa cushions next to him and much smaller than every piece of furniture, in the middle distance of the room, never in the foreground. The attached reference image shows his design only, not his size in this picture.
```

## NEGATIVE BASE
Todo prompt de escena (pasos 1, 2 y 3). `<...>` = el tipo de lugar.
```
NEGATIVE: no photorealism, no live action, no realistic <building / house / shop>, no realistic furniture, no realistic human proportions, no readable writing, no readable text, no letters, no numbers, no printed text, no logos, no hard materials, no hard edges, no sharp corners, no glass, no metal, no stone, no realistic wood, no realistic icicles, no shiny gold objects in the scenery, no fire, no flames, no embers, no catastrophic destruction, no flying, no levitation, no airborne objects, no sharp debris, no giant or oversized figures, no glow or halo around any figure, no spotlight, no aerial view, no top-down view, no isometric view, no close-up, no macro, no blur, no bokeh, no empty zone, no repeated identical prop, no wall of figures, no crowd, no carpet of monsters, no rows of figures, no extra arms, no extra legs, no extra limbs, no distorted bodies, no mixed features between characters, no dots, no spikes, no pointy bumps, no studs, no quills, no bristles on the fur
```

## AGREGADOS AL NEGATIVE
Se suman al final del NEGATIVE BASE según el paso.

Pasos 1 y 2 (sin personajes con nombre):
```
no main character, no named character, no family members
```
Escena 1, pasos 1 a 3a (la casa vacía):
```
no monsters, no people, no animals, no creatures, no silhouettes, no portraits, no hands, no eyes, no faces, no toys with faces or animal anatomy
```
Paso 2 (densidad):
```
no changed camera, no new composition
```
Paso 3 y escena 8 (personajes con nombre). En escena 8 se saca "not centered,
not in the middle of the frame" para los demás, pero no para la figura
celeste:
```
not centered, not in the middle of the frame, not in the foreground, no giant or oversized figures, no enlarged characters, no figure bigger than the background monsters, no hero framing, no distorted bodies, no changed proportions, no distorted faces, no fused figures, no hybrid characters, no duplicate limbs, no blob shapes, no second ice-blue figure, no copies of any figure
```
