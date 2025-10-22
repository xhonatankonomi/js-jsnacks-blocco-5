const nums = [2, 8, 4, 7, 12, 87];
let pari = [];

for (i = 0; i < nums.length; i++) {
    const numeri = nums[i]
    if (numeri % 2 == 0) {
        pari.push(numeri)
    }
}

console.log(pari)

const paro = nums.filter((numbers) => {
    if (numbers % 2 == 0) {
        return true
    }
    return false;
})

console.log(paro)

nums.forEach((element) => {
  const numeri = nums[i]
    if (numeri % 2 == 0) {
        pari.push(numeri)
    }
}
)

console.log(pari)
// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]