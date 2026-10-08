# Checklist parcial — Grupo 08

## 1. Entregable: Libro impreso (9/10)
- [ ] Tapa y contratapa
- [ ] Páginas introductorias (concepto y universo)
- [ ] Sistema visual (paleta HEX, tipografía, reglas de composición)
- [ ] 8 páginas de universo (una escena por página, generadas con IA, densidad Wimmelbilder)
- [ ] Elemento oculto (Mei) integrado coherentemente en las 8 páginas
- [ ] QR que lleve a la app del proyecto
- [ ] Colofón crítico (máx 2 páginas): rol del diseñador, limitaciones, ¿qué NO delegamos a la IA y por qué?

## 2. Entregable: Skill
- [x] `grupos/grupo_08/parcial/identidad-el-diario-de-mei/SKILL.md` existe
- [x] `description` con qué hace y cuándo usarla
- [x] Universo (qué es, dónde, luz, atmósfera, qué nunca es)
- [x] Bloque de estilo con valores concretos (HEX, técnica, textura)
- [x] Modelo y parámetros (ChatGPT Images, 16:9, sin seed, negativo embebido)
- [x] Regla de variación (tabla + variables)
- [x] Cómo se inserta el elemento oculto (ruta híbrida + placement)
- [x] Restricciones + criterio de validación

## 3. Entregable: Repo + Proceso
### En repo (`grupos/grupo_08/parcial/`)
- [x] Commits con historial real (fecha, mensajes descriptivos)
- [x] `README.md` del proyecto
- [x] Imágenes originales: `imagenes/` + `imagenes/finales/` (8 escenas)
- [ ] `PDF de artes finales` del libro (falta subir — cuando esté listo)
- [x] `proceso.md` (documento de proceso) — prompts, decisiones, versiones, fallos/correcciones
- [x] `prompts/escenas-finales.md` + `prompts/banco_de_prompts.md`
- [x] `prompts/versiones/` (31 versiones intermedias)

## 4. Requisitos técnicos
- [x] Mei aparece exactamente 1 vez por escena
- [x] Oclusión ≤ 40%, nunca tapada completamente
- [x] 3 anclajes siempre legibles (buzo rosa, pantalón marfil, tote caramelo)
- [x] Sin duplicados ("MEI IS THE ONLY COPY")
- [x] Estilo editorial ilustrado 2D (sin fotorealismo, sin 3D)
- [x] Formato 16:9 horizontal, edge-to-edge
- [x] Densidad y múltiples capas de profundidad
- [x] Sin textos legibles, logos, marcas de agua

## 5. Pruebas (reproducibilidad)
- [x] Novena escena (Jimbocho) probada — mantiene universo
- [x] Probado con referencia `personaje-mei-final.png` adjunta (protocolo explícito)
- [x] Ajuste "photorealism" aplicado (evita drift a foto)

## Estado general
- Repo (sin PDF): **casi completo** 
- Pendiente: PDF de artes finales + colofón crítico en el libro (impreso)
