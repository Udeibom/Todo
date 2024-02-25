function addTask() {
    let task = document.forms["myForm"]["fname"].value;

    // Create a container div for the task, edit button, and delete button
    const taskContainer = document.createElement("div");
    taskContainer.className = "task-container"; // Add a class for styling
    taskContainer.style.display = "flex"; // Set display to flex
    taskContainer.style.flexDirection = "column"; // Set flex-direction to column

    // Create a div for the task
    const taskDiv = document.createElement("div");
    taskDiv.className = "task-item"; // Add a class for styling
    const taskNode = document.createTextNode(task);
    taskDiv.appendChild(taskNode);

    // Create a div for the edit button
    const editDiv = document.createElement("div");
    editDiv.className = "edit";
    const editNode = document.createTextNode("Edit");
    editDiv.appendChild(editNode);

    // Create a div for the delete button
    const deleteDiv = document.createElement("div");
    deleteDiv.className = "delete";
    deleteDiv.id = "deleted";
    const deleteNode = document.createTextNode("Delete");
    deleteDiv.appendChild(deleteNode);

    // Append task, edit, and delete divs to the container
    taskContainer.appendChild(taskDiv);
    taskContainer.appendChild(editDiv);
    taskContainer.appendChild(deleteDiv);

    // Append the container to the tasks container
    const element = document.getElementById("addedTasks");
    element.appendChild(taskContainer);
}

document.getElementById("taskButton").addEventListener("click", addTask);

function removeTask() {
    const element = this.parentElement; // "this" refers to the clicked delete button
    element.remove();
}

function editTask() {
    const taskDiv = this.parentElement.querySelector(".task-item");
    const newTask = prompt("Edit task:", taskDiv.textContent);

    if (newTask !== null) {
        taskDiv.textContent = newTask;
    }
}

document.getElementById("addedTasks").addEventListener("click", function(event) {
    const target = event.target;

    if (target.className === "delete") {
        removeTask.call(target);
    } else if (target.className === "edit") {
        editTask.call(target);
    }
});
