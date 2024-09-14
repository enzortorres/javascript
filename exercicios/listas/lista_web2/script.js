// var idade = +(prompt('Digite sua idade: ')) //! EXERCÍCIO 01

// if (idade >= 18 && idade <= 70) {
//     alert(`Com ${idade} é obrigatório a votação!`)
// } else {
//     alert(`Com ${idade} não é obrigatório a votação!`)
// }





// var number1 = +(prompt("Digite um número:")) //! EXERCÍCIO 02
// var number2 = +(prompt("Digite outro número:"))
// var oper = prompt('Qual operação deseja realizar?\n\n1- Soma\n2- Subtração\n3- Multiplicação\n4- Divisão\n')

// function soma(n1, n2) {
//     return n1 + n2
// }

// function subtracao(n1, n2) {
//     return n1 - n2
// }

// function multiplicacao(n1, n2) {
//     return n1 * n2
// }

// function divisao(n1, n2) {
//     return n1 / n2
// }

// switch (oper) {
//     case "1": alert(`${number1} + ${number2} = ${soma(number1, number2)}`)
//         break

//     case "2": alert(`${number1} - ${number2} = ${subtração(number1, number2)}`)
//         break

//     case "3": alert(`${number1} * ${number2} = ${multiplicacao(number1, number2).toFixed(2)}`)
//         break

//     case "4": alert(`${number1} / ${number2} = ${divisao(number1, number2).toFixed(2)}`)
//         break

//     default:
//         alert('ERRO! Digite um operador válido!')
// }





// let porcentagem, aumento
// var salario = +(prompt("Digite o seu salário:")) //! EXERCÍCIO 3 e 4

// if (salario <= 280) {
//     porcentagem = 0.20
//     aumento = salario * porcentagem
// } else if(salario <= 700) {
//     porcentagem = 0.15
//     aumento = salario * porcentagem
// } else if (salario <= 1500) {
//     porcentagem = 0.10
//     aumento = salario * porcentagem
// } else {
//     porcentagem = 0.05
//     aumento = salario * porcentagem
// }
// var salarioAtual = salario + aumento
// document.write(`Seu salário de R$${salario.toFixed(2)} teve um aumento de ${porcentagem * 100}%, aumentando R$${aumento.toFixed(2)} e passou a ser R$${salarioAtual.toFixed(2)}`)



// const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', //! EXERCÍCIO 5
//         'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

// var date = prompt("Digite o dia de seu nascimento no formato (dd/mm/yyyy)")
// const [day, month, year] = date.split('/')
// var monthNumber = Number(month) - 1

// document.write(`${day} de ${months[monthNumber]} de ${year}`)




// let year = +(prompt('Quantos anos de vida você tem?')) //! EXERCÍCIO 6
// let month = +(prompt('Quantos mesês de vida você tem?'))
// let day = +(prompt('Quantos dias de vida você tem?'))

// const totalDays = (year, month, day) => {
//     let totalDays = (year * 365) + (month * 30) + day
//     return totalDays
// }

// document.getElementById('res').innerHTML = `Você tem ao todo ${totalDays(year, month, day)} dias de vida!`



// let word = prompt("Digite uma palavra aleatória:") //! EXERCÍCIO 7

// const trocarLetras = (palavra) => {
//     let novaPalavra = palavra.toLowerCase()
//     novaPalavra = novaPalavra.replace('a', 'U')
//     novaPalavra = novaPalavra.replace('o', 'G')
//     return novaPalavra
// }

// document.getElementById('res').innerHTML = `A palavra ${word} modificada ficou: ${trocarLetras(word)}`



// let number; //! EXERCÍCIO 8

// do {
//     number = +(prompt("Digite um número:")) 
//     if(isNaN(number)) {
//         alert('ERRO! Digite um número válido!')
//     }
// } while (isNaN(number))

// const tabuadaDe7 = (number) => {
//     for (let i = 1; i <= number; i++) {
//         document.write(`7 x ${i} = ${7 * i}<br>`)
//     }
// }

// tabuadaDe7(number)




// let nomes = [] //! EXERCÍCIO 9

// for(let i = 0; i < 5; i++) {
//     nomes.push(prompt(`Digite o ${i+1} nome:`))
// }

// const maiorNome = (array) => {
//     let maior = 0, maiorNome
//     for(let i = 0; i < 5; i++) {
//         if (array[i].length > maior) {
//             maior = array[i].length
//             maiorNome = array[i]
//         }
//     }
//     return maiorNome
// }

// document.getElementById('res').innerHTML = `O maior nome encontrada nessa array foi: ${maiorNome(nomes)}`



// let frase = prompt("Digite uma frase aleatória:") //!EXERCÍCIO 10

// const qtdPalavras = (frase) => {
//     const palavras = [] = frase.split(' ')
//     let qtd = palavras.length
//     return qtd
// }
// document.getElementById('res').innerHTML = `A quantidade de palavras contidas na frase (${frase}) é: ${qtdPalavras(frase)}`



// let nome = prompt("Digite o seu nome para ver-ló invertido:") //! EXERCÍCIO 11

// const nomeInvertido = (nome) => {
//     return nome.split('').reverse().join('')
// }

// document.getElementById('res').innerHTML = `O seu nome (${nome}) invertido fica: ${nomeInvertido(nome)}`