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

// 2- For in => funciona tanto pra Array quanto para Objeto

var pessoa = pessoaArray[0]

for(var x in pessoa) {
    console.log(pessoa[x])
}

