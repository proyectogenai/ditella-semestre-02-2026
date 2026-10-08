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
