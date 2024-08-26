function saudacao(nome) {
    console.log(`Saudações ${nome}!`)
}

function calculadora(number1, number2, oper) {
    let res = undefined
    switch(oper) {
        case '+':
            res = number1 + number2
            break
        case '-':
            res = number1 - number2
            break
        case '*':
            res = number1 * number2
            break
        case '/':
            res = number1 / number2
            break
        case '%':
            res = number1 % number2
            break
        default:
            res = 'ERRO! Digite um valor válido!'
    }
    return res
}

if (calculadora(5, 2, '%') == 0) {
    console.log(`O número digitado é par!`)
} else {
    console.log(`O número digitado é ímpar!`)
}

function fatorial(n) {
    let fat = 1
    for (let i = n; i > 1; i--) {
        fat *= i
    }
    return fat
}

console.log(fatorial(5))

function palindromo(name) {
    const reverseName = name.split('').reverse().join('')
    return reverseName === name
}
console.log(palindromo(''))

function contVogais(name) {
    let qtd = 0
    name = name.toLowerCase()
    for (let i = 0; i < name.length; i++) {
        if (name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u') {
            qtd++
        }
    }

    return qtd
}

console.log(contVogais('ENZO'))

function orderArray(array) {
    return array.sort((a, b) => a - b);
}

let array = [5, 3, 10, 23, 1]
console.log(orderArray(array))

function filtrarPares(array) {
    var pares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            pares.push(array[i])
        }
    }
    return pares
}

let testeArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(filtrarPares(testeArray1)) 

function mediaArray(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
    }
    return soma / array.length
}

let testeArray2 = [15, 20, 30, 12, 56, 123]

console.log(mediaArray(testeArray2).toFixed(2))

function convertTemp(grau, to) {
    let res 
    if (to == 'c') {
        res = (grau - 32) / 1.8
    } else if (to == 'f') {
        res = grau * 1.8 + 32
    }
    return res
}

console.log(convertTemp(100, 'c').toFixed(2))

function descreverPessoa(obj) {
    return `${obj.name} tem ${obj.age} anos e é ${obj.job}`
}

let pessoa = {
    name: 'Enzo',
    age: 19,
    job: 'Pizzaiolo'
}
console.log(descreverPessoa(pessoa))