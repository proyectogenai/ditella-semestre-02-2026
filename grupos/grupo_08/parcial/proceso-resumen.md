# Resumen del proceso — El diario de Mei

## Idea
Atlas de búsqueda estilo "¿Dónde está Wally?" con 8 escenas de un viaje de primavera por Japón. En cada una, Mei aparece escondida una sola vez.

## Prompt del sistema
Usamos un bloque madre congelado (mismo lenguaje en todas las escenas). Solo varían: descripción del lugar (Capa 1) y los huecos del placement (posición, dos oclusores, qué se asoma, ángulo y acción).

Partes clave:
- Apertura: ilustración editorial 2D, cel-shading, linework irregular, textura de papel, cálido/desaturado, 16:9, edge-to-edge, alta densidad.
- Descripción canónica de Mei + "MEI IS THE ONLY COPY" (anti-duplicados).
- Placement con 2 elementos que la ocultan (≤40%), misma escala/profundidad que vecinos.
- "Density grammar": 3+ capas, sin espacios vacíos, sin protagonista único.
- Referencias ilustradas (Sempé, Mary Blair, Kalman) + negaciones para mantener look ilustrado.
- Quitamos `photorealism` de negaciones tras detectar drift a foto.

## Por qué ese prompt y no otro
- **Reproducibilidad**: bloque congelado → mismas reglas, estilo estable.
- **Lógica de búsqueda**: oclusión + integración en multitud (no destacar).
- **Evitar duplicados**: defensa explícita contra 2 Meis.
- **Evitar fotorealismo**: anclar estilo al inicio + sacar `photorealism` de negativas.
- **Variación controlada**: distintas perspectivas/espacios entre escenas.

## Decisiones
- Mei definitiva: `personaje-mei-final.png` (buzo rosa empolvado, pantalón marfil, tote caramelo).
- Ruta híbrida: generar dentro de escena; corregir solo posición/escala(±10%)/nitidez.
- ChatGPT (Images), sin seed.
- Siempre adjuntar referencia canónica al generar.

## Fallos y correcciones
- Duplicados → "ONLY COPY" + tres anclajes obligatorios.
- Drift a foto → quitar `photorealism`; adjuntar referencia siempre.
- Poca estabilidad entre chats → bloque madre + referencia.
- Difícil/encontrable → ajustar oclusión sin eliminar anclajes.

## Material
- 8 prompts finales: `prompts/escenas-finales.md`
- 31 versiones: `prompts/versiones/`
- Skill: `identidad-el-diario-de-mei/SKILL.md`
- Proceso completo: `proceso.md`
