# Repaso Clase 2 — Sofía Peña (grupo 09)

Repaso previo a la Clase 3 (Tarea 02). Hecho pregunta por pregunta con el
agente. La carpeta del grupo estaba al día (`git pull` aplicado, sin cambios
pendientes).

## Pregunta 1 · ¿Qué hace un LLM?
**Sofía:** predice lo que es más probable que pase, en base al análisis de
bases de datos.

**Ajuste:** acierta en "predice lo más probable", pero es más acotado: predice
la **siguiente palabra** (en realidad, el siguiente *token*: un pedacito de
texto), y lo hace de a pedacitos. No "analiza bases de datos" en el momento:
esa capacidad la aprendió en el **entrenamiento** (cuando le metieron textos
enormes). Ya entrenado, solo predice token a token; no consulta nada en vivo.

## Pregunta 2 · ¿Por qué un chat nuevo no sabe quién sos?
**Sofía:** el modelo no se acuerda de vos, pero recuerda el contexto.

**Ok:** distinción correcta. Entre chats arranca de cero (nadie guarda quién
sos). Dentro de un chat "recuerda" porque toda la conversación (la *ventana de
contexto*) se le mete en cada respuesta; si el chat es muy largo, olvida lo
del principio por el límite de la ventana. Un chat nuevo no te conoce porque su
ventana de contexto **empieza vacía**: no te olvidó, simplemente nunca te "sabía".

## Pregunta 3 · Las cinco partes de un prompt de sistema
**Sofía:** rol (que la IA se comporte como "tal cosa"), contexto (trabaja para
"tal cosa"), tarea (hacer algo que cumpla tal expectativa), formato (cómo deben
ser sus respuestas), restricciones (lo que nunca debe hacer).

**Perfecto:** las cinco y su sentido, correctos. Recordatorio de diseño:
**FORMATO** es la que más se olvida y la que más ruido ahorra. Su asistente de
Bruma lo tiene bien (devuelve "SOLO el prompt en inglés, en un bloque de
código").

## Pregunta 4 · Tu propio system prompt (Bruma) y qué le corregiste
**Sofía:** corregí detalles de consistencia entre imágenes, agregué más reglas
para que las imágenes cumplan con un mismo universo.

**Ok:** esto es justo la clase entera. Cuando algo falla, no se arregla la
imagen a mano: se le **agrega una regla al sistema** para que no vuelva a
pasar. "Más reglas para que cumplan un mismo universo" = bloque de estilo +
regla de variación funcionando.

**Observación sobre el estado de grupo_09:** esas correcciones deberían quedar
documentadas en `clase_02/ejercicios.md` (sección A.4). Ese archivo **no está**
en la carpeta del grupo, tampoco el `asistente_grupal.md`, y falta el asistente
de Valeria. Ver duda final.

## Duda final · "no entiendo bien el cowork"
Sofía consultó sobre el "cowork" = cómo se coordina el grupo para armar el
asistente único y la prueba cruzada (Parte 5, taller grupal). Se le explicó el
flujo en 4 pasos:

1. **Elegir UNA marca** para el grupo (Bruma, la de otro, o proyecto propio).
2. **Fusionar:** UN solo asistente tomando lo mejor de los tres individuales
   (la regla más clara de uno, el bloque de estilo más específico de otro, la
   restricción que salvó una imagen). Charla clave: "¿esta regla suma o sobra?".
3. **Prueba cruzada:** cada integrante, **desde su propia compu y en un chat
   limpio**, manda un pedido distinto al asistente grupal (ambiente / detalle /
   anuncio) y genera la imagen.
4. **Mirar las 3 imágenes juntas:** ¿parecen de la misma marca aunque las pidió
   gente distinta? Esa es la pregunta del parcial (se evalúa con la skill de
   *otro* grupo).

**Gap que esto deja al descubierto en grupo_09:** hoy solo Sofía y Dinora tienen
asistente individual; **falta el de Valeria**; no hay `asistente_grupal.md`; y
falta `clase_02/ejercicios.md`. El "cowork" no funciona si cada uno trabaja en
su rincón sin fusionar.

Si "cowork" quería decir otra cosa (workflow general, o RAG/fine-tuning),
queda pendiente de aclarar en clase.
