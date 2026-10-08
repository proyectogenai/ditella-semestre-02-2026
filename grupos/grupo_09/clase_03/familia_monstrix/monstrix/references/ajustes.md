# ChatGPT y los ajustes finos

## Cómo se comporta ChatGPT
- El prompt se pega como texto y las referencias se adjuntan en el MISMO
  mensaje.
- Para editar: se adjunta la última imagen aprobada y se pega un pulso corto.
  Responde bien a la edición localizada ("change only this, keep everything
  else exactly the same").
- **Escribe texto y logos con facilidad**: la prohibición de texto legible va
  siempre, también en los pulsos.
- **Agranda a un personaje si lo describís de largo**: por eso la frase de
  tamaño va ANTES de la descripción, con las trabas de la REGLA 2.
- **Con varios personajes juntos, los dibuja grandes, agrupados en el centro
  y posando**: por eso en la escena 8 van desperdigados, cada uno en su
  rincón.
- **Deriva a pintura o 2D** si le falta el RENDER ANCHOR: va completo en el
  primer prompt de cada chat. Si aun así deriva, se reescribe el ancla con
  otras palabras.
- **Si recibe la escena general como edición, se queda con el encuadre
  viejo**: la escena general va siempre en un chat nuevo, desde cero.
- **Mezcla referencias parecidas**: dos personajes del mismo color (papá y
  el hermano) salen mezclados si están cerca y sin un bloque DO NOT CONFUSE.
- **Funde al personaje con sus parecidos**: si hay un monstruito de la
  multitud con el mismo disfraz al lado, lo dibuja como ese monstruito (papá
  de espaldas entre los mecánicos; la mejor amiga como las nenas rosas).
  Por eso: separado de ellos, con la cara girada y con DO NOT CONFUSE.
- **Atrás deforma**: lejos, la cara tiene pocos píxeles y la rompe. Los
  personajes van siempre en la distancia media.
- **Cada edición nueva retoca lo anterior**: una segunda tanda de personajes
  deformó a la primera. Los personajes entran todos en un solo prompt 3.

## Reglas de los pulsos
- Siempre con la ÚLTIMA imagen aprobada adjunta. Nunca se re-describe la
  escena: si el pulso describe el lugar, el modelo inventa otro.
- Un solo problema por pulso, y cada pulso corto.
- Cada pulso cierra con la línea de restauración (abajo).
- Si un pulso deforma caras, cuerpos, geometría o layout, o cambia el
  encuadre: se vuelve a la imagen buena anterior y se reintenta con otra
  redacción. Nunca se sigue corrigiendo un render roto.
- **Los pulsos NO forman parte de la secuencia del TP** (la consigna pide
  que todo salga de una, sin arreglos según la situación). En la entrega,
  todo se resuelve repitiendo el mismo prompt de la secuencia (ver
  `recetas.md`). Los pulsos quedan solo para usos fuera de la entrega.
- Cada render aprobado se guarda versionado (`escena_03_v1.jpeg`, `v2`…).

## Pulsos
Todos terminan con:
```
RESTORE also: bring back the original bright warm daylight and razor-sharp fine detail of the approved image — no darkening, no grain, no roughness, no blur on any layer, everything perfectly crisp.
```

**Luz fría u oscura**
```
Keep everything exactly as it is. Change only the light: warm bright mid-morning winter light, the snow glows softly instead of going blue, nothing dark or cold.
```

**Borrosa**
```
Make this image sharper. Same scene, same everything — just increase clarity: crisper edges, no blur, no soft focus.
```

**Colores fuera de paleta** (marrón, beige, gris en el escenario)
```
Keep everything exactly as it is. Change only the colors of the scenery: remove all brown, tan, beige and gray tones; the plush must read as the fresh ice-blue winter palette with violet, lilac, pink, deep blues and red accents. Do not change any character.
```

**Texto o logos**
```
Remove all text, letters, numbers and logos from every surface; keep everything else exactly as it is.
```

**Un buscable salió deformado** (SOLO fuera de la entrega; en la secuencia
del TP se repite el prompt 3). De a UN personaje por pulso.
Adjuntar la imagen y, como segunda, la referencia de ESE personaje. Se nombra
al personaje por cómo se ve y dónde está en la imagen, se protege al otro
buscable y la cara se escribe entera:
```
Keep everything exactly as it is: same camera, same composition, same crowd, same objects, same light, the same format and framing, and keep <el otro buscable: the small ice-blue figure with the red earmuffs and red scarf> exactly as it is. Change only one thing: redraw <el deformado, por cómo se ve y dónde está: the small blue figure in violet overalls with the red neckerchief, holding a hammer at the giant cutting wheel on the right> so that it looks exactly like the character in the second attached image, not like the monsters around it — <su cara escrita entera, cada rasgo con "the same"; en un Monstrix: two big round white eyes with black pupils side by side and one smaller eye centered above them (never three eyes in a row), the same pointed cat ears, the same round black nose, la boca y los colmillos de su ficha; después "the same two arms and two legs", el cuerpo y los accesorios de su ficha> — a clear, clean, friendly face, at the same small size and in the same place. Do not move, resize or change anything else.
RESTORE also: bring back the original bright warm daylight and razor-sharp fine detail of the approved image — no darkening, no grain, no roughness, no blur on any layer, everything perfectly crisp.
```
Si el pulso deforma algo más, se vuelve a la imagen anterior y se repite el
mismo pulso. Nunca se corrige encima de una imagen rota.

**Imagen degradada después de 2-3 pulsos** (pulso de restauración puro)
```
Restore this image to its original state: bring back the bright warm daylight and full sharpness. Same composition, same figures — just cleaner: lighter, crisper, finer detail, no grain, no roughness, no darkening. Keep the same style.
```
