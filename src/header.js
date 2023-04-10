export default function header() {
  const body = document.querySelector('body');

  // Create elements
  const headerContainer = document.createElement('header');
  const titleDiv = document.createElement('div');

  // Set attributes
  headerContainer.classList.add('header-div');
  titleDiv.classList.add('header-title-div');

  // Set inner HTML
  titleDiv.innerHTML = 'todo list';

  // Append elements
  headerContainer.appendChild(titleDiv);

  // Return appended header div
  return body.appendChild(headerContainer);
}