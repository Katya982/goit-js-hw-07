import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImg = document.querySelector(".gallery");
const imagesMarkup = creatGallery(galleryItems);
galleryImg.insertAdjacentElement('beforeend', imagesMarkup);
galleryImg.addEventListener('click', onGalleryImgClick);


function creatGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            < div class = "gallery_item" >
                <a class="gallery_link" href="${original}">
                    <img class="gallery_image"
                        src="${preview}"
                        data-source="${original}"
                        alt = "${description}"/>
                </a>
            </div> `;
    }).join('');
};  


function onGalleryImgClick(event) {
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