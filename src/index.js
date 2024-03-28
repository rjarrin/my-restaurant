import './style.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';

// Identify the header container
const header = document.querySelector("header");
// Create header title
const title = document.createElement("h1");
title.textContent = "My Restaurant";
header.prepend(title);
// Load the default tab (Home)
loadHome();
// Add a footer
const footer = document.createElement("footer");
footer.textContent = '© 2023 My Restaurant';
document.body.appendChild(footer);

// Add click listeners to the navigation buttons
const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");

// Home Button function
function clearAndLoadHome() {
    const content = document.getElementById("content");
    content.replaceChildren();
    content.removeAttribute("class");
    loadHome();
}

// Menu Button function
function clearAndLoadMenu() {
    const content = document.getElementById("content");
    content.replaceChildren();
    content.removeAttribute("class");
    loadMenu();
}

// About Button functionality
function clearAndLoadAbout() {
    const content = document.getElementById("content");
    content.replaceChildren();
    content.removeAttribute("class");
    loadAbout();
}

// Attach event listeners to the buttons
homeButton.addEventListener("click", clearAndLoadHome);
menuButton.addEventListener("click", () => {
    console.log("Menu button clicked");
    clearAndLoadMenu();
});
aboutButton.addEventListener("click", () => {
    console.log("About button clicked");
    clearAndLoadAbout();
});