let numeros = [65,75,4,93,37,11,78]
let numerosOrdenados = bubbleSort(numeros)

function bubbleSort(array) {
    tamanho = array.length
    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
} 
console.log(numerosOrdenados)