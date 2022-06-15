import "./css/index.css";

import { initHeader } from "./components/header.js";
initHeader();

const bg = document.createElement("div");
bg.classList.add("bg");
bg.setAttribute("id", "bg");
const content = document.getElementById("content");
content.appendChild(bg);

import { initHome } from "./pages/home.js";
initHome();

import { initFooter } from "./components/footer.js";
initFooter();
