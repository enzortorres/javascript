var numbers = [0, 1] // PRIMEIRO MODO QUE CONSEGUI
function fibonacci(list) {
    for (let pos = 0; numbers.length < 10; pos++) {
        list.push(list[pos] + list[pos + 1])
    }
    return list
}
console.log(fibonacci(numbers))
 
function fibonacci(n) { // SEGUNDO MODO QUE CONSEGUI
    let numbers = [0, 1]
    for (let i = 2; i < n; i++) {
        numbers.push(numbers[i - 1] + numbers[i - 2])
    }
    return numbers
}

function fibonacci(n) { // TERCEIRO MODO QUE CONSEGUI
    if (n <= 1) {
        return n
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

function sequenciaFibonacci(n) {
    let list = []
    for (let i = 0; i < n; i++) {
        list.push(fibonacci(i))
    }
    return list
}

document.write(sequenciaFibonacci(10))