import "../css/pages/menu.css";
import { homeMenuItemImgs } from "../imageUrls";

const initMenu = () => {
  const content = document.getElementById("content");

  const bg = document.querySelector(".bg");
  bg.style.marginTop = "-50vh";

  const menuPageHeading = document.createElement("div");
  menuPageHeading.classList.add("menuPageHeading");
  menuPageHeading.textContent = "Choose according to your taste";

  content.appendChild(bg);
  content.appendChild(menuPageHeading);
};

export { initMenu };
