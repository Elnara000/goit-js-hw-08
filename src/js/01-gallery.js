// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const markup = galleryItems
.map(({preview, original, description}) => `<a class="gallery__item" onclick="event.preventDefault()" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`)
.join('');
gallery.innerHTML = markup;

const modalGallery = new SimpleLightbox('.gallery a', {captions: true, captionsData: 'alt', captionDelay: 250});