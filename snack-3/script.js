const numbers = [2, 8, 4, 7, 2, 87];
let numeriSomma = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    numeriSomma.push(element + 1);
}
console.log(numeriSomma)

const somma = numbers.map((numero) => {
    return numero + 1;
})

console.log(somma)

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]