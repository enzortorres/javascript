// const rl = require("node:readline");

// const prompt = rl.createInterface({
//     input: process.stdin, output: process.stdout,
// })

// prompt.question("Digite sua idade: ", answer => {
//     const age = Number.parseInt(answer);
//     if(Number.isNaN(age)) {
//         console.log("Você não digitou um número válido!");
//     } else {
//         console.log(`Daqui a 4 anos você terá ${age + 4} anos!`)
//         console.log(`Daqui a 10 anos você terá ${age + 10} anos!`)
//         console.log(`Daqui a 30 anos você terá ${age + 30} anos!`)
//     }
// })  


// const rl = require("node:readline");

// const prompt = rl.createInterface({
//     input: process.stdin, output: process.stdout,
// })

// let bank = 3500;
// prompt.question("Digite o valor que deseja sacar: ", answer => {
//     const amount = Number.parseFloat(answer);
//     if(Number.isNaN(amount)) {
//         console.log("Você não digitou um número válido!");
//     } else if (amount > bank) {
//         console.log("Saldo insuficiente!")
//     } else if (amount <= 0) {
//         console.log("O valor deve ser positivo!");
//     } else {
//         bank -= amount;
//         console.log(`Você sacou R$${amount}`)
//         console.log(`Saldo atual: R$${bank}`)
//     }
// })  

const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout,
});

let name;
prompt.question("Qual o seu nome? ", answer => {
    name = answer;
    prompt.close();
})

prompt.on("close", () => {
    console.log(`O seu nome é ${name}`)
})