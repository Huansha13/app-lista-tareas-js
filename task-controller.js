class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.bindEvents(this);

         // Actualizar la vista con la lista de tareas actual
        this.updateView(); // Persistencia de datos
    }

    loadFechaHoy() {
        this.view.loadFechaHoy(this.model.getFechaHoy());
    }

    // Manejar agregar tarea
    handleAddTask(task) {
        this.model.addTask(task);
        const index = this.model.tasks.length - 1;
        this.view.addTaskToView(task, index);


        this.updateView(); // Persistencia de datos
    }

    // Manejar eliminar tarea
    handleDeleteTask(index) {
        this.model.deleteTask(index);
        this.view.deleteTaskFromView(index);

        this.updateView(); // Persistencia de datos
    }

    // Método para editar una tarea existente
    editTask(index, newTaskName) {
        this.model.editTask(index, newTaskName);

        this.updateView(); // Persistencia de datos
    }

    // Método para obtener una tarea de la lista de tareas
    taskByIndex(index) {
        this.view.setTaskInput(this.model.tasks[index], index);
    }


    // Para persistencia de datos
    updateView() {
        const tasks = this.model.tasks;
        this.view.render(tasks);
    }

}