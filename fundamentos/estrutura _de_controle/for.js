for (let i = 0; i <= 10; i++) {
    setTimeout(() => console.log(i), 2000 * i)
}


let i = 0;
const interval = setInterval(() => {
    console.log(i)
    i++;
    if (i > 10) clearInterval(interval);
}, 500);