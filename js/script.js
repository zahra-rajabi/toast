const btnNavEl = document.querySelector(".nav-mobile-icon");
const mobileEl = document.querySelector(".nav-mobile-wrapper");
btnNavEl.addEventListener("click", function () {
  mobileEl.classList.toggle("nav-mobile-wrapper--open");
});
