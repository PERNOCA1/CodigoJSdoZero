var idade, peso; // Variavel tipo Number
var maiorDeIdade; // Variavel tipo Boolean
var fichaCriminal; // Variavel tipo Object
var listaDeNomesSuspeitos, valoresEstimadosDePerca, listaDeCarrosSuspeitos; // Variavel do tipo Array

const nome = 'Gabriel'; // Variavel tipo String
var sobrenome = 'Bianchi'; // Variavel tipo String
idade = 16;
maiorDeIdade = true;
peso = 80.91233;

fichaCriminal = {
    nome,
    sobrenome,
    idade,
    maiorDeIdade,
    peso,
    corDoCabelo: 'Preto'
}

listaDeNomesSuspeitos = [
    'Joao', 'Marcos', 'Pedro', 'Luiz'
]

valoresEstimadosDePerca = [
    123.233, 444, 444, 444, 444.44, 10000000000
]


listaDeCarrosSuspeitos = [
    {
        placa: '0vm22',
        modelo: 'Renegade'
    }, {
        placa: 'MFI676',
        modelo: 'Ferrari'
    },{
        placa: 'UUU000',
        modelo: 'Civic'
    }
]


console.log('Nome do usuario: ', nome);
console.log('Sobrenome do usuario: ', sobrenome);
console.log('Idade do usuario: ', idade);
console.log('O Usuario é maior de idade? ', maiorDeIdade);
console.log('Qual o peso em kg do usuario: ', peso);
console.log('********************' );
console.log('Ficha Criminal:');
console.log(fichaCriminal);
console.log('********************' );
console.log('LISTA DE SUSPEITOS:');
console.log(listaDeNomesSuspeitos);
console.log('********************' );
console.log('POSSIVEIS VALORES DE PERCA:');
console.log(valoresEstimadosDePerca);
console.log('********************' );
console.log('CARROS SUSPEITOS:');
console.log(listaDeCarrosSuspeitos);