# Shibuya + Mei · prompt v4

**v3 → v4: ojos.** Decisión tomada: ojos grandes con pupila grande **solo en primer plano**; el resto de la escena con caras simplificadas.

**Por qué funciona este arrangement (y es lo que hay que registrar):** el problema de v3 no era la falta de una afirmación "pupila grande", era que convivían tres instrucciones anclando la pupila chica (`relatively small dark pupil` / `the pupil never fills more than half` / `never oversized pupils`). Agregar una cuarta en sentido contrario no suma: promedia. El arreglo fue **borrar las tres y conservar el límite numérico, reformulado en positivo** — "not more than half of the iris", con "iris" en lugar de "eye" y sin un solo "never". Mismo número que tu prompt original, otra fórmula.

También se reescribió `simple minimal features, tiny noses, small mouths`: antes aplicaba a **todas** las figuras y arrastraba los ojos de primer plano hacia abajo. Ahora está acotado al medio fondo y al fondo, que es donde querés que Simplifique.

**El número de figuras no cambió:** siguen siendo 60-80, como aceptaste. Consecuencia directa: **a 80 figuras los ojos de primer plano son los únicos que se dibujan con detalle real.** El resto de la multitud se resuelve como masses y siluetas, que es lo que dice el brief.

**Consecuencia que todavía no decidiste — y es importante:** Mei está en **medio fondo**. Con esta regla, sus ojos caen en el bucket de "simplified". O sea: **los ojos dejarán de ser parte de la identidad de Mei** en Shibuya y en cualquier escena donde no esté en primer plano. Su sistema de identificación queda reducido a tres señales: pelo largo negro + hoodie dusty pink + tote caramel.

Esto es una decisión de sistema, y tiene dos salidas limpias:
- **(a) Los ojos no son identidad de Mei.** Entonces lo escribís así en la skill y listo: la reconocieron silueta, color y objeto. Funciona en las 8 páginas.
- **(b) Los ojos sí son identidad.** Entonces tu regla de "nunca en primer plano" tiene una excepción y tenés que decidir en qué páginas abre la excepción.

Yo voto por (a), porque un atlas de 8 páginas se reconoce por **forma y color**, no por expresión facial a 40 píxeles. Pero es tu criterio.

---

## EL PROMPT v4 (copiá desde acá)

