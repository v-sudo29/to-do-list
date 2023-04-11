import makeTask from './task.js';

const workTaskArray = [];

function defaultWorkTaskList() {

  // Create element and set attribute
  const taskListDiv = document.createElement('div');
  taskListDiv.classList.add('task-list-div');

  // Append default tasks
  const defaultTaskOne = makeTask('Read a book');
  const defaultTaskTwo = makeTask('Wash dishes');
  const defaultTaskThree = makeTask('Cook dinner');

  taskListDiv.appendChild(defaultTaskOne);
  taskListDiv.appendChild(defaultTaskTwo);
  taskListDiv.appendChild(defaultTaskThree);

  // Add default tasks to data structure
  workTaskArray.push(defaultTaskOne);
  workTaskArray.push(defaultTaskTwo);
  workTaskArray.push(defaultTaskThree);

  return taskListDiv;
}

export {defaultWorkTaskList, workTaskArray};