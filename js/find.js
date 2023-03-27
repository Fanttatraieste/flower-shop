const socials = [
  {
    id: 1,
    category: "first",
    title: "Figma",
    svg: "./images/svgs/symbol-defs.svg#icon-figma",
    link: "https://www.figma.com/file/Els4GAiypc4C17jKU13D0I/FlowerShop?node-id=8%3A24&t=HInWoh5mWnzed5om-1",
  },
  {
    id: "2",
    category: "first",
    title: "Dribble",
    svg: "./images/svgs/symbol-defs.svg#icon-dribble",
    link: "https://dribbble.com/fantatraieste",
  },
  {
    id: 3,
    category: "first",
    title: "Instagram",
    svg: "./images/svgs/symbol-defs.svg#icon-instagram",
    link: "https://www.instagram.com/imiplacesamananc/",
  },
  {
    id: 4,
    category: "second",
    title: "LinkedIn",
    svg: "./images/svgs/symbol-defs.svg#icon-linkedin",
    link: "https://www.linkedin.com/in/uta-vlad/",
  },
  {
    id: 5,
    category: "second",
    title: "Gmail",
    svg: "./images/svgs/symbol-defs.svg#icon-gmail",
    link: "https://www.codecademy.com/learn?g_acctid=243-039-7011&g_adgroupid=70492864474&g_adid=624951457618&g_adtype=&g_campaign=account&g_campaignid=1726903838&g_ifcreative=&g_ifproduct=&g_keyword=codecademy&g_keywordid=aud-1122464209842%3Akwd-41065460761&g_locinterest=&g_locphysical=1011806&g_merchantid=&g_network=g&g_partition=&g_placement=&g_productchannel=&g_productid=&g_source=%7Bsourceid%7D&gclid=CjwKCAjw_YShBhAiEiwAMomsEHp2aqx1OjpxTJ65AXXxD5WjEJIBdQFwlFcNP2J7pbNpev-0IGtdsBoCjLQQAvD_BwE&utm_content=lp-exp-bofu-v1&utm_term=control",
  },
  {
    id: 6,
    category: "second",
    title: "GitHub",
    svg: "./images/svgs/symbol-defs.svg#icon-github",
    link: "https://github.com/Fanttatraieste",
  },
  {
    id: 7,
    category: "third",
    title: "Youtube",
    svg: "./images/svgs/symbol-defs.svg#icon-youtube",
    link: "https://www.youtube.com/@DorianPopaHatz",
  },
  {
    id: 8,
    category: "third",
    title: "Facebook",
    svg: "./images/svgs/symbol-defs.svg#icon-facebook",
    link: "https://www.facebook.com/silviu.gherman.186",
  },
  {
    id: 9,
    category: "third",
    title: "Twitter",
    svg: "./images/svgs/symbol-defs.svg#icon-twitter",
    link: "https://en.wikipedia.org/wiki/Fernando_Torres",
  },
];

const findList = document.querySelector(".find__list");

const filterBtns = document.querySelectorAll(".find__btn");

//load items
window.addEventListener("DOMContentLoaded", function () {
  const itemsCategory = socials.filter(function (socialsItem) {
    if (socialsItem.category === "first") return socialsItem;
  });
  displayItems(itemsCategory);
});

//filter items based on a category
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (eventObj) {
    const category = eventObj.currentTarget.dataset.category;
    const itemsCategory = socials.filter(function (socialsItem) {
      if (socialsItem.category === category) return socialsItem;
    });
    displayItems(itemsCategory);
  });
});

//display items based on a category
function displayItems(items) {
  let displayItems = items.map(function (item) {
    const { id, title, svg, link } = item;
    return ` <li class="find__item">
                <a class="find__link" href="${link}" target="_blank">
                  <svg class="find__icon" id="id${id}">
                    <use href="${svg}"></use>
                  </svg>
                   ${title}
                </a>
              </li>
              `;
  });
  displayItems = displayItems.join("");
  findList.innerHTML = displayItems;
}
