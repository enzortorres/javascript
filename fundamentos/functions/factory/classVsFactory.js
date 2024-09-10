class Pessoa1 {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

function Pessoa2() {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Enzo')
p1.falar( )

const CriarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = CriarPessoa('Enzo')
p2.falar()

