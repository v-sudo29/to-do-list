import displayDate from './date.js';
import defaultTabs from '../tabs/default-tabs.js';
import {defaultWorkTaskList} from '../task-list/default-work-task-list.js';
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
  contentDiv.appendChild(addTaskButton());
  
  contentMain.appendChild(contentDiv);

  // Return appended content main
  const body = document.querySelector('body');
  return body.appendChild(contentMain);
}