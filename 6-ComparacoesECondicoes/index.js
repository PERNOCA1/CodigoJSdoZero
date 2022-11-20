/*
 1 - Id, Else e  ElseIf
 2 - Switch



 * Operadores de Comparacao
        == ou ===
        !== ou !===
        > e <
        >= e <=
        ?
 *Operadores Lógicos
        && || !
*/


const pessoaArray = [
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


// 1 - IF, Else, ElseIf

//pessoaArray.forEach(p => {
//  if(p.nome === 'André') {
//      console.log('André achado! ')
//  } else if(p.nome.includes('A')) {
//      console.log(`A pessoa ${p.nome} não é André, mas começa com A`)
// }
//  else {
//     console.log(`A pessoa ${p.nome} não é o andré!!`)
//  }
//})


// 2 - SWITCH

 //   pessoaArray.forEach(p =>{
//        switch(p.nome.charAt(0)) {
 //           case 'V':
//                console.log(`Inicial V: ${p.nome}`)
//            break;
//
//          case 'A':
//            console.log(`Inicial A: ${p.nome}`)
//            break;
//
//            case 'J':
//                console.log(`Inicial J: ${p.nome}`)
//            break;
//            default:
//                console.log(`Inicial não encontrada! ${p.nome}`);
//    }
//    });

// 3 - Operadores Comparacao

//const filtrados = pessoaArray.filter((p) => p.nome !== 'André')
//console.log(filtrados)


//pessoaArray.map((p) => p.idade >= 18 ? p.maiorDeIdade = true : p.maiorDeIdade = false)
//console.log(pessoaArray)

// 3 - Operadores Lógicos

//pessoaArray.forEach(p => {
//    if(p.nome === 'André' || p.nome.charAt(0) === 'A') {
//        console.log(`André achado ou pessoa que comeca com a letra A!: ${p.nome} `)
//    } else {
//       console.log(`A pessoa ${p.nome} não é o andré!!`)
//    }
//  })


const acharMotoristas = pessoaArray.filter(p => !p.motorista)
console.log(acharMotoristas)