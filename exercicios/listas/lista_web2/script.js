// var idade = +(prompt('Digite sua idade: ')) //! EXERCÍCIO 01

// if (idade >= 18 && idade <= 70) {
//     alert(`Com ${idade} é obrigatório a votação!`)
// } else {
//     alert(`Com ${idade} não é obrigatório a votação!`)
// }





// var number1 = +(prompt("Digite um número:")) //! EXERCÍCIO 02
// var number2 = +(prompt("Digite outro número:"))
// var oper = prompt('Qual operação deseja realizar?\n\n1- Soma\n2- Subtração\n3- Multiplicação\n4- Divisão\n')

// function soma(n1, n2) {
//     return n1 + n2
// }

// function subtracao(n1, n2) {
//     return n1 - n2
// }

// function multiplicacao(n1, n2) {
//     return n1 * n2
// }

// function divisao(n1, n2) {
//     return n1 / n2
// }

// switch (oper) {
//     case "1": alert(`${number1} + ${number2} = ${soma(number1, number2)}`)
//         break

//     case "2": alert(`${number1} - ${number2} = ${subtração(number1, number2)}`)
//         break

//     case "3": alert(`${number1} * ${number2} = ${multiplicacao(number1, number2).toFixed(2)}`)
//         break

//     case "4": alert(`${number1} / ${number2} = ${divisao(number1, number2).toFixed(2)}`)
//         break

//     default:
//         alert('ERRO! Digite um operador válido!')
// }





// let porcentagem, aumento
// var salario = +(prompt("Digite o seu salário:")) //! EXERCÍCIO 3 e 4

// if (salario <= 280) {
//     porcentagem = 0.20
//     aumento = salario * porcentagem
// } else if(salario <= 700) {
//     porcentagem = 0.15
//     aumento = salario * porcentagem
// } else if (salario <= 1500) {
//     porcentagem = 0.10
//     aumento = salario * porcentagem
// } else {
//     porcentagem = 0.05
//     aumento = salario * porcentagem
// }
// var salarioAtual = salario + aumento
// document.write(`Seu salário de R$${salario.toFixed(2)} teve um aumento de ${porcentagem * 100}%, aumentando R$${aumento.toFixed(2)} e passou a ser R$${salarioAtual.toFixed(2)}`)



// const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', //! EXERCÍCIO 5
//         'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

// var date = prompt("Digite o dia de seu nascimento no formato (dd/mm/yyyy)")
// const [day, month, year] = date.split('/')
// var monthNumber = Number(month) - 1

// document.write(`${day} de ${months[monthNumber]} de ${year}`)




// let year = +(prompt('Quantos anos de vida você tem?')) //! EXERCÍCIO 6
// let month = +(prompt('Quantos mesês de vida você tem?'))
// let day = +(prompt('Quantos dias de vida você tem?'))

// const totalDays = (year, month, day) => {
//     let totalDays = (year * 365) + (month * 30) + day
//     return totalDays
// }

// document.getElementById('res').innerHTML = `Você tem ao todo ${totalDays(year, month, day)} dias de vida!`



// let word = prompt("Digite uma palavra aleatória:") //! EXERCÍCIO 7

// const trocarLetras = (palavra) => {
//     let novaPalavra = palavra.toLowerCase()
//     novaPalavra = novaPalavra.replace('a', 'U')
//     novaPalavra = novaPalavra.replace('o', 'G')
//     return novaPalavra
// }

// document.getElementById('res').innerHTML = `A palavra ${word} modificada ficou: ${trocarLetras(word)}`



// let number; //! EXERCÍCIO 8

// do {
//     number = +(prompt("Digite um número:")) 
//     if(isNaN(number)) {
//         alert('ERRO! Digite um número válido!')
//     }
// } while (isNaN(number))

// const tabuadaDe7 = (number) => {
//     for (let i = 1; i <= number; i++) {
//         document.write(`7 x ${i} = ${7 * i}<br>`)
//     }
// }

// tabuadaDe7(number)




// let nomes = [] //! EXERCÍCIO 9

// for(let i = 0; i < 5; i++) {
//     nomes.push(prompt(`Digite o ${i+1} nome:`))
// }

