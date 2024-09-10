// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Constexto léxico em ação!

const teste = 'Global'

function fora() {
    const teste = 'Local'
    function dentro() {
        return teste
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())