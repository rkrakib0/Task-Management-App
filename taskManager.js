document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('taskForm');
  const taskList = document.getElementById('taskList');
  let tasks = []; // Array to store tasks
  let editingTaskId = null; // Store task ID currently being edited

  // Function to add a task
  function addTask(title, description, priority, date) {
    const taskId = generateUniqueId();
    const newTask = {
      id: taskId,
      title,
      description,
      priority,
      date,
      completed: false,
    };
    
    tasks.push(newTask);
    renderTasks();
  }

  // Function to generate a unique task ID
  function generateUniqueId() {
    return `task-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  }

  // Function to mark a task as completed
  function toggleTaskCompletion(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      renderTasks();
    }
  }

  // Function to delete a task
  function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
  }

  // Function to edit a task
  function editTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      document.getElementById('taskTitle').value = task.title;
      document.getElementById('taskDescription').value = task.description;
      document.getElementById('taskPriority').value = task.priority;
      document.getElementById('taskDate').value = task.date;

      editingTaskId = taskId; // Set the task ID being edited
      taskForm.querySelector('button').textContent = 'Update Task'; // Change button text
    }
  }

  // Function to render tasks to the UI
  function renderTasks() {
    taskList.innerHTML = ''; // Clear current list
    tasks.forEach(task => {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task-item');
      if (task.completed) {
        taskElement.classList.add('task-completed');
      }

      taskElement.innerHTML = `
        <div>
          <strong>${task.title}</strong><br>
          <em>${task.priority}</em><br>
          <p>${task.description}</p>
          <p class="task-date">Due: ${task.date}</p>
          <p class="task-id">Task ID: ${task.id}</p> <!-- Task ID Displayed here -->
        </div>
        <div class="task-actions">
          <button class="complete-btn" onclick="toggleTaskCompletion('${task.id}')">Complete</button>
          <button class="edit-btn" onclick="editTask('${task.id}')">Edit</button>
          <button class="delete-btn" onclick="deleteTask('${task.id}')">Delete</button>
        </div>
      `;
      
      taskList.appendChild(taskElement);
    });
  }

  // Handle form submission
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const priority = document.getElementById('taskPriority').value;
    const date = document.getElementById('taskDate').value;
    
    if (editingTaskId) {
      // Edit existing task
      const task = tasks.find(t => t.id === editingTaskId);
      task.title = title;
      task.description = description;
      task.priority = priority;
      task.date = date;

      editingTaskId = null; // Reset editing task ID
      taskForm.querySelector('button').textContent = 'Add Task'; // Reset button text
    } else {
      addTask(title, description, priority, date);
    }

    // Reset form fields
    taskForm.reset();
  });

  // Expose functions globally for inline event handlers
  window.toggleTaskCompletion = toggleTaskCompletion;
  window.deleteTask = deleteTask;
  window.editTask = editTask;
});
