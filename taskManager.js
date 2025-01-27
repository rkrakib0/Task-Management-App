class TaskManager {
    constructor() {
      this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    }
  
    saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
  
    addTask(title, description, priority) {
      const task = {
        id: Date.now(),
        title,
        description,
        priority,
        completed: false,
      };
      this.tasks.push(task);
      this.saveTasks();
    }
  
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      this.saveTasks();
    }
  
    toggleTaskCompletion(taskId) {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
        this.saveTasks();
      }
    }
  }
  
  // UI Handling
  const manager = new TaskManager();
  
  function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
  
    manager.tasks.forEach(task => {
      const taskDiv = document.createElement("div");
      taskDiv.className = `task-item ${task.completed ? "task-completed" : ""}`;
  
      taskDiv.innerHTML = `
        <div>
          <h3>${task.title}</h3>
          <p>${task.description}</p>
          <span>Priority: ${task.priority}</span>
        </div>
        <div class="task-actions">
          <button class="complete-btn" onclick="toggleTask(${task.id})">
            ${task.completed ? "Undo" : "Complete"}
          </button>
          <button class="delete-btn" onclick="deleteTask(${task.id})">
            Delete
          </button>
        </div>
      `;
      taskList.appendChild(taskDiv);
    });
  }
  
  document.getElementById("taskForm").addEventListener("submit", event => {
    event.preventDefault();
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const priority = document.getElementById("taskPriority").value;
  
    manager.addTask(title, description, priority);
    renderTasks();
    event.target.reset();
  });
  
  function deleteTask(taskId) {
    manager.deleteTask(taskId);
    renderTasks();
  }
  
  function toggleTask(taskId) {
    manager.toggleTaskCompletion(taskId);
    renderTasks();
  }
  
  // Initial render
  renderTasks();
  