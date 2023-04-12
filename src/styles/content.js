import displayDate from './date.js';
import defaultTabs from '../tabs/default-tabs.js';
import {defaultWorkTaskList, workTaskArray} from '../task-list/default-work-task-list.js';
import completedTaskList from '../task-list/completed-list.js';
import addTaskButton from './add-task-button.js';

export default function content() {

  // Create content main element
  const contentMain = document.createElement('main');
  const contentDiv = document.createElement('div');

  // Set attributes
  contentMain.classList.add('content-main');
  contentDiv.classList.add('content-div');

  contentDiv.appendChild(displayDate());
  contentDiv.appendChild(defaultTabs());
  contentDiv.appendChild(defaultWorkTaskList());
  contentDiv.appendChild(completedTaskList());
  contentDiv.appendChild(addTaskButton());
  
  contentMain.appendChild(contentDiv);

  // Return appended content main
  const body = document.querySelector('body');
  return body.appendChild(contentMain);
}