export default function loadAbout() {
    // Identify the content container
    const contentContainer = document.querySelector("#content");
    contentContainer.classList.add("about-content");
    // Create and append the about card
    const aboutCard = document.createElement("div");
    aboutCard.classList.add("about-card");
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    const titleText = document.createElement("h2");
    titleText.textContent = "About Us";
    textContainer.appendChild(titleText);
    const description = document.createElement("p");
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at cursus pellentesque, nisl eros pellentesque quam, a faucibus nisl nunc id nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed aliquam, nunc eget euismod ullamcorper, orci nibh aliquet nibh, in accumsan nulla nisi vel nisi.";
    textContainer.appendChild(description);
    aboutCard.appendChild(textContainer);
    contentContainer.appendChild(aboutCard);
}