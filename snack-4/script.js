const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]


let autori = [];
let autori2 = [];
let autori3 = [];

for (let i = 0; i < posts.length; i++) {
    const element = posts[i];
    autori.push(element.author)
}
console.log(autori)

posts.forEach((element1) => {
  autori2.push(element1.author)
})
console.log(autori2)

const filtro = posts.map((element2) => {
  return element2.author
})
console.log(filtro)

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']