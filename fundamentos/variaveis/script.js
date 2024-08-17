{
    {
        {
            var teste = 'test'
        }
    }
}
console.log(teste)

function test() { // declarar uma variavel dentro de uma função faz com que ela se acessada apenas dentro da função
    var local = 123
    console.log(local)
}

test()
// console.log(local)

var numero = 1
{
    var numero = 2
    console.log('var // dentro =', numero)
}
console.log('var // fora =', numero)

let number = 1
{
    let number = 2
    console.log('let // dentro =', number)
}
console.log("let // fora =", number)

for (var i = 0; i < 10; i++) {
    // console.log(i)
}

console.log('i =', i) // var define a variavel como global

for (let j = 0; j < 10; j++) {
    // console.log(j)
}

// console.log('j =', j) // ERRO! let só define a varivel dentro do bloco