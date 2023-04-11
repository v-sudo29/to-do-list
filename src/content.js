import displayDate from './date.js';
import defaultTaskList from './default-task-list.js';
import defaultTabs from './default-tabs.js';

export default function content() {

  // Create content main element
  const contentMain = document.createElement('main');
  const contentDiv = document.createElement('div');

  // Set attributes
  contentMain.classList.add('content-main');
  contentDiv.classList.add('content-div');

  contentDiv.appendChild(displayDate());
  contentDiv.appendChild(defaultTabs());
  contentDiv.appendChild(defaultTaskList());
  
  contentMain.appendChild(contentDiv);

  // Return appended content main
  const body = document.querySelector('body');
  return body.appendChild(contentMain);
}