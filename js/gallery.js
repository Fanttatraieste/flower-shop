const gallery = [
  {
    id: 1,
    srcset:
      "./images/gallery/image188.jpg 88w, ./images/gallery/image1134.jpg 134w",
    src: "./images/gallery/image188.jpg",
    sizes: "(min-width: 2200px) 134px, (min-width: 1440px) 88px",
    alt: "image 1",
  },
  {
    id: 2,
    srcset:
      "./images/gallery/image288.jpg 88w, ./images/gallery/image2134.jpg 134w",
    src: "./images/gallery/image288.jpg",
    sizes: "(min-width: 2200px) 134px, (min-width: 1440px) 88px",
    alt: "image 2",
  },
  {
    id: 3,
    srcset:
      "./images/gallery/image388.jpg 88w, ./images/gallery/image3134.jpg 134w",
    src: "./images/gallery/image388.jpg",
    sizes: "(min-width: 2200px) 134px, (min-width: 1440px) 88px",
    alt: "image 3",
  },
  {
    id: 4,
    srcset:
      "./images/gallery/image488.jpg 88w, ./images/gallery/image4134.jpg 134w",
    src: "./images/gallery/image488.jpg",
    sizes: "(min-width: 2200px) 134px, (min-width: 1440px) 88px",
    alt: "image 4",
  },
  {
    id: 5,
    srcset:
      "./images/gallery/image588.jpg 88w, ./images/gallery/image5134.jpg 134w",
    src: "./images/gallery/image588.jpg",
    sizes: "(min-width: 2200px) 134px, (min-width: 1440px) 88px",
    alt: "image 5",
  },
  {
    id: 6,
    srcset:
      "./images/gallery/image688.jpg 88w, ./images/gallery/image6134.jpg 134w",
    src: "./images/gallery/image688.jpg",
    sizes: "(min-width: 2200px) 134px, (min-width: 1440px) 88px",
    alt: "image 6",
  },
  {
    id: 7,
    srcset:
      "./images/gallery/image788.jpg 88w, ./images/gallery/image7134.jpg 134w",
    src: "./images/gallery/image788.jpg",
    sizes: "(min-width: 2200px) 134px, (min-width: 1440px) 88px",
    alt: "image 7",
  },
  {
    id: 8,
    srcset:
      "./images/gallery/image888.jpg 88w, ./images/gallery/image8134.jpg 134w",
    src: "./images/gallery/image888.jpg",
    sizes: "(min-width: 2200px) 134px, (min-width: 1440px) 88px",
    alt: "image 8",
  },
];

const galleryList = document.querySelector(".gallery__list");

//load items
window.addEventListener("DOMContentLoaded", function () {
  displayGallery(gallery);
});

//variabila aceasta va fi constant lista de imagini, care isi va schimba ordinea elementelor la fiecare scroll
let galleryDynamic = gallery; //initializare

//this function will change the order of the elements
function changeOrder(list = [], order) {
  //list - list of elements
  //order - type of order (1 for down, -1 for up)
  let newList = [];
  let n = list.length;
  if (order === 1) {
    for (let i = 0; i < list.length - 1; i++) newList.push(list[i + 1]);
    newList.push(list[0]);
    return newList;
  } else if (order === -1) {
    newList.push(list[n - 1]);
    for (let i = 0; i < n - 1; i++) newList.push(list[i]);
    return newList;
  }
}

galleryList.addEventListener("scroll", function () {
  let scroll = galleryList.scrollTop;

  if (scroll == 4) {
    console.log(scroll);

    galleryDynamic = changeOrder(galleryDynamic, 1);
    displayGallery(galleryDynamic);
    //galleryList.scrollTop = 0;
  } else if (scroll == 0) {
    console.log(scroll);

    galleryDynamic = changeOrder(galleryDynamic, -1);
    displayGallery(galleryDynamic);
    //galleryList.scrollTop = 4;
  }
});

//display iimages based on the order
function displayGallery(items = []) {
  let displayGalleryList = items.map(function (item) {
    const { srcset, src, sizes, alt } = item;
    return ` <li><img 
                class="gallery__image" 
                srcset= "${srcset}"
                src="${src}"
                sizes="${sizes}"
                alt="${alt}"
                ></li>
              `;
  });
  displayGalleryList = displayGalleryList.join("");
  galleryList.innerHTML = displayGalleryList;
}
