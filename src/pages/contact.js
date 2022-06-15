import "../css/pages/contact.css";
import { mapImg } from "../imageUrls";

const initContact = () => {
  const content = document.getElementById("content");

  const bg = document.querySelector(".bg");
  bg.style.marginTop = "-50vh"

  const contactPageHeading = document.createElement("div");
  contactPageHeading.classList.add("contactPageHeading");
  contactPageHeading.textContent = "Let's get acquainted";

  const contactSection = document.createElement("div");
  contactSection.classList.add("contactSection");

  const contactItems = document.createElement("div");
  contactItems.classList.add("contactItems");

  const address = document.createElement("div");
  address.classList.add("address");

  const addressTitle = document.createElement("div");
  addressTitle.classList.add("addressTitle");
  addressTitle.textContent = "Address";

  const addressHr = document.createElement("div");
  addressHr.classList.add("addressHr");

  const addressParagraph = document.createElement("div");
  addressParagraph.classList.add("addressParagraph");
  addressParagraph.textContent =
    "R. Itarumirim, number 48 - Paulo VI, Belo Horizonte - MG, 31998-060, Brazil";

  const mapImgContainer = document.createElement("div");
  mapImgContainer.classList.add("mapImgContainer");

  const mapImage = document.createElement("img");
  mapImage.classList.add("mapImage");
  mapImage.src = mapImg;

  const contactFormContainer = document.createElement("div");
  contactFormContainer.classList.add("contactFormContainer");

  const contactFormTitle = document.createElement("div");
  contactFormTitle.classList.add("contactFormTitle");
  contactFormTitle.textContent = "Contact Form";

  const contactFormHr = document.createElement("div");
  contactFormHr.classList.add("contactFormHr");

  const contactForm = document.createElement("form");
  contactForm.classList.add("contactForm");

  const labels = ["Name", "Mail", "Message"];
  for (let index = 0; index < labels.length; index++) {
    const label = document.createElement("label");
    label.htmlFor = labels[index];
    label.textContent = labels[index];
    const lineBreak = document.createElement("br");

    let input;
    if (labels[index] === "Message") {
      input = document.createElement("textarea");
    } else {
      input = document.createElement("input");
      input.type = "text";
    }

    input.id = labels[index];
    input.name = labels[index];

    contactForm.appendChild(label);
    label.appendChild(lineBreak);
    label.appendChild(input);
  }

  const sendMessageBtn = document.createElement("button");
  sendMessageBtn.classList.add("sendMessageBtn");
  sendMessageBtn.textContent = "Send Message";

  content.appendChild(bg);
  content.appendChild(contactPageHeading);

  content.appendChild(contactSection);
  contactSection.appendChild(contactItems);

  contactItems.appendChild(address);
  address.appendChild(addressTitle);
  address.appendChild(addressHr);
  address.appendChild(addressParagraph);
  address.appendChild(mapImgContainer);
  mapImgContainer.appendChild(mapImage);

  contactItems.appendChild(contactFormContainer);
  contactFormContainer.appendChild(contactFormTitle);
  contactFormContainer.appendChild(contactFormHr);
  contactFormContainer.appendChild(contactForm);
  contactForm.appendChild(sendMessageBtn);
};

export { initContact };
