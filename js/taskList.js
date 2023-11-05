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
        tasks.push({ content: newTaskContent,
         });
        
         render();
    };

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
        
        <li class="tasks tasks__item"
        ${task.done ? " style=\"text-decoration: line-through\"" : ""}
        >
        <button class="tasks__button tasks__button--toggleDone js-toggleDone">${task.done ? "✓" : ""}</button>
        ${task.content}
        <button class="tasks__button tasks__button--remove js-remove">
        🗑️
        </button>
        </li>
        `;  

        } 
        
        document.querySelector(".js-tasks").innerHTML = tasksHTMLContent;
    
        removeEvents();
        Changed name of function for removeEvents and toggleDoneEventsvents();

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        

        if(newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskContent.value = "";
        }
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
};