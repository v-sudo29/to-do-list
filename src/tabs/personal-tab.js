import { personalTaskArray } from "../task-list/default-personal-task-list";
import makeTask from "../task-list/make-task";

export default function displayPersonalTab() {
  const personalTab = document.createElement('div');
  personalTab.classList.add('personal-div');
  personalTab.innerHTML = 'personal';

  // Count amount of tasks from array and display count
  if (personalTaskArray.length > 0) {
    personalTab.innerHTML = `personal (${personalTaskArray.length})`;
  } else {
    personalTab.innerHTML = 'personal';
  }

  // Add event listener to remove current task list, 
  // display project task list, 
  // add/remove currentTab class
  // update task count
  personalTab.addEventListener('click', () => {
  const currentProject = document.querySelector('.currentTab');
  const projectName = currentProject.innerHTML;
  const personalTabHTML = document.querySelector('.personal-div');

    if (projectName !== 'personal') {
      const taskListDiv = document.querySelector('.task-list-div');

      // Remove all previous tasks
      while (taskListDiv.firstChild) {
        taskListDiv.removeChild(taskListDiv.lastChild);
      }

      // Display current project tasks
      for (let i = 0; i < personalTaskArray.length; i++) {
        const task = makeTask(personalTaskArray[i]);
        taskListDiv.append(task);
      }

      // Update currentTab
      currentProject.classList.remove('currentTab');
      personalTabHTML.classList.add('currentTab');

      // Update task count
      if (personalTaskArray.length > 0) {
        personalTab.innerHTML = `personal (${personalTaskArray.length})`;
      } else {
        personalTab.innerHTML = 'personal';
      }
    }
  });

  return personalTab;
};