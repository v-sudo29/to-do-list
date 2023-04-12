export default function strikethrough(taskLabel) {
  if (taskLabel.classList.contains('strikethrough')) {
    taskLabel.classList.remove('strikethrough');

  } else if (taskLabel.classList.contains('strikethrough') === false) {
    taskLabel.classList.add('strikethrough');
  }
}