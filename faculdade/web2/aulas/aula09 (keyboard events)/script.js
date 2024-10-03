/* 
    keydown - ocorre quando uma tecla é pressionada
    keyup - occore quando uma tela é liberada
    keypress - ocorre quando uma tecla que produz caractere é pressionada
*/

//* EXEMPLO 1 - Captura das teclas digitadas

document.getElementById('input').addEventListener('keydown', (event) => {
    console.log('Tecla pressionada: ', event.key);
})  

//* EXEMPLO 2 - Prevenir digitacão de teclas especificas

document.getElementById('input2').addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        event.preventDefault() // previnir a quebra linha
        console.log('A tecla enter foi pressionada, mas a acao foi previnida')
    }
})

//* EXEMPLO 3 - Previnir digitar letras, somente números serão liberados

document.getElementById('input3').addEventListener('keydown', (event) => {
    if(isNaN(event.key) && event.key != 'Backspace' && event.key) {
        event.preventDefault();
    } 
})

//* EXEMPLO 4 - Controle de volume

var volume = 50;

document.addEventListener('keydown', (event) => {
    if(event.key == 'ArrowUp') {
        volume = Math.min(100, volume + 5)
    } else if (event.key == 'ArrowDown'){
        volume = Math.max(0, volume - 5)
    }
    document.getElementById('volume').innerText = `Volume: ${volume}`
})

//* EXEMPLO 5 - Mudar a cor do fundo de acordo com a tecla pressionada

// document.addEventListener('keydown', (event) => { //? Meu método
//     if(event.key == 'r') {
//         document.body.style.background = 'red'
//     } else if (event.key == 'g'){
//         document.body.style.background = 'green'
//     } else if(event.key == 'b') {
//         document.body.style.background = 'blue'
//     }
// })

document.addEventListener('keydown', (event) => { //? Método da professora
    var kc = event.which
    switch(kc) {
        case 82: //Tecla r na tabela ASCII 
            document.body.style.backgroundColor = 'red';
            break;
        case 71: //Tecla g na tabela ASCII 
            document.body.style.backgroundColor = 'green';
            break;
        case 66: //Tecla b na tabela ASCII 
            document.body.style.backgroundColor = 'blue';
            break;
        default:
            document.body.style.backgroundColor = '';
            break;
    }
});

//* EXEMPLO 6 - Mudar a cor de um elemento específico 

var elemento = document.getElementById('elemento')
var contador = 0;
document.addEventListener('keydown', corElemento1);
document.addEventListener('keyup', corElemento2);

// function corElemento(event) { //? Método para clicar o espaço e ficar mudando
//     if(event.key == ' ') {
//         if (contador == 0) {
//             elemento.style.backgroundColor = 'violet'
//             contador++;
//         } else {
//             elemento.style.backgroundColor = 'darkred'
//             contador--;
//         }
//     }
// }l

function corElemento1(event) {
    if (event.key == ' ') {
        elemento.style.backgroundColor = 'darkred';
    }
}
function corElemento2(event) {
    if (event.key == ' ') {
        elemento.style.backgroundColor = 'darkblue';
    }
}

//* EXEMPLO 7 - Inserir elementos na lista 

var i = document.getElementById('input4');
var l = document.getElementById('lista');
var add = document.getElementById('adicionar');
var remove = document.getElementById('remove');

add.addEventListener('click', adicionar);
remove.addEventListener('click', removeLastItem);

function adicionar() {
    var novoItem = document.createElement('li');
    novoItem.innerText = i.value;
    l.appendChild(novoItem);
    i.value = '';
    i.focus()
}

function removeLastItem() {
    var lastItem = l.lastChild
    l.removeChild(lastItem)
}