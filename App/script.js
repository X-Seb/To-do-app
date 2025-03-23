console.log("Hellow world");

// Task Manager elements:
let taskList = [];

// Task Form elements:
const taskTextInput = document.getElementById("task-name-input");
const taskPriorityInput = document.getElementById("task-priority-input");
const btnCreateTask = document.getElementById("btn-create-task");

// Task container elements:
const taskContainer = document.getElementById("task-container");

// Filter Task elements:

// Task card elements:


function createTask(){
    event.preventDefault();
    const taskName = taskTextInput.value;
    if (!taskName){ return }

    const taskPriority = taskPriorityInput.value;

    const task = {
        name: taskName,
        priority: taskPriority
    }

    console.log("Task Name: ", taskName, " and Priority: ", taskPriority);
    taskList.push(task);
    taskTextInput.value = "";
    taskPriorityInput.value = "0";
    updateUI();
}

function updateUI(){
    let newInnerHTML = "";
    taskList.forEach((task) => {
        newInnerHTML += `
            <div class="task">
                <p>${task.name}</p>
                <select value="${task.priority}">
                    <option value="0">Low</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                </select>
                <button class="btn-edit-task"><i class="fa-solid fa-pen"></i></button>
                <button class="btn-delete-task"><i class="fa-solid fa-xmark"></i></button>
            </div>
        `;
    });

    taskContainer.innerHTML = newInnerHTML;
}

btnCreateTask.addEventListener("click", createTask);