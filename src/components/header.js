import "../css/components/header.css";
import { initHome } from "../pages/home";
import { initMenu } from "../pages/menu";
import { initAbout } from "../pages/about";
import { initContact } from "../pages/contact";
import { initFooter } from "./footer";

const initHeader = () => {
  const content = document.getElementById("content");

  const header = document.createElement("header");
  header.setAttribute("id", "header");
  header.classList.add("header");

  const siteName = document.createElement("div");
  siteName.classList.add("siteName");
  siteName.textContent = "Site Name";

  const menuTabs = document.createElement("div");
  menuTabs.classList.add("menuTabs");

  const handleEvent = (tab) => {
    while (content.lastChild.id !== "bg") {
      content.removeChild(content.lastChild);
    }

    if (tab === "home") initHome();
    if (tab === "menu") initMenu();
    if (tab === "about") initAbout();
    if (tab === "contact") initContact();

    initFooter();
  };

  const homeTab = document.createElement("button");
  homeTab.classList.add("homeTab", "tabs");
  homeTab.dataset.tab = "home";
  homeTab.textContent = "Home";
  homeTab.addEventListener("click", () => handleEvent("home"));
  const menuTab = document.createElement("button");
  menuTab.classList.add("menuTab", "tabs");
  menuTab.dataset.tab = "menu";
  menuTab.textContent = "Menu";
  menuTab.addEventListener("click", () => handleEvent("menu"));
  const aboutTab = document.createElement("button");
  aboutTab.classList.add("aboutTab", "tabs");
  aboutTab.dataset.tab = "about";
  aboutTab.textContent = "About";
  aboutTab.addEventListener("click", () => handleEvent("about"));
  const contactTab = document.createElement("button");
  contactTab.classList.add("contactTab", "tabs");
  contactTab.dataset.tab = "contact";
  contactTab.textContent = "Contact";
  contactTab.addEventListener("click", () => handleEvent("contact"));

  content.appendChild(header);

  header.appendChild(siteName);

  header.appendChild(menuTabs);
  menuTabs.appendChild(homeTab);
  menuTabs.appendChild(menuTab);
  menuTabs.appendChild(aboutTab);
  menuTabs.appendChild(contactTab);
};

export { initHeader };
