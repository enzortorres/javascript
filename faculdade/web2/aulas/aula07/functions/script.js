function linha() {
    document.write(`<br> ------------------------------------------------------------`)
}

//? Função every() - verifica se todos os elementos atendem a condição

nome = ['Thereza', "Eva", "Flora", "Liz"]
nome2 = ['Thereza', "Eva", "Flora", "Liz"]

function n(elementos) {
    return (typeof elementos == 'string')
}

linha()
document.write(`<br>Todos os elementos são do tipo string? ${nome.every(n)}`)
document.write(`<br>Todos os elementos são do tipo string? ${nome2.every(n)}`)
linha()

//* -----------------------------------------------------------------------


var numeros = [2,4,6,8,10]
var numeros2 = [1,3,5,7,9]

pares = numeros.every(function(numbers) {
    return numbers % 2 == 0
}) 
impares = numeros2.every(function(numbers) {
    return numbers % 2 == 0
}) 

document.write(`<br> Todos os elementos são pares? ${pares ? 'sim' : 'não'}`)
document.write(`<br> Todos os elementos são pares? ${impares ? 'sim' : 'não'}`)
linha()

//* ------------------------------------------------------------

maior = numeros.every(function(number) {
    return number > 5
})

document.write(`<br> Todos os números são maiores do que 5? ${maior ? 'sim' : 'não'}`)
linha()

//? Função some() - verifica se pelo menos 1 elemento atende a condição

var numeros1 = [1,3,5,6]

umPar = numeros1.some(function(number) {
    return number % 2 == 0
})

document.write(`<br> Pelo menos 1 dos elementos é par? ${umPar ? 'sim' : 'não'}`)
linha()

//? Função filter() - filtrar o array

frutas = ['banana', 'abacaxi', 'uva', 'laranja', 'manga', 'morango']

function f(elementos) {
    return (elementos.indexOf('an') > 0)
}

document.write(`<br> ${frutas.filter(f)}`)
linha()

//* ------------------------------------------------------------------

// numeros = [1,2,3,4,5,6,7,8,9,10]

par = numeros.filter(function(number) {
    return number % 2 == 0
})

impar = numeros.filter(function(number) {
    return number % 2 != 0
})

document.write(`<br> Os números pares são: ${par}`)
document.write(`<br> Os números impares são: ${impar}`)
linha()

//? Função map() - cria um novo vetor com os resultados da função aplicada

var number2 = [1,2,3,4,5]

dobro = number2.map(function(number) {
    return number * 2
})

document.write(`<br> O dobro do vetor é ${dobro}`)
linha()

//? Função reduce() - soma todos os elementos do array

let numeros3 = [10,20,30,40,50]
soma = 0
soma = numeros3.reduce(function(total, numero) {
    return total + numero
})
document.write(`<br> A soma de todos os elementos do vetor é ${soma}`)
linha()
//! ======================= FIM DA MATÉRIA DA AV1 =======================