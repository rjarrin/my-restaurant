import './style.css';
import loadHome from './home.js';

// Identify the header container
const header = document.querySelector("header");
// Create header title
const title = document.createElement("h1");
title.textContent = "My Restaurant";
header.prepend(title);
// Load the default tab (Home)
loadHome();

console.log("Within index.js now");