import "../css/pages/about.css";
import {
  headerImages,
} from "../imageUrls";

const initAbout = () => {
  const content = document.getElementById("content");

  const bg = document.querySelector(".bg");
  bg.style.marginTop = "-50vh"

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

  content.appendChild(bg);
  content.appendChild(aboutPageHeading);
  content.appendChild(aboutSectionWrapper);
  aboutSectionWrapper.appendChild(aboutSectionOne);

  aboutSectionOne.appendChild(aboutFoodImages);
  aboutFoodImages.appendChild(imgOne);
  aboutFoodImages.appendChild(imgTwo);
  aboutFoodImages.appendChild(imgThree);
};

export { initAbout };
