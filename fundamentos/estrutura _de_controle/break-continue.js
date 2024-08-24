const numbers = [1,2,3,4,5,6,7,8,9,10]

for (let i in numbers) {
    if (i == 5) {
        break
    }
    console.log(`i = ${numbers[i]}`)
}
console.log('')
for (let j in numbers) {
    if (j == 5) {
        continue
    }
    console.log(`${j} = ${numbers[j]}`)
}

externo: 
for(a in numbers) {
    for (b in numbers) {
        if (a == 2 && b == 3) {
            break externo
        }
        console.log(`Par = ${a},${b}`)
    }
}
console.log('FIM!')