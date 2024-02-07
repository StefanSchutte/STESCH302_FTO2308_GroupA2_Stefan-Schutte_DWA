import { authors } from '../book-connect-main/data.js'

/**
 * Creates a book element.
 * Creates a new button element using document.createElement('button').
 * Assigns the class 'preview' to the button using element.classList.
 * Sets the data-preview attribute to the book's id using element.setAttribute.
 * Sets the inner HTML of the button, which includes an image tag for the book cover and a div for the book's title and author.
 *
 * @function
 * @name createBookElement
 * @param {string} id - The unique identifier of the book.
 * @param {string} image - The URL of the book cover image.
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @returns {HTMLButtonElement} - The created book element.
 */
export function createBookElement(id, image, title, author) {
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

/**
 * Opens the active list view for a selected book.
 * Sets the open attribute to true, making the active list view visible.
 * Updates elements in active view. Populating image, title, description, author.
 *
 * @function
 * @name openListActive
 * @param {Object} book - The selected book object.
 * @returns {void}
 */
export const openListActive = (book) => {
  document.querySelector('[data-list-active]').open = true;
  document.querySelector('[data-list-blur]').src = book.image;
  document.querySelector('[data-list-image]').src = book.image;
  document.querySelector('[data-list-title]').innerText = book.title;
  document.querySelector('[data-list-subtitle]').innerText = `${authors[book.author]} (${new Date(book.published).getFullYear()})`;
  document.querySelector('[data-list-description]').innerText = book.description;
};