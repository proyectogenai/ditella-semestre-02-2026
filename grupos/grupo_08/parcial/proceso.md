# Proceso — El diario de Mei (Grupo 08)

## Contexto
Atlas de 8 escenas estilo "¿Dónde está Wally?" para el parcial de IA Generativa y Diseño. Mei aparece escondida una sola vez en cada escena, siguiendo un sistema escrito (skill).

## 1. Prompts: cómo definimos el sistema
- **Bloque madre congelado**: partimos de un prompt largo estructurado en inglés (apertura + descripción de Mei + Capa 1 + MEI'S PLACEMENT + SINGLE EXCEPTION + ONLY COPY + Density grammar + Character style + Architecture + Finish + paleta + Ground + Light + referencias + negaciones). El objetivo fue mantener el lenguaje idéntico entre escenas para garantizar reproducibilidad.
- **Regla de variación**: variamos por página: Capa 1 (escena), perspectiva, estructura espacial, distribución de la multitud, elemento dominante, microacciones y placement de Mei. Nunca reutilizamos el mismo punto de fuga.
- **Anti-duplicadas**: agregamos "MEI IS THE ONLY COPY" con los tres anclajes (buzo rosa empolvado, pantalón ancho marfil, tote marrón caramelo) como defensa contra duplicados.
- **Placement con dos oclusores**: exigimos que dos cosas se crucen delante de Mei (overture/oclusión) para que no destaque y forme parte de la multitud.

**Por qué:** usar un bloque congelado evita que el modelo "remezcle" el estilo escena a escena. Las zonas variables obligan a que las 8 sean distintas entre sí.

## 2. Decisiones de diseño
- **Rediseño de Mei**: adoptamos la versión definitiva (`personaje-mei-final.png`) — pelo negro lacio en hoja lisa hasta escápulas, buzo rosa empolvado oversize, pantalón ancho marfil, tote marrón caramelo. Sin anteojos, sin cámara, sin mochila roja.
- **Ruta híbrida**: generar Mei dentro de la escena con placement, y solo corregir posición/escala (±10%) y nitidez en Figma/Photoshop. Nunca alterar su identidad.
- **Modelo único**: ChatGPT (Images). No usamos Gemini/Nano Banana (coherencia entre escenas).
- **16:9 horizontal**, edge-to-edge, densidad alta con múltiples capas de profundidad.
- **Estilo editorial ilustrado**: cel-shading, linework irregular, textura tipo papel acuarelado, desaturado, cálido, sin glow/vigneta/borde. 
- **Sacar "photorealism"**: tras probar sin referencia y ver drift a foto, quitamos "photorealism" de las negaciones. Con eso se mantuvo la estética que buscábamos.
- **Novena escena (test)**: Jimbocho — perspectiva a altura de primer piso, calle estrecha que esconde el punto de fuga, ambiente de librerías usadas. Pasó el test con referencia adjunta.

## 3. Versiones intermedias
- `prompts/versiones/`: 31 archivos con iteración por escena (v1→v7 según corresponda). Muestran ajustes de placement, oclusión, densidad y restricciones.
- `prompts/banco_de_prompts.md`: evolución del bloque madre y decisiones tomadas.
- `prompts/escenas-finales.md`: los 8 prompts tal como se usaron para generar las páginas finales.
- Iteraciones de imagen: `imagenes/escena-shibuya*.png/.jpeg` y la variante de personaje.

## 4. Qué falló y qué corregimos
- **Mei duplicada o mal oculta** → agregamos "MEI IS THE ONLY COPY", reforzamos dos oclusores, máximo 40% tapada, tres anclajes obligatorios.
- **Drift hacia fotorealismo** → probamos sin la imagen adjunta: tendía a foto. Solución: mantener referencia `personaje-mei-final.png` adjunta SIEMPRE al generar, y quitamos "photorealism" de las negaciones del bloque. 
- **Estilo poco estable entre chats** → usar bloque madre congelado palabra por palabra + referencia canónica.
- **Búsqueda difícil/imposible** → ajustamos oclusión (no tapar todo) y nivel intermedio; exigimos que siempre se lean los anclajes.
- **Confusión de referencias** → dejamos clara la canónica (`personaje-mei-final.png`) y la variante (`personaje-mei-variante.png`) en skill.

## 5. Material del proceso
- Todas las versiones intermedias están en `prompts/versiones/`.
- Capturas/iteraciones en `imagenes/` (shibuya iteraciones). 
- Skill viva documentada en `identidad-el-diario-de-mei/SKILL.md`.

## Anexo: Prompt del sistema (bloque madre)

### Prompt completo usado (base congelada)
```text
Create a BRAND NEW hand-drawn editorial illustration from scratch — warm,
muted, strongly desaturated 2D cartoon illustration with soft cel-shading,
clean irregular linework and watercolor-like paper texture: a travel-journal
drawing, never a photograph, never a 3D render.
Horizontal 16:9 landscape format, edge-to-edge composition, many people each
doing something different, small details to discover on a second look, no
blur, no motion blur, no glow, no vignette, no border, no frame. No petals
in the air, no confetti, nothing floating or falling: all pink blossoms stay
attached to the trees. No written words, no legible text, no logos, no
watermark, no UI.

Mei appears exactly once in this image: straight black hair falling in one
smooth sheet to below her shoulder blades, a softly oversized dusty pink
hoodie, ivory wide-leg trousers, a caramel brown tote bag over one shoulder.

[CAPA 1 — ESCENA: descripción del lugar, momento y situación, en inglés]

MEI'S PLACEMENT IN THIS SCENE — Mei appears EXACTLY ONCE, [POSICIÓN],
[OCLUSORES: dos cosas que se cruzan por delante de ella], [QUÉ SE ASOMA:
qué parte de ella aparece en el hueco]. She stands at the same height and
at the same depth as the figures beside her, her long black hair merging
with the dark hair masses of the figures in front of her, so her outline is
broken and she belongs to the crowd before she reads as a single person.
[ÁNGULO Y ACCIÓN]. She sits on the same reading level, under the same
diffuse light and at the same scale as every figure around her. Her three
anchors appear on one figure only: she is the only person in a dusty pink
hoodie, the only person in ivory wide-leg trousers and the only person
carrying a caramel brown tote bag, and every other figure wears a different
combination of clothes.

MEI IS THE SINGLE EXCEPTION to the no-protagonist rule: exactly one figure
in this crowd is the character; every other figure is one more person in
the multitude.

MEI IS THE ONLY COPY: exactly one figure in the whole image has straight
black hair falling in one smooth sheet below her shoulder blades; exactly
one wears a dusty pink hoodie; exactly one wears ivory wide-leg trousers;
exactly one carries a caramel brown tote bag over one shoulder. Never two
similar girls, never a twin, never a pair, never two friends or sisters
dressed the same, never a duplicate, never a second copy of her anywhere in
the frame: not in the background, not at another stall, not in a queue, not
under the lanterns, not in a window or a reflection. No other figure shares
her hair, her hoodie, her trousers or her bag. If two figures end up looking
alike, one of them is redrawn as a completely different person with
different hair, different clothes and different accessories, and only one
figure in the image is Mei.

Density grammar: three or more overlapping layers of depth, no large empty
spaces, no sector empty and no sector focused only on the crowd; visual
overload distributed equally between people and the environment, integrated
naturally; visual hierarchy with no single human protagonist, characters
always at a third or fourth reading level; props, structures, vegetation,
furniture, branches, posts, awnings and shadows constantly hiding or
half-hiding bodies, so a figure can easily be camouflaged among the scene.

Character style: contemporary animated cartoon caricature, like a modern
cartoon series — bold simplified shapes, exaggerated rounded proportions,
overly large heads, stubby simple limbs, hair as large soft rounded masses.
The figures of the foreground have big expressive cartoon eyes with a big
dark pupil filling not more than half of the iris, still framed by a ring of
visible white sclera, tiny noses and small mouths; expressiveness comes
mainly from the eyes, body posture and head direction. The figures of the
mid-ground and the background keep simple minimal features — tiny noses,
small mouths, small simplified eyes — and read as compact shapes inside the
crowd.

Architecture and nature more detailed and precise than the characters, but
equally illustrated, in the same crafted language.

Finish: editorial travel-journal illustration, digital 2D, soft cel-shading,
warm watercolor-like paper texture, clean thin and irregular linework in the
color of the base form (never black, never hard outlines), handcrafted,
adult and contemporary.

Muted, warm, nostalgic, strongly desaturated — zero digital glow, no hard
contrast. Core tokens always present: sakura pink, dusty pink, salmon and
peach as spring accents; cream, ivory, beige and sand; warm wood brown,
terracotta, brick red and muted vermilion as small controlled accent bursts
on key objects; navy, greyish blue and washed light blue; olive green, moss
green and forest green; warm stone grey and brownish charcoal.

Ground and large surfaces: warm grey and beige mid-values, visible texture,
seams, cracks, painted lines, paper grain. No ink stains, no blotches, no
dark smudges, no holes of pure black, no oily gloss.

Light is warm, natural and diffuse, with no harsh solar direction and
minimal soft diffuse shadows, no hard black shadows. Small contained points
of warm yellow light only where real lamps/lanterns exist, no halos. No
dominant absolute black or optical white. Water is pictorial with
fragmented brushstrokes and warm reflected highlights.

Mid-century Japanese and Swiss travel posters, Jean-Jacques Sempé, Tove
Jansson, Mary Blair, Heinz Edelmann, New Yorker editorial illustration and
the colour-line tradition of Winsor McCay, Maira Kalman's travel-journal
voice.

NOT anime, NOT Ghibli, NOT Studio Ghibli, NOT Miyazaki, NOT manga, NOT
Pixar or 3D render, NOT pencil animation look, NOT airbrush or 3D plastic
shading. Avoid anime eye shapes, soft dreamy anime gradations and hard black
outlines.
```

### Por qué elegimos este bloque (y no otro)
- **Estilo primero (ancla):** colocamos la técnica ilustrada al inicio para forzar al modelo a leerla antes que los detalles arquitectónicos (evita drift a foto). Esto funcionó especialmente después de quitar `photorealism` de las negaciones.
- **Bloque congelado:** asegura reproducibilidad entre las 8 escenas. Solo cambian `[CAPA 1]` y los 4 huecos del placement.
- **Densidad explícita ("Density grammar"):** obliga a multitudes con capas, sin espacios vacíos y sin foco único en un protagonista (necesario para lógica Wimmelbilder).
- **Anti-duplicados (`MEI IS THE ONLY COPY`):** protege contra el error más frecuente (aparecen dos Meis). Obliga a regenerar si hay duplicado.
- **Placement con oclusores:** dos elementos cruzando por delante rompen el contorno, integran a Mei en la multitud y construyen la dificultad de búsqueda (intermedia, nunca imposible).
- **Tres anclajes obligatorios:** garantizan reconocimiento aun con oclusión (≤40%).
- **Referencias ilustradas (no fotográficas):** Sempé, Mary Blair, Kalman etc. guían el look editorial/cartoon ilustrado, alejándolo de anime/3D/foto.
- **Restricciones negativas precisas:** lista corta y concreta (sin bordes, sin texto, sin bloom, pétalos pegados a árboles) para reducir ambigüedad.
