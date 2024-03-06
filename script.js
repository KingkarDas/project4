document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = "taskItem";
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(event)">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();

    if (task !== "") {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
        taskInput.value = "";
    }
}

function deleteTask(event) {
    const taskText = event.target.previousElementSibling.textContent;
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const index = tasks.indexOf(taskText);
    if (index !== -1) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    }
}
