let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const error = document.getElementById("error");
const searchInput = document.getElementById("searchInput");

addBtn.addEventListener("click", addTask);
searchInput.addEventListener("keyup", renderTasks);

document.querySelectorAll(".filters button").forEach((btn) => {
    btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    renderTasks();
    });
});

function saveData() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTask() {
    if (taskInput.value.trim() === "") {
    error.textContent = "Task cannot be empty!";
    return;
    }

    error.textContent = "";

    todos.push({
    id: Date.now(),
    text: taskInput.value,
    completed: false,
    });

    taskInput.value = "";
    saveData();
    renderTasks();
}

function deleteTask(id) {
    todos = todos.filter((todo) => todo.id !== id);
    saveData();
    renderTasks();
}

function toggleTask(id) {
    todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    saveData();
    renderTasks();
}

function editTask(id) {
    const newText = prompt("Edit task:");
    if (!newText || newText.trim() === "") return;

    todos = todos.map((todo) =>
    todo.id === id ? { ...todo, text: newText } : todo,
    );

    saveData();
    renderTasks();
}

function renderTasks() {
    todoList.innerHTML = "";

    let filtered = todos.filter((todo) => {
    if (currentFilter === "completed") return todo.completed;
    if (currentFilter === "pending") return !todo.completed;
    return true;
    });

    const searchText = searchInput.value.toLowerCase();
    filtered = filtered.filter((todo) =>
    todo.text.toLowerCase().includes(searchText),
    );

    filtered.forEach((todo) => {
    const div = document.createElement("div");
    div.className = "todo";

    div.innerHTML = `
            <span class="${todo.completed ? "completed" : ""}">
                ${todo.text}
            </span>
            <div class="actions">
                <button onclick="toggleTask(${todo.id})">✔</button>
                <button onclick="editTask(${todo.id})">✏</button>
                <button onclick="deleteTask(${todo.id})">❌</button>
            </div>
        `;

    todoList.appendChild(div);
    });
}

renderTasks();
