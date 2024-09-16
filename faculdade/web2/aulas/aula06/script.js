// //TODO: Método construtor - new Array() -----------------------

// var a = new Array()
// document.write(`<br> ${a}`)
//  document.write(`<br>O tamanho do array é ${a.length}`)

// var b = new Array(true, 1,2,3,4, new Array(1,2,3), 'a')
// document.write(`<br> ${b}`)
// document.write(`<br> ${b[2]}`)
// document.write(`<br> ${b[5][1]}`)
// document.write(`<br> ${b[5][2]}`) 

// //? length - verifica o tamanho do array ---------------------

// document.write(`<br>O tamanho do array é ${b.length}`)

// //? indexOf() - identifica a posição do elemento solicitado do vetor 
// document.write(`<br>A posição do elemento "a" encontra-se na posição: ${b.indexOf('a')}`)
// document.write(`<br>A posição do elemento "a" encontra-se na posição: ${b.indexOf('i')}`)

// //? lastIndexOf() - ultima ocorrencia do elemento solicitado no vetor
// document.write(`<br>O elemento "a" foi visto por ultimo na posição: ${b.lastIndexOf('a')}`)


// //TODO: Método literal - [] ------------------------------------------- 

// var c = []
// document.write(`<br> ${c}`)
// document.write(`<br>O tamanho do array é ${c.length}`)

// var d = [true, 1,2,3,4,[1,2,3],'a','a']
// document.write(`<br> ${d}`)
// document.write(`<br> ${d[0]}`)
// document.write(`<br> ${d[5][0]}`)

// //TODO: Valores externos ----------------------------------------------

// var nota = []

// // for(let i = 0; i < 3; i++) {
// //     nota[i] = prompt(`Digite a ${i+1} nota`)
// // }
// document.write(`<br>As notas são: ${nota}`)

// //? string -------------------------------------------------------------

// let nome = 'Thereza'
// document.write(`<br>O tamanho do array é ${nome.length}`)
// document.write(`<br>A ultima ocorrencia do "e" foi na posição: ${nome.lastIndexOf('e')}`)

// var e = [1,2,3,4]
// e[4] = 'Novo valor'
// document.write(`<br>${e}`)

// //* ou

// e[e.length] = "Valor novo"
// document.write(`<br>${e}`)


// var pessoas = ['Ana', 'Liz', 'Eva', 'Flora', 'Isabel']

// for (let i = 0; i < pessoas.length; i++) {
//     document.write(`<br>Nome: ${pessoas[i]}`)
// }

// //TODO: Função de ordenação

// document.write(`<br>${pessoas.reverse()}`)

// //? sort() - organiza o array em ordem alfabética

// document.write(`<br>A ordem alfabética do array é: ${pessoas.sort()}`)
// document.write(`<br>A ordem alfabética ao contrário do array é: ${pessoas.sort().reverse()}`)

// //? concat() - concatenar vetores ---------------

// var f = [1,2,3,4,5]
// var g = [6,7,8,9,0]

// document.write(`<br>O vetor "f" concatenado com o vetor "g" fica: ${f.concat(g)}`)
// document.write(`<br>O vetor "g" concatenado com o vetor "f" fica: ${g.concat(f)}`)

// //? includes() - verifica se um determinado elemento encontra-se na array

// document.write(`<br> O número 2 encontra-se no array? ${f.includes ? 'sim' : 'não'}`)
// document.write(`<br> O número 12 encontra-se no array? ${f.includes(12) ? 'sim' : 'não'}`)

// //? push() - adiciona um novo elemento no final do array
// var h = [10,20,30,40]
// h.push(50)
// document.write(`<br>${h}`)

// //? pop() - remove o último elemento do vetor
// h.pop()
// document.write(`<br>${h}`)

// //? unshift() - adicionar novo elemento no inicio do vetor
// h.unshift(0)
// document.write(`<br>${h}`)

// //? shift() - remover o primeiro elemento
// h.shift()
// document.write(`<br>${h}`)

// //? slice - fatia o array sem alterar o array original
// document.write(`<br>${h.slice(2)}`)
// document.write(`<br>${h.slice(0,2)}`)

// let aluno = 'Enzo Ribas Torres'
// let a1 = aluno.slice(0,4)
// document.write(`<br>${a1}`)

// let a2 = aluno.slice(4)
// document.write(`<br>${a2}`)

// let carro = ['Jeta', 'Fiat', 'Focus', 'Cruze', 'Corolla', 'Civic', 'Elantra']
// let c1 = carro.slice(2)
// document.write(`<br>${c1}`)

// let c2 = carro.slice(2,3)
// document.write(`<br>${c2}`)

// let c3 = carro.slice(2,5)
// document.write(`<br>${c3}`)

// let c4 = carro.slice(-4, -2)
// document.write(`<br>${c4}`)

// let c5 = carro.slice(-6, -3)
// document.write(`<br>${c5}`)

// let email = 'exemplo@gmail.com'
// let e = email.slice(email.indexOf("@")+1)
// document.write(`<br>${e}`)

// e1 = email.slice(email.lastIndexOf("m")+1)
// document.write(`<br>${e1}`)

// e2 = email.slice(email.lastIndexOf("e"))
// document.write(`<br>${e2}`)

// nome2 = 'Thereza'

// n1 = nome2.slice(-3)
// document.write(`<br>${n1}`)

// //? splice() - 1º valor: posição, 2º valor: quantidade de elementos excluídos, 3º valor: novos elementos

// d = ['Segunda', 'Terça', 'Quarta']

// d1 = d.splice(1,1)
// document.write(`<br>${d1}`)

// d2 = d.splice(1, 1, 'Quinta', 'Sexta')
// document.write(`<br>${d}`)

// nome = []
// for (let i = 0; i < 5; i++) {
//     nome[i] = prompt('Digite o seu nome')
// }
// document.write(`<br>Nome:${nome}`)
// n = nome.splice(2,0,'Teste')
// document.write(`<br>Nome:${nome}`)

// //? Função anonima - n possui nome, atribui-se a função

// const msg = function(x) {
//     return `Olá ${x}, Bom dia!`
// }
// nome = prompt('Digite o seu nome:')
// nome = nome[0].toUpperCase() + nome.substring(1)
// document.write(`<br>${msg(nome)}`)

// const double = function(num) {
//     return num ** 2
// }
// num = Number(prompt("Digite um numero:"))
// document.write(`<br>${double(num)}`)

