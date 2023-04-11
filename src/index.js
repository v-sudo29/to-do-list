import './style.css';
import header from './header.js';
import content from './content.js';

header();
content();

const date = new Date();

const day = date.getDate();
const month = date.toLocaleString('default', { month: 'long' });
const year = date.getFullYear();

const currentDate = `${day} ${month}, ${year}`;

// Append date to inner HTML of content
const dateDiv = document.querySelector('.date-div');
dateDiv.innerHTML = currentDate;