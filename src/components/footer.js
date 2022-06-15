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

  const footerBoxTwo = document.createElement("div");
  footerBoxTwo.classList.add("footerBoxTwo");

  const footerContact = document.createElement("div");
  footerContact.classList.add("footerContact");
  footerContact.textContent = "Contact";

  const contactDetails = document.createElement("p");
  contactDetails.innerText = `Call: +76 (094) 754 43 7I
  \nTiming: Everyday from 10am - 11pm
  \nAddress: 817 N California Ave Chicago, IL 60622`;

  const footerBoxThree = document.createElement("div");
  footerBoxThree.classList.add("footerBoxThree");

  const footerSubscribe = document.createElement("div");
  footerSubscribe.classList.add("footerSubscribe");
  footerSubscribe.textContent = "Subscribe";

  const footerBoxFour = document.createElement("div");
  footerBoxFour.classList.add("footerBoxFour");
  const email = document.createElement("input");
  email.classList.add("email");
  email.setAttribute("type", "text");
  email.setAttribute("placeholder", "E-Mail");
  const subscribeBtn = document.createElement("button");
  subscribeBtn.classList.add("subscribeBtn");
  subscribeBtn.textContent = "Subscribe";

  content.appendChild(footer);
  footer.appendChild(footerItems);

  footerItems.appendChild(footerBoxOne);
  footerBoxOne.appendChild(footerSiteName);
  footerBoxOne.appendChild(siteDetails);

  footerItems.appendChild(footerBoxTwo);
  footerBoxTwo.appendChild(footerContact);
  footerBoxTwo.appendChild(contactDetails);

  footerItems.appendChild(footerBoxThree);
  footerBoxThree.appendChild(footerSubscribe);
  footerBoxThree.appendChild(footerBoxFour);
  footerBoxFour.appendChild(email);
  footerBoxFour.appendChild(subscribeBtn);
};

export { initFooter };
