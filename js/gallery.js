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
console.log("check");

galleryList.addEventListener("scroll", function () {
  let n = Math.random();
  console.log(n);
});
