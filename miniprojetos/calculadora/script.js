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
        string1 = ''
        string2 = '' 
        oper = ''
        calculo.innerHTML = ''
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

function isFloat(value) {
    return Number.isFinite(value) && !Number.isInteger(value);
}

function result() {
    var calculo = document.querySelector('header#calculo')
    if (oper == '+') {
        var resultado = Number(string1) + Number(string2)
        if (isFloat(resultado)) {
            calculo.innerHTML = resultado.toFixed(3)
        } else {
            calculo.innerHTML = resultado
        }
    } else if (oper == '-') {
        var resultado = Number(string1) - Number(string2)
        if (isFloat(resultado)) {
            calculo.innerHTML = resultado.toFixed(3)
        } else {
            calculo.innerHTML = resultado
        }
    } else if (oper == 'x') {
        var resultado = Number(string1) * Number(string2)
        if (isFloat(resultado)) {
            calculo.innerHTML = resultado.toFixed(3)
        } else {
            calculo.innerHTML = resultado
        }
    } else if (oper == '/') {
        var resultado = Number(string1) / Number(string2)
        if (isFloat(resultado)) {
            calculo.innerHTML = resultado.toFixed(3)
        } else {
            calculo.innerHTML = resultado
        }
    } 
    if (teste = 1) {
        teste = 0
    }
} 