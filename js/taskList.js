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
    
    const render = () => {
        let htmlstring = "";
        for (const task of tasks) {
        htmlstring +-  `
        <li>
            ${task.content}
        </li>
        `;  
        }

        document.querySelector(".js-tasks").innerHTML = htmlstring;
    }

    const init = () => {

    };

    init();
}