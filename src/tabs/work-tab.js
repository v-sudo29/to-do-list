import { workTaskArray } from "../task-list/default-work-task-list";
import makeTask from "../task-list/make-task";

export default function displayWorkTab() {
  const workTab = document.createElement('div');
  workTab.classList.add('work-div', 'currentTab');
  workTab.innerHTML = 'work';

  // Add event listener to remove current task list, 
  // display project task list, 
  // add/remove currentTab class
  workTab.addEventListener('click', () => {
    const currentProject = document.querySelector('.currentTab');
    const projectName = currentProject.innerHTML;
    const workTabHTML = document.querySelector('.work-div');

    if (projectName !== 'work') {
      const taskListDiv = document.querySelector('.task-list-div');

      // Remove all previous tasks
      while (taskListDiv.firstChild) {
        taskListDiv.removeChild(taskListDiv.lastChild);
      }

      // Display current project tasks
      for (let i = 0; i < workTaskArray.length; i++) {
        const task = makeTask(workTaskArray[i]);
        taskListDiv.append(task);
      }

      currentProject.classList.remove('currentTab');
      workTabHTML.classList.add('currentTab');
      console.log('executed!');
    }
  });
  return workTab;
}