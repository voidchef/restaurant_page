import "../css/pages/contact.css";
import { mapImg } from "../imageUrls";

const initContact = () => {
  const content = document.getElementById("content");

  const bg = document.querySelector(".bg");
  bg.style.marginTop = "-50vh";

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
};

export { initContact };
