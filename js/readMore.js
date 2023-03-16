/*(() => {
  const readMore = document.querySelector(".about__item__text");
  const openBtn = document.querySelector(".about__btn__more");
  const closeBtn = document.querySelector(".about__btn__less");

  const toggleMenu = () => {
    const isOpen = openBtn.getAttribute("aria-expanded") === "true" || false;
    openBtn.setAttribute("aria-expanded", !isOpen);
    readMore.classList.toggle("is-open");
  };

  openBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);
})();
*/

const allMores = document.querySelectorAll(".about__item__text");

allMores.forEach(function (readMore) {
  const openBtn = readMore.querySelector(".about__btn__more");
  const closeBtn = readMore.querySelector(".about__btn__less");

  const toggleMenu = () => {
    const isOpen = openBtn.getAttribute("aria-expanded") === "true" || false;
    openBtn.setAttribute("aria-expanded", !isOpen);
    readMore.classList.toggle("is-open");
  };

  openBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);
});
