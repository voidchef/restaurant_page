import "../css/components/header.css";

const initHeader = () => {
  const content = document.getElementById("content");

  const header = document.createElement("header");
  header.setAttribute("id", "header");
  header.classList.add("header");

  const siteName = document.createElement("div");
  siteName.classList.add("siteName");
  siteName.textContent = "Site Name";

  content.appendChild(header);

  header.appendChild(siteName);
};

export { initHeader };
