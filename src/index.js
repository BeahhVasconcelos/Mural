import "./styles.css";

const hamburger = document.querySelector(".hamburger");
const hamburgerContainer = document.querySelector(".hamburgerMenuContainer");

const modal = document.querySelector(".modal");
const topTree = document.getElementById("app");

hamburgerContainer.addEventListener("click", toggleOpen);

function toggleOpen() {
  hamburger.classList.toggle("animate");
  hamburger.classList.toggle("open");

  if (modal.classList.contains("hide")) {
    modal.style.opacity = "1";
    document.documentElement.style.setProperty("--hamburguer-color", "#fff");

    topTree.style.overflow = "hidden";
  } else {
    modal.style.opacity = "0";
    document.documentElement.style.setProperty("--hamburguer-color", "#0052fe");
    topTree.style.overflow = "scroll";
  }

  modal.classList.toggle("hide");
}
