import { taskFactory } from "../task-list/make-task";
import { workTaskArray } from "../task-list/default-work-task-list";
import { personalTaskArray } from "../task-list/default-personal-task-list";
import getProjectName from "../get-project-name";
import { updateTaskCount } from "../tabs/update-task-count";
import { overlayOff } from "../overlay";

function taskModalRemove() {
  const taskModal = document.querySelector('.modal-div');
  taskModal.remove();
  overlayOff();
}

function addNewTask() {

  // Create new task from title value
  const titleValue = document.getElementById('task-title').value;
  if (titleValue === '') {
    alert('Please fill out title field!');
    return;
  } 

  const newTask = taskFactory(titleValue);

  // Append new task to current task div
  const taskDivList = document.querySelector('.task-list-div');
  taskDivList.appendChild(newTask.taskDivHTML);
  taskModalRemove();

  // Add new task to current tab's array
  // Update task count
  const currentProject = document.querySelector('.currentTab');
  const projectName = getProjectName(currentProject);

    // Push new tabs to default work and personal
    if (projectName === 'work') {
      workTaskArray.push(newTask);
      updateTaskCount(currentProject, workTaskArray);
    } else if (projectName === 'personal') {
      personalTaskArray.push(newTask);
      updateTaskCount(currentProject, personalTaskArray);
    }
}

export {taskModalRemove, addNewTask};