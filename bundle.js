/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/components/footer.css":
/*!***************************************!*\
  !*** ./src/css/components/footer.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant_page/./src/css/components/footer.css?");

/***/ }),

/***/ "./src/css/components/header.css":
/*!***************************************!*\
  !*** ./src/css/components/header.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant_page/./src/css/components/header.css?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant_page/./src/css/index.css?");

/***/ }),

/***/ "./src/css/pages/about.css":
/*!*********************************!*\
  !*** ./src/css/pages/about.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant_page/./src/css/pages/about.css?");

/***/ }),

/***/ "./src/css/pages/contact.css":
/*!***********************************!*\
  !*** ./src/css/pages/contact.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant_page/./src/css/pages/contact.css?");

/***/ }),

/***/ "./src/css/pages/home.css":
/*!********************************!*\
  !*** ./src/css/pages/home.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant_page/./src/css/pages/home.css?");

/***/ }),

/***/ "./src/css/pages/menu.css":
/*!********************************!*\
  !*** ./src/css/pages/menu.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant_page/./src/css/pages/menu.css?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initFooter\": () => (/* binding */ initFooter)\n/* harmony export */ });\n/* harmony import */ var _css_components_footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/components/footer.css */ \"./src/css/components/footer.css\");\n\n\nconst initFooter = () => {\n  const content = document.getElementById(\"content\");\n\n  const footer = document.createElement(\"footer\");\n  footer.classList.add(\"footer\");\n\n  const footerItems = document.createElement(\"div\");\n  footerItems.classList.add(\"footerItems\");\n\n  const footerBoxOne = document.createElement(\"div\");\n  footerBoxOne.classList.add(\"footerBoxOne\");\n\n  const footerSiteName = document.createElement(\"div\");\n  footerSiteName.classList.add(\"footerSiteName\");\n  footerSiteName.textContent = \"Site Name\";\n\n  const siteDetails = document.createElement(\"p\");\n  siteDetails.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque\n  illum aspernatur fugiat maiores id magni, modi, quaerat vitae. Consectetur`;\n\n  const footerBoxTwo = document.createElement(\"div\");\n  footerBoxTwo.classList.add(\"footerBoxTwo\");\n\n  const footerContact = document.createElement(\"div\");\n  footerContact.classList.add(\"footerContact\");\n  footerContact.textContent = \"Contact\";\n\n  const contactDetails = document.createElement(\"p\");\n  contactDetails.innerText = `Call: +76 (094) 754 43 7I\n  \\nTiming: Everyday from 10am - 11pm\n  \\nAddress: 817 N California Ave Chicago, IL 60622`;\n\n  const footerBoxThree = document.createElement(\"div\");\n  footerBoxThree.classList.add(\"footerBoxThree\");\n\n  const footerSubscribe = document.createElement(\"div\");\n  footerSubscribe.classList.add(\"footerSubscribe\");\n  footerSubscribe.textContent = \"Subscribe\";\n\n  const footerBoxFour = document.createElement(\"div\");\n  footerBoxFour.classList.add(\"footerBoxFour\");\n  const email = document.createElement(\"input\");\n  email.classList.add(\"email\");\n  email.setAttribute(\"type\", \"text\");\n  email.setAttribute(\"placeholder\", \"E-Mail\");\n  const subscribeBtn = document.createElement(\"button\");\n  subscribeBtn.classList.add(\"subscribeBtn\");\n  subscribeBtn.textContent = \"Subscribe\";\n\n  content.appendChild(footer);\n  footer.appendChild(footerItems);\n\n  footerItems.appendChild(footerBoxOne);\n  footerBoxOne.appendChild(footerSiteName);\n  footerBoxOne.appendChild(siteDetails);\n\n  footerItems.appendChild(footerBoxTwo);\n  footerBoxTwo.appendChild(footerContact);\n  footerBoxTwo.appendChild(contactDetails);\n\n  footerItems.appendChild(footerBoxThree);\n  footerBoxThree.appendChild(footerSubscribe);\n  footerBoxThree.appendChild(footerBoxFour);\n  footerBoxFour.appendChild(email);\n  footerBoxFour.appendChild(subscribeBtn);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initHeader\": () => (/* binding */ initHeader)\n/* harmony export */ });\n/* harmony import */ var _css_components_header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/components/header.css */ \"./src/css/components/header.css\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/about */ \"./src/pages/about.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/contact */ \"./src/pages/contact.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./src/components/footer.js\");\n\n\n\n\n\n\n\nconst initHeader = () => {\n  const content = document.getElementById(\"content\");\n\n  const header = document.createElement(\"header\");\n  header.setAttribute(\"id\", \"header\");\n  header.classList.add(\"header\");\n\n  const siteName = document.createElement(\"div\");\n  siteName.classList.add(\"siteName\");\n  siteName.textContent = \"Site Name\";\n\n  const menuTabs = document.createElement(\"div\");\n  menuTabs.classList.add(\"menuTabs\");\n\n  const handleEvent = (tab) => {\n    while (content.lastChild.id !== \"bg\") {\n      content.removeChild(content.lastChild);\n    }\n\n    if (tab === \"home\") (0,_pages_home__WEBPACK_IMPORTED_MODULE_1__.initHome)();\n    if (tab === \"menu\") (0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__.initMenu)();\n    if (tab === \"about\") (0,_pages_about__WEBPACK_IMPORTED_MODULE_3__.initAbout)();\n    if (tab === \"contact\") (0,_pages_contact__WEBPACK_IMPORTED_MODULE_4__.initContact)();\n\n    (0,_footer__WEBPACK_IMPORTED_MODULE_5__.initFooter)();\n  };\n\n  const homeTab = document.createElement(\"button\");\n  homeTab.classList.add(\"homeTab\", \"tabs\");\n  homeTab.dataset.tab = \"home\";\n  homeTab.textContent = \"Home\";\n  homeTab.addEventListener(\"click\", () => handleEvent(\"home\"));\n  const menuTab = document.createElement(\"button\");\n  menuTab.classList.add(\"menuTab\", \"tabs\");\n  menuTab.dataset.tab = \"menu\";\n  menuTab.textContent = \"Menu\";\n  menuTab.addEventListener(\"click\", () => handleEvent(\"menu\"));\n  const aboutTab = document.createElement(\"button\");\n  aboutTab.classList.add(\"aboutTab\", \"tabs\");\n  aboutTab.dataset.tab = \"about\";\n  aboutTab.textContent = \"About\";\n  aboutTab.addEventListener(\"click\", () => handleEvent(\"about\"));\n  const contactTab = document.createElement(\"button\");\n  contactTab.classList.add(\"contactTab\", \"tabs\");\n  contactTab.dataset.tab = \"contact\";\n  contactTab.textContent = \"Contact\";\n  contactTab.addEventListener(\"click\", () => handleEvent(\"contact\"));\n\n  content.appendChild(header);\n\n  header.appendChild(siteName);\n\n  header.appendChild(menuTabs);\n  menuTabs.appendChild(homeTab);\n  menuTabs.appendChild(menuTab);\n  menuTabs.appendChild(aboutTab);\n  menuTabs.appendChild(contactTab);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/components/header.js?");

