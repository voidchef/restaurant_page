import "../css/pages/about.css";
import {
  headerImages,
  homeServiceItemImages,
  homeCustomersImages,
  starsIcon,
} from "../imageUrls";

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

  const aboutSectionTwo = document.createElement("div");
  aboutSectionTwo.classList.add("aboutSectionTwo");
  const whyUsHeader = document.createElement("div");
  whyUsHeader.classList.add("whyUsHeader");
  const whyUsTitle = document.createElement("div");
  whyUsTitle.classList.add("whyUsTitle");
  whyUsTitle.textContent = "Why Choose Us?";
  const whyUsParagraph = document.createElement("div");
  whyUsParagraph.classList.add("whyUsParagraph");
  whyUsParagraph.textContent =
    "Fish is one of the most wholesome foods that man can eat. In fact, people have been \neating fish throughout human";
  const whyUsHr = document.createElement("hr");
  whyUsHr.classList.add("whyUsHr");

  const serviceItems = document.createElement("div");
  serviceItems.classList.add("serviceItems");

  for (let index = 0; index < 6; index++) {
    const serviceCell = document.createElement("div");
    serviceCell.classList.add("serviceCell");

    const serviceImg = document.createElement("img");
    serviceImg.classList.add("serviceImg");
    serviceImg.src = homeServiceItemImages[index];

    const serviceTitle = document.createElement("div");
    serviceTitle.classList.add("serviceTitle");
    serviceTitle.textContent = `Service ${index + 1}`;

    const serviceParagraph = document.createElement("div");
    serviceParagraph.classList.add("serviceParagraph");
    serviceParagraph.textContent =
      "We provide best and fresh quality foods. We also gives you required signature dishes and more nice and cool services";

    serviceItems.appendChild(serviceCell);
    serviceCell.appendChild(serviceImg);
    serviceCell.appendChild(serviceTitle);
    serviceCell.appendChild(serviceParagraph);
  }

  const bgTwo = document.createElement("div");
  bgTwo.classList.add("bgTwo");

  const customersHeader = document.createElement("div");
  customersHeader.classList.add("customersHeader");
  const customersTitle = document.createElement("div");
  customersTitle.classList.add("customersTitle");
  customersTitle.textContent = "Listen to our customers";
  const customersParagraph = document.createElement("div");
  customersParagraph.classList.add("customersParagraph");
  customersParagraph.textContent =
    "Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human";
  const customerHr = document.createElement("div");
  customerHr.classList.add("customerHr");

  const reviewContainer = document.createElement("div");
  reviewContainer.classList.add("reviewContainer");

  const names = ["Kerem Zopcuk", "Kateryna R.", "Max Mustermann"];
  for (let index = 0; index < 3; index++) {
    const reviewCell = document.createElement("div");
    reviewCell.classList.add("reviewCell");

    const reviewerImg = document.createElement("img");
    reviewerImg.classList.add("reviewerImg");
    reviewerImg.src = homeCustomersImages[index];

    const ratingImg = document.createElement("img");
    ratingImg.classList.add("ratingImg");
    ratingImg.src = starsIcon;

    const reviewParagraph = document.createElement("div");
    reviewParagraph.classList.add("reviewParagraph");
    reviewParagraph.textContent =
      "We provide best and fresh quality foods. We also gives you required signature dishes and more nice and cool services";

    const reviewerName = document.createElement("h2");
    reviewerName.classList.add("reviewerName");
    reviewerName.textContent = names[index];

    reviewContainer.appendChild(reviewCell);
    reviewCell.appendChild(reviewerImg);
    reviewCell.appendChild(ratingImg);
    reviewCell.appendChild(reviewParagraph);
    reviewCell.appendChild(reviewerName);
  }

  const statsContainer = document.createElement("div");
  statsContainer.classList.add("statsContainer");

  const data = ["56,789", "10,023", "4,544", "12,520"];
  const pros = [
    "Happy Customer",
    "Pizzas Sold",
    "Working Hours",
    "Pizzas Delivered",
  ];
  for (let index = 0; index < 4; index++) {
    const statsCell = document.createElement("div");
    statsCell.classList.add("statsCell");

    const stats = document.createElement("div");
    stats.classList.add("stats");
    stats.textContent = data[index];

    const prosText = document.createElement("div");
    prosText.classList.add("prosText");
    prosText.textContent = pros[index];

    const statsHr = document.createElement("hr");
    statsHr.classList.add("statsHr");

    statsContainer.appendChild(statsCell);
    statsCell.appendChild(stats);
    statsCell.appendChild(prosText);
    prosText.appendChild(statsHr);
  }

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

  aboutSectionWrapper.appendChild(aboutSectionTwo);
  aboutSectionTwo.appendChild(whyUsHeader);
  whyUsHeader.appendChild(whyUsTitle);
  whyUsHeader.appendChild(whyUsParagraph);
  whyUsParagraph.appendChild(whyUsHr);

  aboutSectionTwo.appendChild(serviceItems);

  content.appendChild(bgTwo);
  bgTwo.appendChild(customersHeader);
  customersHeader.appendChild(customersTitle);
  customersHeader.appendChild(customersParagraph);
  customersHeader.appendChild(customerHr);

  bgTwo.appendChild(reviewContainer);

  content.appendChild(statsContainer);
};

export { initAbout };
