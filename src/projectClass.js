export default class Project {
  constructor(projectTitle) {
    const hyphenedProjectTitle = projectTitle.replace(/\s+/g, "-");
    this.projectTitle = hyphenedProjectTitle;
    this.array = [];
  }
}