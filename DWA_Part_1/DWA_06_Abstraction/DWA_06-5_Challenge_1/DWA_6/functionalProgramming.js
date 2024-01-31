import {
  books,
  authors,
  genres,
  BOOKS_PER_PAGE
} from './data.js';

let bookList

/**
 * Creates a book element.
 *
 * @function
 * @name createBookElement
 * @param {string} id - The unique identifier of the book.
 * @param {string} image - The URL of the book cover image.
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @returns {HTMLButtonElement} - The created book element.
 */
const createBookElement = (id, image, title, author) => {
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
};

/**
 * Populates a dropdown with options.
 *
 * @function
 * @name populateDropdown
 * @param {string} dropdownId - The ID of the dropdown.
 * @param {Object} data - The data to populate the dropdown with.
 * @returns {void}
 */
const populateDropdown = (dropdownId, data) => {
  const dropdown = document.querySelector(`[data-search-${dropdownId}s]`);
  const firstElement = document.createElement('option');
  firstElement.value = 'any';
  firstElement.innerText = `All ${dropdownId}s`;
  dropdown.appendChild(firstElement);

  for (const [id, name] of Object.entries(data)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    dropdown.appendChild(element);
  }
};

/**
 * Populates genre and author dropdowns.
 *
 * @function
 * @name populateDropdowns
 * @returns {void}
 */
const populateDropdowns = () => {
  populateDropdown('genre', genres);
  populateDropdown('author', authors);
};

/**
 * Renders a fragment of books and appends it to the document.
 *
 * @function
 * @name renderBooksFragment
 * @param {DocumentFragment} fragment - The document fragment to append books to.
 * @param {Object[]} books - The array of books to render.
 * @returns {void}
 */
