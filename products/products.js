const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close");
const cards = document.querySelectorAll(".card");

hamburger.onclick = () => {
  hamburger.classList.toggle("active");
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

animateOnScroll = () => {
  cards.forEach((element) => {
    const cardPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardPosition < windowHeight) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);
