function rand([min = 0, max = 1000]) {
    if(min > max) {
        [min, max] = [max, min]
    }
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log('Número aleatório entre 50 e 40, como o min é maior do que o max, o minimo passa a ser o maximo e maximo passa a ser o minimo', rand([50,40]))
console.log('Número aleatório entre 992 e 1000', rand([992]))
console.log('Número aleatório entre 0 e 10', rand([ , 10]))
console.log('Número aleatório entre 0 e 1000', rand([]))
console.log('ERRO!', rand())