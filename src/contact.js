import locationImage from "../images/location.png";

export function loadContactInfo() {
    const content = document.querySelector("#content");
    const container = document.createElement("div");
    container.className = "contact-container";
    content.appendChild(container);
    container.innerHTML = `
    <div class="line">
        <i class="fa-solid fa-phone"></i>
        <p>+1 602-258-8300</p>
    </div>
    <div class="line">
        <i class="fa-solid fa-location-dot"></i>
        <p>623 E Adams St, Phoenix, AZ 85004</p>
    </div>
    <img src="${locationImage}">`
}