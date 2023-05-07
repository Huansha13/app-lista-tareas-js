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

    // Método para editar una tarea existente
    editTask(index, newTaskName) {
        this.tasks[index] = newTaskName;
        this.save(); // Persistencia de datos
    }

    // Fecha del dia
    getFechaHoy() {
        const date = new Date();
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          };
        return new Intl.DateTimeFormat('es-ES', options).format(date);
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
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    // Fin metodo para la persistencia de datos
}

