class TaskView {
    constructor() {
        this.taskForm = $('#task-form');
        this.taskInput = $('#task-input');
        this.taskList = $('#task-list');
    }

    // Agregar tarea a la vista
    addTaskToView(task, index) {
        this.taskList.append(this.crearElementoDeTarea(task, index));
    }

    // Eliminar tarea de la vista
    deleteTaskFromView(index) {
        $(`#task-list li:nth-child(${index + 1})`).remove();
    }

    // Limpiar campo de entrada de tarea
    clearTaskInput() {
        this.taskInput.val('');
    }

    // Manejar eventos
    bindEvents(controller) {
        this.taskForm.on('submit', (event) => {
            event.preventDefault();
            const task = this.taskInput.val().trim();
            if (task !== '') {
                controller.handleAddTask(task);
                this.clearTaskInput();
            }
        });

        this.taskList.on('click', '.delete-button', (event) => {
            const index = parseInt($(event.target).attr('data-index'));
            controller.handleDeleteTask(index);
        });
    }


    // Para la persistencia de datos
    render(tasks) {
        this.taskList.empty();
        tasks.forEach((task, index) => {            
            this.taskList.append(this.crearElementoDeTarea(task, index));
        });
    }

    crearElementoDeTarea(task, index) {
        const li = $('<li></li>');
        li.addClass('list-group-item d-flex justify-content-between align-items-center');
        li.html(`${task} <button class="btn btn-danger delete-button" data-index="${index}">Eliminar</button>`);

        return li;
    }
}