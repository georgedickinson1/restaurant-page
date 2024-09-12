import margheritaImage from '../images/margherita.png';
import pepperoniImage from '../images/pepperoni.png';
import theWorksImage from '../images/the-works.png';
import meatFeastImage from '../images/meat-feast.png';

export function loadMenu() {
  class Pizza {
    constructor(type, description, image, price) {
      this.type = type;
      this.description = description;
      this.image = image;
      this.price = price;
    }

    render() {
        const card = document.createElement("div");
        card.className = "card";
        
        const descriptionWords = this.description.split(' ');
        const descriptionStyle = descriptionWords.length > 10 ? 'style="font-size: 0.8em;"' : '';
  
        card.innerHTML = `
          <h2>${this.type}</h2>
          <p ${descriptionStyle}>${this.description}</p>
          <img src="${this.image}" alt="${this.type}">
          <button>Add &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${this.price}</button>
        `;
        return card;
    }
  }

  const pizzas = [
    new Pizza("Margherita", "Tomato sauce and mozzarella cheese", margheritaImage, "$14.99"),
    new Pizza("Pepperoni", "Double pepperoni and mozzarella cheese", pepperoniImage, "$16.99"),
    new Pizza("The Works", "Pepperoni, Italian style sausage, ham, chestnut mushrooms, green peppers, onions and black olives", theWorksImage, "$17.99"),
    new Pizza("Meat Feast", "Pepperoni, pork sausage, bacon, spicy beef and ham", meatFeastImage, "$17.99")
  ];

  const content = document.getElementById("content");
  const container = document.createElement("div");
  container.className = "pizza-container";
  content.appendChild(container);
  if (content) {
    pizzas.forEach(pizza => container.appendChild(pizza.render()));
  } else {
    console.error("Content element not found");
  }
}