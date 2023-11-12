document.getElementById("current-theme").src =
  "/dictionary-app/src/assets/icon-moon.svg";

var currentTheme = document.getElementsByTagName("body");
theme.classList.toggle("darkhead");
currentTheme.setAttribute("onClick");

var theme = document.body;

// function toDarkTheme() {

//   document.getElementById("current-theme").src = "images/sun.svg";
//   theme.classList.toggle("dark-mode");
//   //currentTheme.removeAttribute("onClick");
//   currentTheme.setAttribute("onClick", "toLightTheme()");
// }

// function toLightTheme() {

//   document.getElementById("current-theme").src = "images/moon.svg";
//   theme.classList.toggle("light-mode");
//   //currentTheme.removeAttribute("onClick");
//   currentTheme.setAttribute("onClick", "toDarkTheme()");
// }
