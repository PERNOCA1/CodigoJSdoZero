/* Métodos de Strings
1 - Lenght
2 - indexOf
3 - Search
4 - Slice | Substring
5 - Replace
6 - UpperCase | LoweCase
7 - Trim
8 - ChatAt
*/
var text = 'Bem vindo ao SevenCoders!'

// 1 - Lenght

console.log('Lenght (tamanho): ',text.length)

// 2 - indexOf

console.log('Indice do: ', text.indexOf('Vindo'))

// 3 - Search

console.log('Search: ', text.search('Vindo'))

// 4 - Slice e Substring

console.log('Slice: ', text.slice(0, 4))
console.log('Substring: ', text.substring(0, 4))

// - Replace

console.log("Replace: ", text.replace('Bem Vindo', 'Welcome'))

// 6 - Uppercase e LoweCase

console.log('Uppercase: ', text.toUpperCase())
console.log('Lowercase: ', text.toLowerCase())

// 7 - Trim

console.log('Trin: ', text.trim())

// 8 - CharAt

console.log('CharAt: ', text.charAt(4))