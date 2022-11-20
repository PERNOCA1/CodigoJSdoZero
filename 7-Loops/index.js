/*
1 - For
2 - For in
3 - For of
4 - While
*/

var pessoaArray = [
    {
        nome: 'Alessandra',
        idade: 40,
        sexo: 'F',
        motorista: false,
    },
    {
        nome: 'André',
        idade: 12,
        sexo: 'M',
        motorista: false,
    },
    {
        nome: 'João',
        idade: 35,
        sexo: 'M',
        motorista: true,
    },
    {
        nome: 'Karla',
        idade: 5,
        sexo: 'F',
        motorista: false,
    },
    {
        nome: 'Victor',
        idade: 18,
        sexo: 'M',
        motorista: true,
    },
    {
        nome: 'Vanessa',
        idade: 16,
        sexo: 'F',
        motorista: false,
    },
];

// 1 - For

for(i = 0; i < pessoaArray.length; i++) {
    pessoaArray[i].idade = 10;
}

console.log(pessoaArray)

// 2- For in => funciona tanto pra Array quanto para Objeto!

var pessoa = pessoaArray[0]

for(var x in pessoa) { // X no caso, é o interador, ex: 0, 1, 2
    console.log(pessoa[x])
}

// 3 - For of => FFuncionaa tanto para Array quanto para String

var nomePessoa1 = pessoaArray[1].nome

for(p of pessoaArray) { // P é varialvel, no caso, objeto da pessoa dentro do Array
    console.log(p)
}

// paaraa strings:

for(c of nomePessoa1) {
    console.log(c) // imprime todos os caracteres das strings
}


// 4 - While e Do While

var i = 0;

do {
  console.log(pessoaArray[i])
  i++;
} while(i < pessoaArray.length) // enquanto a condição for verdadeira, execute
