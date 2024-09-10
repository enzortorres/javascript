// Factory simples

function criarPessoa(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}
console.log(criarPessoa("Enzo", "Ribas"))

function criarProduto(nome, preco) {
    return {
        produto: nome,
        preco: preco
    }
}
console.log(criarProduto('Fone', 45))