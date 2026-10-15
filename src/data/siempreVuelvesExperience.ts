import type { AmbientCue, LyricCue } from "../types/music";

export const siempreVuelvesDuration = 242.424;

export const siempreVuelvesLyricsSource = `Todavía queda en mi ropa
algo de aquel aroma.

Cierro los ojos...
y vuelves a estar ahí.

He conocido otras voces,
otros labios, otra piel.

Pero hay noches...

no sé...

todo me lleva
de vuelta otra vez.

Porque vuelves,
siempre vuelves.

Cuando duermo,
sigues ahí.

Quise dejarte
tan lejos de mí...

pero nunca
te fuiste de aquí.

Y yo qué sé...

tal vez a ti
te pasa igual.

Vas por la calle,
suena una canción...

y de repente...

ahí estoy yo.

Porque a mí me pasa,
sí, todavía...

aunque diga
que ya pasó.

Hay recuerdos
que se van con el tiempo...

y tú...

tú dijiste que no.

Yo dije:
"voy a estar bien".

Sí, claro...

mírame ahora.

Borré los mensajes,
guardé nuestras fotos,

dejé de buscarte
a cualquier hora.

Salí,
conocí a alguien...

hasta volví
a besar otra boca.

Pero dime...

¿cómo saco de mí
lo que no se toca?

¡Y VUELVE TU NOMBRE!

Otra vez...
otra vez.

Vuelve tu risa,
tu forma de verme también.

¡NO, NO QUIERO VOLVER!

No...

no es eso, lo sé.

Pero una cosa
es dejarte ir...

y otra...

dejar de querer.

¿Cuánto?

Dime, ¿cuánto más?

¿Unos meses?
¿Unos años?

¿Qué más da?

Si ya no estoy esperando,
si ya te dejé marchar...

¿por qué basta
cerrar los ojos...

pa' volverte a encontrar?

¡YO YA TE DEJÉ IR!

¡YA NO QUIERO REGRESAR!

Entonces dime por qué...

cuando intento olvidarte...

¡TE RECUERDO MÁS!

Ahora...

ya puedo decir tu nombre.

Ya no duele igual.

Puedo pasar
por aquellos lugares...

y no tener
que mirar atrás.

A veces te extraño.

Sí...

¿y qué?

No voy a mentir.

Extrañarte un momento
no significa...

que no sepa
vivir sin ti.

Y aún vuelves,
siempre vuelves.

De vez en cuando
sigues ahí.

Pero ya no...

ya no duele así.

Fuiste parte
de mi vida,

¿por qué tendría
que borrarte de mí?

No hace falta
que te olvide...

pa' poder
seguir sin ti.

Y si vuelve
aquella canción...

que vuelva.

Si tu perfume
me encuentra por ahí...

qué más da.

La dejo sonar.

Hay cosas que vuelven...

sin tener
que regresar.

No te espero.

No...

ya no.

Y tampoco quiero
que regreses por mí.

Sólo tardé demasiado
en entender algo...

puedo echarte de menos

y aun así...

ser feliz.

Te dejé ir...

sin olvidarte.`;

export const siempreVuelvesLyrics: readonly LyricCue[] = siempreVuelvesLyricsSource
  .split(/\n\n/)
  .map((text, index) => ({
    id: `sv-${String(index + 1).padStart(2, "0")}`,
    text,
    startTime: null,
    endTime: null,
    timingSource: null,
    verification: "unmarked",
  }));

// Intentionally empty until musical moments are verified by listening.
export const siempreVuelvesAmbientCues: readonly AmbientCue[] = [];
