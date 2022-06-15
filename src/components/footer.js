import "../css/components/footer.css";

const initFooter = () => {
  const content = document.getElementById("content");

  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const footerItems = document.createElement("div");
  footerItems.classList.add("footerItems");

  content.appendChild(footer);
  footer.appendChild(footerItems);
};

export { initFooter };
