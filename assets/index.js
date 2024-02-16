const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 450) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
