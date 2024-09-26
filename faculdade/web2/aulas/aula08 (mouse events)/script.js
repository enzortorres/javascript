const res = document.getElementById('res')
let contador = 0;

res.addEventListener("mouseenter", () => {
    res.style.background = 'url("gifs/mapache-pedro.gif")'
    res.style.backgroundRepeat = 'no-repeat'
    res.style.backgroundSize = 'contain'
})

res.addEventListener("click", () => {
    if (contador % 2 == 0) {
        res.style.background = 'url("gifs/nenem.gif")'
    } else {
        res.style.background = 'url("gifs/minions2.gif")'
    }
    res.style.backgroundRepeat = 'no-repeat'
    res.style.backgroundSize = 'cover'
    res.style.backgroundPosition = 'center'
    contador++
})

res.addEventListener("mouseout", () => {
    res.style.background = 'red'
})

//? EXEMPLO 2

var a1 = document.querySelector('#a')
a1.addEventListener('mouseover', function() {
    a1.style.backgroundColor = 'pink'
})
a1.addEventListener('mouseout', function() {
    a1.style.backgroundColor = 'violet'
})

//? EXEMPLO 3

document.querySelector("#b").addEventListener('click', function () {
    this.style.background = 'green'
})

//? EXEMPLO 4

document.querySelector('#btn3').addEventListener('click', function () {
    var novo = document.createElement('p')
    novo.textContent = `Novo valor inserido no container`
    document.querySelector('#container').appendChild(novo)
})

//? EXEMPLO 5 DOUBLE CLICK

document.getElementById('btn4').addEventListener('dblclick', function () {
    document.getElementById('text').innerHTML = `Você clicou <strong>duas</strong> vezes.`
})

//? EXEMPLO 6 UP AND DOWN

const jImage = document.getElementById('j');

jImage.addEventListener('mousedown', () => { 
    jImage.style.background = 'red'
    jImage.textContent = 'Você precisou o mouse!'
})

jImage.addEventListener('mouseup', () => { 
    jImage.style.background = 'blue'
    jImage.textContent = 'Você soltou o mouse!'
})


var btn = document.querySelector('#btn5')
btn.addEventListener('mouseover', function() {
    this.style.width = '150px'
    this.style.height = '75px'
})
btn.addEventListener('mouseout', function() {
    this.style.width = ''
    this.style.height = ''
})