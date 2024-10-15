const taskInput = document.getElementById('task-input');
const taskList = document.querySelector('.task-list');
const addButton = document.querySelector('.add');
const filterButtons = document.querySelectorAll('.filter');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please, enter a task!");
        return;
    }

    const newTask = createTaskElement(taskText);
    taskList.appendChild(newTask);
    taskInput.value = '';
}

function createTaskElement(taskText) {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    
    newTask.addEventListener('click', function() {
        newTask.classList.toggle('done');
    });

    const deleteButton = document.createElement('span');
    deleteButton.textContent = '✖';
    deleteButton.className = 'delete-btn';

    deleteButton.addEventListener('click', function(event) {
        event.stopPropagation(); 
        taskList.removeChild(newTask);
    });

    newTask.appendChild(deleteButton);
    return newTask;
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});


const existingTasks = document.querySelectorAll('.task-list li');
existingTasks.forEach(task => {
    task.addEventListener('click', function() {
        task.classList.toggle('done');
    });

    const deleteButton = document.createElement('span');
    deleteButton.textContent = '✖';
    deleteButton.className = 'delete-btn';

    deleteButton.addEventListener('click', function(event) {
        event.stopPropagation();
        taskList.removeChild(task);
    });

    task.appendChild(deleteButton);
});


filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.textContent.toLowerCase();
        filterTasks(filter);
    });
});

function filterTasks(filter) {
    const tasks = document.querySelectorAll('.task-list li');
    tasks.forEach(task => {
        switch (filter) {
            case 'all':
                task.style.display = '';
                break;
            case 'finished':
                task.style.display = task.classList.contains('done') ? '' : 'none';
                break;
            case 'unfinished':
                task.style.display = !task.classList.contains('done') ? '' : 'none';
                break;
        }
    });
}






