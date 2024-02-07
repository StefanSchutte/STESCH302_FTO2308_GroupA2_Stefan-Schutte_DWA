import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';
import { createBookElement, openListActive } from '../modules/createBookPreview.js'
import { populateDropdownsForGenresAndAuthors } from '../modules/dropdown.js'
import { closeSearchOverlay, closeSettingsOverlay, overlayEventListeners } from '../modules/overlays.js'
import { loadMoreBooks, updateListButton } from '../modules/seeMore.js'
import { handleSettingsFormSubmit, updateTheme } from '../modules/theme.js'
import { handleSearchFormSubmit } from '../modules/filters.js'
// import { filterBooks } from '../modules/filters.js'

export let bookList;

/**
 * Sets up event listeners for various elements in the application.
 *
 * @function
 * @name setupEventListeners
 */
const setupEventListeners = () => {
  document.querySelector('[data-settings-form]').addEventListener('submit', (event) => handleSettingsFormSubmit(event));
  document.querySelector('[data-search-form]').addEventListener('submit', (event) => handleSearchFormSubmit(event));
  document.querySelector('[data-list-button]').addEventListener('click', () => loadMoreBooks(bookList));
  document.querySelector('[data-list-items]').addEventListener('click', (event) => handleBookItemClick(event));
};


//Book element and render

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
export const renderBooksFragment = (fragment, books) => {
  for (const {
    author,
    id,
    image,
    title
  } of books) {
    const element = createBookElement(id, image, title, authors[author]);
    fragment.appendChild(element);
  }
};

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
const renderInitialBooks = (matches, booksPerPage) => {
  const starting = document.createDocumentFragment();
  renderBooksFragment(starting, matches.slice(0, booksPerPage));
  document.querySelector('[data-list-items]').appendChild(starting);
  updateListButton(matches, 1, booksPerPage);
};


/**
 * Handles the click event on a book item and opens the active list view for the selected book.
 * Triggered when a click event occurs on a book item.
 * Creates an array pathArray by converting the event's path or composed path into an array.
 * Iterates over each element in pathArray.
 * Checks if the dataset.preview attribute exists, and retrieves the corresponding book object from the books array using the find method.
 * If a matching book is found, it sets the active variable to that book object.
 * Calls the openListActive function to open the active list view for the selected book.
 *
 * @function
 * @name handleBookItemClick
 * @param {Event} event - The click event on a book item.
 * @returns {void}
 */
const handleBookItemClick = (event) => {
  const pathArray = Array.from(event.path || event.composedPath());
  let active = null;

  for (const node of pathArray) {
    if (active) break;

    if (node?.dataset?.preview) {
      active = books.find((book) => book.id === node?.dataset?.preview);
    }
  }

  if (active) {
    openListActive(active);
  }
};

//INIT

/**
 * Initializes the BookList application by rendering initial books, setting up event listeners, and initializing dropdowns.
 * Initializes local variables page, matches, and booksPerPage.
 * Creates a bookList object containing page, matches, and booksPerPage.
 * Calls populateDropdowns to initialize and populate the genre and author dropdowns.
 * Calls renderInitialBooks to render the initial set of books on the page load.
 * Sets up event listeners.
 * Invokes the initBookList function to initiate the BookList application
 *
 * @function
 * @name initBookList
 * @returns {void}
 */
const initBookList = () => {
  const page = 1;
  const matches = books;
  const booksPerPage = BOOKS_PER_PAGE;


  bookList = { page, matches, booksPerPage };

  populateDropdownsForGenresAndAuthors();

  renderInitialBooks(matches, booksPerPage);

  try {
    setupEventListeners(bookList);
    overlayEventListeners()


  } catch (err) {
    console.error('Error occurred while setting up event listeners', err);
  }
};

initBookList();

