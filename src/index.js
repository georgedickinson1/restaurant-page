import "./styles.css";

const para = document.createElement("p");
const node = document.createTextNode("This is new.")
para.appendChild(node);
document.body.appendChild(para);