/***/ }),

/***/ "./src/imageUrls.js":
/*!**************************!*\
  !*** ./src/imageUrls.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerImages\": () => (/* binding */ headerImages),\n/* harmony export */   \"homeCustomersImages\": () => (/* binding */ homeCustomersImages),\n/* harmony export */   \"homeMenuItemImgs\": () => (/* binding */ homeMenuItemImgs),\n/* harmony export */   \"homeServiceItemImages\": () => (/* binding */ homeServiceItemImages),\n/* harmony export */   \"mapImg\": () => (/* binding */ mapImg),\n/* harmony export */   \"starsIcon\": () => (/* binding */ starsIcon)\n/* harmony export */ });\n/* harmony import */ var _img_misc_stars_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/misc/stars.png */ \"./src/img/misc/stars.png\");\n/* harmony import */ var _img_pexels_daria_shevtsova_1260968_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/pexels-daria-shevtsova-1260968.jpg */ \"./src/img/pexels-daria-shevtsova-1260968.jpg\");\n/* harmony import */ var _img_pexels_christina_voinova_7368032_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/pexels-christina-voinova-7368032.jpg */ \"./src/img/pexels-christina-voinova-7368032.jpg\");\n/* harmony import */ var _img_pexels_brett_jordan_825661_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/pexels-brett-jordan-825661.jpg */ \"./src/img/pexels-brett-jordan-825661.jpg\");\n/* harmony import */ var _img_homeMenuItem1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/homeMenuItem1.jpg */ \"./src/img/homeMenuItem1.jpg\");\n/* harmony import */ var _img_homeMenuItem2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/homeMenuItem2.jpg */ \"./src/img/homeMenuItem2.jpg\");\n/* harmony import */ var _img_homeMenuItem3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/homeMenuItem3.jpg */ \"./src/img/homeMenuItem3.jpg\");\n/* harmony import */ var _img_homeMenuItem4_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/homeMenuItem4.jpg */ \"./src/img/homeMenuItem4.jpg\");\n/* harmony import */ var _img_homeMenuItem5_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/homeMenuItem5.jpg */ \"./src/img/homeMenuItem5.jpg\");\n/* harmony import */ var _img_homeMenuItem6_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/homeMenuItem6.jpg */ \"./src/img/homeMenuItem6.jpg\");\n/* harmony import */ var _img_homeMenuItem7_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/homeMenuItem7.jpg */ \"./src/img/homeMenuItem7.jpg\");\n/* harmony import */ var _img_homeMenuItem8_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/homeMenuItem8.jpg */ \"./src/img/homeMenuItem8.jpg\");\n/* harmony import */ var _img_services_007_consult_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/services/007-consult.png */ \"./src/img/services/007-consult.png\");\n/* harmony import */ var _img_services_008_chef_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/services/008-chef.png */ \"./src/img/services/008-chef.png\");\n/* harmony import */ var _img_services_011_delivery_truck_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/services/011-delivery-truck.png */ \"./src/img/services/011-delivery-truck.png\");\n/* harmony import */ var _img_services_018_time_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/services/018-time.png */ \"./src/img/services/018-time.png\");\n/* harmony import */ var _img_services_027_order_food_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img/services/027-order-food.png */ \"./src/img/services/027-order-food.png\");\n/* harmony import */ var _img_services_032_dinner_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./img/services/032-dinner.png */ \"./src/img/services/032-dinner.png\");\n/* harmony import */ var _img_customers_rsz_1img_7716_square_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./img/customers/rsz_1img_7716_square.jpg */ \"./src/img/customers/rsz_1img_7716_square.jpg\");\n/* harmony import */ var _img_customers_pexels_anastasia_shuraeva_5704720_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./img/customers/pexels-anastasia-shuraeva-5704720.jpg */ \"./src/img/customers/pexels-anastasia-shuraeva-5704720.jpg\");\n/* harmony import */ var _img_customers_pexels_anna_nekrashevich_6801642_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./img/customers/pexels-anna-nekrashevich-6801642.jpg */ \"./src/img/customers/pexels-anna-nekrashevich-6801642.jpg\");\n/* harmony import */ var _img_map_map_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./img/map/map.png */ \"./src/img/map/map.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst headerImages = [_img_pexels_daria_shevtsova_1260968_jpg__WEBPACK_IMPORTED_MODULE_1__, _img_pexels_christina_voinova_7368032_jpg__WEBPACK_IMPORTED_MODULE_2__, _img_pexels_brett_jordan_825661_jpg__WEBPACK_IMPORTED_MODULE_3__];\nconst homeMenuItemImgs = [\n  _img_homeMenuItem1_jpg__WEBPACK_IMPORTED_MODULE_4__,\n  _img_homeMenuItem2_jpg__WEBPACK_IMPORTED_MODULE_5__,\n  _img_homeMenuItem3_jpg__WEBPACK_IMPORTED_MODULE_6__,\n  _img_homeMenuItem4_jpg__WEBPACK_IMPORTED_MODULE_7__,\n  _img_homeMenuItem5_jpg__WEBPACK_IMPORTED_MODULE_8__,\n  _img_homeMenuItem6_jpg__WEBPACK_IMPORTED_MODULE_9__,\n  _img_homeMenuItem7_jpg__WEBPACK_IMPORTED_MODULE_10__,\n  _img_homeMenuItem8_jpg__WEBPACK_IMPORTED_MODULE_11__,\n];\nconst homeServiceItemImages = [\n  _img_services_007_consult_png__WEBPACK_IMPORTED_MODULE_12__,\n  _img_services_008_chef_png__WEBPACK_IMPORTED_MODULE_13__,\n  _img_services_011_delivery_truck_png__WEBPACK_IMPORTED_MODULE_14__,\n  _img_services_018_time_png__WEBPACK_IMPORTED_MODULE_15__,\n  _img_services_027_order_food_png__WEBPACK_IMPORTED_MODULE_16__,\n  _img_services_032_dinner_png__WEBPACK_IMPORTED_MODULE_17__,\n];\n\nconst homeCustomersImages = [\n  _img_customers_rsz_1img_7716_square_jpg__WEBPACK_IMPORTED_MODULE_18__,\n  _img_customers_pexels_anastasia_shuraeva_5704720_jpg__WEBPACK_IMPORTED_MODULE_19__,\n  _img_customers_pexels_anna_nekrashevich_6801642_jpg__WEBPACK_IMPORTED_MODULE_20__,\n];\n\nconst starsIcon = _img_misc_stars_png__WEBPACK_IMPORTED_MODULE_0__;\n\nconst mapImg = _img_map_map_png__WEBPACK_IMPORTED_MODULE_21__;\n\n\n//# sourceURL=webpack://restaurant_page/./src/imageUrls.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header.js */ \"./src/components/header.js\");\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer.js */ \"./src/components/footer.js\");\n\n\n\n(0,_components_header_js__WEBPACK_IMPORTED_MODULE_1__.initHeader)();\n\nconst bg = document.createElement(\"div\");\nbg.classList.add(\"bg\");\nbg.setAttribute(\"id\", \"bg\");\nconst content = document.getElementById(\"content\");\ncontent.appendChild(bg);\n\n\n(0,_pages_home_js__WEBPACK_IMPORTED_MODULE_2__.initHome)();\n\n\n(0,_components_footer_js__WEBPACK_IMPORTED_MODULE_3__.initFooter)();\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initAbout\": () => (/* binding */ initAbout)\n/* harmony export */ });\n/* harmony import */ var _css_pages_about_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/pages/about.css */ \"./src/css/pages/about.css\");\n/* harmony import */ var _imageUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imageUrls */ \"./src/imageUrls.js\");\n\n\n\nconst initAbout = () => {\n  const content = document.getElementById(\"content\");\n\n  const bg = document.querySelector(\".bg\");\n  bg.style.marginTop = \"-50vh\";\n\n  const aboutPageHeading = document.createElement(\"div\");\n  aboutPageHeading.classList.add(\"aboutPageHeading\");\n  aboutPageHeading.textContent = \"We understand pizzas\";\n\n  const aboutSectionWrapper = document.createElement(\"div\");\n  aboutSectionWrapper.classList.add(\"aboutSectionWrapper\");\n\n  const aboutSectionOne = document.createElement(\"div\");\n  aboutSectionOne.classList.add(\"aboutSectionOne\");\n\n  const aboutFoodImages = document.createElement(\"div\");\n  aboutFoodImages.classList.add(\"aboutFoodImages\");\n  const imgOne = document.createElement(\"img\");\n  imgOne.classList.add(\"imgOne\");\n  imgOne.src = _imageUrls__WEBPACK_IMPORTED_MODULE_1__.headerImages[0];\n  const imgTwo = document.createElement(\"img\");\n  imgTwo.classList.add(\"imgTwo\");\n  imgTwo.src = _imageUrls__WEBPACK_IMPORTED_MODULE_1__.headerImages[1];\n  const imgThree = document.createElement(\"img\");\n  imgThree.classList.add(\"imgThree\");\n  imgThree.src = _imageUrls__WEBPACK_IMPORTED_MODULE_1__.headerImages[2];\n\n  const aboutUs = document.createElement(\"div\");\n  aboutUs.classList.add(\"aboutUs\");\n  const aboutUsTitle = document.createElement(\"div\");\n  aboutUsTitle.classList.add(\"aboutUsTitle\");\n  aboutUsTitle.textContent = \"About Us\";\n  const aboutUsHr = document.createElement(\"div\");\n  aboutUsHr.classList.add(\"aboutUsHr\");\n  const aboutUsParagraph = document.createElement(\"div\");\n  aboutUsParagraph.classList.add(\"aboutUsParagraph\");\n  aboutUsParagraph.innerText = `Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history. These days, many cooks yearn Fish is one of the most wholesome foods that man can eat. In fact,\n  \\nFish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history. These days, many cooks yearn Fish is`;\n  const aboutUsBtn = document.createElement(\"button\");\n  aboutUsBtn.classList.add(\"aboutUsBtn\");\n  aboutUsBtn.textContent = \"Learn More\";\n\n  const aboutSectionTwo = document.createElement(\"div\");\n  aboutSectionTwo.classList.add(\"aboutSectionTwo\");\n  const whyUsHeader = document.createElement(\"div\");\n  whyUsHeader.classList.add(\"whyUsHeader\");\n  const whyUsTitle = document.createElement(\"div\");\n  whyUsTitle.classList.add(\"whyUsTitle\");\n  whyUsTitle.textContent = \"Why Choose Us?\";\n  const whyUsParagraph = document.createElement(\"div\");\n  whyUsParagraph.classList.add(\"whyUsParagraph\");\n  whyUsParagraph.textContent =\n    \"Fish is one of the most wholesome foods that man can eat. In fact, people have been \\neating fish throughout human\";\n  const whyUsHr = document.createElement(\"hr\");\n  whyUsHr.classList.add(\"whyUsHr\");\n\n  const serviceItems = document.createElement(\"div\");\n  serviceItems.classList.add(\"serviceItems\");\n\n  for (let index = 0; index < 6; index++) {\n    const serviceCell = document.createElement(\"div\");\n    serviceCell.classList.add(\"serviceCell\");\n\n    const serviceImg = document.createElement(\"img\");\n    serviceImg.classList.add(\"serviceImg\");\n    serviceImg.src = _imageUrls__WEBPACK_IMPORTED_MODULE_1__.homeServiceItemImages[index];\n\n    const serviceTitle = document.createElement(\"div\");\n    serviceTitle.classList.add(\"serviceTitle\");\n    serviceTitle.textContent = `Service ${index + 1}`;\n\n    const serviceParagraph = document.createElement(\"div\");\n    serviceParagraph.classList.add(\"serviceParagraph\");\n    serviceParagraph.textContent =\n      \"We provide best and fresh quality foods. We also gives you required signature dishes and more nice and cool services\";\n\n    serviceItems.appendChild(serviceCell);\n    serviceCell.appendChild(serviceImg);\n    serviceCell.appendChild(serviceTitle);\n    serviceCell.appendChild(serviceParagraph);\n  }\n\n  const bgTwo = document.createElement(\"div\");\n  bgTwo.classList.add(\"bgTwo\");\n\n  const customersHeader = document.createElement(\"div\");\n  customersHeader.classList.add(\"customersHeader\");\n  const customersTitle = document.createElement(\"div\");\n  customersTitle.classList.add(\"customersTitle\");\n  customersTitle.textContent = \"Listen to our customers\";\n  const customersParagraph = document.createElement(\"div\");\n  customersParagraph.classList.add(\"customersParagraph\");\n  customersParagraph.textContent =\n    \"Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human\";\n  const customerHr = document.createElement(\"div\");\n  customerHr.classList.add(\"customerHr\");\n\n  const reviewContainer = document.createElement(\"div\");\n  reviewContainer.classList.add(\"reviewContainer\");\n\n  const names = [\"Kerem Zopcuk\", \"Kateryna R.\", \"Max Mustermann\"];\n  for (let index = 0; index < 3; index++) {\n    const reviewCell = document.createElement(\"div\");\n    reviewCell.classList.add(\"reviewCell\");\n\n    const reviewerImg = document.createElement(\"img\");\n    reviewerImg.classList.add(\"reviewerImg\");\n    reviewerImg.src = _imageUrls__WEBPACK_IMPORTED_MODULE_1__.homeCustomersImages[index];\n\n    const ratingImg = document.createElement(\"img\");\n    ratingImg.classList.add(\"ratingImg\");\n    ratingImg.src = _imageUrls__WEBPACK_IMPORTED_MODULE_1__.starsIcon;\n\n    const reviewParagraph = document.createElement(\"div\");\n    reviewParagraph.classList.add(\"reviewParagraph\");\n    reviewParagraph.textContent =\n      \"We provide best and fresh quality foods. We also gives you required signature dishes and more nice and cool services\";\n\n    const reviewerName = document.createElement(\"h2\");\n    reviewerName.classList.add(\"reviewerName\");\n    reviewerName.textContent = names[index];\n\n    reviewContainer.appendChild(reviewCell);\n    reviewCell.appendChild(reviewerImg);\n    reviewCell.appendChild(ratingImg);\n    reviewCell.appendChild(reviewParagraph);\n    reviewCell.appendChild(reviewerName);\n  }\n\n  const statsContainer = document.createElement(\"div\");\n  statsContainer.classList.add(\"statsContainer\");\n\n  const data = [\"56,789\", \"10,023\", \"4,544\", \"12,520\"];\n  const pros = [\n    \"Happy Customer\",\n    \"Pizzas Sold\",\n    \"Working Hours\",\n    \"Pizzas Delivered\",\n  ];\n  for (let index = 0; index < 4; index++) {\n    const statsCell = document.createElement(\"div\");\n    statsCell.classList.add(\"statsCell\");\n\n    const stats = document.createElement(\"div\");\n    stats.classList.add(\"stats\");\n    stats.textContent = data[index];\n\n    const prosText = document.createElement(\"div\");\n    prosText.classList.add(\"prosText\");\n    prosText.textContent = pros[index];\n\n    const statsHr = document.createElement(\"hr\");\n    statsHr.classList.add(\"statsHr\");\n\n    statsContainer.appendChild(statsCell);\n    statsCell.appendChild(stats);\n    statsCell.appendChild(prosText);\n    prosText.appendChild(statsHr);\n  }\n\n  content.appendChild(bg);\n  content.appendChild(aboutPageHeading);\n  content.appendChild(aboutSectionWrapper);\n  aboutSectionWrapper.appendChild(aboutSectionOne);\n\n  aboutSectionOne.appendChild(aboutFoodImages);\n  aboutFoodImages.appendChild(imgOne);\n  aboutFoodImages.appendChild(imgTwo);\n  aboutFoodImages.appendChild(imgThree);\n\n  aboutSectionOne.appendChild(aboutUs);\n  aboutUs.appendChild(aboutUsTitle);\n  aboutUs.appendChild(aboutUsHr);\n  aboutUs.appendChild(aboutUsParagraph);\n  aboutUs.appendChild(aboutUsBtn);\n\n  aboutSectionWrapper.appendChild(aboutSectionTwo);\n  aboutSectionTwo.appendChild(whyUsHeader);\n  whyUsHeader.appendChild(whyUsTitle);\n  whyUsHeader.appendChild(whyUsParagraph);\n  whyUsParagraph.appendChild(whyUsHr);\n\n  aboutSectionTwo.appendChild(serviceItems);\n\n  content.appendChild(bgTwo);\n  bgTwo.appendChild(customersHeader);\n  customersHeader.appendChild(customersTitle);\n  customersHeader.appendChild(customersParagraph);\n  customersHeader.appendChild(customerHr);\n\n  bgTwo.appendChild(reviewContainer);\n\n  content.appendChild(statsContainer);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initContact\": () => (/* binding */ initContact)\n/* harmony export */ });\n/* harmony import */ var _css_pages_contact_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/pages/contact.css */ \"./src/css/pages/contact.css\");\n/* harmony import */ var _imageUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imageUrls */ \"./src/imageUrls.js\");\n\n\n\nconst initContact = () => {\n  const content = document.getElementById(\"content\");\n\n  const bg = document.querySelector(\".bg\");\n  bg.style.marginTop = \"-50vh\"\n\n  const contactPageHeading = document.createElement(\"div\");\n  contactPageHeading.classList.add(\"contactPageHeading\");\n  contactPageHeading.textContent = \"Let's get acquainted\";\n\n  const contactSection = document.createElement(\"div\");\n  contactSection.classList.add(\"contactSection\");\n\n  const contactItems = document.createElement(\"div\");\n  contactItems.classList.add(\"contactItems\");\n\n  const address = document.createElement(\"div\");\n  address.classList.add(\"address\");\n\n  const addressTitle = document.createElement(\"div\");\n  addressTitle.classList.add(\"addressTitle\");\n  addressTitle.textContent = \"Address\";\n\n  const addressHr = document.createElement(\"div\");\n  addressHr.classList.add(\"addressHr\");\n\n  const addressParagraph = document.createElement(\"div\");\n  addressParagraph.classList.add(\"addressParagraph\");\n  addressParagraph.textContent =\n    \"R. Itarumirim, number 48 - Paulo VI, Belo Horizonte - MG, 31998-060, Brazil\";\n\n  const mapImgContainer = document.createElement(\"div\");\n  mapImgContainer.classList.add(\"mapImgContainer\");\n\n  const mapImage = document.createElement(\"img\");\n  mapImage.classList.add(\"mapImage\");\n  mapImage.src = _imageUrls__WEBPACK_IMPORTED_MODULE_1__.mapImg;\n\n  const contactFormContainer = document.createElement(\"div\");\n  contactFormContainer.classList.add(\"contactFormContainer\");\n\n  const contactFormTitle = document.createElement(\"div\");\n  contactFormTitle.classList.add(\"contactFormTitle\");\n  contactFormTitle.textContent = \"Contact Form\";\n\n  const contactFormHr = document.createElement(\"div\");\n  contactFormHr.classList.add(\"contactFormHr\");\n\n  const contactForm = document.createElement(\"form\");\n  contactForm.classList.add(\"contactForm\");\n\n  const labels = [\"Name\", \"Mail\", \"Message\"];\n  for (let index = 0; index < labels.length; index++) {\n    const label = document.createElement(\"label\");\n    label.htmlFor = labels[index];\n    label.textContent = labels[index];\n    const lineBreak = document.createElement(\"br\");\n\n    let input;\n    if (labels[index] === \"Message\") {\n      input = document.createElement(\"textarea\");\n    } else {\n      input = document.createElement(\"input\");\n      input.type = \"text\";\n    }\n\n    input.id = labels[index];\n    input.name = labels[index];\n\n    contactForm.appendChild(label);\n    label.appendChild(lineBreak);\n    label.appendChild(input);\n  }\n\n  const sendMessageBtn = document.createElement(\"button\");\n  sendMessageBtn.classList.add(\"sendMessageBtn\");\n  sendMessageBtn.textContent = \"Send Message\";\n\n  content.appendChild(bg);\n  content.appendChild(contactPageHeading);\n\n  content.appendChild(contactSection);\n  contactSection.appendChild(contactItems);\n\n  contactItems.appendChild(address);\n  address.appendChild(addressTitle);\n  address.appendChild(addressHr);\n  address.appendChild(addressParagraph);\n  address.appendChild(mapImgContainer);\n  mapImgContainer.appendChild(mapImage);\n\n  contactItems.appendChild(contactFormContainer);\n  contactFormContainer.appendChild(contactFormTitle);\n  contactFormContainer.appendChild(contactFormHr);\n  contactFormContainer.appendChild(contactForm);\n  contactForm.appendChild(sendMessageBtn);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initHome\": () => (/* binding */ initHome)\n/* harmony export */ });\n/* harmony import */ var _css_pages_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/pages/home.css */ \"./src/css/pages/home.css\");\n\n\nconst initHome = () => {\n  const content = document.getElementById(\"content\");\n\n  const bg = document.querySelector(\".bg\");\n  bg.style.marginTop = \"0vh\";\n\n  const home = document.createElement(\"div\");\n  home.classList.add(\"home\");\n\n  const restaurantName = document.createElement(\"div\");\n  restaurantName.classList.add(\"restaurantName\");\n\n  const pizzeria = document.createElement(\"h1\");\n  pizzeria.textContent = \"Pizzeria!\";\n\n  const description = document.createElement(\"div\");\n  description.classList.add(\"description\");\n  const descriptionPara = document.createElement(\"p\");\n  descriptionPara.textContent = `There are many variations of passages of Lorem Ipsum available,\n  but the majority have suffered alteration in some form, by\n  injected humour. There are many variations of passages of Lorem\n  Ipsum available, but the majority have suffered alteration in some\n  form, by injected humour.`;\n\n  const bookingBtn = document.createElement(\"button\");\n  bookingBtn.classList.add(\"bookingBtn\");\n  bookingBtn.textContent = \"Book Now\";\n\n  content.appendChild(home);\n\n  home.appendChild(restaurantName);\n  restaurantName.appendChild(pizzeria);\n\n  home.appendChild(description);\n  description.appendChild(descriptionPara);\n\n  home.appendChild(bookingBtn);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initMenu\": () => (/* binding */ initMenu)\n/* harmony export */ });\n/* harmony import */ var _css_pages_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/pages/menu.css */ \"./src/css/pages/menu.css\");\n/* harmony import */ var _imageUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imageUrls */ \"./src/imageUrls.js\");\n\n\n\nconst initMenu = () => {\n  const content = document.getElementById(\"content\");\n\n  const bg = document.querySelector(\".bg\");  \n  bg.style.marginTop = \"-50vh\"\n\n  const menuPageHeading = document.createElement(\"div\");\n  menuPageHeading.classList.add(\"menuPageHeading\");\n  menuPageHeading.textContent = \"Choose according to your taste\";\n\n  const menu = document.createElement(\"div\");\n  menu.classList.add(\"menu\");\n\n  const menuHeader = document.createElement(\"div\");\n  menuHeader.classList.add(\"menuHeader\");\n\n  const menuTitle = document.createElement(\"div\");\n  menuTitle.classList.add(\"menuTitle\");\n  menuTitle.textContent = \"Our Menu\";\n\n  const menuParagraph = document.createElement(\"div\");\n  menuParagraph.classList.add(\"menuParagraph\");\n  menuParagraph.innerText = `Fish is one of the most wholesome foods that man can eat. In fact, people have been \\n eating fish throughout human`;\n\n  const hr = document.createElement(\"hr\");\n\n  const menuItemsWrapper = document.createElement(\"div\");\n  menuItemsWrapper.classList.add(\"menuItemsWrapper\");\n\n  const menuItems = document.createElement(\"div\");\n  menuItems.classList.add(\"menuItems\");\n\n  for (let index = 0; index < 8; index++) {\n    const menuCell = document.createElement(\"div\");\n    menuCell.classList.add(\"menuCell\");\n\n    const pizzaImg = document.createElement(\"img\");\n    pizzaImg.src = _imageUrls__WEBPACK_IMPORTED_MODULE_1__.homeMenuItemImgs[index];\n    pizzaImg.classList.add(\"pizzaImg\");\n\n    const namePrice = document.createElement(\"div\");\n    namePrice.classList.add(\"namePrice\");\n\n    const pizzaName = document.createElement(\"div\");\n    pizzaName.classList.add(\"pizzaName\");\n    pizzaName.textContent = \"Pizza margherita\";\n\n    const pizzaPrice = document.createElement(\"div\");\n    pizzaPrice.classList.add(\"pizzaPrice\");\n    pizzaPrice.textContent = \"€10\";\n\n    const pizzaDescription = document.createElement(\"div\");\n    pizzaDescription.classList.add(\"pizzaDescription\");\n    pizzaDescription.textContent =\n      \"Aeneas needs the pain of the mass. With your friends\";\n\n    const orderNowBtn = document.createElement(\"button\");\n    orderNowBtn.classList.add(\"orderNowBtn\");\n    orderNowBtn.textContent = \"Order Now\";\n\n    menuItems.appendChild(menuCell);\n    menuCell.appendChild(pizzaImg);\n    menuCell.appendChild(namePrice);\n    namePrice.appendChild(pizzaName);\n    namePrice.appendChild(pizzaPrice);\n    menuCell.appendChild(pizzaDescription);\n    menuCell.appendChild(orderNowBtn);\n  }\n\n  content.appendChild(bg);\n  content.appendChild(menuPageHeading);\n\n  content.appendChild(menu);\n  menu.appendChild(menuHeader);\n  menuHeader.appendChild(menuTitle);\n  menuHeader.appendChild(menuParagraph);\n  menuHeader.appendChild(hr);\n  menu.appendChild(menuItemsWrapper);\n  menuItemsWrapper.appendChild(menuItems);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/pages/menu.js?");

