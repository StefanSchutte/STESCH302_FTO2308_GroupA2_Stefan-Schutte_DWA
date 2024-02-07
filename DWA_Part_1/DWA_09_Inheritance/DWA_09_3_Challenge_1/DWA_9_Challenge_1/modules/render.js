import { BookPreview } from './createBookPreview.js'
import { authors } from '../data.js'
import { updateListButton } from './seeMore.js'

/**
 * Renders a fragment of books and appends it to the document.
 * Iterates over each book object in the books array using a destructuring loop.
 * For each book, it calls createBookElement to create a button element representing the book.
 * Appends the created button element to the provided fragment.
 *
 * @function
 * @name renderBooksFragment
 * @param {DocumentFragment} fragment - The document fragment to append books to.
 * @param {Object[]} books - The array of books to render.
 */
// export const renderBooksFragment = (fragment, books) => {
//   for (const {
//     author,
//     id,
//     image,
//     title
//   } of books) {
//     const element = createBookElement(id, image, title, authors[author]);
//     fragment.appendChild(element);
//   }
// };

export function renderBooksFragment(fragment, books) {
  for (const { author, id, image, title } of books) {
    const bookPreview = document.createElement('book-preview');
    bookPreview.dataset.id = id;
    bookPreview.dataset.author = authors[author];
    bookPreview.dataset.image = image;
    bookPreview.dataset.title = title;

    fragment.appendChild(bookPreview);
  }
}

/**
 * Renders the initial set of books on page load.
 * Creates a new document fragment starting.
 * Calls renderBooksFragment to render book elements into the starting fragment, using a slice of the matches array.
 * Appends the starting fragment containing the book elements to the document.
 * Update the state of the list button based on the current page and number of books per page.
 *
 * @function
 * @name renderInitialBooks
 * @param {Object[]} matches - The array of books to display initially.
 * @param {number} booksPerPage - The number of books to display per page.
 */
export const renderInitialBooks = (matches, booksPerPage) => {
  const starting = document.createDocumentFragment();
  renderBooksFragment(starting, matches.slice(0, booksPerPage));
  document.querySelector('[data-list-items]').appendChild(starting);
  updateListButton(matches, 1, booksPerPage);
};