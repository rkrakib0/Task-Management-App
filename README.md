Task Management App
A simple web-based Task Management Application that allows users to create, manage, and organize their tasks effectively. This app is built using HTML, CSS, and JavaScript and persists tasks using localStorage.


Features
Add Tasks: Users can input a task title, description, and priority (Low, Medium, High).
Mark Tasks as Completed: Toggle task completion with a single click.
Delete Tasks: Remove tasks from the list easily.
Priority Selection: Tasks can be assigned a priority level for better organization.
Persistent Storage: Tasks are saved in the browser's localStorage and reloaded on page refresh.


Technologies Used

HTML: For the structure of the application.
CSS: For styling and layout of the app.
JavaScript (ES6+): For implementing app logic and interactivity.


To run the app, you'll need:

A modern web browser (e.g., Chrome, Firefox, Edge).
Installation

TaskManager/
│
├── index.html       # Main HTML file for structure
├── styles.css       # CSS file for styling the app
├── taskManager.js   # JavaScript logic for task management
└── README.md        # Documentation
Key Functionality
TaskManager Class

addTask(title, description, priority)
Creates a new task object with a unique ID and saves it in localStorage.
deleteTask(taskId)
Deletes a task by its ID.
toggleTaskCompletion(taskId)
Marks a task as completed or incomplete.
Dynamic Rendering

The app dynamically updates the DOM with tasks using JavaScript.
Responsive Design

The app is designed to look great on both desktop and mobile browsers.
Future Improvements
Add the ability to edit tasks.
Implement due dates and reminders.
Add drag-and-drop functionality for reordering tasks.
Include user authentication for multi-user functionality.
