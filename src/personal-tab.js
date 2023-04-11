export default function displayPersonalTab() {
  const personalTab = document.createElement('div');
  personalTab.classList.add('personal-div');
  personalTab.innerHTML = 'personal';

  return personalTab;
};