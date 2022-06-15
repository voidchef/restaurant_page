import "../css/pages/about.css";
import { headerImages } from "../imageUrls";

const initAbout = () => {
  const content = document.getElementById("content");

  const bg = document.querySelector(".bg");
  bg.style.marginTop = "-50vh";

  const aboutPageHeading = document.createElement("div");
  aboutPageHeading.classList.add("aboutPageHeading");
  aboutPageHeading.textContent = "We understand pizzas";

  const aboutSectionWrapper = document.createElement("div");
  aboutSectionWrapper.classList.add("aboutSectionWrapper");

  const aboutSectionOne = document.createElement("div");
  aboutSectionOne.classList.add("aboutSectionOne");

  const aboutFoodImages = document.createElement("div");
  aboutFoodImages.classList.add("aboutFoodImages");
  const imgOne = document.createElement("img");
  imgOne.classList.add("imgOne");
  imgOne.src = headerImages[0];
  const imgTwo = document.createElement("img");
  imgTwo.classList.add("imgTwo");
  imgTwo.src = headerImages[1];
  const imgThree = document.createElement("img");
  imgThree.classList.add("imgThree");
  imgThree.src = headerImages[2];

  const aboutUs = document.createElement("div");
  aboutUs.classList.add("aboutUs");
  const aboutUsTitle = document.createElement("div");
  aboutUsTitle.classList.add("aboutUsTitle");
  aboutUsTitle.textContent = "About Us";
  const aboutUsHr = document.createElement("div");
  aboutUsHr.classList.add("aboutUsHr");
  const aboutUsParagraph = document.createElement("div");
  aboutUsParagraph.classList.add("aboutUsParagraph");
  aboutUsParagraph.innerText = `Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history. These days, many cooks yearn Fish is one of the most wholesome foods that man can eat. In fact,
  \nFish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history. These days, many cooks yearn Fish is`;
  const aboutUsBtn = document.createElement("button");
  aboutUsBtn.classList.add("aboutUsBtn");
  aboutUsBtn.textContent = "Learn More";

  content.appendChild(bg);
  content.appendChild(aboutPageHeading);
  content.appendChild(aboutSectionWrapper);
  aboutSectionWrapper.appendChild(aboutSectionOne);

  aboutSectionOne.appendChild(aboutFoodImages);
  aboutFoodImages.appendChild(imgOne);
  aboutFoodImages.appendChild(imgTwo);
  aboutFoodImages.appendChild(imgThree);

  aboutSectionOne.appendChild(aboutUs);
  aboutUs.appendChild(aboutUsTitle);
  aboutUs.appendChild(aboutUsHr);
  aboutUs.appendChild(aboutUsParagraph);
  aboutUs.appendChild(aboutUsBtn);
};

export { initAbout };
