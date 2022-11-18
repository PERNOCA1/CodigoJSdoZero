/* NUMBERS  

1 - Pop/Push
2 - Shift/Unshift
3 - Splice/Slice

*/

var carrosArray = ['Fiat', 'VW', 'GM', 'Ferrari']

console.log('Original Array: ', carrosArray)

const novoArray = carrosArray.slice(1)
console.log('Slice', novoArray)

// Pop e Push

carrosArray.pop()
console.log('Pop: ',  carrosArray)
carrosArray.push('Renault')
console.log('Push', carrosArray)

// Shift e Unshift

carrosArray.shift()
console.log('Shift', carrosArray)
carrosArray.unshift('JacMotors')
console.log('Unshift', carrosArray)

// Splice e Slice

carrosArray.splice(1, 2)
console.log('Splice 2 e 3 elemento', carrosArray)
