const footerInner = document.querySelector(".footer__content-inner");

window.addEventListener("scroll", () => {
  const rect = footerInner.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100 && rect.bottom > 0) {
    footerInner.classList.add("visible");
  } else {
    footerInner.classList.remove("visible");
  }
});
const footerLinks = document.querySelector(".footer__links-inner");

window.addEventListener("scroll", () => {
  const rect = footerLinks.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100 && rect.bottom > 0) {
    footerLinks.classList.add("visible");
  } else {
    footerLinks.classList.remove("visible");
  }
});
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

