/*
 1 - Sort e Reverse
 2 - ForEach
 3 - Map
 4 - Filter
 5 - Reduce
 6 - Find

*/

const timesArray = [
    'Barcelona',
    'Real Madrid',
    'Bayern',
    'Borussia',
    'Chelsea',
    'Manchester'
];

const numbersArray = [
    1, 345, 12, 2312, 123, 34, 85, 912
]

console.log('Array Original: ', timesArray)

// 1 - Sort

console.log('Sort: ', timesArray.sort()) // só funciona com strings dessa forma
console.log('Sort: ', timesArray.reverse())

console.log('Sort Number: ', numbersArray.sort((a, b) => a - b))

// 2 - ForEach => 1 Ação

timesArray.forEach((time, index) => {
    console.log(`A posição do time ${time} é ${index}`)
})

// 3 - Map

const numbersFormatado = numbersArray.map((n) => n / 10)
console.log('Map: ', numbersFormatado)

// 4 - Filter

const filtrados = timesArray.filter((time) => time.charAt(0) == 'B')
console.log('Times Filtrados: ', filtrados)

// 5 - Reduce

const somaDoArray = numbersArray.reduce((ac, n) => ac += n)
console.log('Soma do array Reduce: ', somaDoArray)

// 6 - Find

const itemAchado = timesArray.find((t) => t.charAt(0) == 'B')
console.log('Find: ', itemAchado)
