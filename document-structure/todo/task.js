
const btn = document.getElementById('tasks__add');
const tasksList = document.querySelector('#tasks__list');
const tasksInput = document.querySelector('.tasks__input');

const addTask = (title) => {
    tasksList.insertAdjacentHTML(
        'afterbegin',
        `<div class="task">
            <div class="task__title">${title}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
    );
};


tasksList.addEventListener('click', (event) => {
    if (event.target.classList.contains('task__remove')) {
        event.preventDefault();
        event.target.closest('.task').remove(); 
    }
});


btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (tasksInput.value.trim()) {
        addTask(tasksInput.value.trim());
        tasksInput.value = '';
    }
});


document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && tasksInput.value.trim()) {
        event.preventDefault();
        addTask(tasksInput.value.trim());
        tasksInput.value = '';
    }
});

