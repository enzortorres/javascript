const input = document.getElementById('input');
const lista_tarefas = document.getElementById('lista');
const buttons = document.querySelectorAll('button');
var tarefas = [
    {'titulo': 'estudar', 'status': 'pendente'},
    {'titulo': 'correr', 'status': 'concluido'},
]

function gerenciarTarefas(lista, action, tarefa) {
    if (action == 'adicionar') {
        if (tarefa.trim() === '') {
            alert('Por favor, insira um título para a tarefa.');
            return;
        }
        let tarefaEncontrada = false;
        for (let i = 0; i < lista.length; i ++) {
            item = lista[i];
            if (item.titulo.toLowerCase() === tarefa.toLowerCase()) {
                alert('Tarefa já existe na lista!');
                tarefaEncontrada = true;
                return
            }
        }
        lista.push({'titulo': tarefa.toLowerCase(), 'status': 'pendente'});
        alert('Tarefa adicionada!');
    } else if (action == 'exibir') {
        lista_tarefas.innerHTML = '';
        for (let i = 0; i < lista.length; i++) {
            var item = lista[i];
            var child = document.createElement('li');
            child.innerText = `Título: ${item['titulo']} | Status: ${item['status']}`;
            lista_tarefas.appendChild(child);
        }
    } else if (action == 'concluir') {
        let tarefaEncontrada = false;
        for (let i = 0; i < lista.length; i ++) {
            item = lista[i];
            if (item.titulo.toLowerCase() === tarefa.toLowerCase()) {
                item.status = "concluido";
                alert("Tarefa marcada como concluída.")
                tarefaEncontrada = true;
                break;
            }
        }
        if (!tarefaEncontrada) {
            alert("Tarefa não encontrada");
        }
    }
}

buttons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        let action = button.getAttribute('name');
        gerenciarTarefas(tarefas, action, input.value);
    })
});