// Criando array para tarefas:
let tasks = [];

// Adicionando uma função para mostrar as tarefas que estão dentro do array tasks:
function displayTasks() {
  let html = "";  // começa vazia para guardar todo o conteúdo do array
  for (let i = 0; i < tasks.length; i++) {
    html += "<li>" + tasks[i] +
    " <button onclick='removeTask(" + i + ")'>x</button></li>";
  }
  document.getElementById("list").innerHTML = html;
}

// Criando função para adicionar tarefas:
function addTask() {
  let taskInput = document.getElementById("task");  // pegando o valor do input
  let text = taskInput.value; // pega o valor que foi digitado no input
  if (text === "") {
    return;    // caso o campo esteja vazio, a função para aqui e não adiciona nada, e retorna para o início da função
  }
  tasks.push(text);  // adiciona novo valor do input no array tasks
  taskInput.value = "";  // limpa o campo de input para a próxima tarefa  
   saveTasks();
  displayTasks();  // atualiza a exibição das tarefas
} 

//adicionando função para remover tarefas:
function removeTask(i) {
  tasks.splice(i, 1);  // remove a tarefa do array usando o índice
    saveTasks();

  displayTasks();  // atualiza a exibição das tarefas
}

// adiconando a função para limpar todas as tarefas:
function removeTask(i) {
  tasks.splice(i, 1);
  displayTasks();
  saveTasks();  // salva as tarefas atualizadas no localStorage
}

//função para salvar as tarefas no localStorage:
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks)); // converte o array em string e salva no localStorage
}

// função para carregar as tarefas do localStorage:
function loadTasks() {
  let saved = localStorage.getItem("tasks"); // pega as tarefas salvas no localStorage
  if (saved !== null) {
    tasks = JSON.parse(saved); // converte a string de volta para um array
  }
}

loadTasks(); // carrega as tarefas salvas quando a página é carregada
displayTasks(); // exibe as tarefas carregadas na tela