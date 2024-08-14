var numero1 = []
var numero2 = []
var oper = ''
var teste = 0


function addNumbers(n) {
    var calculo = window.document.querySelector('header#calculo');
    calculo.innerHTML += n
    if (teste == 0) {
        numero1.push(n)
    } else {
        numero2.push(n)
    }
}

function oper(value) {
    calculo.innerHTML = ' '
    oper = value
    teste++
}
    
function result() {

}