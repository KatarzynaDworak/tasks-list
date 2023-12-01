{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent },
        ];
           
        render();
    };   

    const removeTask = (taskIndex) => {
        removeTask = [
          ...tasks.slice(taskIndex, 1),  
        ];
        
        render();
    }

    const toggleTaskDone = (taskIndex) => {
        const newToggleTaksDone = (taskIndex) => {
            tasks[taskIndex].done = !tasks[taskIndex].done;
        };
        
        tasks = task.map(newToggleTaksDone);

        render();
    }

    const removeEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });
    };

    const toggleDoneEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });
    };

    const renderTasks = () => {
        let tasksHTMLContent = "";

        for (const task of tasks) {
            tasksHTMLContent += `
        <li class="tasks__item js-tasks">
            <button class="tasks__button tasks__button--toggleDone js-toggleDone">
                ${task.done ? "✓" : ""}
            </button>
            <span class="tasks__content${task.done ? " tasks__content--done" : ""}">
                ${task.content}
            </span>
            <button class="tasks__button tasks__button--remove js-remove">
                🗑️
            </button>
        </li>
        `;
        };
    };

    const renderButtons = () => {
        
    };
    
    const bindButtonsEvents = () => {
        const firstButton = document.querySelector(js-firstButton);
        const secondButton = document.querySelector(js-secondButton);

        firstButton = addEventListener("click", renderButtons);
        secondButton = addEventListener("click", renderButtons);
    }
    const render = () => {

        renderTasks();
        renderButtons();

        document.querySelector(".js-tasks").innerHTML = tasksHTMLContent;

        removeEvents();
        toggleDoneEvents();

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }

        newTaskElement.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
};