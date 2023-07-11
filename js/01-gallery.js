import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCell = galleryItems.map((img, ind) => {
   return `<li class = "gallery__item">
   <a href="${img.original}" class = "gallery__link">
      <img class = "gallery__image" data-index="${ind}" 
      src="${img.preview}" alt="${image.description}"
   </a>
   </li>`;
})

const listTmpl = `
   <div class="image-list">${galleryCell.joim('')}</div>`;
const galleryLst = document.querySelector(".gallery");
galleryLst.insertAdjacentHTML("beforeend", listTmpl);

galleryLst.addEventListener('click', showOriginalImg);

function showOriginalImg(event) {
   event.preventDefault();
   if(event.target.nodeName !== "IMG") return ;

   const selectImg = event.target.dataset.index;

   const examp = basicLightbox.create(
      `<img src="${selectImg}">`
   );

   examp.show();
}

console.log(galleryItems);
