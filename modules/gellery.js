import { loadImages, loadedImages } from './api.js';

const gallery = document.getElementById('gallery');

function renderImages() {
  gallery.innerHTML = '';
  loadedImages.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = `${image.download_url}`;
    imgElement.alt = `Image by ${image.author}`;
    gallery.appendChild(imgElement);
  });
}

export function loadMoreImages() {
  loadImages().then(renderImages);
}

export function clearGallery() {
  loadedImages.length = 0;
  renderImages();
}

export function removeLastImage() {
  if (loadedImages.length > 0) {
    loadedImages.pop();
    renderImages();
  }
}

export function reverseGallery() {
  loadedImages.reverse();
  renderImages();
}

window.onload = () => {
  loadImages().then(renderImages);
};


window.loadMoreImages = loadMoreImages;
window.clearGallery = clearGallery;
window.removeLastImage = removeLastImage;
window.reverseGallery = reverseGallery;