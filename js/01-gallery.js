import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgGallary = document.querySelector(".gallery");
const  imgMarkup = creatGallary(galleryItems);
imgGallary.insertAdjacentHTML('beforeend', imgMarkup);
imgGallary.addEventListener('click', onImgClick);


function creatGallary(galleryItems) {
    return  galleryItems.map(({preview, original, description}) => {
        return ` 
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div> 
      `;
    })
    .join('');

};
  
    function onImgClick(event) {  
    event.preventDefault();
        if (event.target.nodeName !== 'IMG') {
            return
        };
        const original = event.target.dataset.source;
        const onEscPress = event => { 
            if (event.code === 'Escape') {
              instance.close();
            }
          };
        
          const instance = basicLightbox.create(`
          <img src="${original}" width="1280" height="600">`,
          {
            onShow: (instance) => 
            document.addEventListener('keydown',onEscPress),
            onClose: (instance) => 
            document.removeEventListener('keydown', onEscPress),
          });
          
          instance.show();
        
       };
        
       


