{
    const tasks = [];
    
    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }


    const addNewTask = (newTaskContent) => {
        tasks.push({ content: newTaskContent });
        render();
    };

    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, taskIndexndex) => {
        removeButton.addEventListener("click", () => {
            removeTask(taskIndex);
        });
       }); 
    };

    const bindToggleDoneEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });

    };
    const render = () => {
        let tasksListHTMLContent = "";
        
        for (const task of tasks) {
        tasksListHTMLContent +=  `
        <li 
        class="tasks__item js-task"
        >
        <button class="tasks__button tasks__button--toggleDone js-toggleDone">
        ${task.done ? "✓" : ""}
        </button>
        <span class="tasks__content${ task.done ? " task__content--done" : ""}">
        ${task.content}
        </span>
        <button class="tasks_button tasks_button--remove js-remove">
        🗑
        </button>
        </li>
        `;  

        document.querySelector(".js-tasks").innerHTML = htmlstring;
    
        bindRemoveEvents();

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.ariaValueMax.trim();

        if(newTaskElement !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }

        newTaskElement.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

        init();
    };
};