```
Create a BRAND NEW image from scratch. Horizontal 16:9 landscape format, edge-to-edge composition, high detail, many people each doing something different, small details to discover on a second look, no blur, no motion blur, no glow, no vignette, no border, no frame. No petals in the air, no confetti, nothing floating or falling: all pink blossoms stay attached to the trees. No written words, no legible text, no logos, no watermark, no UI.

Mei appears exactly once in this image: straight black hair falling in one smooth sheet to below her shoulder blades, a softly oversized dusty pink hoodie, ivory wide-leg trousers, a caramel brown tote bag over one shoulder.

the scramble crossing of Shibuya on a luminous spring afternoon, seen from high behind and above at the moment the light turns: the crowd and the city clutter compete for attention, and no single area focuses solely on the people. High-angle framing from an upper-floor corner of the station, looking down over the crossing so the full X of the scramble diagonals is completely visible, with the vanishing point near the upper center; the white stripes of the crossing, the streets, the railings and the façades all draw the eye toward the station. Every sector is packed with urban environment, not just people: the curved glass façade of a monumental station building wrapping a corner in the background, an elevated railway line crossing above the street, a tall tower of department store windows, blank luminous billboard screens mounted on the façades, a wall of small shop signs and vertical banners, traffic lights on poles, street lamps, bollards, guardrails, planters with tree trunks, benches, mailboxes, newsstands, kiosks, parked bicycles, taxis and a bus stopped at the curb, utility poles, fire hydrants, delivery carts. Large masses of blooming sakura on both sides overlap the buildings and partially occlude figures, breaking sightlines; branches, railings, signposts, billboards and poles constantly hide or half-hide bodies, so a figure could easily be camouflaged among the scene. Bottom of the frame: the nearest corner of the sidewalk seen from above, with large figures cropped by the frame and seen from behind and above — people leaning on the guardrail waiting, someone tying a shoe, a child holding an adult's hand, a person checking the time. Mid-ground: the diagonals of the crossing completely full, at least sixty to eighty distinct figures crossing in every direction, chatting, looking at their phones, holding drinks, carrying bags and backpacks, wearing earphones, riding bicycles, walking a dog, posing for photographs at the edge of the stripes. Background: layered buildings with windows, balconies, hanging plants, laundry and signage, vehicles, trees and tiny silhouettes fading into clarity. Completely balanced density: heavy visual overload distributed between crowd and city props, naturally integrated, nothing feeling forced. Three overlapping layers of depth, no large empty spaces. Small secondary situations to discover on a second look, with many spots where a person stays half-hidden by an object or a shadow. Dominant color for this scene: warm stone grey, concrete beige, cream and ivory in the crossing and façades, olive and moss green in the trees, sakura pink and salmon as spring accents, brick red and muted vermilion in small controlled bursts on signage, lanterns and key accessories; light is warm, filtered and slightly from behind, so the station glass reads bright and the crowd keeps soft cool shadows.


Density grammar: three or more overlapping layers of depth, no large empty spaces, no sector empty and no sector focused only on the crowd; visual overload distributed equally between people and the environment, integrated naturally; visual hierarchy with no single human protagonist, characters always at a third or fourth reading level; props, structures, vegetation, furniture, branches, posts, awnings and shadows constantly hiding or half-hiding bodies, so a figure can easily be camouflaged among the scene.


Character style: contemporary animated cartoon caricature, like a modern cartoon series — bold simplified shapes, exaggerated rounded proportions, overly large heads, stubby simple limbs, hair as large soft rounded masses. The figures of the foreground have big expressive cartoon eyes with a big dark pupil filling not more than half of the iris, still framed by a ring of visible white sclera, tiny noses and small mouths; expressiveness comes mainly from the eyes, body posture and head direction. The figures of the mid-ground and the background keep simple minimal features — tiny noses, small mouths, small simplified eyes — and read as compact shapes inside the crowd.


Architecture and nature more detailed and precise than the characters, but equally illustrated, in the same crafted language.


Finish: editorial travel-journal illustration, digital 2D, soft cel-shading, warm watercolor-like paper texture, clean thin and irregular linework in the color of the base form (never black, never hard outlines), handcrafted, adult and contemporary.


Muted, warm, nostalgic, strongly desaturated — zero digital glow, no hard contrast, Core tokens always present: sakura pink, dusty pink, salmon and peach as spring accents; cream, ivory, beige and sand; warm wood brown, terracotta, brick red and muted vermilion as small controlled accent bursts on key objects; navy, greyish blue and washed light blue; olive green, moss green and forest green; warm stone grey and brownish charcoal.


Ground and large surfaces: the asphalt of the streets, the road markings, the pavement and every large flat plane stay inside a mid-value range — warm grey and beige, never a black mass. Surfaces keep visible texture, seams, cracks, painted lines and paper grain. No ink stains, no blotches, no dark smudges, no holes of pure black, no oily gloss on the road. Dark values appear only in hair, clothing, backpacks, signage and small shadowed zones, never spread over a large area.


Light is warm, natural and diffuse, with no harsh solar direction and minimal soft diffuse shadows, no hard black shadows. Dark values concentrate in hair, clothing, backpacks and shadowed zones; light values in the sky, the light sources and the most illuminated surfaces. Small contained points of warm yellow light only where the scene has real lamps or lanterns, with no halos. No dominant absolute black or optical white. Even metal, glass, water and machinery keep a slight paper-grain irregularity, and water is pictorial with fragmented brushstrokes and warm reflected highlights.


Mid-century Japanese and Swiss travel posters, Jean-Jacques Sempé, Tove Jansson, Mary Blair, Heinz Edelmann, New Yorker editorial illustration and the colour-line tradition of Winsor McCay, Maira Kalman's travel-journal voice.


MEI'S PLACEMENT IN THIS SCENE — Mei appears EXACTLY ONCE, in the mid-ground on the left corner of the crossing, at the sidewalk edge where the wall of shop signs and vertical banners is. Two overlapping things cross in front of her: a tall signpost at shoulder height, and the shoulder and dark hair of the figure walking just ahead of her. Her head, her hair and the dusty pink of her shoulder appear in the gap between them. She stands at the same height and at the same depth as the figures beside her, her long black hair merging with the dark hair masses of the figures in front of her, so her outline is broken and she belongs to the crowd before she reads as a single person. She is seen from behind and slightly above, talking to a stranger beside her. Two other figures of the mid-ground also wear a softly oversized dusty pink hoodie, seen only from behind or in profile, without long black hair and without a tote bag: they are not Mei. Only she carries the caramel brown tote; no other figure repeats her long black hair falling past her shoulders. She sits on the same reading level, under the same diffuse light and at the same scale as every figure around her.

MEI IS THE SINGLE EXCEPTION to the no-protagonist rule: exactly one figure in this crowd is the character; every other figure is one more person in the multitude.


NOT anime, NOT Ghibli, NOT Studio Ghibli, NOT Miyazaki, NOT manga, NOT Pixar or 3D render, NOT pencil animation look, NOT airbrush or 3D plastic shading. Avoid anime eye shapes, soft dreamy anime gradients and hard black outlines.
```