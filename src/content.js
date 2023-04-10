export default function content() {
  const body = document.querySelector('body');

  // Create elements
  const contentMain = document.createElement('main');

    // Date
    const dateDiv = document.createElement('div');

    // Tabs
    const tabsDiv = document.createElement('div');
    const workTab = document.createElement('div');
    const personalTab = document.createElement('div');

    // Task list
    const taskListDiv = document.createElement('div');
    const dummyTask = document.createElement('div');

  // Set attributes
  contentMain.classList.add('content-main');
  dateDiv.classList.add('date-div');
  tabsDiv.classList.add('tabs-div');
  workTab.classList.add('work-div');
  personalTab.classList.add('personal-div');

  // Set inner HTML
  
    // Tabs
    workTab.innerHTML = 'work';
    personalTab.innerHTML = 'personal';

    // Dummy task
    dummyTask.innerHTML = 'Read a book';

  // Append elements
  tabsDiv.appendChild(workTab);
  tabsDiv.appendChild(personalTab);

  taskListDiv.appendChild(dummyTask);

  contentMain.appendChild(dateDiv);
  contentMain.appendChild(tabsDiv);
  contentMain.appendChild(taskListDiv);

  // Return appended content main
  return body.appendChild(contentMain);
}