import displayDate from './date.js';
import defaultTaskList from './default-task-list.js';
import defaultTabs from './default-tabs.js';

export default function content() {

  // Create content main element
  const contentMain = document.createElement('main');

  // Set attributes
  contentMain.classList.add('content-main');

  contentMain.appendChild(displayDate());
  contentMain.appendChild(defaultTabs());
  contentMain.appendChild(defaultTaskList());

  // Return appended content main
  const body = document.querySelector('body');
  return body.appendChild(contentMain);
}