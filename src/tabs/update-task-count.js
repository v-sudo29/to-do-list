import getProjectName from "../get-project-name";

export default function updateTaskCount(project, projectArray) {
  const currentProject = project;
  const projectTitle = getProjectName(project)
  
  if (projectArray.length > 0) {
    currentProject.innerHTML = `${projectTitle} (${projectArray.length})`;
  } else {
    currentProject.innerHTML = `${projectTitle}`;
  }
}

