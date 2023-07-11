import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCell = galleryItems.map((img, ind) => {
   return `<li class = "gallery__item">
   <a href="${img.original}" class = "gallery__link">
      <img class = "gallery__image" data-index="${ind}" 
      src="${img.preview}" alt="${img.description}"
   </a>
   </li>`;
})

const listTmpl = `
   <div class="image-list">${galleryCell.joim('')}</div>`;
const galleryLst = document.querySelector(".gallery");
galleryLst.insertAdjacentHTML("beforeend", listTmpl);

galleryLst.addEventListener('click', showOriginalImg);

function showOriginalImg(event) {
   console.dir(event.target);
   event.preventDefault();
   
   if(event.target.nodeName !== "IMG") return ;

   const selectImg = event.target.dataset.index;

   const examp = basicLightbox.create(
      `<img src="${selectImg}" width="800">`
   );

   examp.show();
   galleryCell.addEventListener("keydown", (evt) => {
      if(evt.code === 'Escape') examp.close();

   });
}

console.log(galleryItems);
