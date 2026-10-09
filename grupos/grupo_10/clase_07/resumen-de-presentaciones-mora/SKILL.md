---
name: resumen-de-presentaciones-mora
description: >
  Convierte el PDF de una presentación de un profesor en un resumen escrito
  en texto explicado, siguiendo el orden de la presentación, que explica
  qué muestra cada gráfico y cada tabla y qué conclusión sacar. Explica
  toda la información del PDF, sin saltear ninguna. Usá esta skill cuando
  pasen un PDF de presentación, slides o diapositivas de clase y pidan
  "resumime esta presentación", "pasame este PDF a resumen", "explicame los
  gráficos y tablas" o simplemente adjunten el PDF sin más instrucciones.
  Devuelve solamente el resumen, sin comentarios ni opiniones.
---

# Resumen de presentaciones de profesores

## Qué hace
Recibe el PDF de una presentación de clase y devuelve un resumen escrito en
castellano. Explica TODA la información que tiene el PDF: no se saltea
ninguna.

## Cómo responder
- **Texto explicado, no una lista.** El resumen se escribe sobre todo en
  párrafos que explican las ideas, con claridad, como si se lo contaras a
  alguien que no vio la presentación.
- **Sigue el orden de la presentación**, pero **no se separa por slides**:
  nada de "Slide 1", "Slide 2". El texto fluye de una idea a la siguiente.
  Solo puede haber un subtítulo cuando la presentación cambia de tema, nunca
  uno por slide.
- **Bullet points solo cuando hacen falta:** para enumeraciones reales
  (pasos, categorías, listas de ítems) o para comparar datos. Todo lo demás
  va en texto.
- **Gráficos y tablas:** dentro del texto, se explica qué muestra, qué
  conclusión se saca y cómo se conecta con el resto de la presentación. Si
  hay números importantes, se mencionan.
- Las slides con poco contenido (portada, índice, agradecimientos) se
  mencionan en una sola frase que recoja todo lo que dicen.

## Reglas
- **Explicar toda la información, sin saltear ninguna.** Se cubre todo lo
  que aparece en el PDF, de principio a fin: textos, listas, datos, números,
  gráficos, tablas, notas al pie, referencias. Si algo se simplifica para
  que se entienda, no se pierde ningún dato.
- **Nunca inventar datos.** Solo se usa lo que está escrito o dibujado en el
  PDF. Si un número no aparece, no se agrega.
- **Si un gráfico o tabla no se entiende** (ilegible, cortado, muy chico),
  avisarlo dentro del texto, diciendo de cuál se trata y qué falta, en vez de
  adivinarlo.
- **Responder solo con el resumen.** Nada antes ni después: sin saludos, sin
  preguntas, sin ofrecer cosas.
- **Sin opiniones** ni valoraciones propias sobre lo que dice el profesor.
- **Única excepción:** si en el mismo pedido se le pide expresamente otra
  cosa (por ejemplo "después hacéme una lista de preguntas de examen"), se
  hace además del resumen.

## Ejemplo de salida
La presentación arranca mostrando cómo evolucionaron las ventas entre 2020 y
2024. El gráfico de barras indica que pasaron de 120 a 340 en cuatro años, y
el profesor marca 2022 como el punto de quiebre: a partir de ahí el
crecimiento se acelera. Esto se conecta con lo que se explicó antes sobre el
cambio de estrategia de ese año, que es la causa que propone para el salto.

Después presenta los tres canales de venta, que son:
- venta directa,
- distribuidores,
- online.

De ellos, el online es el que más creció, y la tabla siguiente lo confirma
con su participación sobre el total...
