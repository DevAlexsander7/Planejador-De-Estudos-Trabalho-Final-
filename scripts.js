document.addEventListener('DOMContentLoaded', function() {
    carregarLembretes();
    carregarTarefas();
    carregarAnotacoes();
});

function adicionarLembrete() {
    let lembrete = document.getElementById('novo-lembrete').value;
    let data = document.getElementById('data-lembrete').value;
    if (lembrete && data) {
        let lista = document.getElementById('lista-lembretes');
        let item = document.createElement('li');
        item.classList.add('list-group-item');
        item.textContent = `${lembrete} (Data: ${data})`;
        lista.appendChild(item);
        salvarLembretes();
        document.getElementById('novo-lembrete').value = '';
        document.getElementById('data-lembrete').value = '';
    }
}

function adicionarTarefa() {
    let tarefa = document.getElementById('nova-tarefa').value;
    let data = document.getElementById('data-tarefa').value;
    if (tarefa && data) {
        let lista = document.getElementById('lista-tarefas');
        let item = document.createElement('li');
        item.classList.add('list-group-item');
        item.textContent = `${tarefa} (Data: ${data})`;
        lista.appendChild(item);
        salvarTarefas();
        document.getElementById('nova-tarefa').value = '';
        document.getElementById('data-tarefa').value = '';
    }
}

function salvarAnotacoes() {
    let anotacoes = document.getElementById('anotacoes-area').value;
    localStorage.setItem('anotacoes', anotacoes);
}

function salvarLembretes() {
    let lembretes = Array.from(document.querySelectorAll('#lista-lembretes .list-group-item')).map(item => item.textContent);
    localStorage.setItem('lembretes', JSON.stringify(lembretes));
}

function salvarTarefas() {
    let tarefas = Array.from(document.querySelectorAll('#lista-tarefas .list-group-item')).map(item => item.textContent);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function carregarLembretes() {
    let lembretes = JSON.parse(localStorage.getItem('lembretes'));
    if (lembretes) {
        lembretes.forEach(lembrete => {
            let lista = document.getElementById('lista-lembretes');
            let item = document.createElement('li');
            item.classList.add('list-group-item');
            item.textContent = lembrete;
            lista.appendChild(item);
        });
    }
}

function carregarTarefas() {
    let tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if (tarefas) {
        tarefas.forEach(tarefa => {
            let lista = document.getElementById('lista-tarefas');
            let item = document.createElement('li');
            item.classList.add('list-group-item');
            item.textContent = tarefa;
            lista.appendChild(item);
        });
    }
}

function carregarAnotacoes() {
    if (localStorage.getItem('anotacoes')) {
        document.getElementById('anotacoes-area').value = localStorage.getItem('anotacoes');
    }
}

function limparLembretes() {
    localStorage.removeItem('lembretes');
    document.getElementById('lista-lembretes').innerHTML = '';
}

function limparTarefas() {
    localStorage.removeItem('tarefas');
    document.getElementById('lista-tarefas').innerHTML = '';
}

function limparAnotacoes() {
    localStorage.removeItem('anotacoes');
}


