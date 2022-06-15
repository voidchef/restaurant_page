import "../css/pages/home.css";

const initHome = () => {
  const content = document.getElementById("content");

  const bg = document.querySelector(".bg");
  bg.style.marginTop = "0vh";

  const home = document.createElement("div");
  home.classList.add("home");

  const restaurantName = document.createElement("div");
  restaurantName.classList.add("restaurantName");

  const pizzeria = document.createElement("h1");
  pizzeria.textContent = "Pizzeria!";

  const description = document.createElement("div");
  description.classList.add("description");
  const descriptionPara = document.createElement("p");
  descriptionPara.textContent = `There are many variations of passages of Lorem Ipsum available,
  but the majority have suffered alteration in some form, by
  injected humour. There are many variations of passages of Lorem
  Ipsum available, but the majority have suffered alteration in some
  form, by injected humour.`;

  const bookingBtn = document.createElement("button");
  bookingBtn.classList.add("bookingBtn");
  bookingBtn.textContent = "Book Now";

  content.appendChild(home);

  home.appendChild(restaurantName);
  restaurantName.appendChild(pizzeria);

  home.appendChild(description);
  description.appendChild(descriptionPara);

  home.appendChild(bookingBtn);
};

export { initHome };
