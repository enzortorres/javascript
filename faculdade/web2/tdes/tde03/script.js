// var number1 = +(prompt("Digite um numero:") // EXERCÍCIO 1
// var number2 = +(prompt("Digite outro numero:"))
// var oper = prompt("Operação: (+, -, *, /)")

// switch(oper) {
//     case '+':
//         var res = number1 + number2
//         break
//     case '-':
//         var res = number1 - number2
//         break
//     case '*':
//         var res = number1 * number2
//         break
//     case '/':
//         var res = number1 / number2
//         break
// }

// var valor = +(prompt("Digite o valor total:")) // EXERCÍCIOS 2 e 3
// var cod = +(prompt("Codigo de desconto:"))
// var formaPagamento = +(prompt("Forma de pagamento: 1 (À vista) 2(À prazo)"))

// switch (cod) {
//     case 1:
//         var valorComDesconto = valor
//         break
//     case 2:
//         var valorComDesconto = valor - valor * 0.10
//         break
//     case 3:
//         var valorComDesconto = valor - valor * 0.05
//         break
// }

// switch (formaPagamento) {
//     case 1:
//         var valorComDesconto = valorComDesconto - valorComDesconto * 0.10
//         document.write(`Valor a ser pago com desconto de débito: R$${valorComDesconto}`)
//         break
//     case 2:
//         document.write(`Valor a ser pago com desconto: R$${valorComDesconto}`)
//         break
// }

// var conceito = prompt("Digite o conceito do aluno:") // EXERCÍCIO 4
// switch (conceito) {
//     case 'A':
//         document.write(`Conceito ${conceito}! Excelente!`)
//         break
//     case 'B':
//         document.write(`Conceito ${conceito}! Ótimo!`)
//         break
//     case 'C':
//         document.write(`Conceito ${conceito}! Bom!`)
//         break
//     case 'D':
//         document.write(`Conceito ${conceito}! Regular!`)
//         break
//     case 'E':
//         document.write(`Conceito ${conceito}! Ruim!`)
//         break
//     case 'F':
//         document.write(`Conceito ${conceito}! Nós vemos de novo ano que vem!`)
//         break
//     default: 
//         document.write("ERRO! Conceito inválido!")
// }

// var letra = prompt("Digite uma letra:") // EXERCÍCIO 5

// switch(letra) {
//     case 'A': case 'E': case 'I': case 'O': case 'U':
//         document.write("Vogal")
//     default:
//         document.write("Consoante")
// }

// var lista = [1,2,3,4,5,6,7,8,9] // EXERCÍCIO 6

// for(let i = 0; i < lista.length; i++) {
//     if(lista[i] % 2 == 0) {
//         document.write(`${lista[i]}`)
//     }
// }
// for (let i = 0; i < 5; i++) { // EXERCÍCIO 7
//     var nota = +(prompt("Digite um valor entre 0 e 10"))
//     if (nota < 0 || nota > 10) {
//         alert('Valor inválido!')
//         i--
//     } else {
//         break
//     }
// }
// document.write(`Nota digitada: ${nota}`)
// for (let i = 0; i < 5; i++) { // EXERCÍCIO 8
//     var nome = prompt("Digite o seu nome:")
//     var senha = prompt('Digite a sua senha:')
//     if (nome === senha) {
//         alert("Não pode usar um nome igual a senha!")
//         i--
//     } else {
//         document.write(`Nome: ${nome}`)
//         break
//     }
// }
// var nums = [] //  EXERCÍCIO 9
// var soma = 0, menor = 0, maior = 0
// for (let i = 0; i < 3; i++) {
//     nums[i] = +(prompt("Digite um numero"))
//     soma += nums[i]
// }
// maior = Math.max(...nums)
// menor = Math.min(...nums)

// document.write(`Maior numero: ${maior}<br>Menor numero: ${menor}<br>Soma dos valores: ${soma}`)

// var qtdTurma = +(prompt("Quantidade de turmas:")) // EXERCÍCIO 10
// var qtdAlunos = []
// var somaAlunos = 0
// for (let i = 0; i < qtdTurma; i++) {
//     qtdAlunos[i] = +prompt(`Quantidade de alunos da ${i+1} turma`)
//     somaAlunos += qtdAlunos[i]
//    if (qtdAlunos[i] > 40) {
//        i--
//        alert("Não pode ter mais de 40 alunos na turma")
//    }
// }
// var media = qtdAlunos
// document.write(`Media de alunos por turma: ${media} alunos`)

// var number = +(prompt("Digite um numero:")) // 1EXERCÍCIO 1
// var porcent = +(prompt("Digite a porcentagem que deseja:"))

// function porcentagem(number, porcent) {
//     res = number * porcent / 100
//     return res
// }
// document.write(`${porcent}% de ${number} é ${porcentagem(number,porcent)}`)

// var celsius = +(prompt("Digite uma temperatura em Celsius:")) // EXERCÍCIO 12

// function CelsiusToFahrenheit(c) {
//     res = c * 1.8 + 32
//     return res
// }

// document.write(`${celsius} Celsius para Fahrenheit fica: ${CelsiusToFahrenheit(celsius)}`)

// function fibonacci(n) { // EXERCÍCIO 13
//     if (n <= 1) {
//         return n
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2)
//     }
// }

// function sequenciaFibonacci(n) {
//     let list = []
//     for (let i = 0; i < n; i++) {
//         list.push(fibonacci(i))
//     }
//     return list
// }

// document.write(sequenciaFibonacci(10))

// function raizQuadrada(n) { // EXERCÍCIO 14
//     return Math.sqrt(n)
// }
// document.write(raizQuadrada(9))

// function checkNumber(n1, n2) { // EXERCÍCIO 15
//     if (n1 >= n2) {
//         document.write(`O número ${n1} é maior ou igual ao número ${n2}`)
//     }
// }