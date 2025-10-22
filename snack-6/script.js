const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

let johnnySins = [];
let cinesi = [];

for (let i = 0; i < zucchine.length; i++) {
  const element = zucchine[i]
  if (element.length >= 15) {
    johnnySins.push(element)
  } else {
    cinesi.push(element)
  }
}
console.log(johnnySins)
console.log(cinesi)

const johnnySins1 = zucchine.filter((zucchina) => zucchina.length >= 15);
const cinesi1 = zucchine.filter((zucchina) => zucchina.length < 15)

console.log(johnnySins1)
console.log(cinesi1)
// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.