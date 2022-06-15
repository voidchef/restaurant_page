import "../css/components/footer.css";

const initFooter = () => {
  const content = document.getElementById("content");

  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const footerItems = document.createElement("div");
  footerItems.classList.add("footerItems");

  const footerBoxOne = document.createElement("div");
  footerBoxOne.classList.add("footerBoxOne");

  const footerSiteName = document.createElement("div");
  footerSiteName.classList.add("footerSiteName");
  footerSiteName.textContent = "Site Name";

  const siteDetails = document.createElement("p");
  siteDetails.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque
  illum aspernatur fugiat maiores id magni, modi, quaerat vitae. Consectetur`;

  content.appendChild(footer);
  footer.appendChild(footerItems);

  footerItems.appendChild(footerBoxOne);
  footerBoxOne.appendChild(footerSiteName);
  footerBoxOne.appendChild(siteDetails);
};

export { initFooter };
