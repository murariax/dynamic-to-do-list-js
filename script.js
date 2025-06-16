// Run this code only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select important DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    // Validate input
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create new list item and remove button
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // Handle removal of task when button is clicked
    removeButton.onclick = () => {
      taskList.removeChild(li);
    };

    // Append remove button and list item
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
  }

  // Add task when button is clicked
  addButton.addEventListener('click', addTask);

  // Add task when Enter key is pressed in the input field
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
