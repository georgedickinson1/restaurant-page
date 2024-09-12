import "./styles.css";
import { pageLoad } from "./homepage.js";
import { loadMenu } from "./menu.js";
import { loadContactInfo } from "./contact.js";

const contentElement = document.querySelector("#content");

const buttons = {
  home: document.querySelector(".home"),
  menu: document.querySelector(".menu"),
  contact: document.querySelector(".contact"),
};

function addButtonListener(button, loadFunction) {
  button.addEventListener("click", () => {
    contentElement.innerHTML = "";
    loadFunction();
    // remove underline from all buttons
    Object.values(buttons).forEach(button => {
      button.classList.remove("underline");
    });

    // add underline to the selected button
    button.classList.add("underline");
  });
}

function initializeButtons() {
  addButtonListener(buttons.home, pageLoad);
  addButtonListener(buttons.menu, loadMenu);
  addButtonListener(buttons.contact, loadContactInfo);
}

function init() {
  initializeButtons();
  pageLoad();
  // underline home button
  buttons.home.classList.add("underline");
}

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("order-button")) {
    contentElement.innerHTML = "";
    loadMenu();
    buttons.menu.classList.add("underline");
    buttons.home.classList.remove("underline");
  }
});

// fix order button

document.addEventListener("DOMContentLoaded", init);