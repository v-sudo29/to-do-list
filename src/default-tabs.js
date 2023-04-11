export default function defaultTabs() {
  
  // Create elements
  const defaultTabsDiv = document.createElement('div');
  const workTab = document.createElement('div');
  const personalTab = document.createElement('div');

  // Set attributes
  defaultTabsDiv.classList.add('tabs-div')
  workTab.classList.add('work-div');
  personalTab.classList.add('personal-div');

  // Set inner HTML
  workTab.innerHTML = 'work';
  personalTab.innerHTML = 'personal';

  // Append elements
  defaultTabsDiv.appendChild(workTab);
  defaultTabsDiv.appendChild(personalTab);

  return defaultTabsDiv;
}