const toggleButton = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-navigation");

toggleButton.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    toggleButton.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    toggleButton.setAttribute("aria-expanded", false);
  }
});
