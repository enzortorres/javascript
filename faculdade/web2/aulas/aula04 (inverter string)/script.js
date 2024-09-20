var nome = prompt('Digite o seu nome')
var palavraInvertida = ''

for (let i = nome.length - 1; i >= 0; i--) {
    palavraInvertida += nome[i]
}

document.write(`${nome} invertido: ${palavraInvertida}`)
