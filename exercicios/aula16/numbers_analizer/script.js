let num = document.querySelector('input#number')
let lista = document.querySelector('select#select')
let res = document.querySelector('div#res')
let valores = []


function isNumber(n) { // FUNÇÃO CRIADA PARA SABER SE O VALOR DIGITADO NO INPUT É UM NÚMERO
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function InList(n, l) { // FUNÇÃO CRIADA PARA SABER O NÚMERO JA ESTÁ NA LISTA
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumber(num.value) && !InList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.append(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0, media = 0
        for(let i in valores) {
            soma += valores[i]
            if (valores[i] > maior) {
                maior = valores[i]
            }
            if(valores[i] < menor) {
                menor = valores[i]
            }
        }
        media = soma / total
        let roundedMedia = parseFloat(media.toFixed(2))
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${roundedMedia}</p>`
    }
}