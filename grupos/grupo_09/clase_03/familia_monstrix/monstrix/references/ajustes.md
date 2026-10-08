# ChatGPT y los ajustes finos

## Cómo se comporta ChatGPT
- El prompt se pega como texto y las referencias se adjuntan en el MISMO
  mensaje.
- Para editar: se adjunta la última imagen aprobada y se pega un pulso corto.
  Responde bien a la edición localizada ("change only this, keep everything
  else exactly the same").
- **Escribe texto y logos con facilidad**: la prohibición de texto legible va
  siempre, también en los pulsos.
- **Agranda a un personaje si lo describís de largo**: por eso en las escenas
  va la ficha compacta y las trabas de la REGLA 2.
- **Con varios personajes juntos, los dibuja grandes, agrupados en el centro
  y posando**: por eso en la escena 8 van desperdigados, cada uno en su
  rincón.
- **Deriva a pintura o 2D** si le falta el RENDER ANCHOR: va completo en el
  primer prompt de cada chat. Si aun así deriva, se reescribe el ancla con
  otras palabras.
- **Si recibe la escena general como edición, se queda con el encuadre
  viejo**: la escena general va siempre en un chat nuevo, desde cero.

## Reglas de los pulsos
- Siempre con la ÚLTIMA imagen aprobada adjunta. Nunca se re-describe la
  escena: si el pulso describe el lugar, el modelo inventa otro.
- Un solo problema por pulso, y cada pulso corto.
- Cada pulso cierra con la línea de restauración (abajo).
- Si un pulso deforma caras, cuerpos, geometría o layout, o cambia el
  encuadre: se vuelve a la imagen buena anterior y se reintenta con otra
  redacción. Nunca se sigue corrigiendo un render roto.
- Los pulsos son solo para emergencias (luz, nitidez, colores, texto). Todo
  lo demás (un personaje grande, deformado o que se ve de una) se resuelve
  repitiendo el mismo prompt de la secuencia (ver `recetas.md`).
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

**Un buscable salió deformado pero la escena quedó muy bien** (en vez de
repetir el prompt de buscables). Adjuntar la imagen y, como segunda, la
referencia del personaje:
```
Keep everything exactly as it is: same camera, same composition, same crowd, same objects, same light. Change only one thing: redraw the small <ice-blue figure with the red scarf and red earmuffs> <dónde está> so that it looks exactly like the character in the second attached image — same big round head, same chubby body, same short arms and legs, same three eyes, same face, same accessories — at the same small size and in the same place. Do not move, resize or change anything else.
```

**Imagen degradada después de 2-3 pulsos** (pulso de restauración puro)
```
Restore this image to its original state: bring back the bright warm daylight and full sharpness. Same composition, same figures — just cleaner: lighter, crisper, finer detail, no grain, no roughness, no darkening. Keep the same style.
```
