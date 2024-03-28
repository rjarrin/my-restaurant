import headerImage from './images/carlos-aranda-IYMceGutrbQ-unsplash.jpg';
import bodyImage from './images/johnathan-macedo-4NQEvxW2_4w-unsplash.jpg';

export default function loadHome() {
    // Identify the content container
    const contentContainer = document.querySelector("#content");
    contentContainer.classList.add("home-content");
    // Overlay the white card
    const whiteCard = document.createElement("div");
    whiteCard.classList.add("white-card");
    contentContainer.appendChild(whiteCard);
    // Add the chef image to the card
    const imageElement = document.createElement("img");
    imageElement.src = bodyImage;
    imageElement.id = "chef-image";
    whiteCard.appendChild(imageElement);
    // Add some text to the card
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    const titleText = document.createElement("h2");
    titleText.textContent = "Title Text";
    const description = document.createElement("p");
    description.textContent = "Some text underneath the title";
    textContainer.appendChild(titleText);
    textContainer.appendChild(description);
    whiteCard.appendChild(textContainer);
}

// export default function loadHome() {
//     // Header
//     const header = document.createElement("header");
//     const title = document.createElement("h1");
//     title.textContent = "My Restaurant";
//     const headerImage = document.createElement("img");
//     headerImage.src = "./images/carlos-aranda-IYMceGutrbQ-unsplash.jpg";
//     header.appendChild(title);
//     header.appendChild(headerImage);
    
//     // const myIcon = new Image();
//     // myIcon.src = Icon;
//     // header.appendChild(myIcon);

//     document.body.prepend(header);

//     // Buttons
//     const buttonsContainer = document.createElement("div");
//     buttonsContainer.style.display = "flex";
// }