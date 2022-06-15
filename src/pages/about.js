import "../css/pages/about.css";

const initAbout = () => {
  const content = document.getElementById("content");

  const bg = document.querySelector(".bg");
  bg.style.marginTop = "-50vh";

  const aboutPageHeading = document.createElement("div");
  aboutPageHeading.classList.add("aboutPageHeading");
  aboutPageHeading.textContent = "We understand pizzas";

  content.appendChild(bg);
  content.appendChild(aboutPageHeading);
};

export { initAbout };
