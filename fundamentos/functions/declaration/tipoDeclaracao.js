console.log(soma(3,4)) // Função declaradas são atribuidas antes de rodar o codigo
console.log(sub(3,4)) // ERRO/Não atribuida
console.log(mult(3,4)) // ERRO/Não atribuida

// function declaration
function soma(x,y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}