var string1 = ''
var string2 = ''
var oper = ''
var teste = 0
var soma = 0
var calculo

function init() {
    calculo = document.querySelector('header#calculo')
}

function addNumbers(n) {
    var calculo = document.querySelector('header#calculo')
    calculo.innerHTML += n
    if (teste == 0) {
        string1 += n
    } else {
        string2 += n
    }
}

function operacao(string) {
    var calculo = document.querySelector('header#calculo')
    if (string == '**') {
        var resultado = Number(string1) ** 2
        calculo.innerHTML = resultado
    } else if (string == '1/2') {
        var resultado = Number(string1) / 2
        calculo.innerHTML = resultado
    } else if (string == 'C') {
        if (teste == 0) {
            string1 -= string1.slice(0, -1)
            calculo.innerHTML = string1
        } else {
            string2 -= string2.slice(0, -1)
            calculo.innerHTML = string2
        }
    } 
    else {
        calculo.innerHTML = ''
        oper = string
    } 
    teste++
}
    
function result() {
    var calculo = document.querySelector('header#calculo')

    if (oper == '+') {
        var resultado = Number(string1) + Number(string2)
        calculo.innerHTML = resultado
    } else if (oper == '-') {
        var resultado = Number(string1) - Number(string2)
        calculo.innerHTML = resultado
    } else if (oper == '*') {
        var resultado = Number(string1) * Number(string2)
        calculo.innerHTML = resultado
    } else if (oper == '/') {
        var resultado = Number(string1) / Number(string2)
        calculo.innerHTML = resultado
    } 
} 