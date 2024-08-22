// EXERCÍCIO 1

// let nota1 = +(prompt('Digite a primeira nota:'))
// let nota2 = +(prompt('Digite a segunda nota:'))
// let media = nota1 + nota2 / 2

// if (media >= 7) {
//     document.write("Aprovado")
// } else if (media >= 5) {
//     document.write("Recuperação")
// } else {
//     document.write("Reprovado")
// }

// EXERCÍCIO 2

// var anoAtual = +(prompt('Digite o ano atual para ver se é bissexto: '))

// if (anoAtual % 4 == 0 && (anoAtual % 100 != 0 || anoAtual % 400 == 0)) {
//     document.write(`O ano ${anoAtual} é um ano bissexto`)
// } else {
//     document.write(`O ano ${anoAtual} não é um ano bissexto`)
// }

// EXERCÍCIO 3  

// let saldo = +(prompt('Digite o saldo bancário de sua conta: '))
// let saque = +(prompt('Quanto deseja sacar? '))

// if (saque > saldo) {
//     document.write('Saldo insuficiente')
// } else {
//     document.write('Saque realizado')
// }

// EXERCÍCIO 4  

// let altura = +(prompt('Digite a sua altura: '))
// let peso = +(prompt('Digite o seu peso: '))
// const IMC = peso / altura ** 2
// alert(`${IMC}`)
// if (IMC < 18.5) {
//     document.write("Abaixo do peso")
// } else if (IMC < 24.9) {
//     document.write("Peso normal")
// } else if (IMC < 29.9) {
//     document.write("Sobrepeso")
// } else {
//     document.write("Obesidade")
// }

// EXERCÍCIO 5

// let valor = +(prompt("Digite o valor da compra: "))
// let desconto = +(prompt('Digite a % do desconto: '))

// if (desconto >= 0 && desconto <= 100) {
//     valor -= (valor * desconto / 100)
//     document.write(`O valor com o desconto de ${desconto}% ficou ${valor}`)
// } else {
//     document.write('Desconto inválido')
// }

// EXERCÍCIO 6

// let horasTrabalhadas = +(prompt('Horas trabalhadas na semana: '))
// let valorHora = +(prompt('Renda por hora: '))
// if (horasTrabalhadas > 40) {
//     let horasExtra = horasTrabalhadas - 40
//     let valorExtra = horasExtra * 1.5 * valorHora 
//     let rendaSemanal = horasTrabalhadas * valorHora + valorExtra
// } else {
//     rendaSemanal = horasTrabalhadas * valorHora
// }
// document.write(`Renda semanal: ${rendaSemanal}`)

// EXERCÍCIO 7 

// let numbers = []
// for (let i = 0; i < 3; i++) {
//     numbers.push(Number(prompt(`Digite o ${i+1} número:`)))
// }
// maior = Math.max(...numbers)
// document.write(`O maior numero digitado foi ${maior}`)

// EXERCÍCIO 8

// let usuario = prompt('Usuário:')
// let senha = prompt('Senha:')

// if (usuario == 'admin' && senha == '1234') {
//     document.write('Login sucessido')
// } else {
//     document.write('Usuário ou senha inválida')
// }

// EXERCÍCIO 9

// let distancia = +(prompt('Digite a distância que deseja realizar: '))
// let transporte = prompt('Digite o transporte que deseja utilizar: ')

// if (transporte === "carro") {
//     let horas = distancia / 80
//     document.write(`Horas percorridas: ${horas.toFixed(2)} horas`)
// } else if (transporte === 'onibus' || transporte === 'ônibus') {
//     let horas = distancia / 60
//     document.write(`Horas percorridas: ${horas.toFixed(2)} horas`)
// } else if (transporte === 'aviao' || transporte === 'avião') {
//     let horas = distancia / 800
//     document.write(`Horas percorridas: ${horas.toFixed(2)} horas`)
// }   
