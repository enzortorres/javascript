// var contadorA = 0; //! EXERCÍCIO 1
// var reset = document.getElementById('reset')

// document.addEventListener('keydown', (event) => {
//     if (event.key == 'a' || event.key == 'A') {
//         contadorA += 1;
//     }
//     document.getElementById('res').innerText = `Quantidade de a's digitados: ${contadorA}`
// })

// reset.addEventListener('click', () => {
//     contadorA = 0;
//     document.getElementById('res').innerText = `Quantidade de a's digitados: ${contadorA}`
// })




// document.addEventListener('keydown', (event) => { //! EXERCÍCIO 3
//     if (event.ctrlKey) {
//         if(event.key === 's') {
//             event.preventDefault();
//             document.getElementById('res').innerText = 'Projeto salvo!'
//         }
//     }
//     if(event.ctrlKey) {
//         if (event.key === 'p') {
//             event.preventDefault();
//             document.getElementById('res').innerText = 'Projeto impresso'
//         }
//     }

//     setTimeout(() => {
//         document.getElementById('res').innerText = ''
//     }, 1500)
// })

const keys = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","t","u","v","w","x","y","z", "Backspace", "Control", "Shift", "Enter"];
const key = document.getElementById('key');
const errorCountDisplay = document.getElementById('errorCount');
const correctCountDisplay = document.getElementById('correctCount');
let numeroRandom = 0;
let isStarted = false;
let errors = 0;
let corrects = 0;

document.addEventListener('keydown', (event) => {
    if (isStarted) {
        checkKey(event.key);
    }
    if (event.key === ' ' && !isStarted) {
        isStarted = true;
        document.getElementById('start').innerHTML = ''
        generateRandomKey();
    }
});

// Função para gerar um número aleatório
function randomNumber() {
    return Math.floor(Math.random() * keys.length);
}

// Função para verificar a tecla pressionada
function checkKey(key) {
    if (key === keys[numeroRandom]) {
        corrects++;
        document.getElementById('correctCount').innerHTML = `Acertos: ${corrects}`;
    } else {
        errors++;
        document.getElementById('errorCount').innerHTML = `Erros: ${errors}`;
    }
    generateRandomKey();
}

// Função para gerar uma tecla aleatória
function generateRandomKey() {
    numeroRandom = randomNumber();
    key.innerHTML = keys[numeroRandom];

    clearInterval(window.intervalId); 
    window.intervalId = setInterval(() => {
        key.innerHTML = `Perdeu!`;
        isStarted = false;
    }, 3000);
}
