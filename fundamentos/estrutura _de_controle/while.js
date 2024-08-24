function randomNumber(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao1 = 0

while(opcao1 != -1) {
    opcao1 = randomNumber(-1, 10)
    console.log(`Opção escolhida foi ${opcao1}.`)
}
console.log('')
do {
    var opcao2 = randomNumber(-1, 10)
    console.log(`Opção escolhida foi ${opcao2}.`)
} while(opcao2 != -1)


