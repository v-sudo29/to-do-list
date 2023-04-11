import makeTask from './task.js';

export default function defaultTaskList() {

  // Create element and set attribute
  const taskListDiv = document.createElement('div');
  taskListDiv.classList.add('task-list-div');

  // Append default tasks
  taskListDiv.appendChild(makeTask('Read a book'));
  taskListDiv.appendChild(makeTask('Wash dishes'));
  taskListDiv.appendChild(makeTask('Cook dinner'));

  return taskListDiv;
}