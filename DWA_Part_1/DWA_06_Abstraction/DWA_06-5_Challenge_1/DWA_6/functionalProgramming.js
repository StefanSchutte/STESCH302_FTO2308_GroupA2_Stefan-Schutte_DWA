import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';

let bookList


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


//Dropdown

/**
 * Populates a dropdown with options.
 * Selects the dropdown element using the provided dropdownId.
 * Creates and appends the first option element with a value of 'any' and inner text representing all options in the dropdown.
 * Iterates over each key-value pair in the data object.
 * Creates an option element with the key as the value and the corresponding value as the inner text, then appends it to the dropdown element.
 *
 * @function
 * @name populateDropdown
 * @param {string} dropdownId - The ID of the dropdown.
 * @param {Object} data - The data to populate the dropdown with.
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
 * Calling populateDropdown for genres and for authors, with the respective data.
 *
 * @function
 * @name populateDropdowns
 * @returns {void}
 */
const populateDropdowns = () => {
  populateDropdown('genre', genres);
  populateDropdown('author', authors);
};

//Book element and render

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

//LOAD MORE

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
 * Updates the list button based on the current page and remaining books.
 * Calculates the remaining number of books by subtracting the total number of books displayed so far from the total number of books in matches.
 * Disables button is no book remaining.
 * Updates List button remaining number of books.
 *
 * @function
 * @name updateListButton
 * @param {Object[]} matches - The array of books to display.
 * @param {number} page - The current page number.
 * @param {number} booksPerPage - The number of books to display per page.
 */
const updateListButton = (matches, page, booksPerPage) => {
  const remaining = Math.max(0, bookList.matches.length - (bookList.page * bookList.booksPerPage));
  document.querySelector('[data-list-button]').disabled = remaining < 1;


  document.querySelector('[data-list-button]').innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${remaining})</span>
  `;
};

//OVERLAYS

/**
 * Closes the search overlay.
 *
 * @function
 * @name closeSearchOverlay
 */
const closeSearchOverlay = () => {
  document.querySelector('[data-search-overlay]').open = false;
};

/**
 * Closes the settings overlay.
 *
 * @function
 * @name closeSettingsOverlay
 */
const closeSettingsOverlay = () => {
  document.querySelector('[data-settings-overlay]').open = false;
};

/**
 * Opens the search overlay and focuses on the search input.
 *
 * @function
 * @name openSearchOverlay
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
 */
const openSettingsOverlay = () => {
  document.querySelector('[data-settings-overlay]').open = true;
};

/**
 * Closes the active book list view overlay.
 *
 * @function
 * @name closeListActive
 */
const closeListActive = () => {
  document.querySelector('[data-list-active]').open = false;
};

//FILTER
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
const handleSearchFormSubmit = (event) => {
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
const openListActive = (book) => {
  document.querySelector('[data-list-active]').open = true;
  document.querySelector('[data-list-blur]').src = book.image;
  document.querySelector('[data-list-image]').src = book.image;
  document.querySelector('[data-list-title]').innerText = book.title;
  document.querySelector('[data-list-subtitle]').innerText = `${authors[book.author]} (${new Date(book.published).getFullYear()})`;
  document.querySelector('[data-list-description]').innerText = book.description;
};

//THEME

/**
 * Handles the form submission for settings and updates the theme.
 * Retrieves data using FormData to access the values submitted.
 * Extracts the selected theme from the form data using object destructuring.
 *
 * @function
 * @name handleSettingsFormSubmit
 * @param {Event} event - The form submission event.
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
 * Updates the theme of the app based on the selected theme.
 * Retrieves the root element of the document to access its style properties.
 * Updates the CSS custom properties
 *
 * @function
 * @name updateTheme
 * @param {string} theme - The selected theme ('night' or 'day').
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

  populateDropdowns();

  renderInitialBooks(matches, booksPerPage);

  try {
    setupEventListeners(bookList);
  } catch (err) {
    console.error('Error occurred while setting up event listeners', err);
  }
};

initBookList();