const personalTaskArray = [];

function defaultPersonalTaskList() {

  // Create element and set attribute
  const taskListDiv = document.createElement('div');
  taskListDiv.classList.add('task-list-div');

  return taskListDiv;
}

export {defaultPersonalTaskList, personalTaskArray};