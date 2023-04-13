import strikethrough from './strikethrough.js';
import { updateTaskCount } from '../tabs/update-task-count.js';
import getProjectName from '../get-project-name.js';
import { workTaskArray } from './default-work-task-list.js';
import { personalTaskArray } from './default-personal-task-list.js';

function makeTask(task) {
  const hyphendTask = task.replace(/\s+/g, "-");

  // Create elements
  const taskDiv = document.createElement('div');
  const taskLabel = document.createElement('label');
  const taskInput = document.createElement('input');
  const deleteButton = document.createElement('button');

  // Set attributes
  taskDiv.classList.add('task-div', `task-div-${hyphendTask}`);
  taskLabel.classList.add('task-label');
  taskInput.classList.add('task-input');
  deleteButton.classList.add('delete-task-button', `delete-${hyphendTask}`);
  
  taskLabel.setAttribute('for', `${hyphendTask}`);
  taskInput.setAttribute('type', 'checkbox');
  taskInput.setAttribute('id', `${hyphendTask}`);
  taskInput.setAttribute('name', `${hyphendTask}`);

  // Set inner HTML
  taskLabel.innerHTML = `${task}`;
  deleteButton.innerHTML = 'X';

  // Add event listeners: input and delete button
  taskInput.addEventListener('click', () => {
    strikethrough(taskLabel);

    // Get current tab's HTML and array
    const currentProject = document.querySelector('.currentTab');

      // Default projects
      const projectTitle = getProjectName(currentProject)

      if (projectTitle === 'work') {
        updateTaskCount(currentProject, workTaskArray);
      } else if (projectTitle === 'personal') {
        updateTaskCount(currentProject, personalTaskArray);
      }
  });

  deleteButton.addEventListener('click', () => {
    // Get current tab's HTML and array
    const currentProject = document.querySelector('.currentTab');

      // Default projects
      const projectTitle = getProjectName(currentProject)

        // Remove task from array
        if (projectTitle === 'work') {
          
          // Find task in array
          for (let i = 0; i < workTaskArray.length; i++) {
            const arrayTaskChild = workTaskArray[i].taskDivHTML.lastChild;

            if (arrayTaskChild.classList.contains(`delete-${hyphendTask}`)) {

              // Remove from data structure and DOM
              workTaskArray.splice(i, 1);
              taskDiv.remove();
            }
          }
          updateTaskCount(currentProject, workTaskArray);
        } else if (projectTitle === 'personal') {

          // Find task in array
          for (let i = 0; i < personalTaskArray.length; i++) {
            const arrayTaskChild = personalTaskArray[i].taskDivHTML.lastChild;

            if (arrayTaskChild.classList.contains(`delete-${hyphendTask}`)) {

              // Remove from data structure and DOM
              personalTaskArray.splice(i, 1);
              taskDiv.remove();
            }
          updateTaskCount(currentProject, personalTaskArray);
          }
        }
      });

  // Append elements
  taskDiv.appendChild(taskInput);
  taskDiv.appendChild(taskLabel);
  taskDiv.appendChild(deleteButton);
  
  return taskDiv;
}

const taskFactory = (taskName) => {
  const taskDivHTML = makeTask(taskName);
  return {taskName, taskDivHTML};
};

export {taskFactory};