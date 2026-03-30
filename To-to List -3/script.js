let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

/* GET ELEMENTS FIRST */
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const error = document.getElementById("error");
const searchInput = document.getElementById("searchInput");

/* EVENT LISTENERS */
addBtn.addEventListener("click", addTask);
searchInput.addEventListener("keyup", renderTasks);

/* ✅ ENTER KEY SUPPORT (CORRECT PLACE) */
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
    addTask();
    }
});

/* FILTER BUTTONS */
document.querySelectorAll(".filters button").forEach((btn) => {
    btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;

    document
        .querySelectorAll(".filters button")
        .forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");
    renderTasks();
    });
});

/* SAVE DATA */
function saveData() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

/* ADD TASK */
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
    taskInput.focus(); // auto focus (improvement)

    saveData();
    renderTasks();
}

/* DELETE TASK */
function deleteTask(id) {
    todos = todos.filter((todo) => todo.id !== id);
    saveData();
    renderTasks();
}

/* TOGGLE TASK */
function toggleTask(id) {
    todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );

    saveData();
    renderTasks();
}

/* EDIT TASK */
function editTask(id) {
    const newText = prompt("Edit task:");
    if (!newText || newText.trim() === "") return;

    todos = todos.map((todo) =>
    todo.id === id ? { ...todo, text: newText } : todo,
    );

    saveData();
    renderTasks();
}

/* RENDER TASKS */
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

/* INITIAL LOAD */
renderTasks();
