import { taskModalRemove } from "./modal-functions";

function overlayOff() {
  const overlayDiv = document.querySelector('.overlay');
  overlayDiv.remove();
}

function addOverlay() {
  const overlayDiv = document.createElement('div');
  overlayDiv.classList.add('overlay', 'overlay-active');

  overlayDiv.addEventListener('click', () => {
    taskModalRemove();
    overlayOff();
  });

  return overlayDiv;
}

export { addOverlay, overlayOff};