// const maiorNome = (array) => {
//     let maior = 0, maiorNome
//     for(let i = 0; i < 5; i++) {
//         if (array[i].length > maior) {
//             maior = array[i].length
//             maiorNome = array[i]
//         }
//     }
//     return maiorNome
// }

// document.getElementById('res').innerHTML = `O maior nome encontrada nessa array foi: ${maiorNome(nomes)}`



// let frase = prompt("Digite uma frase aleatória:") //!EXERCÍCIO 10

// const qtdPalavras = (frase) => {
//     const palavras = [] = frase.split(' ')
//     let qtd = palavras.length
//     return qtd
// }
// document.getElementById('res').innerHTML = `A quantidade de palavras contidas na frase (${frase}) é: ${qtdPalavras(frase)}`



// let nome = prompt("Digite o seu nome para ver-ló invertido:") //! EXERCÍCIO 11

// const nomeInvertido = (nome) => {
//     return nome.split('').reverse().join('')
// }

// document.getElementById('res').innerHTML = `O seu nome (${nome}) invertido fica: ${nomeInvertido(nome)}`

// let agora = new Date() //! EXERCÍCIO 12
// let diaSemana = agora.getDay()
// let dia = agora.getDate()
// let mes = agora.getMonth()
// let ano = agora.getFullYear()
// const diaSem = ['Domingo', 'Segunda-feira', 'Terça-feira',
//                 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

// const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
//                 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']



// document.getElementById('res').innerHTML =  `Dia da semana: ${diaSem[diaSemana]}<br> Dia do mês: ${dia}<br> Mês: ${months[mes]}<br> Ano: ${ano}`




// const soma = (n1, n2, n3) => n1 + n2 + n3 //! EXERCÍCIO 13
// const media = (n1, n2, n3) => {
//     total = soma(n1, n2, n3) / 3
//     return total
// }

// document.getElementById('res').innerHTML = `Soma dos 3 valores: ${soma(1,2,3)}<br>Media dos 3 valores: ${media(1,2,3)}`


// let numbers = [] //! EXERCÍCIO 14

// for (let i = 0; i < 3; i++) {
//     numbers.push(Number(prompt(`Digite o ${i+1} valor:`)))
// }

// const somaDeArray = (array) => {
//     let total = 0
//     for (let i = 0; i < 3; i++) {
//         total += array[i] 
//     }
//     return total
// }

// const mediaDeArray = (array) => {
//     total = somaDeArray(array) / 3
//     return total
// }

// document.getElementById('res').innerHTML = `O resultado da media dos valores digitado foi: ${mediaDeArray(numbers)}`




// let array = []; //! EXERCÍCIO 15
// let newArray = [];

// for (let i = 0; i < 4; i++) {
//     array.push(+(prompt(`Digite o ${i+1}º valor:`)));
// }
// let number = +(prompt("Digite um valor para comparação:"));
// newArray = greaterThan(array, number);

// document.getElementById('res').innerHTML = `Array nova: ${newArray}`;

// function greaterThan(array, number) {
//     let newArray = [];
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] > number) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }




// let nomes1 = []; //! EXERCÍCIO 16
// let nomes2 = [];

// for (let i = 0; i < 3; i++) {
//     nomes1.push(prompt(`Digite o ${i+1}º nome:`));
// }

// for (let i = 0; i < 3; i++) {
//     if(i == 0) {
//         nomes2.push(prompt(`Denovo! Digite o ${i+1}º nome:`));
//     } else {
//         nomes2.push(prompt(`Digite o ${i+1}º nome:`));
//     }
// }

// document.getElementById('res').innerHTML += `${juntarNomes(nomes1, nomes2)}`

// function juntarNomes (array1, array2) { 
//     let nomesJuntos = [];
//     for(let i = 0; i < 3; i++) {
//         nomesJuntos.push(array1[i] + ` ${array2[i]}`);
//     }
//     return nomesJuntos;
// }



// const frase = "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente."; //! EXERCÍCIO 17

// let inicio = frase.indexOf('motivação não dura sempre');
// let fim = inicio + 'motivação não dura sempre'.length;
// let trecho = frase.substring(inicio, fim);
// let fraseFinal = trecho + '...';

