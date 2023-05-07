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

            // prevenimos el envío por defecto del formulario
            event.preventDefault();
            
            const task = this.taskInput.val().trim();

            // Seleccionar el botón que fue presionado
            const submitButton = event.target.querySelector("button[type='submit']:focus");
            
            // Obtener el valor del atributo "data-action" del botón
            const action = submitButton.dataset.action;

            // hacemos algo diferente dependiendo del botón presionado
            switch (action) {
                case 'add':
                    console.log("Ingreso add")
                    if (task !== '') {
                        controller.handleAddTask(task);
                        this.clearTaskInput();
                    }
                    break;
                case 'edit':
                    console.log("Ingreso edit")
                    const index = parseInt(submitButton.dataset.index)       
                    controller.editTask(index, task);
        
                    this.showBtnAgregar();
                    this.clearTaskInput();
            }            
        });

        this.taskList.on('click', '.delete-button', (event) => {
            const index = parseInt($(event.target).attr('data-index'));
            controller.handleDeleteTask(index);
        });

        this.taskList.on('click', '.edit-button', (event) => {
            const index = parseInt($(event.target).attr('data-index'));
            controller.taskByIndex(index);
        });
    }


    // Para la persistencia de datos
    render(tasks) {
        this.taskList.empty();
        tasks.forEach((task, index) => {            
            this.taskList.append(this.crearElementoDeTarea(task, index));
        });
    }

    // Para setear valor al formulario
    setTaskInput(task, index) {
        $('#task-input').val(task);
        
        $("#btn-actualizar").attr("data-index", index);
        this.showBtnActualizar();
    }

    showBtnActualizar() {
        $("#btn-actualizar").show();
        $("#btn-agregar").hide();
    }

    showBtnAgregar() {
        $("#btn-actualizar").hide();
        $("#btn-agregar").show();
    }

    crearElementoDeTarea(task, index) {
        const li = $('<li></li>');
        li.addClass('list-group-item d-flex justify-content-between align-items-center');
        li.html(`
            ${task} 
            <div class="btn-group" role="group">
                <button class="btn btn-warning edit-button" data-index="${index}">Editar</button>
                <button class="btn btn-danger delete-button" data-index="${index}">Eliminar</button>
            </div>
        `);

        return li;
    }
}