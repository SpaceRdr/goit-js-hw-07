import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log("galleryItems", galleryItems);
const galleryCell = galleryItems.map((img, ind) => {
   return `<li class = "gallery__item">
   <a href="${img.original}" class = "gallery__link">
      <img class = "gallery__image" data-index="${ind}" 
      src="${img.preview}" alt="${img.description}"
   </a>
   </li>`;
})
console.log('galleryCell ', galleryCell);

const listTmpl = `
   <div class="image-list">${galleryCell.join('')}</div>`;
   
const galleryLst = document.querySelector(".gallery");
galleryLst.insertAdjacentHTML("beforeend", listTmpl);

// galleryLst.addEventListener('click', showOriginalImg);

// function showOriginalImg(event) {
//    console.dir("event.target ", event.target);
//    event.preventDefault();
//    console.log("event.target.nodeName ", event.target.nodeName);
//    if(event.target.nodeName !== "IMG") return ;

//    const selectImg = event.target.dataset.index;
//    console.log("event.target.dataset.index", event.target.dataset.index);
//    const examp = basicLightbox.create(
//       `<img src="${selectImg}" width="800">`
//    );
//    console.log("examp", examp);

//    examp.show();
//    galleryLst.addEventListener("keydown", (evt) => {
//       if(evt.code === 'Escape') examp.close();

//    });
// }

console.log(galleryItems);
