// const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

// console.log(resultado(7))
// console.log(resultado(6))


// console.log(3 % 2 == 0 ? "Par" : 'Impar')

// const idade = 17;

// console.log(idade < 18 ? "Menor de idade" : "Maior de idade")

const bank = 30044;
const tranferValue = 4500;

console.log(
    tranferValue > bank
    ? "Saldo insuficiente!"
    : "Transferencia realizada com sucesso"
)

const isAdult = true;

console.log(`Cristiano ${isAdult ? "não " : ""}é criança`)


const hours = 14;
console.log(
    "Está de",
    hours >= 0 && hours < 6 ? "madrugada" :
    hours >= 6 && hours < 12 ? "manhã" :
    hours >= 12 && hours < 18 ? "tarde" :
    "noite"
)