// document.getElementById('res').innerHTML = `Frase final: ${fraseFinal}`;



// let number = parseFloat(prompt("Digite um valor em reais:")).toFixed(2); //! EXERCÍCIO 18
// let numberInString = String(number).replace('.',',');
// document.getElementById('res').innerHTML = `R$ ${numberInString}`;



// function pedraPapelTesoura() {
//     let escolha = prompt('Escolha uma jogada!\nPedra, Papel ou Tesoura!').toLowerCase(); //! EXERCÍCIO 19
//     console.log(escolha);

//     function randomChoice() {
//         const randomNumber = Math.floor(Math.random() * 3);
//         const escolhasBot = ['pedra', 'papel', 'tesoura'];
//         return escolhasBot[randomNumber];
//     }

//     let escolhaBot = randomChoice();

//     alert(`Você escolheu ${escolha} e seu oponente escolheu ${escolhaBot}!`);
//     if(escolha == escolhaBot) {
//         alert(`Empate!`);
//     } else if (escolha == "papel" && escolhaBot == "pedra") {
//         alert('Você ganhou!');
//     } else if (escolha == "pedra" && escolhaBot == "tesoura") {
//         alert('Você ganhou!');
//     } else if (escolha == "tesoura" && escolhaBot == "papel") {
//         alert('Você ganhou!');
//     } else {
//         alert('Você perdeu!');
//     }
// }

// pedraPapelTesoura();




// let lados = [] //! EXERCÍCIO 20
// function analisarTriangulo() {
//     for (let i = 0; i < 3; i++) {
//         lados.push(+(prompt(`Digite o ${i+1}º lado`)))
//     }
    
//     if(lados[0] != lados[1] && lados[1] != lados[2]) {
//         document.getElementById('res').innerHTML = 'Triângulo Isósceles';
//     } else if(lados[0] == lados[1] && lados[1] == lados[2]) {
//         document.getElementById('res').innerHTML = 'Triângulo Equilátero';
//     } else {
//         document.getElementById('res').innerHTML = 'Triângulo Escaleno';
//     }
// }

// analisarTriangulo();




// function preencherPessoas() { //! EXERCÍCIO 21
//     var pessoas = []

//     for(let i = 0;i < 5; i++) {
//         let altura = parseFloat(prompt(`Digite a altura da ${i+1}º pessoa: `));
//         let sexo = prompt(`Digite o sexo da ${i+1}º pessoa: `);

//         pessoas.push({altura,sexo})
//     }

//     return pessoas;
// }

// function analisarPessoas(pessoas) {
//     let qtdHomem = 0;
//     let qtdMaior170 = 0;
//     let maiorAltura = 0;
//     let sexoMaiorAltura = '';

//     for (let i = 0; i < pessoas.length; i++) {
//         if(pessoas[i].sexo == 'M') {
//             qtdHomem++;
//         }
//         if (pessoas[i].altura > 1.70) {
//             qtdMaior170++;
//         }
//         if (pessoas[i].altura > maiorAltura) {
//             maiorAltura = pessoas[i].altura;
//             sexoMaiorAltura = pessoas[i].sexo;
//         }
//     }

//     document.getElementById('res').innerHTML = `Quantidade de homens: ${qtdHomem}<br>
//     Quantidade de pessoas maiores do que 1.70m: ${qtdMaior170}<br>
//     Maior altura: ${maiorAltura}<br>
//     Sexo da pessoa mais alta: ${sexoMaiorAltura}`;
// }

// let pessoas = preencherPessoas();
// analisarPessoas(pessoas);



// function Pais(nome, continente, capital) { //! EXERCÍCIO 22
//     this.nome = nome;
//     this.continente = continente;
//     this.capital = capital;
// }

// function novoPais() {
//     let nome = prompt("Digite o nome do seu país");
//     let continente = prompt("Digite o nome do continente do seu país:");
//     let capital = prompt("Digite o nome da capital do seu país:");

//     let pais = new Pais(nome, continente, capital);

//     return pais;
// }

