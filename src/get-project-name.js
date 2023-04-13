export default function getProjectName(project) {
  const currentProject = project;
  const projectName = currentProject.classList[0].replace('-div', '');
  return projectName;
}