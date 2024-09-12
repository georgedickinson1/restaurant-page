export function pageLoad() {
    const content = document.querySelector("#content");
    const homepageContainer = document.createElement("div");
    homepageContainer.className = "homepage-container"
    content.appendChild(homepageContainer);
    // Load header
    const header = document.createElement("h2");
    header.className = "about-us";  
    const headerNode = document.createTextNode("About Us");
    header.appendChild(headerNode);
    homepageContainer.appendChild(header);

    // Load information
    const information = document.createElement("p");
    information.className = "homepage-information";
    information.innerHTML = "Kirkland Pizza, a beloved American institution, has been delighting taste buds since 1910. Inspired by the rich traditions of pizza making, our pizzeria has crafted a menu that celebrates the art of pizza with a distinctly American twist.<br><br>From our classic Margherita to our innovative specialty pizzas, each creation is a testament to our commitment to quality and authenticity. We source only the finest ingredients, including fresh mozzarella, ripe tomatoes, and flavourful herbs and spices.<br><br>Whether you're a longtime fan or new to the world of Kirkland Pizza, we invite you to experience the taste of America, served with passion and pride.";
    homepageContainer.appendChild(information);

    // Order button
    const orderButton = document.createElement("button");
    const buttonNode = document.createTextNode("Order Now");
    orderButton.className = "order-button";
    orderButton.appendChild(buttonNode);
    homepageContainer.appendChild(orderButton);
};