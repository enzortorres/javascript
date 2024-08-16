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