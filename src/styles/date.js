export default function displayDate() {

  // Convert current month to string
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const currentDate = `${day} ${month}, ${year}`;

  // Append date
  const dateDiv = document.createElement('div');
  dateDiv.classList.add('date-div');
  dateDiv.innerHTML = currentDate;
  
  return dateDiv;
}