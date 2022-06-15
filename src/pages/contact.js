import "../css/pages/contact.css";
import { mapImg } from "../imageUrls";

const initContact = () => {
  const content = document.getElementById("content");

  const bg = document.querySelector(".bg");
  bg.style.marginTop = "-50vh"

  const contactPageHeading = document.createElement("div");
  contactPageHeading.classList.add("contactPageHeading");
  contactPageHeading.textContent = "Let's get acquainted";

  content.appendChild(bg);
  content.appendChild(contactPageHeading);
};

export { initContact };
