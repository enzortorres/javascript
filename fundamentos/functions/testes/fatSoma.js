
function fatorial(number) {
    // 5! = 5x4x3x2x1
    let fat = 1
    for (var i = number; i > 1; i--) {
        fat *= i
    }
    return fat
}
console.log(fatorial(5));

function fat(number) {
    if (number == 1) {
        return 1
    } else {
        return number * fatorial(number - 1)
    }
}
console.log(fat(5))

// Armazenando uma função dentro de uma variavel

const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando um função arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

// Retorno implícito

const subtracao = (a, b) => a - b

console.log(subtracao(3,2))

const imprimir2 = a => console.log(a)

imprimir2('test')
