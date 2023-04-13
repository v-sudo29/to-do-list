import { workTaskArray } from "../task-list/default-work-task-list";
import { updateTaskCount } from "./update-task-count";

import { countStrikeThroughs } from "./update-task-count";

export default function displayWorkTab() {
  const workTab = document.createElement('div');
  workTab.classList.add('work-div', 'currentTab');

  // Count amount of tasks from array and display count
  updateTaskCount(workTab, workTaskArray);

  // Add event listener to: 
  // remove current task list, 
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
        const task = workTaskArray[i].taskDivHTML;
        taskListDiv.append(task);
      }

      // Update currentTab
      currentProject.classList.remove('currentTab');
      workTabHTML.classList.add('currentTab');

    }
  });
  countStrikeThroughs(workTaskArray);
  return workTab;
}