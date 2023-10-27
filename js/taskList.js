{
    const tasks = [
        {
            content: "nagrać lekcję",
            done: false,
        },
        {
            content: "zjeść pierogi",
            done: true,
        },
    ];
    
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

    const bindsEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");
       
        removeButtons.forEach((removeButton, index) => {
        removeButton.addEventListener("click", () => {
            removeTask(index);
        });
       }); 

       const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

       toggleDoneButtons.forEach((toggleDoneButton, index) => {
        toggleDoneButton.addEventListener("click", () => {
            toggleTaskDone(index);
        });
       }); 
    };

    const render = () => {
        let htmlstring = "";
        for (const task of tasks) {
        htmlstring +=  `
        <li class="tasks__item js-task">
        ${task.done ? " style=\"text-decoration: line-through\"" : ""}>
        <button class="tasks__button tasks_button--toggleDone js-toggleDone">zrobione?</button>
        <button class="js-remove">usuń</button>
        ${task.content}
        </li>
        `;  
        }

        document.querySelector(".js-tasks").innerHTML = htmlstring;
    
        bindsEvents();

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        
        if(newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

    };

    init();
}