/***/ }),

/***/ "./src/img/customers/pexels-anastasia-shuraeva-5704720.jpg":
/*!*****************************************************************!*\
  !*** ./src/img/customers/pexels-anastasia-shuraeva-5704720.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dc214bfe58522974e8c6.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/customers/pexels-anastasia-shuraeva-5704720.jpg?");

/***/ }),

/***/ "./src/img/customers/pexels-anna-nekrashevich-6801642.jpg":
/*!****************************************************************!*\
  !*** ./src/img/customers/pexels-anna-nekrashevich-6801642.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d6bf979fd0c997f8813a.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/customers/pexels-anna-nekrashevich-6801642.jpg?");

/***/ }),

/***/ "./src/img/customers/rsz_1img_7716_square.jpg":
/*!****************************************************!*\
  !*** ./src/img/customers/rsz_1img_7716_square.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2b6b4d8a7e1a204ecf8b.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/customers/rsz_1img_7716_square.jpg?");

/***/ }),

/***/ "./src/img/homeMenuItem1.jpg":
/*!***********************************!*\
  !*** ./src/img/homeMenuItem1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d2097bd4bbcc98afb9ef.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/homeMenuItem1.jpg?");

/***/ }),

/***/ "./src/img/homeMenuItem2.jpg":
/*!***********************************!*\
  !*** ./src/img/homeMenuItem2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bb21f8417ec885599416.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/homeMenuItem2.jpg?");

/***/ }),

