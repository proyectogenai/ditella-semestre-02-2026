# Parcial · Lucho — un viajero fuera de época

**IA Generativa y Diseño** · Licenciatura en Diseño · UTDT · Semestre 02, 2026
Grupo 02 — "Las chiquis": Juana Estrada Roa, Lupe Picca, María Lucía Racciatti

## Qué es

La identidad visual completa de **Lucho**, un personaje de felpa que se metió
por accidente en una máquina del tiempo y viaja de época en época tratando de
volver a la suya. El proyecto se despliega en un **atlas de ocho escenas al
estilo "¿Dónde está Wally?"**: mundos densos en crochet, poblados, con Lucho
escondido en cada uno y objetos fuera de época que también hay que encontrar.

Todo el universo es un **diorama físico de crochet**: lana gruesa, puntadas
visibles y amigurumi, fotografiado con luz cálida de set en miniatura. El
material es lo que une las ocho épocas: el lugar cambia, la técnica no.

## Las ocho escenas

En orden de lectura del libro:

1. Era Mesozoica
2. Futuro
3. Edad Media
4. Edad de Piedra
5. Edad Moderna
6. Antiguo Egipto
7. Actualidad
8. Antigua Roma

## Estructura del proyecto

```
parcial/
├── README.md              ← este archivo
├── identidad-lucho/
│   ├── SKILL.md           ← el sistema visual completo (reproducible)
│   ├── concepto.md        ← concepto, universo, elemento oculto y bloque madre
│   └── imagenes/          ← las 8 escenas originales generadas con IA
```

## Cómo se genera una escena

El sistema funciona en **dos pasos**, definidos en `SKILL.md`:

1. **Capa 1 — la escena**: un art director prompt desarrolla la época en una
   descripción de contenido (lugar, gente, objetos, densidad), sin tocar
   estilo ni material.
2. **Capa 1 + bloque madre**: se concatenan y se genera la imagen. El bloque
   madre (Capas 2 a 5) se copia idéntico, sin modificar una palabra, en las
   ocho generaciones.

**Modelo:** ChatGPT · **Formato:** ~2:1 panorámico para doble página.
**Restricciones:** sin texto ni letters en la imagen; sin CGI ni fotorrealismo
de materiales.

## Qué falta

- [ ] PDF de artes finales del libro
- [ ] Documento de proceso
- [ ] Prueba de reproducibilidad de la skill en un chat limpio
- [ ] Presupuesto y envío a imprenta
