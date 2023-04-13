import getProjectName from "../get-project-name";

function countStrikeThroughs(projectArray) {
  const counter = [];
  let x = 0;

  for (let i = 0; i < projectArray.length; i++) {
    const taskHTML = projectArray[i].taskDivHTML;
    const labelHTML = taskHTML.querySelector('.task-label');

    if (labelHTML.classList.contains('strikethrough') === true) {
      x += 1;
      counter.push(x);
    };
  }

  // Return 0 if no numbers in array
  if (counter.length === 0) {
    return 0;
  } 
  return counter[counter.length - 1];
}

function updateTaskCount(project, projectArray) {
  const currentProject = project;
  const projectTitle = getProjectName(project)
  
  if (projectArray.length > countStrikeThroughs(projectArray)) {
    currentProject.innerHTML = `${projectTitle} (${projectArray.length - countStrikeThroughs(projectArray)})`;
  } else if (projectArray.length === countStrikeThroughs(projectArray)){
    currentProject.innerHTML = `${projectTitle}`;
  }
}

export {updateTaskCount, countStrikeThroughs};