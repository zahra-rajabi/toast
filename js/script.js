const btnNavEl = document.querySelector(".nav-mobile");
const headerEl = document.querySelector(".nav");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
