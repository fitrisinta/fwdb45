const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoItem = document.querySelector('.todo-items');

let todos = [];

todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo(todoInput.value);
});

function addTodo(item) {
    if (item !== '') {
        const todo = {
            id = Date.now(),
            name: item,
            completed: false
        };

        todos.push(todo);
        renderTodos(todos);

        todoInput.value = '';
    }
}


