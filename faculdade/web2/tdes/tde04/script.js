// number = 1 // EXERCÍCIO 1
// while(number <= 10) {
//     document.write(`${number} `)
//     number++
// }

// number = +(prompt("Digite um numero")) // EXERCÍCIO 2
// let i = 1
// var res = 0

// while(i <= number) {
//     res += i
//     i++
// }
// document.write(res)

// let i = 20 // EXERCÍCIO 3
// do {
//     document.write(`${i} `)
//     if (i == 10) {
//         document.write('Lançamento!')
//     }
//     i--
// } while (i >= 10)

// do { // EXERCÍCIO 4
//     let opc = +(prompt('1-Opção 1\n2-Opção 2\n3-Sair'))
//     if (opc == 3) break
// } while(true)

// var senha = 'admin' // EXERCÍCIO 5

// do { 
//     digitado = prompt("Digite a senha:")
// } while(digitado != senha)

// function saudacao(nome) { // EXERCÍCIO 6
//     document.write(`Oi, ${nome}`)
// }

// let nome = prompt("digite seu nome:")
// saudacao(nome)

// function pot(number, expoente) { // EXERCÍCIO 7
//     let res = number
//     let i = 1
//     while (i < expoente) {
//         res *= number
//         i++
//     }
//     return res
// }
// let number = +(prompt("Digite um numero:"))
// let expoente = +(prompt("Digite um expoente:"))
// document.write(pot(number, expoente))

// function isPalindromo(string) { // EXERCÍCIO 8
//     let palindromo = string.split('').reverse().join('')
//     return string === palindromo
// }
// let nome = prompt("Digite o seu nome")
// document.write(isPalindromo(nome))

// function calculadora(number1, number2, oper) { // EXERCÍCIO 9
//     let res = undefined
//     switch(oper) {
//         case '+':
//             res = number1 + number2
//             break
//         case '-':
//             res = number1 - number2
//             break
//         case '*':
//             res = number1 * number2
//             break
//         case '/':
//             res = number1 / number2
//             break
//         default:
//             res = 'ERRO! Digite um valor válido!'
//     }
//     return res
// }
// document.write(`A soma de 1 + 2 é ${calculadora(1,2,'+')}`)