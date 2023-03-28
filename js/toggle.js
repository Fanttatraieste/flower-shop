
/******* About section **********/ 
const about = document.querySelector(".about");
const aboutMenu = about.querySelector(".section__header__inner");
const openAboutBtn = about.querySelector(".btn--round");

const toggleAbout = () =>{
    const isToggleAboutOpen = openAboutBtn.getAttribute("aria-expanded") === "true" || false;
    openAboutBtn.setAttribute("aria-expanded", !isToggleAboutOpen);
    aboutMenu.classList.toggle("section__header__light")
};

openAboutBtn.addEventListener("click", toggleAbout);

/******* flower section **********/ 
const flower = document.querySelector(".flower");
const flowerMenu = flower.querySelector(".section__header__inner");
const openFlowerBtn = flower.querySelector(".btn--round");

const toggleFlower = () => {
    const isToggleFlowerOpen = openFlowerBtn.getAttribute("aria-expended") === "true" || false;
    openFlowerBtn.setAttribute("aria-expended", !isToggleFlowerOpen);
    flowerMenu.classList.toggle("section__header__dark");
}

openFlowerBtn.addEventListener("click",toggleFlower);


/******* Contact section **********/ 
const contact = document.querySelector(".contact");
const contactMenu = contact.querySelector(".section__header__inner");
const openContactBtn = contact.querySelector(".btn--round");

const toggleContact = () => {
    const isToggleContactOpen = openContactBtn.getAttribute("aria-expanded") === "true" || false;
    openContactBtn.setAttribute("aria-expanded", !isToggleContactOpen);
    contactMenu.classList.toggle("section__header__light");
}

openContactBtn.addEventListener("click",toggleContact);


/******* Gallery section **********/ 
const gall = document.querySelector(".gallery");
const gallMenu = gall.querySelector(".section__header__inner");
const openGallBtn = gall.querySelector(".btn--round");

const toggleGall = () => {
    const isToggleGallOpen = openGallBtn.getAttribute("aria-expanded") === "true" || false;
    openGallBtn.setAttribute("aria-expanded", !isToggleGallOpen);
    gallMenu.classList.toggle("section__header__dark"); 
}

openGallBtn.addEventListener("click", toggleGall);