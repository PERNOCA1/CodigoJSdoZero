// function

function calcularIMC(peso, altura) {
    return (peso / (altura * altura))
}

var pessoa1 = {
    peso: 90,
    altura: 2,
}

var pessoa2 = {
    peso: 50,
    altura: 1.5,
}

var imcPessoa1 = calcularIMC(pessoa1.peso, pessoa1.altura)
var imcPessoa2 = calcularIMC(pessoa2.peso, pessoa2.altura)

console.log('IMC 1 = ', imcPessoa1)
console.log('IMC 2 = ', imcPessoa2)


// arrow function

calcularMedia = (n1, n2) => {
    var media = (n1 + n2) / 2
    return media
}

var x = 12;
var y = 30;
var resultado = calcularMedia(x, y)

console.log(`Media dos numeros: ${x} e ${y} = ${resultado}`)