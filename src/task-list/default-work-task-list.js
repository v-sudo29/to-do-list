import { taskFactory } from '../task-list/make-task.js';

const workTaskArray = [
  taskFactory('Read a book'),
  taskFactory('Wash dishes'),
  taskFactory('Cook dinner')
];

function defaultWorkTaskList() {

  // Create element and set attribute
  const taskListDiv = document.createElement('div');
  taskListDiv.classList.add('task-list-div');

  taskListDiv.appendChild(workTaskArray[0].taskDivHTML);
  taskListDiv.appendChild(workTaskArray[1].taskDivHTML);
  taskListDiv.appendChild(workTaskArray[2].taskDivHTML);

  return taskListDiv;
}

export {defaultWorkTaskList, workTaskArray};