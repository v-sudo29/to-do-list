import workTab from './work-tab.js';
import personalTab from './personal-tab.js';

export default function defaultTabs() {
  
  // Create elements
  const defaultTabsDiv = document.createElement('div');

  // Set attributes
  defaultTabsDiv.classList.add('tabs-div')

  // Append elements
  defaultTabsDiv.appendChild(workTab());
  defaultTabsDiv.appendChild(personalTab());

  return defaultTabsDiv;
}