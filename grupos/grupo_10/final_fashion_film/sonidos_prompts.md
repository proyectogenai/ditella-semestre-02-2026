# Prompts de sonido — efectos y ambientes (ElevenLabs "Efectos de sonido")

Sonidos del film "A dónde vamos". La música y la voz en off van aparte.

- **Herramienta:** *Efectos de sonido* de ElevenLabs (menú de la izquierda).
- **Idioma de los prompts:** inglés, porque suele entender mejor los sonidos.
- **Duración:** los ambientes de fiesta se piden de 18 segundos (lo que dura cada
  fiesta). Si la herramienta no deja tanto, se piden 10 y se repiten en la edición.
- **Créditos:** los efectos también gastan créditos y no sé cuántos. Conviene
  empezar por los marcados con ★ y probar uno antes de generar los demás.
- Los audios pesan: van a Drive, no al repo.

## Ambientes de cada fiesta (18 s)

| Archivo | Planos | Prompt |
|---|---|---|
| ★ `sfx_amb_garden` | 5 a 10 | `Soft garden party ambience in the late afternoon: a gentle murmur of conversation and light laughter, distant clinking of glasses and cutlery, birds chirping, a light breeze moving the leaves. No music, no clear words.` |
| ★ `sfx_amb_carnaval` | 11 a 16 | `Street carnival ambience: live street drums of a comparsa passing by, a cheering crowd, whistles, laughter and confetti cannons popping. Percussion only, no melody, no clear words.` |
| ★ `sfx_amb_mar` | 17 a 22 | `Boat deck ambience in full daylight: waves splashing against the hull, a strong sea wind, a flag and ropes flapping, a few distant seagulls and the light chatter of people. No music, no clear words.` |
| ★ `sfx_amb_rooftop` | 23 a 28 | `Rooftop ambience in the city before dawn: distant traffic, a faint city hum, a light wind, quiet chatter, glasses clinking and ice moving in a glass. No music, no clear words.` |
| ★ `sfx_amb_playa` | 29 a 32 y 40 | `Quiet beach at sunrise: gentle waves rolling onto the shore, a soft wind, a few seagulls far away, a calm and peaceful feeling. No music.` |

## Despertar y transiciones

| Archivo | Planos | Prompt | Duración |
|---|---|---|---|
| ★ `sfx_celular_mensaje` | 2 | `A short phone notification: a soft buzz followed by a small message ding, on a bedside table.` | 2 s |
| `sfx_pañuelo_nudo` | 3 | `Quick fabric rustle of a cloth being tied in a hurry, with a small snap at the end.` | 2 s |
| ★ `sfx_cartera_pum` | 4 | `A fast whoosh of a leather handbag swinging toward the camera, ending in a soft muffled thump that covers the whole sound.` | 1 s |
| ★ `sfx_pum_transicion` | 10→11, 16→17, 22→23, 28→29 | `A short, playful whoosh with a soft pop, like a quick magic cut between two scenes.` | 1 s |

## Pasos de las caminatas

| Archivo | Planos | Prompt | Duración |
|---|---|---|---|
| `sfx_pasos_pasto_grava` | 5, 10 | `Light steady footsteps of a woman walking in sandals on gravel and grass.` | 3 s |
| `sfx_pasos_tacos_adoquin` | 11, 16 | `Steady footsteps of a woman in high heels on cobblestones, with the faint sound of confetti.` | 3 s |
| `sfx_pasos_muelle` | 17, 22 | `Light footsteps of a woman on wooden planks of a dock, with a creaking sound.` | 3 s |
| `sfx_pasos_cemento` | 23, 28 | `Steady footsteps of a woman in flat sandals on a concrete rooftop.` | 3 s |
| `sfx_pasos_arena` | 29, 31, 32 | `Soft footsteps of a woman in sandals on damp sand, with small waves.` | 3 s |

## El objeto que se cae

| Archivo | Plano | Prompt | Duración |
|---|---|---|---|
| ★ `sfx_cae_sombrilla` | 8 | `A wooden-handled parasol falling softly onto grass, with a light thud.` | 2 s |
| ★ `sfx_cae_zapato` | 14 | `A high-heeled shoe falling and bouncing with a clacking sound on cobblestones.` | 2 s |
| ★ `sfx_vuela_sombrero` | 20 | `A strong wind gust and a straw hat fluttering away, with a flapping paper-like sound.` | 2 s |
| ★ `sfx_cae_llaves` | 26 | `A small bunch of keys with a soft pompom keychain jingling and falling on a concrete floor.` | 2 s |
| ★ `sfx_cae_antiparras` | 31 | `Plastic swimming goggles dropping softly onto sand, with a quiet tap.` | 1 s |

## El encuentro

| Archivo | Planos | Prompt | Duración |
|---|---|---|---|
| ★ `sfx_amiga_corre_arena` | 33, 34 | `A woman running on wet sand, fast footsteps, out of breath, with a canvas bag bouncing and small objects rattling inside.` | 6 s |
| `sfx_bolsa_objetos` | 34, 37 | `A canvas tote bag with keys, plastic goggles and shoes rattling and clinking as it moves.` | 3 s |
| ★ `sfx_abrazo` | 38 | `Two friends hugging: a fabric rustle, a happy laugh and a warm sigh.` | 3 s |
| `sfx_agua_baile_orilla` | 39 | `Two people laughing and dancing in shallow water, small splashes on the shore.` | 6 s |

## Orden sugerido para generar

1. Los 5 ambientes (★), que son los que más cambian la sensación de cada fiesta.
2. Los efectos del despertar y los "pum" (★).
3. Los de objetos que se caen (★) y el del abrazo.
4. Pasos y el resto, si sobran créditos.
