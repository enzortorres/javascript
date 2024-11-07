var slides = ["images/bart.png", "images/homer.png", "images/maggie.png", "images/marge.png", "images/lisa.png"]
var tam = slides.length
var slideAtual = 0;
var tmpSlider;


function trocaAutomatica() {
    slideAtual++;
    if (slideAtual >= tam) {
        slideAtual = 0;
    }
    document.getElementById('dvSlider').style.backgroundImage = `url("${slides[slideAtual]}")`
}

function inicialSlider () {
    document.querySelector('#dvSlider').style.backgroundImage=`url('${slides[slideAtual]}')`
    tmpSlider = setInterval(trocaAutomatica, 2000)
}

function parar() {
    clearInterval(tmpSlider);
}

function troca(number) {
    slideAtual += number

    if (slideAtual >= tam) {
        slideAtual = 0;
    }
    if (slideAtual < 0) {
        slideAtual = tam - 1;
    }

    document.getElementById('dvSlider').style.backgroundImage = `url("${slides[slideAtual]}")`;
}