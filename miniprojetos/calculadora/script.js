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
    if (string == 'C') {
        calculo.innerHTML = ''
        string1 = ""
        string2 = ""
    } else {
        oper = string
        calculo.innerHTML += string
        teste++
    }
}

function back() {
    var calculo = document.querySelector('header#calculo').innerHTML
    document.getElementById('calculo').innerHTML = calculo.substring(0, calculo.length -1)
    if (teste == 0) {
        string1 = string1.slice(0, -1)
    } else {
        string2 = string2.slice(0, -1)
    }
}

function result() {
    var calculo = document.querySelector('header#calculo')
    if (oper == '+') {
        var resultado = Number(string1) + Number(string2)
    } else if (oper == '-') {
        var resultado = Number(string1) - Number(string2)
    } else if (oper == 'x') {
        var resultado = Number(string1) * Number(string2)
    } else if (oper == '/') {
        var resultado = Number(string1) / Number(string2)
    } 
    if (!Number.isInteger(resultado)) {
        calculo.innerHTML = resultado.toFixed(2)
    } else {
        calculo.innerHTML = resultado
    }
    string1 = resultado
    string2 = ''

} 