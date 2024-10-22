let numbers = [1,2,3,4,5,6,7,8,9]
// 0 1 2 3 4 5 6 7 8

function binarySearch(number, array) {
    var left = 0;
    var right = array.length - 1;
    
    while (left <= right) {
        var attempt = Math.floor((left + right) / 2)

        if (numbers[attempt] === number) {
            return attempt
        } else if (numbers[attempt] > number) {
            right = attempt - 1;
        } else {
            left = attempt + 1;
        }
    }
    return -1;
}

const result = binarySearch(6, numbers)
if (result != -1) {
    console.log(`The number entered is in index ${result}`)
} else {
    console.log(`This number is not in the array`)
}