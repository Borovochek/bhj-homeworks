const btn = document.getElementById('tasks__add');
const tasksList = document.querySelector('#tasks__list');
const tasksInput = document.querySelector('.tasks__input');

const addTask = (taskText) => {
    const task = document.createElement('div');
    task.className = 'task';

    const taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    taskTitle.textContent = taskText;

    const taskRemove = document.createElement('a');
    taskRemove.className = 'task__remove';
    taskRemove.setAttribute('href', '#');
    taskRemove.innerHTML = '&times;';

    taskRemove.addEventListener('click', () => {
        task.remove();
    });

    task.appendChild(taskTitle);
    task.appendChild(taskRemove);

    tasksList.appendChild(task);
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (tasksInput.value.trim()) {
       
        addTask(tasksInput.value);
        tasksInput.value = '';
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        if (tasksInput.value.trim()) {
            event.preventDefault();
            addTask(tasksInput.value);
            tasksInput.value = '';
        }
    }
})








