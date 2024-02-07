import { bookList } from '../index.js'
import { books } from '../data.js'
import { closeSearchOverlay } from './overlays.js'
import { renderBooksFragment } from './render.js'
import { updateListButton } from './seeMore.js'

/**
 * Handles the form submission for search, filters books, and updates the book list.
 * Extracts the form data using FormData to obtain search filters.
 * Calls the filterBooks function to filter the books based on the obtained search filters.
 * Updates the book list.
 *
 * @function
 * @name handleSearchFormSubmit
 * @param {Event} event - The form submission event.
 */
export const handleSearchFormSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);

  bookList.page = 1;
  bookList.matches = filterBooks(filters);
  updateBookList(bookList);
};

/**
 * Filters books based on search criteria.
 * Takes the search filters as input.
 * Iterate over the books array and apply the filtering logic.
 * Checks if each book matches the search criteria.
 * Books are filtered based on title, author, and genre.
 * If a book matches all criteria, it is included in the filtered array.
 *
 * @function
 * @name filterBooks
 * @param {Object} filters - The search filters.
 * @returns {Object[]} - The filtered array of books.
 */
export const filterBooks = (filters) => {
  return books.filter((book) => {
    let genreMatch = filters.genre === 'any';

    for (const singleGenre of book.genres) {
      if (genreMatch) break;
      if (singleGenre === filters.genre) {
        genreMatch = true;
      }
    }

    return (
      (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (filters.author === 'any' || book.author === filters.author) &&
      genreMatch
    );
  });
};

/**
 * Updates the book list based on the filtered result.
 * Updates the book list UI.
 * Clears the existing book list.
 * If filtered results are empty, displays a message.
 * Creates a new document fragment (newItems) to hold the updated list of books.
 * renderBooksFragment is called to render book elements based on the filtered books and appends them to the newItems fragment.
 * Show more button is updated.
 *
 * @function
 * @name updateBookList
 * @param {Object[]} bookList - The filtered array of books.
 * @returns {void}
 */
export const updateBookList = (bookList) => {
  const listItems = document.querySelector('[data-list-items]');
  listItems.innerHTML = '';

  if (bookList.matches.length < 1) {
    document.querySelector('[data-list-message]').classList.add('list__message_show');
  } else {
    document.querySelector('[data-list-message]').classList.remove('list__message_show');
  }

  const newItems = document.createDocumentFragment();
  renderBooksFragment(newItems, bookList.matches.slice(0, bookList.booksPerPage));
  listItems.appendChild(newItems);
  updateListButton(bookList);
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  closeSearchOverlay();
};