import strikethrough from './strikethrough.js';

export default function makeTask(task) {
  const hyphendTask = task.replace(/\s+/g, "-");

  // Create elements
  const taskDiv = document.createElement('div');
  const taskLabel = document.createElement('label');
  const taskInput = document.createElement('input');

  // Set attributes
  taskDiv.classList.add('task-div');
  taskLabel.classList.add('task-label');
  taskInput.classList.add('task-input');
  
  taskLabel.setAttribute('for', `${hyphendTask}`);
  taskInput.setAttribute('type', 'checkbox');
  taskInput.setAttribute('id', `${hyphendTask}`);
  taskInput.setAttribute('name', `${hyphendTask}`);

  // Set inner HTML
  taskLabel.innerHTML = `${task}`;

  // Add event listener to input
  taskInput.addEventListener('click', () => strikethrough(taskLabel));

  // Append elements
  taskDiv.appendChild(taskInput);
  taskDiv.appendChild(taskLabel);
  
  return taskDiv;
}