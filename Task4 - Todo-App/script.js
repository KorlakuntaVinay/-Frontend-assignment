const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

document.addEventListener("DOMContentLoaded", loadTasks);

// Add the task that we type in the input
addBtn.addEventListener("click", addTask);

// this function add the task to the list
function addTask() {
    const task = taskInput.value.trim();
    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    createTaskElement(task);
    saveTask(task);

    taskInput.value = "";
}

// this function creates the unorderded list
function createTaskElement(taskText) {
    const li = document.createElement("li");

    li.textContent = taskText;

    // it will mark the task added successfuly
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // this is used to delete the list
    const del = document.createElement("button");
    del.textContent = "Delete";
    del.classList.add("delete-btn");

    del.addEventListener("click", (e) => {
        e.stopPropagation();
        if (confirm("Delete this task?")) {
            li.remove();
            removeTask(taskText);
        }
    });

    li.appendChild(del);
    taskList.appendChild(li);
}

// this is used to save the list that is visible to the user
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// it Load tasks one by one
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTaskElement(task));
}

// it Remove task from the list that are visible to you
function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
