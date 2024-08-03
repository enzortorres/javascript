function contar() {
    let start = document.getElementById('start')
    let end = document.getElementById('end')
    let step = document.getElementById('step')
    let res = document.getElementById("res")
    start = Number(start.value)
    end = Number(end.value)
    step = Number(step.value)
    res.innerHTML = 'Counting: '
    if (step == 0) {
        alert('Invalid step! Considering STEP: 1')
        step = 1
    }
    if (end == '' || start == '' || step == '') {
        res.innerHTML = 'Impossible to count!'
    } else {
        if(start < end ) {
            // Contagem crescente
            for (start; start <= end; start += step) {
                res.innerHTML += `${start} \u{1F449} `
            }
        } else {
            // Contagem regressiva
            for (start; start >= end; start -= step) {
                res.innerHTML += `${start} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }   
    

}