// Task Manager elements:
let taskList = [];

// Task Form elements:
const taskTextInput = document.getElementById("task-name-input");
const taskPriorityInput = document.getElementById("task-priority-input");
const btnCreateTask = document.getElementById("btn-create-task");
btnCreateTask.addEventListener("click", createTask);

// Task container elements:
const taskContainer = document.getElementById("task-container");

// Filter Task elements:
const filterTextInput = document.getElementById("task-search");
const filterPriorityInput = document.getElementById("task-filter-priority");
const btnFilterTask = document.getElementById("btn-apply-filter");
const btnClearFilter = document.getElementById("btn-clear-filter");
btnFilterTask.addEventListener("click", filterTasks);
btnClearFilter.addEventListener("click", clearFilter);

initialLoad();
function initialLoad() {
  if (!localStorage.getItem("taskList")) {
    return;
  }
  taskList = JSON.parse(localStorage.getItem("taskList"));
  updateUI();
}

function createTask(event) {
  event.preventDefault();
  const taskName = taskTextInput.value;
  if (!taskName) {
    return;
  }

  const taskPriority = taskPriorityInput.value;

  const task = {
    name: taskName,
    priority: taskPriority,
    display: true,
  };

  console.log("Task Name: ", taskName, " and Priority: ", taskPriority);
  taskList.push(task);
  taskTextInput.value = "";
  taskPriorityInput.value = "Low";
  updateUI();
}

function updateUI() {
  let newInnerHTML = "";
  if (taskList.length === 0) {
    newInnerHTML = `<div class="no-task">
            <h3>No Tasks found!</h3>
            <p>When you create a task, it will be displayed here.</p>
        </div>`;
  } else {
    taskList.forEach((task, index) => {
      if (task.display === true) {
        newInnerHTML += `<div class="task">
                <p>${task.name}</p>
                <select onchange="quickEdit(${index})">
                    <option value="Low" ${
                      task.priority === "Low" ? "selected" : ""
                    }>Low</option>
                    <option value="Medium" ${
                      task.priority === "Medium" ? "selected" : ""
                    }>Medium</option>
                    <option value="High" ${
                      task.priority === "High" ? "selected" : ""
                    }>High</option>
                </select>
                <button class="btn-edit-task" onclick="editTask(${index})"><i class="fa-solid fa-pen"></i></button>
                <button class="btn-delete-task" onclick="deleteTask(${index})"><i class="fa-solid fa-xmark"></i></button>
            </div>`;
      }
    });
    if (taskList.Length !== 0 && newInnerHTML === "") {
      newInnerHTML = `<div class="no-task">
            <h3>No Tasks match these filters!</h3>
            <p>Tip: adjust your filters to view your tasks...</p>
        </div>`;
    }
  }

  taskContainer.innerHTML = newInnerHTML;
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

function editTask(index) {
  taskTextInput.value = taskList[index].name;
  taskPriorityInput.value = taskList[index].priority;
  deleteTask(index);
  updateUI();
}

function quickEdit(index) {
  console.log("Quick Edit: ", index);
  taskList[index].priority = target.value;

  updateUI();
}

function deleteTask(index) {
  taskList.splice(index, 1);
  updateUI();
}

function filterTasks() {
  taskList.forEach((task) => {
    if (
      task.name.toLowerCase().includes(filterTextInput.value.toLowerCase()) &&
      (task.priority === filterPriorityInput.value ||
        filterPriorityInput.value === "Any")
    ) {
      task.display = true;
    } else {
      task.display = false;
    }
  });
  updateUI();
}

function clearFilter() {
  taskList.forEach((task) => {
    task.display = true;
  });
  updateUI();
}
