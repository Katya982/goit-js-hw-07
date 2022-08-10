import { galleryItems } from './gallery-items.js';

const imgGallary = document.querySelector(".gallery");
const  imgMarkup = creatGallary(galleryItems);
imgGallary.insertAdjacentHTML('beforeend', imgMarkup);


function creatGallary(galleryItems) {
    return  galleryItems.map(({preview, original, description}) => {
        return ` 
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
           
            alt="${description}"
            title ="${description}"
          />
        </a>
      </div> 
      `;
    })
    .join('');

};

   let gallery = new SimpleLightbox('.gallery a', {
        captionData: 'title',
        captionType: 'attr',
	    captionDelay: 250,
});
gallery.on('show.simplelightbox');
