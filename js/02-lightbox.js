import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log("galleryItems", galleryItems);
const galleryCell = galleryItems.map((img, ind) => {
   return `<li class = "gallery__item">
   <a href="${img.original}">
      <img class = "gallery__image" data-index="${ind}" 
      src="${img.preview}" alt="${img.description}" 
      title ="${img.description}"/>
   </a>
   </li>`;
})

const listTmpl = `
   ${galleryCell.join('')}`;
   
const galleryLst = document.querySelector(".gallery");
galleryLst.insertAdjacentHTML("beforeend", listTmpl);

const lightbox = new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
   captionDelay: 250,
   captionPosition: 'bottom'
   
});

