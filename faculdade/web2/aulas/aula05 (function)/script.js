// let n = 1
// let list = []
// par = impar = 0

// while (n != 0) {
//     n = +(prompt("Digite um número:"))
//     if (n != 0) {
//         list.push(n)
//         if (n % 2 == 0) {
//             par++
//         } else {
//             impar++
//         }
//     }
// }
// document.write(`Você digitou ${par} pares e ${impar} impares<br>Números digitados: ${list}`)

// --------------------------------------------------------------

// let c = Math.floor(Math.random() * 11)
// let acerto = false
// let palpite = 0

// while(!acerto) {
//     var j = +(prompt("Qual o seu palpite"))
//     palpite++
//     if (j == c) {
//         acerto = true
//     }
// }
// if (palpite == 1) {
//     document.write("Parabéns! você acertou de primeira!")
// } else {
//     document.write(`Parabéns! você acertou com ${palpite} tentativas! O número era ${c}`)
// }

// --------------------------------------------------------------

// // var nome = prompt("Digite o seu nome: ")

// function mensagem() {
//     document.write(`Bom dia ${nome}!`)
// }

// // mensagem3()

// function mensagem3(nome) {
//     return `Bom dia ${nome}!`
// }
// // document.write(mensagem3(nome))

// const soma = (x,y) => x+y

// document.write(soma(1,3))

function isEven(number) {
    return number % 2 == 0
}
let num = +(prompt("Digite um numero"))
console.log(isEven(num))

function fatorial(n) {
    if (n == 0 || n == 1) {
        return 1 
    } else {
        return n * fatorial(n - 1)
    }
}