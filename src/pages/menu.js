import "../css/pages/menu.css";
import { homeMenuItemImgs } from "../imageUrls";

const initMenu = () => {
  const content = document.getElementById("content");

  const bg = document.querySelector(".bg");
  bg.style.marginTop = "-50vh";

  const menuPageHeading = document.createElement("div");
  menuPageHeading.classList.add("menuPageHeading");
  menuPageHeading.textContent = "Choose according to your taste";

  const menuSection = document.createElement("div");
  menuSection.classList.add("menuSection");

  const menuSectionHeader = document.createElement("div");
  menuSectionHeader.classList.add("menuSectionHeader");

  const menuSectionTitle = document.createElement("div");
  menuSectionTitle.classList.add("menuSectionTitle");
  menuSectionTitle.textContent = "Our Menu";

  const menuSectionParagraph = document.createElement("div");
  menuSectionParagraph.classList.add("menuSectionParagraph");
  menuSectionParagraph.innerText = `Fish is one of the most wholesome foods that man can eat. In fact, people have been \n eating fish throughout human`;

  const hr = document.createElement("hr");

  content.appendChild(bg);
  content.appendChild(menuPageHeading);

  content.appendChild(menu);
  menu.appendChild(menuHeader);
  menuHeader.appendChild(menuTitle);
  menuHeader.appendChild(menuParagraph);
  menuHeader.appendChild(hr);
};

export { initMenu };
