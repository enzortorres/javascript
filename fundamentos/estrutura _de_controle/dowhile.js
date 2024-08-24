function randomNumber(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do  {
    opcao = randomNumber(-1,10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)