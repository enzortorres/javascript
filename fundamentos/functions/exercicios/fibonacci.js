var numbers = [0, 1]
function fibonacci(list) {
    for (let pos = 0; numbers.length < 10; pos++) {
        list.push(list[pos] + list[pos + 1])
    }
    return list
}
console.log(fibonacci(numbers))

function fibonacci(n) {
    let numbers = [0, 1]
    for (let i = 2; i < n; i++) {
        numbers.push(numbers[i - 1] + numbers[i - 2])
    }
    return numbers
}