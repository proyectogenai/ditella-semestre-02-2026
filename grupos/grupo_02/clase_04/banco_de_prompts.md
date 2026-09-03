# Banco de prompts — Juana Estrada Roa · Clase 4

Fecha: 3 de septiembre de 2026

> Criterio de selección: quedaron los prompts que demostraron consistencia
> de sistema con la marca Cherba, más un ejemplo del ejercicio del rubro
> que documenta un sesgo. El prompt que generé primero en D.2 (sin detalle
> de producto) quedó afuera por genérico.

---

## 1. Feed de Instagram de Cherba

**Prompt completo:**
```
Overhead flat lay of a Cherba mate wrapped in tan leather with an intricately embroidered base, surrounded by dried yerba leaves, a small linen cloth, and wildflowers on a weathered wooden table. editorial lifestyle photography, warm natural daylight, soft diffused window light, subtle golden warmth, muted earthy palette of warm beige, cream, sand, soft sage green, dusty terracotta and natural leather brown, handcrafted textures, genuine leather and organic gourd surfaces, intricate embroidered details, cozy countryside-chic atmosphere, sophisticated rustic aesthetic, intimate and welcoming mood, natural wood and linen textures, shallow depth of field, realistic material rendering, professional full-frame camera, 50mm lens, subtle film grain, soft natural shadows, gentle highlights, warm analog-inspired color grading, authentic tactile details, elegant but unposed composition, premium artisanal product photography, realistic proportions, photorealistic, no CGI, no 3D render, no artificial perfection, 4:5 vertical format
```

- **Herramienta:** ChatGPT (armó el prompt) → Gemini Nano Banana (generó)
- **Parámetros:** aspect ratio 4:5 · sin seed
- **Para qué sirvió:** imagen de apertura/producto del feed; coherente con la paleta tierra y la vibra campestre-chic de Cherba.

---

## 2. El local de Cherba (apertura)

**Prompt completo:**
```
Medium shot of a hand holding a Cherba mate wrapped in tan leather with an intricately embroidered base, inside a beautifully decorated small shop with wooden shelves displaying mates, fresh yerba bundles, and warm ambient lighting, soft bokeh of festive string lights in the background. editorial lifestyle photography, warm natural daylight, soft diffused window light, subtle golden warmth, muted earthy palette of warm beige, cream, sand, soft sage green, dusty terracotta and natural leather brown, handcrafted textures, genuine leather and organic gourd surfaces, intricate embroidered details, cozy countryside-chic atmosphere, sophisticated rustic aesthetic, intimate and welcoming mood, natural wood and linen textures, shallow depth of field, realistic material rendering, professional full-frame camera, 50mm lens, subtle film grain, soft natural shadows, gentle highlights, warm analog-inspired color grading, authentic tactile details, elegant but unposed composition, premium artisanal product photography, realistic proportions, photorealistic, no CGI, no 3D render, no artificial perfection, 16:9 horizontal format
```

- **Herramienta:** ChatGPT (armó el prompt) → Gemini Nano Banana (generó)
- **Parámetros:** aspect ratio 16:9 · sin seed
- **Para qué sirvió:** darle contexto de "local" a la marca; muestra la escenografía del único local.

---

## 3. Promo 2x1 de Cherba

**Prompt completo:**
```
Slightly angled shot of two Cherba mates wrapped in tan leather with intricately embroidered bases, one leaning casually against the other on a natural linen cloth, a delicate kraft paper tag reading "2x1" tied with twine between them, soft warm light from a nearby window casting gentle shadows. editorial lifestyle photography, warm natural daylight, soft diffused window light, subtle golden warmth, muted earthy palette of warm beige, cream, sand, soft sage green, dusty terracotta and natural leather brown, handcrafted textures, genuine leather and organic gourd surfaces, intricate embroidered details, cozy countryside-chic atmosphere, sophisticated rustic aesthetic, intimate and welcoming mood, natural wood and linen textures, shallow depth of field, realistic material rendering, professional full-frame camera, 50mm lens, subtle film grain, soft natural shadows, gentle highlights, warm analog-inspired color grading, authentic tactile details, elegant but unposed composition, premium artisanal product photography, realistic proportions, photorealistic, no CGI, no 3D render, no artificial perfection, 4:5 vertical format
```

- **Herramienta:** ChatGPT (armó el prompt) → Gemini Nano Banana (generó)
- **Parámetros:** aspect ratio 4:5 · sin seed
- **Para qué sirvió:** pieza promocional (de venta/comunicación), con el tag "2x1" como elemento de oferta.

---

## 4. Ejemplo de sesgo — salud y bienestar del futuro (ejercicio del rubro)

**Prompt completo:**
```
Una persona usando anteojos con luz roja para disminuir las ojeras, en el baño de su casa, fotografía realista con iluminación cálida de interior.
```

- **Herramienta:** Gemini Nano Banana (generó 3)
- **Parámetros:** sin seed ni aspect ratio definido
- **Para qué sirvió (y qué aprendí):** las 3 imágenes salieron casi idénticas y el modelo asumió que la persona era una mujer joven con bata blanca y celular en la mano, a pesar de que no indiqué ninguno de esos detalles. Demuestra el sesgo algorítmico (rellena con el estereotipo más frecuente) y que falta especificar una regla de variación para obtener piezas distintas.