const renderBooksFragment = (fragment, books) => {
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
 *
 * @function
 * @name renderInitialBooks
 * @param {Object[]} matches - The array of books to display initially.
 * @param {number} booksPerPage - The number of books to display per page.
 * @returns {void}
 */
const renderInitialBooks = (matches, booksPerPage) => {
  const starting = document.createDocumentFragment();
  renderBooksFragment(starting, matches.slice(0, booksPerPage));
  document.querySelector('[data-list-items]').appendChild(starting);
  updateListButton(matches, 1, booksPerPage);
};

/**
 * Updates the list button based on the current page and remaining books.
 *
 * @function
 * @name updateListButton
 * @param {Object[]} matches - The array of books to display.
 * @param {number} page - The current page number.
 * @param {number} booksPerPage - The number of books to display per page.
 * @returns {void}
 */
const updateListButton = (matches, page, booksPerPage) => {
  const remaining = Math.max(0, bookList.matches.length - (bookList.page * bookList.booksPerPage));
  document.querySelector('[data-list-button]').disabled = remaining < 1;


  document.querySelector('[data-list-button]').innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${remaining})</span>
  `;
};

/**
 * Closes the search overlay.
 *
 * @function
 * @name closeSearchOverlay
 * @returns {void}
 */
const closeSearchOverlay = () => {
  document.querySelector('[data-search-overlay]').open = false;
};

/**
 * Sets up event listeners for various elements in the application.
 *
 * @function
 * @name setupEventListeners
 * @returns {void}
 */
const setupEventListeners = () => {
  document.querySelector('[data-search-cancel]').addEventListener('click', () => closeSearchOverlay());
  document.querySelector('[data-settings-cancel]').addEventListener('click', () => closeSettingsOverlay());
  document.querySelector('[data-header-search]').addEventListener('click', () => openSearchOverlay());
  document.querySelector('[data-header-settings]').addEventListener('click', () => openSettingsOverlay());
  document.querySelector('[data-list-close]').addEventListener('click', () => closeListActive());
  document.querySelector('[data-settings-form]').addEventListener('submit', (event) => handleSettingsFormSubmit(event));
  document.querySelector('[data-search-form]').addEventListener('submit', (event) => handleSearchFormSubmit(event));
  document.querySelector('[data-list-button]').addEventListener('click', () => loadMoreBooks(bookList));
  document.querySelector('[data-list-items]').addEventListener('click', (event) => handleBookItemClick(event));
};

/**
 * Closes the settings overlay.
 *
 * @function
 * @name closeSettingsOverlay
 * @returns {void}
 */
const closeSettingsOverlay = () => {
  document.querySelector('[data-settings-overlay]').open = false;
};

/**
 * Opens the search overlay and focuses on the search input.
 *
 * @function
 * @name openSearchOverlay
 * @returns {void}
 */
const openSearchOverlay = () => {
  document.querySelector('[data-search-overlay]').open = true;
  document.querySelector('[data-search-title]').focus();
};

/**
 * Opens the settings overlay.
 *
 * @function
 * @name openSettingsOverlay
 * @returns {void}
 */
const openSettingsOverlay = () => {
  document.querySelector('[data-settings-overlay]').open = true;
};

/**
 * Closes the active book list view overlay.
 *
 * @function
 * @name closeListActive
 * @returns {void}
 */
const closeListActive = () => {
  document.querySelector('[data-list-active]').open = false;
};

/**
 * Loads more books and appends them to the document.
 *
 * @function
 * @name loadMoreBooks
 * @param {Object} bookList - The BookList object containing page, matches, and booksPerPage.
 * @returns {void}
 */
const loadMoreBooks = (bookList) => {
  const fragment = document.createDocumentFragment();
  const start = bookList.page * bookList.booksPerPage;
  const end = (bookList.page + 1) * bookList.booksPerPage;
  renderBooksFragment(fragment, bookList.matches.slice(start, end));
  document.querySelector('[data-list-items]').appendChild(fragment);
  bookList.page += 1;
  updateListButton(bookList.matches, bookList.page, bookList.booksPerPage);
};

/**
 * Handles the form submission for settings and updates the theme.
 *
 * @function
 * @name handleSettingsFormSubmit
 * @param {Event} event - The form submission event.
 * @returns {void}
 */
const handleSettingsFormSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const {
    theme
  } = Object.fromEntries(formData);
  updateTheme(theme);
  closeSettingsOverlay();
};

/**
 * Handles the form submission for search, filters books, and updates the book list.
 *
 * @function
 * @name handleSearchFormSubmit
 * @param {Event} event - The form submission event.
 * @returns {void}
 */
const handleSearchFormSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);

  // Use the bookList object directly
  bookList.page = 1;
  bookList.matches = filterBooks(filters);
  updateBookList(bookList);
};

/**
 * Filters books based on search criteria.
 *
 * @function
 * @name filterBooks
 * @param {Object} filters - The search filters.
 * @returns {Object[]} - The filtered array of books.
 */
const filterBooks = (filters) => {
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
 *
 * @function
 * @name updateBookList
 * @param {Object[]} bookList - The filtered array of books.
 * @returns {void}
 */
const updateBookList = (bookList) => {
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
/**
 * Handles the click event on a book item and opens the active list view for the selected book.
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

/**
 * Opens the active list view for a selected book.
 *
 * @function
 * @name openListActive
 * @param {Object} book - The selected book object.
 * @returns {void}
 */
const openListActive = (book) => {
  document.querySelector('[data-list-active]').open = true;
  document.querySelector('[data-list-blur]').src = book.image;
  document.querySelector('[data-list-image]').src = book.image;
  document.querySelector('[data-list-title]').innerText = book.title;
  document.querySelector('[data-list-subtitle]').innerText = `${authors[book.author]} (${new Date(book.published).getFullYear()})`;
  document.querySelector('[data-list-description]').innerText = book.description;
};

/**
 * Updates the theme of the app based on the selected theme.
 *
 * @function
 * @name updateTheme
 * @param {string} theme - The selected theme ('night' or 'day').
 * @returns {void}
 */
const updateTheme = (theme) => {
  const root = document.documentElement;

  if (theme === 'night') {
    root.style.setProperty('--color-dark', '255, 255, 255');
    root.style.setProperty('--color-light', '10, 10, 20');
  } else {
    root.style.setProperty('--color-dark', '10, 10, 20');
    root.style.setProperty('--color-light', '255, 255, 255');
  }
};

/**
 * Initializes the BookList application by rendering initial books, setting up event listeners, and initializing dropdowns.
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

  populateDropdowns();

  renderInitialBooks(matches, booksPerPage);

  try {
    setupEventListeners(bookList);
  } catch (err) {
    console.error('Error occurred while setting up event listeners', err);
  }
};

initBookList();