import displayTaskModal from "./modals/displayTaskModal";

export default function addTaskButton() {
  const addTaskDiv = document.createElement('div');
  const addTaskBtn = document.createElement('button');

  addTaskDiv.classList.add('add-task-div');
  addTaskBtn.classList.add('add-task-btn');
  addTaskBtn.innerHTML = '+ Add Task';

  // Add event listener to open modal
  addTaskBtn.addEventListener('click', () => displayTaskModal());

  return addTaskDiv.appendChild(addTaskBtn);
}