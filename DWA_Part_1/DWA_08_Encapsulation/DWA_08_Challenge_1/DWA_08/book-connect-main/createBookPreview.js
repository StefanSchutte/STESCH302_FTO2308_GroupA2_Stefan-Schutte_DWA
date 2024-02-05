/**
 * Creates a book element with the given information.
 * @method
 * @param {string} id - ID of book.
 * @param {string} image - URL of book's image.
 * @param {string} title - Title of book.
 * @param {string} author - Author of book.
 * @returns {HTMLButtonElement} - The created book element.
 */
export function createBookPreview(id, image, title, author) {
  const element = document.createElement('button');
  element.classList = 'preview';
  element.setAttribute('data-preview', id);

  element.innerHTML = `
      <img
        class="preview__image"
        src="${image}"
      />
      
      <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <div class="preview__author">${author}</div>
      </div>
    `;

  return element;
}