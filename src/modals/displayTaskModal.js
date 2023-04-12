import { addNewTask, taskModalRemove } from "./modal-functions";

export default function displayTaskModal() {

  // Create elements
  const modalDiv = document.createElement('div');
  const modalBody = document.createElement('div');

  const modalForm = document.createElement('form');
  const modalFormDiv = document.createElement('div');
  const modalInputContainerOne = document.createElement('div');
  const modalInputContainerTwo = document.createElement('div');

  const titleLabel = document.createElement('label');
  const descriptionLabel = document.createElement('label');

  const titleInput = document.createElement('input');
  const descriptionInput = document.createElement('textarea');

  const buttonsContainer = document.createElement('div');
  const addBtnContainer = document.createElement('div');
  const cancelBtnContainer = document.createElement('div');

  const addBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  // Set attributes
  modalDiv.classList.add('modal-div', 'modal-active');
  modalBody.classList.add('modal-body');

  modalForm.setAttribute('action', '');
  modalForm.setAttribute('id', 'add-task-form');
  modalForm.setAttribute('method', 'dialog');
  
  modalFormDiv.classList.add('modal-form-div');

  modalInputContainerOne.classList.add('modal-input-container');
  modalInputContainerTwo.classList.add('modal-input-container');

  titleLabel.setAttribute('for', 'task-title');
  descriptionLabel.setAttribute('for', 'task-description');

  titleInput.classList.add('textbox');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('id', 'task-title');
  titleInput.setAttribute('name', 'task-title');
  titleInput.setAttribute('placeholder', 'Title')

  descriptionInput.classList.add('textbox', 'task-description-box');
  descriptionInput.setAttribute('id', 'task-description');
  descriptionInput.setAttribute('name', 'task-description');
  descriptionInput.setAttribute('placeholder', 'Description (optional)');
  descriptionInput.setAttribute('rows', '4');
  descriptionLabel.setAttribute('cols', '50');

  buttonsContainer.classList.add('modal-buttons-pair');
  addBtnContainer.classList.add('modal-add-btn-container');
  cancelBtnContainer.classList.add('modal-cancel-btn-container');

  addBtn.classList.add('modal-add-button');
  cancelBtn.classList.add('modal-cancel-button');

  // Add event listener to buttons
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addNewTask();
  });

  cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    taskModalRemove();
  });

  // Set inner HTML
  titleLabel.innerHTML = 'Title';
  descriptionLabel.innerHTML = 'Description';

  addBtn.innerHTML = 'Add';
  cancelBtn.innerHTML = 'Cancel';

  // Append elements
  modalBody.appendChild(modalForm);
  modalForm.appendChild(modalFormDiv);
  modalFormDiv.appendChild(modalInputContainerOne);
  modalFormDiv.appendChild(modalInputContainerTwo);
  modalFormDiv.appendChild(buttonsContainer);

  modalInputContainerOne.appendChild(titleLabel);
  modalInputContainerOne.appendChild(titleInput);

  modalInputContainerTwo.appendChild(descriptionLabel);
  modalInputContainerTwo.appendChild(descriptionInput);

  buttonsContainer.appendChild(addBtnContainer);
  buttonsContainer.appendChild(cancelBtnContainer);
  addBtnContainer.appendChild(addBtn);
  cancelBtnContainer.appendChild(cancelBtn);

  modalDiv.appendChild(modalBody);

  // Append element to page
  const contentDiv = document.querySelector('.content-div');
  contentDiv.appendChild(modalDiv);
}