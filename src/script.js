
const galleryContainer = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const clearGalleryBtn = document.getElementById('clearGalleryBtn');
const removeLastImageBtn = document.getElementById('removeLastImageBtn');
const reverseGalleryBtn = document.getElementById('reverseGalleryBtn');

let images = [];
let page = 1; 

async function fetchImages() {
  try {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=4`);
    const data = await response.json();
    
    images = [...images, ...data];
    page++; 
    renderGallery(); 
  } catch (error) {
    console.error('Помилка при завантаженні картинок:', error);
  }
}

function renderGallery() {
  galleryContainer.innerHTML = ''; 

  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.download_url;
    imgElement.alt = image.author;
    imgElement.title = image.author;

    galleryContainer.appendChild(imgElement);
  });
}

fetchImages();

loadMoreBtn.addEventListener('click', fetchImages);

clearGalleryBtn.addEventListener('click', () => {
  images = []; 
  page = 1; 
  renderGallery(); 
});

removeLastImageBtn.addEventListener('click', () => {
  images.pop(); 
  renderGallery(); 
});

reverseGalleryBtn.addEventListener('click', () => {
  images.reverse(); 
  renderGallery(); 
});