/***/ "./src/img/homeMenuItem3.jpg":
/*!***********************************!*\
  !*** ./src/img/homeMenuItem3.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dcd3aaa1596e0bf44f78.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/homeMenuItem3.jpg?");

/***/ }),

/***/ "./src/img/homeMenuItem4.jpg":
/*!***********************************!*\
  !*** ./src/img/homeMenuItem4.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ba21af007a494821a7bf.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/homeMenuItem4.jpg?");

/***/ }),

/***/ "./src/img/homeMenuItem5.jpg":
/*!***********************************!*\
  !*** ./src/img/homeMenuItem5.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b30044b9ffc60aabf139.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/homeMenuItem5.jpg?");

/***/ }),

/***/ "./src/img/homeMenuItem6.jpg":
/*!***********************************!*\
  !*** ./src/img/homeMenuItem6.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7981ad1e1fda447df11e.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/homeMenuItem6.jpg?");

/***/ }),

/***/ "./src/img/homeMenuItem7.jpg":
/*!***********************************!*\
  !*** ./src/img/homeMenuItem7.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e2a83b52d408b15b99c.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/homeMenuItem7.jpg?");

/***/ }),

/***/ "./src/img/homeMenuItem8.jpg":
/*!***********************************!*\
  !*** ./src/img/homeMenuItem8.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bba0d6d4fa425e11d5eb.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/homeMenuItem8.jpg?");

/***/ }),

