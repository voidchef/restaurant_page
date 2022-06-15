import "../css/pages/menu.css";
import { homeMenuItemImgs } from "../imageUrls";

const initMenu = () => {
  const content = document.getElementById("content");

  const bg = document.querySelector(".bg");  
  bg.style.marginTop = "-50vh"

  const menuPageHeading = document.createElement("div");
  menuPageHeading.classList.add("menuPageHeading");
  menuPageHeading.textContent = "Choose according to your taste";

  const menu = document.createElement("div");
  menu.classList.add("menu");

  const menuHeader = document.createElement("div");
  menuHeader.classList.add("menuHeader");

  const menuTitle = document.createElement("div");
  menuTitle.classList.add("menuTitle");
  menuTitle.textContent = "Our Menu";

  const menuParagraph = document.createElement("div");
  menuParagraph.classList.add("menuParagraph");
  menuParagraph.innerText = `Fish is one of the most wholesome foods that man can eat. In fact, people have been \n eating fish throughout human`;

  const hr = document.createElement("hr");

  const menuItemsWrapper = document.createElement("div");
  menuItemsWrapper.classList.add("menuItemsWrapper");

  const menuItems = document.createElement("div");
  menuItems.classList.add("menuItems");

  for (let index = 0; index < 8; index++) {
    const menuCell = document.createElement("div");
    menuCell.classList.add("menuCell");

    const pizzaImg = document.createElement("img");
    pizzaImg.src = homeMenuItemImgs[index];
    pizzaImg.classList.add("pizzaImg");

    const namePrice = document.createElement("div");
    namePrice.classList.add("namePrice");

    const pizzaName = document.createElement("div");
    pizzaName.classList.add("pizzaName");
    pizzaName.textContent = "Pizza margherita";

    const pizzaPrice = document.createElement("div");
    pizzaPrice.classList.add("pizzaPrice");
    pizzaPrice.textContent = "€10";

    const pizzaDescription = document.createElement("div");
    pizzaDescription.classList.add("pizzaDescription");
    pizzaDescription.textContent =
      "Aeneas needs the pain of the mass. With your friends";

    const orderNowBtn = document.createElement("button");
    orderNowBtn.classList.add("orderNowBtn");
    orderNowBtn.textContent = "Order Now";

    menuItems.appendChild(menuCell);
    menuCell.appendChild(pizzaImg);
    menuCell.appendChild(namePrice);
    namePrice.appendChild(pizzaName);
    namePrice.appendChild(pizzaPrice);
    menuCell.appendChild(pizzaDescription);
    menuCell.appendChild(orderNowBtn);
  }

  content.appendChild(bg);
  content.appendChild(menuPageHeading);

  content.appendChild(menu);
  menu.appendChild(menuHeader);
  menuHeader.appendChild(menuTitle);
  menuHeader.appendChild(menuParagraph);
  menuHeader.appendChild(hr);
  menu.appendChild(menuItemsWrapper);
  menuItemsWrapper.appendChild(menuItems);
};

export { initMenu };
