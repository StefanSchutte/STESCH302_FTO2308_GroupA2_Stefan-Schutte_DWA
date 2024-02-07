import { authors } from '../data.js'

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

export class BookPreview extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const { id, image, title, author } = this.dataset;

    this.shadowRoot.innerHTML = `
            <style>
                /* Add your styling here */
                .preview {
                    border-width: 0;
                    width: 100%;
                    font-family: Roboto, sans-serif;
                    padding: 0.5rem 1rem;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    text-align: left;
                    border-radius: 8px;
                    border: 1px solid rgba(var(--color-dark), 0.15);
                    background: rgba(var(--color-light), 1);
                }
                .preview__image {
                    width: 48px;
                    height: 70px;
                    object-fit: cover;
                    background: grey;
                    border-radius: 2px;
                    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
                      0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
                }
                .preview__info {
                   padding: 1rem;
                }
                
                @media (min-width: 60rem) {
                  .preview {
                    padding: 1rem;
                  }
                }
                
                
                .preview:hover {
                  background: rgba(var(--color-blue), 0.05);
                }
                .preview__title {
                    margin: 0 0 0.5rem;
                    font-weight: bold;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;  
                    overflow: hidden;
                    color: rgba(var(--color-dark), 0.8)
                }
                .preview__author {
                    color: rgba(var(--color-dark), 0.4);
                }
            </style>
            <button class="preview" data-preview="${id}">
                <img class="preview__image" src="${image}" />
                <div class="preview__info">
                    <h3 class="preview__title">${title}</h3>
                    <div class="preview__author">${author}</div>
                </div>
            </button>
        `;
  }
}

customElements.define('book-preview', BookPreview);



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
//
// export class OpenListActive extends HTMLElement {
//   constructor() {
//     super();
//     if (!OpenListActive.instance) {
//       OpenListActive.instance = this;
//       this.attachShadow({ mode: 'open' });
//       this.shadowRoot.innerHTML = `
//         <style>
//           /* Define your component's styles here */
//         </style>
//
//         <dialog class="overlay" data-list-active>
//           <div class="overlay__preview"><img class="overlay__blur" data-list-blur src=""/><img class="overlay__image" data-list-image src=""/></div>
//           <div class="overlay__content">
//             <h3 class="overlay__title" data-list-title></h3>
//             <div class="overlay__data" data-list-subtitle></div>
//             <p class="overlay__data overlay__data_secondary" data-list-description></p>
//           </div>
//
//
//           <div class="overlay__row">
//             <button class="overlay__button overlay__button_primary" data-list-close>Close</button>
//           </div>
//         </dialog>
//       `;
//     }
//   }
//
//
//   openListActive(book) {
//     this.shadowRoot.querySelector('[data-list-active]').open = true;
//     this.shadowRoot.querySelector('[data-list-blur]').src = book.image;
//     this.shadowRoot.querySelector('[data-list-image]').src = book.image;
//     this.shadowRoot.querySelector('[data-list-title]').innerText = book.title;
//     this.shadowRoot.querySelector('[data-list-subtitle]').innerText = `${authors[book.author]} (${new Date(book.published).getFullYear()})`;
//     this.shadowRoot.querySelector('[data-list-description]').innerText = book.description;
//   }
//
//   closeListActive() {
//     this.shadowRoot.querySelector('[data-list-active]').open = false;
//   }
// }
//
// // Define the custom element separately from its class definition
// customElements.define('book-list-view', OpenListActive);