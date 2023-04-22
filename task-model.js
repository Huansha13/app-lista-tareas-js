class TaskModel {
    constructor() {
        this.tasks = [];

        this.load(); // Persistencia de datos
    }

    // Agregar tarea
    addTask(task) {
        this.tasks.push(task);

        this.save(); // Persistencia de datos
    }

    // Eliminar tarea
    deleteTask(index) {
        this.tasks.splice(index, 1);

        this.save(); // Persistencia de datos
    }

    
    /**
     * Persistencia de datos
    */

    // Método para guardar la lista de tareas en el almacenamiento local
    save() {
        const tasks = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasks);
    }

    // Método para cargar la lista de tareas desde el almacenamiento local
    load() {
        const tasks = localStorage.getItem('tasks');
        console.log("🚀 ~ file: task-model.js:33 ~ TaskModel ~ load ~ tasks:", tasks)
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    // Fin metodo para la persistencia de datos
}

