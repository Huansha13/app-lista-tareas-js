class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.bindEvents(this);

        this.updateView(); // Persistencia de datos
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



    // Para persistencia de datos
    updateView() {
        const tasks = this.model.tasks;
        this.view.render(tasks);
    }

}