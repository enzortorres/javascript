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
    this.style.background = 'green '
})