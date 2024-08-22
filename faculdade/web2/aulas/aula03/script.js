// trunc() - parte inteira do número

var a = Number(prompt('Digite um numero decimal: '))

// b = Math.trunc(a)
// document.write(`A parte inteira do número ${a} é ${b}`)
document.write(`A parte inteira do número ${a} é ${Math.trunc(a)}`)

// max() - busca o maior valor da lista

c = [4,5,6,7,12,56]
d = Math.max(...c)

document.write(`<br>O maior valor da lista é ${d} e sua posição é ${c.indexOf(d)}`)

// min() - busca o menor valor da lita

e = Math.min(...c)

document.write(`<br>O menor valor da lista é ${e} e sua posição na lista é ${c.indexOf(e)}`)
