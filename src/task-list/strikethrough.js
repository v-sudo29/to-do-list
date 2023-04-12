export default function strikethrough(taskLabel) {
  const forValue = taskLabel.getAttribute('for');
  const taskDiv = document.querySelector(`.task-div-${forValue}`);

  if (taskLabel.classList.contains('strikethrough')) {
    taskLabel.classList.remove('strikethrough');

    // Move entire div to task list div
    const taskListDiv = document.querySelector('.task-list-div');
    taskListDiv.appendChild(taskDiv);
  } else if (taskLabel.classList.contains('strikethrough') === false) {
    taskLabel.classList.add('strikethrough');

    // Move entire div to completed tasks list div
    const completedTasksListDiv = document.querySelector('.completed-tasks-list-div');
    completedTasksListDiv.appendChild(taskDiv);
  }
}