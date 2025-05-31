export let currentPage = 1;
export let loadedImages = [];

export async function loadImages() {
  try {
    const response = await fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=4`);
    const images = await response.json();
    loadedImages.push(...images);
    currentPage++;
  } catch (error) {
    console.error('Помилка завантаження зображень:', error);
  }
}