/***/ "./src/img/map/map.png":
/*!*****************************!*\
  !*** ./src/img/map/map.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d6d19461671c8f465aed.png\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/map/map.png?");

/***/ }),

/***/ "./src/img/misc/stars.png":
/*!********************************!*\
  !*** ./src/img/misc/stars.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bae44d564bc8ab9e12fa.png\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/misc/stars.png?");

/***/ }),

/***/ "./src/img/pexels-brett-jordan-825661.jpg":
/*!************************************************!*\
  !*** ./src/img/pexels-brett-jordan-825661.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3dff4738a0ec73fa33b1.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/pexels-brett-jordan-825661.jpg?");

/***/ }),

/***/ "./src/img/pexels-christina-voinova-7368032.jpg":
/*!******************************************************!*\
  !*** ./src/img/pexels-christina-voinova-7368032.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4d7a91951b559aeaa110.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/pexels-christina-voinova-7368032.jpg?");

/***/ }),

/***/ "./src/img/pexels-daria-shevtsova-1260968.jpg":
/*!****************************************************!*\
  !*** ./src/img/pexels-daria-shevtsova-1260968.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e93dcc5971859da321a.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/pexels-daria-shevtsova-1260968.jpg?");

/***/ }),

/***/ "./src/img/services/007-consult.png":
/*!******************************************!*\
  !*** ./src/img/services/007-consult.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f7a2605898cafa3f0e40.png\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/services/007-consult.png?");

/***/ }),

/***/ "./src/img/services/008-chef.png":
/*!***************************************!*\
  !*** ./src/img/services/008-chef.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1be0e7f7d60b41a15332.png\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/services/008-chef.png?");

/***/ }),

/***/ "./src/img/services/011-delivery-truck.png":
/*!*************************************************!*\
  !*** ./src/img/services/011-delivery-truck.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ebbd6dc77f22b2152b6c.png\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/services/011-delivery-truck.png?");

/***/ }),

/***/ "./src/img/services/018-time.png":
/*!***************************************!*\
  !*** ./src/img/services/018-time.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3217b824cc789518868f.png\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/services/018-time.png?");

/***/ }),

/***/ "./src/img/services/027-order-food.png":
/*!*********************************************!*\
  !*** ./src/img/services/027-order-food.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6851ed847ac4a96138b4.png\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/services/027-order-food.png?");

/***/ }),

/***/ "./src/img/services/032-dinner.png":
/*!*****************************************!*\
  !*** ./src/img/services/032-dinner.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"72f6be8d70d1cf5ad2f2.png\";\n\n//# sourceURL=webpack://restaurant_page/./src/img/services/032-dinner.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;