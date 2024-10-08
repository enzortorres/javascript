const ex01 = document.getElementsByClassName('box')[0]; //! EXERCÍCIO 1

ex01.addEventListener('mousedown', () => {
    ex01.innerText = 'Pressionou';
})

const ex02 = document.getElementsByClassName('box')[1]; //! EXERCÍCIO 2
ex02.addEventListener('mouseup', () => {
    ex02.innerText = 'Soltou';
})

const ex03 = document.getElementsByClassName('box')[2]; //! EXERCÍCIO 3
ex03.addEventListener('click', () => {
    ex03.innerText = 'Clicou';
})

const ex04 = document.getElementsByClassName('box')[3]; //! EXERCÍCIO 4
ex04.addEventListener('dblclick', () => {
    ex04.innerText = 'Double Click';
})

const ex05 = document.getElementsByClassName('box')[4]; //! EXERCÍCIO 5
ex05.addEventListener('mousemove', (event) => {
    ex05.innerText = `X:${event.pageX}\nY:${event.pageY}`;
})

const ex06 = document.getElementsByClassName('box')[5]; //! EXERCÍCIO 6
ex06.addEventListener('mousemove', (event) => {
    ex06.style.background = 'red';
})

const ex07 = document.getElementsByClassName('box')[6]; //! EXERCÍCIO 7
let isDragging = false;

ex07.addEventListener('mouseenter', () => {
    ex07.innerText = 'Pressione';
});

ex07.addEventListener('mouseout', () => {
    ex07.innerText = 'Passe o mouse em cima';
    if (!isDragging) {
        isDragging = false;
    }
});

ex07.addEventListener('mousedown', (event) => {
    ex07.innerText = 'Arraste o mouse';
    isDragging = true;
    document.addEventListener('mousemove', elementMove);
    document.addEventListener('mouseup', mouseUp);
});

const elementMove = (event) => {
    if (isDragging) {
        ex07.style.position = 'absolute';
        ex07.style.top = (event.pageY - 100) + 'px';
        ex07.style.left = (event.pageX - 100) + 'px';
    }
};

const mouseUp = () => {
    isDragging = false;
    ex07.innerText = 'Pressione';
    document.removeEventListener('mousemove', elementMove);
    document.removeEventListener('mouseup', mouseUp);
};