// let meuPais = novoPais();
// document.getElementById('res').innerHTML = `País: ${meuPais.nome}<br>
// Continente: ${meuPais.continente}<br>
// Capital: ${meuPais.capital}<br>`



// function Pessoa(nome, idade, email, sexo) { //! EXERCÍCIO 23
//     this.nome = nome;
//     this.idade = idade;
//     this.email = email;
//     this.sexo = sexo;

//     return pessoa;
// }

// function cadastrarPessoa() {
//     let nome = prompt("Digite o seu nome: ");
//     let idade = Number(prompt("Digite sua idade: "));
//     let email = prompt("Digite seu email: ");
//     let sexo = prompt("Digite o seu sexo");

//     let pessoa = new Pessoa(nome, idade, email, sexo);

//     return pessoa;
// }

// let pessoa = cadastrarPessoa();
// document.getElementById('res').innerHTML = `
//     Nome: ${pessoa.nome}<br>
//     Idade: ${pessoa.idade}<br>
//     Email: ${pessoa.email}<br>
//     Sexo: ${pessoa.sexo}<br>
// `



// let fruta = { //! EXERCÍCIO 24
//     cor: 'amarelo',
//     tamanho: 'média',
//     pais: 'Brasil'
// }

// function atualizarFruta() {
//     fruta.cor  = prompt("Digite uma nova cor para a fruta:");
//     fruta.tamanho = prompt("Digite um novo tamanho para a fruta (pequena, média ou grande):");
//     fruta.pais = prompt("Digite um novo país para a fruta:");
// }

// atualizarFruta();

// document.getElementById('res').innerHTML = `
//     Nova cor da fruta: ${fruta.cor}<br>
//     Novo tamanho da fruta: ${fruta.tamanho}<br>
//     Novo país da fruta: ${fruta.pais}<br>
// `




// let escola = { //! EXERCÍCIO 25
//     numeroAlunos: 0,
//     nomeDiretor: '',
//     anoFundacao: 0,
//     endereco: {
//         rua: '',
//         bairro: '',
//         cidade: ''
//     }
// }

// function preencherDados() {
//     escola.numeroAlunos = +(prompt("Digite a quantidade de alunos:"));
//     escola.nomeDiretor = prompt("Digite o nome do diretor:");
//     escola.anoFundacao = +(prompt("Digite o ano de fundação:"));
//     escola.endereco.rua = prompt("Digite a rua da escola:");
//     escola.endereco.bairro = prompt("Digite o bairro da escola:");
//     escola.endereco.cidade = prompt("Digite a cidade da escola:");
// }

// preencherDados();

// document.getElementById('res').innerHTML = `
//     Escola<br>
//     Número de alunos: ${escola.numeroAlunos}<br>
//     Nome do diretor: ${escola.nomeDiretor}<br>
//     Ano de fundação: ${escola.anoFundacao}<br><br>
//     Endereço:<br><br>
//     Rua: ${escola.endereco.rua}<br>
//     Bairro: ${escola.endereco.bairro}<br>
//     Cidade: ${escola.endereco.cidade}<br>
// `


// let carro = { //! EXERCÍCIO 26
//     modelo: '',
//     estado: '',
//     precoBase: 0,
//     ano: 0,
//     calcularPreco: function() {
//         let anoAtual = new Date().getFullYear();
//         let diferencaAnos = anoAtual - this.ano;
//         let valorEstimado = this.precoBase  - (1000 * diferencaAnos);

//         return valorEstimado;
//     }
// }

// function preencherDadosCarro() {
//     carro.modelo = prompt("Digite o modelo do carro:");
//     carro.estado = prompt("Digite o estado do carro:");
//     carro.precoBase = parseInt(prompt("Digite o preço base do carro:"));
//     carro.ano = parseFloat(prompt("Digite o ano do carro"));
// }
// preencherDadosCarro();
// let valorEstimado = carro.calcularPreco();

// document.getElementById('res').innerHTML = `
//     Modelo do carro: ${carro.modelo}<br>
//     Estado do carro: ${carro.estado}<br>
//     Preço base do carro: ${carro.precoBase}<br>
//     Ano do carro: ${carro.ano}<br>
//     Valor estimado: R$${valorEstimado}<br>
// `