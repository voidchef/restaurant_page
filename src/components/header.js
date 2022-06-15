import "../css/components/header.css";

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

  const homeTab = document.createElement("button");
  homeTab.classList.add("homeTab", "tabs");
  homeTab.dataset.tab = "home";
  homeTab.textContent = "Home";
  const menuTab = document.createElement("button");
  menuTab.classList.add("menuTab", "tabs");
  menuTab.dataset.tab = "menu";
  menuTab.textContent = "Menu";
  const aboutTab = document.createElement("button");
  aboutTab.classList.add("aboutTab", "tabs");
  aboutTab.dataset.tab = "about";
  aboutTab.textContent = "About";
  const contactTab = document.createElement("button");
  contactTab.classList.add("contactTab", "tabs");
  contactTab.dataset.tab = "contact";
  contactTab.textContent = "Contact";

  content.appendChild(header);

  header.appendChild(siteName);
};

export { initHeader };
