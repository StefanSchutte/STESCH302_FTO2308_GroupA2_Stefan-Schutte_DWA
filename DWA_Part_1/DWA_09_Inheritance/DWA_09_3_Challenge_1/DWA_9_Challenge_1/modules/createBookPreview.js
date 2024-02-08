import { authors } from '../data.js'

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
  const activeListView = document.querySelector('[data-list-active]');
  const blurImage = document.querySelector('[data-list-blur]');
  const imageView = document.querySelector('[data-list-image]');
  const titleElement = document.querySelector('[data-list-title]');
  const subtitleElement = document.querySelector('[data-list-subtitle]');
  const descriptionElement = document.querySelector('[data-list-description]');

  activeListView.open = true;

  blurImage.src = book.image;
  imageView.src = book.image;
  titleElement.innerText = book.title;
  subtitleElement.innerText = `${authors[book.author]} (${new Date(book.published).getFullYear()})`;
  descriptionElement.innerText = book.description;
};

// export const openListActive = (book) => {
//   document.querySelector('[data-list-active]').open = true;
//   document.querySelector('[data-list-blur]').src = book.image;
//   document.querySelector('[data-list-image]').src = book.image;
//   document.querySelector('[data-list-title]').innerText = book.title;
//   document.querySelector('[data-list-subtitle]').innerText = `${authors[book.author]} (${new Date(book.published).getFullYear()})`;
//   document.querySelector('[data-list-description]').innerText = book.description;
// };


// export class ActiveListView extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: 'open' });
//   }
//
//   connectedCallback() {
//     const book = JSON.parse(this.getAttribute('book'));
//     this.render(book);
//   }
//
//   render(book) {
//
//     if (!book || !book.image || !book.title || !book.author || !book.published || !book.description) {
//       console.error('Invalid book data:', book);
//       return;
//     }
//
//     const template = `
//       <dialog class="overlay" data-list-active>
//         <div class="overlay__preview">
//           <img class="overlay__blur" data-list-blur src="${book.image}"/>
//           <img class="overlay__image" data-list-image src="${book.image}"/>
//         </div>
//         <div class="overlay__content">
//           <h3 class="overlay__title" data-list-title>${book.title}</h3>
//           <div class="overlay__data" data-list-subtitle>${authors[book.author]} (${new Date(book.published).getFullYear()})</div>
//           <p class="overlay__data overlay__data_secondary" data-list-description>${book.description}</p>
//         </div>
//       </dialog>
//     `;
//     this.shadowRoot.innerHTML = template;
//   }
// }
//
// customElements.define('active-list-view', ActiveListView);