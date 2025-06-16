document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => {
      addTask(taskText, false); // false = don't save again
    });
  }

  // Save updated task list to Local Storage
  function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Get current task list from Local Storage
  function getStoredTasks() {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  }

  // Function to add a task to DOM (and optionally to Local Storage)
  function addTask(taskText, save = true) {
    if (!taskText.trim()) {
      alert('Please enter a task.');
      return;
    }

    // Create list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create Remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // Set up remove functionality
    removeButton.onclick = () => {
      taskList.removeChild(li);
      // Remove from Local Storage
      let tasks = getStoredTasks();
      tasks = tasks.filter(task => task !== taskText);
      saveTasks(tasks);
    };

    // Append button and li
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Save to Local Storage
    if (save) {
      const tasks = getStoredTasks();
      tasks.push(taskText);
      saveTasks(tasks);
    }

    // Clear input
    taskInput.value = '';
  }

  // Add task when button is clicked
  addButton.addEventListener('click', () => {
    addTask(taskInput.value);
  });

  // Add task when Enter key is pressed
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask(taskInput.value);
    }
  });

  // Load saved tasks on page load
  loadTasks();
});

