const btn1 = document.querySelector('#btn1') //! EXERCÍCIO 1
const txtName = document.querySelector('#res-nome')

btn1.addEventListener('click', () => {
    const nome = document.querySelector('#nome').value
    txtName.innerHTML = `Bom dia ${nome}!`
})




const btn2 = document.querySelector('#btn2') //! EXERCÍCIO 2
var txtCalculo = document.querySelector('#res-calculo')

btn2.addEventListener('click', calcular)

function calcular() {
    const number1 = +(document.querySelector('#number1').value)
    const number2 = +(document.querySelector('#number2').value)
    let soma = number1 + number2
    let produto = number1 * number2
    let quociente = number1 / number2
    let diferenca = number1 - number2

    txtCalculo.innerHTML = `Soma dos valores: ${soma}<br>
    Produto dos valores: ${produto}<br>
    Quociente dos valores: ${quociente}<br>
    Diferença dos valores: ${diferenca}<br>`
}




const btn3 = document.querySelector('#btn3') //! EXERCÍCIO 3
const txtMedia = document.querySelector('#res-media')

btn3.addEventListener('click', media)

function media() {
    const number1 = +(document.querySelector('#ex3-number1').value)
    const number2 = +(document.querySelector('#ex3-number2').value)
    const number3 = +(document.querySelector('#ex3-number3').value)
    const media = (number1 + number2 + number3) / 3

    txtMedia.innerHTML = `Media dos valores: ${media.toFixed(2)}`;
}

const btn4 = document.querySelector('#btn4') //! EXERCÍCIO 4
const txtSubtracao = document.querySelector('#res-subtracao')

btn4.addEventListener('click', subtracao)

function subtracao() {
    const number1 = +(document.querySelector('#ex4-number1').value)
    const number2 = +(document.querySelector('#ex4-number2').value)
    const subtracao = number1 - number2

    txtSubtracao.innerHTML = `Subtração dos valores: ${subtracao}`;
}




const btn5 = document.querySelector('#btn5') //!EXERCÍCIO 5
const txtTabuada = document.querySelector('#res-tabuada')

btn5.addEventListener('click', tabuada)

function tabuada() {
    const number = +(document.querySelector('#ex5-number').value)
    for(let i = 0; i < 10; i++) {
        txtTabuada.innerHTML += `${number} x ${i+1} = ${number * (i+1)}<br>`
    }
}