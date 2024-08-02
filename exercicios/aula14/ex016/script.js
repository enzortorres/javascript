function contar() {
    var start = document.getElementById('start')
    var end = document.getElementById('end')
    var step = document.getElementById('step')
    start = Number(start)
    end = Number(end)
    step = Number(step)
    if (step <= 0) {
        alert('Passo inválido! Considerando PASSO 1')
        step = 1
    }
    var res = document.getElementById("res")
    res.innerHTML = 'Contando:'
    for (var start; start <= end; start += step) {
        res.innerHTML += `${start} -> `
    }
    res.innerHTML += ' END!'
}