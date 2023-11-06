{
    const tasks = [];
    
    const addNewTask = (newTaskContent) => {
        tasks.push({ 
            content: newTaskContent,
         });
        
         render();
    };
    
    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
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

    const render = () => {
    
        let tasksHTMLContent = "";
        
        for (const task of tasks) {
        tasksHTMLContent +=  `
        
        <li class="tasks__item js-tasks"
        ${task.done ? " style=\"text-decoration: line-through\"" : ""}
        >
        <button class="tasks__button tasks__button--toggleDone js-toggleDone">
        ${task.done ? "✓" : ""}
        </button>
        ${task.content}
        <button class="tasks__button tasks__button--remove js-remove">
        🗑️
        </button>
        </li>
        `;  
        }; 
        
        document.querySelector(".js-tasks").innerHTML = tasksHTMLContent;
    
        removeEvents();
        toggleDoneEvents();

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();

        if(newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
};