import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from "./gallery-items";


const galleryRef = document.querySelector('.gallery');

const galleryItemMarkup = createGalleryItems(galleryItems);

galleryRef.innerHTML = galleryItemMarkup;

function createGalleryItems(images) {
    return images
      .map(image =>
      `<li class = "gallery__item">
      <a class="gallery__link" href="${image.original}">
      <img class = "gallery__image" src = "${image.preview}" alt="${image.description}"> </img> </a>
      </li> `)
      .join("");
  }

  const lightBoxGallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250, 
    animationSpeed: 300, 
    enableKeyboard: true, 
  });
