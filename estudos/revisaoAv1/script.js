var mediaAltura = 1.70; //! EXERCÍCIO 1
var mediaPeso = 70;
var imcMedio = mediaPeso / (mediaAltura*mediaAltura);



// MAÇO 20 CIGARROS

var anos = 7 //+(prompt("Quantos anos fumando?")); //! EXERCÍCIO 2
var numPorDia = 30 //+(prompt("Quantos cigarros por dia?"));
var precoCarteria = 14 //+(prompt("O preço da carteira:"));

var cigarroPorAno = numPorDia * 365;
var qtdCigarros = cigarroPorAno * anos;

var precoPorCigarro = precoCarteria / 20;
var custoTotal = precoPorCigarro * qtdCigarros;

document.write(`<br>Fumando um total de ${qtdCigarros} na vida, sendo ${cigarroPorAno} por ano, e ${numPorDia} por dia, tem um custo total de R$${custoTotal.toFixed(2).replace('.',',')}`)



var idadeAmalia = 27 //+(prompt("Digite a idade de Amália:")); //! EXERCÍCIO 3
var idadeJoaquim = 26 //+(prompt("Digite a idade de Joaquim:"));

if(idadeAmalia > idadeJoaquim) {
    document.write("<br>Amália é mais velha do que Joaquim!");
} else {
    document.write("<br>Joaquim é mais velho do que Amália!");
}



var vida = 100; //! EXERCÍCIO 4
var dano = 25;

function isDeath(vida, dano) {
    vida -= dano;
    if (vida <= 0) {
        return true;
    } else {
        return false;
    }
}

document.write(`<br>Morreu? ${isDeath(vida,dano)}`);



var randomNumbers = [] //! EXERCÍCIO 5
var tentativas = []
var qtdAcertos = 0;
const chance = 60 ** 6
console.log(chance)
for(let i = 0; i < 6; i++) {
    randomNumbers.push(Math.floor(Math.random() * 60) + 1);
}

alert("Tente acertar os 6 números!");
for(let i = 0; i < 6; i++) {
    tentativas.push(+(prompt(`Número ${i+1}: `)));
    if (tentativas[i] === randomNumbers[i]) {
        qtdAcertos++;
    }
}
document.write(`<br>Os numeros eram ${randomNumbers} e você acertou ${qtdAcertos}, a chance de acertar é de 1 em ${chance}!`);