import { bookList } from '../index.js'
import { renderBooksFragment } from './render.js'

/**
 * Loads more books and appends them to the document.
 * Creates a new document fragment to hold the loaded book elements.
 * Calculates the start index and end index of the books to be loaded based on the current page and books per page.
 * Calls the renderBooksFragment function to render book elements into the fragment, using a slice of bookList.matches array to load more books.
 * Appends the fragment containing the newly loaded book elements to the document inside the element.
 * Increments the page property of the bookList object.
 * Update the state of the list button
 *
 * @function
 * @name loadMoreBooks
 * @param {Object} bookList - The BookList object containing page, matches, and booksPerPage.
 */
export const loadMoreBooks = (bookList) => {
  const fragment = document.createDocumentFragment();
  const start = bookList.page * bookList.booksPerPage;
  const end = (bookList.page + 1) * bookList.booksPerPage;
  renderBooksFragment(fragment, bookList.matches.slice(start, end));
  document.querySelector('[data-list-items]').appendChild(fragment);
  bookList.page += 1;
  updateListButton(bookList.matches, bookList.page, bookList.booksPerPage);
};

/**
 * Updates the list button based on the current page and remaining books.
 * Calculates the remaining number of books by subtracting the total number of books displayed so far from the total number of books in matches.
 * Disables button is no book remaining.
 * Updates List button remaining number of books.
 *
 * @function
 * @name updateListButton
 */
export const updateListButton = () => {
  const remaining = Math.max(0, bookList.matches.length - (bookList.page * bookList.booksPerPage));
  document.querySelector('[data-list-button]').disabled = remaining < 1;


  document.querySelector('[data-list-button]').innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${remaining})</span>
  `;
};