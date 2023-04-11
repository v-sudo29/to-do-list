export default function displayWorkTab() {
  const workTab = document.createElement('div');
  workTab.classList.add('work-div', 'currentTab');
  workTab.innerHTML = 'work';

  return workTab;
}