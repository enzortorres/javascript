function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Fone', 'R$45.90'))
console.log(criarProduto('Notebook', 'R$3499.99'))
console.log(criarProduto('Desktop', 'R$5999.99'))