let bgDarkLight = document.querySelector("body");
let inputBtn = document.querySelector(".input_class");
let logo = document.querySelector(".whiteEdit");
let logoSecond = document.querySelector(".darkEdit");
let headerElements = document.querySelectorAll("header ul li a");
let editText = document.querySelectorAll("main p");
let editH_1 = document.querySelector("main h1");

let addEvent = inputBtn.addEventListener("change", darkModeFunc);

bgDarkLight.style.transition = "0.5s";

function darkModeFunc(event) {
  if (event.target.checked) {
    bgDarkLight.style.backgroundColor = "#000";
    logo.style.display = "none";
    logoSecond.style.display = "block";
    headerElements.forEach((tegA) => (tegA.style.color = "white"));
    editText[0].style.color = "white";
    editText[1].style.color = "white";
    editH_1.style.color = "white";
  } else {
    logo.style.display = "block";
    logoSecond.style.display = "none";
    bgDarkLight.style.backgroundColor = "#fff";
    headerElements.forEach((tegA) => (tegA.style.color = "grey"));
    editText[0].style.color = "#111729";
    editText[1].style.color = "grey";
    editH_1.style.color = "#223344";
  }
}
