import burgerImage from './images/food-photographer-E94j3rMcxlw-unsplash.jpg';
import burritoImage from './images/clint-bustrillos-YFTGpQBNLVw-unsplash.jpg';

const menuItems = [
    {
        image: burgerImage,
        title: "Burger",
        price: "$9.99",
        description: "A classic burger consists of a 4oz beef patty, served on a brioche bun with standard toppings like bacon, cheese, lettuce, tomato, and onion."
    },
    {
        image: burritoImage,
        title: "Burrito",
        price: "$8.99",
        description: "A traditional burrito typically features a large flour tortilla filled with a protein such as chicken, pork, beef, or steak, combined with rice, beans, and additional fillings like lettuce and salsa, all wrapped for easy handheld consumption."
    },
];

export default function loadMenu() {
    // Identify the content container
    const contentContainer = document.querySelector("#content");
    contentContainer.classList.add("menu-content");
    // Create and append menu items
    menuItems.forEach(item => {
        const menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");

        const imageElement = document.createElement("img");
        imageElement.src = item.image;
        imageElement.alt = item.title;
        menuCard.appendChild(imageElement);

        const textContainer = document.createElement("div");
        textContainer.classList.add("text-container");

        const titleText = document.createElement("h2");
        titleText.textContent = item.title;
        textContainer.appendChild(titleText);

        const priceText = document.createElement("p");
        priceText.textContent = item.price;
        textContainer.appendChild(priceText);

        const descriptionText = document.createElement("p");
        descriptionText.textContent = item.description;
        textContainer.appendChild(descriptionText);

        menuCard.appendChild(textContainer);
        contentContainer.appendChild(menuCard);
    });
}