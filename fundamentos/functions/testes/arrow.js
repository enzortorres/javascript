const soma = (n1,n2) => {
    console.log(n1 + n2)
}


const fibonacci = (n) => { // TERCEIRO MODO QUE CONSEGUI
    if (n <= 1) {
        return n
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

const sequenciaFibonacci = (n) => {
    let list = []
    for (let i = 0; i < n; i++) {
        list.push(fibonacci(i))
    }
    return list
}

console.log(sequenciaFibonacci(10))
soma(1,3)

const helloWorld = (string) => {
    console.log(string)
}

helloWorld("print")