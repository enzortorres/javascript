let tries = 0
let random = randomNumber()
let typedNumber = document.getElementById('number')
typedNumber.focus()

function randomNumber() {
    return (Math.random(1) * 10).toFixed(0)
}

function verificar() {
    typedNumber = document.getElementById('number')

    if (typedNumber.value == '' || Number(typedNumber.value) < 0 || Number(typedNumber.value) > 10) {
        document.getElementById('res').innerHTML = `ERRO! Digite um valor válido`
    } else {
        tries++
        if (typedNumber.value == random) {
            
            if (tries == 1) {
                document.getElementById('res').innerHTML = `Você acertou de primeira, você é demais!<br>`
            } else {
                document.getElementById('res').innerHTML = `Você acertou com ${tries} tentativas! Meus parabéns!<br>`
            }
            document.getElementById('res').innerHTML += `O número era ${random}`
            random = randomNumber()
            tries = 0
        } else {
            document.getElementById('res').innerHTML = `Você errou! Tentativas: ${tries}<br>`
            if (Number(typedNumber.value) > random) {
                document.getElementById('res').innerHTML += `Dica: Menor`
            } else if (Number(typedNumber.value) < random) {
                document.getElementById('res').innerHTML += `Dica: Maior`
            }
        }
        typedNumber.value = ""
        typedNumber.focus()
    }
}

const form = document.getElementById('formulario')
form.addEventListener('submit', e => {
    e.preventDefault()
})