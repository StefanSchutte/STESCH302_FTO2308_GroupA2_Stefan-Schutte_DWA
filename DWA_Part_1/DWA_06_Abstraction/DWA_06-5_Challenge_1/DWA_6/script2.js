//@ts-check
import { books, authors, genres, BOOKS_PER_PAGE } from './data.js'

/**
 * The book list application
 * @class BookList
 */
class BookList {
    /**
     * Creates an instance of the BookList class.
     * Initializes the page, matches, books per page and calls the init method.
     * @constructor
     */
    constructor() {
        /**
         * @member {number} page - The current page number.
         */
        this.page = 1;
        /**
         * @member {Array} matches - The list of books to display.
         */
        this.matches = books;
        /**
         * @memeber {number} booksPerPage - The number of books to display per page.
         */
        this.booksPerPage = BOOKS_PER_PAGE;
        this.init();
    }

    /**
     * Initializes the BookList instance.
     * Calls the methods.
     * @method init
     */
    init() {
        this.renderInitialBooks();
        try{
            this.setupEventListeners();
        } catch (err){
            console.error('Error occured while setting up event listeners', err)
        }

        this.populateDropdowns();
    }

    /**
     * Populates genre and author dropdowns with options.
     * @method populateDropdowns
     */
    populateDropdowns() {
        this.populateDropdown('genre', genres);
        this.populateDropdown('author', authors);
    }

    /**
     * Populates individual dropdown with options.
     * @method
     * @param {string} dropdownId - ID of dropdown to populate.
     * @param {Object} data - Data to populate the dropdown with.
     */
    populateDropdown(dropdownId, data) {
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
    }

    /**
     * Renders the initial set of books on page load.
     * @method
     */
    renderInitialBooks() {
        const starting = document.createDocumentFragment();
        this.renderBooksFragment(starting, this.matches.slice(0, this.booksPerPage));
        document.querySelector('[data-list-items]').appendChild(starting);
        this.updateListButton();
    }

    /**
     * Sets up event listeners for elements.
     * @method
     */
    setupEventListeners() {
        document.querySelector('[data-search-cancel]').addEventListener('click', () => this.closeSearchOverlay());
        document.querySelector('[data-settings-cancel]').addEventListener('click', () => this.closeSettingsOverlay());
        document.querySelector('[data-header-search]').addEventListener('click', () => this.openSearchOverlay());
        document.querySelector('[data-header-settings]').addEventListener('click', () => this.openSettingsOverlay());
        document.querySelector('[data-list-close]').addEventListener('click', () => this.closeListActive());
        document.querySelector('[data-settings-form]').addEventListener('submit', (event) => this.handleSettingsFormSubmit(event));
        document.querySelector('[data-search-form]').addEventListener('submit', (event) => this.handleSearchFormSubmit(event));
        document.querySelector('[data-list-button]').addEventListener('click', () => this.loadMoreBooks());
        document.querySelector('[data-list-items]').addEventListener('click', (event) => this.handleBookItemClick(event));
    }

    /**
     * Renders a fragment of books into specified container
     * @method
     * @param {DocumentFragment} fragment - Fragment to render books into.
     * @param {Array} books - Array of books to render.
     */
    renderBooksFragment(fragment, books) {
        for (const { author, id, image, title } of books) {
            const element = this.createBookElement(id, image, title, authors[author]);
            fragment.appendChild(element);
        }
    }

    /**
     * Creates a book element with the given information.
     * @method
     * @param {string} id - ID of book.
     * @param {string} image - URL of book's image.
     * @param {string} title - Title of book.
     * @param {string} author - Author of book.
     * @returns {HTMLButtonElement} - The created book element.
     */
    createBookElement(id, image, title, author) {
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
     * Opens search overlay, focusing on search title input.
     * @method
     */
    openSearchOverlay() {
        document.querySelector('[data-search-overlay]').open = true;
        document.querySelector('[data-search-title]').focus();
    }

    /**
     * CLoses the search overlay.
     * @method
     */
    closeSearchOverlay() {
        document.querySelector('[data-search-overlay]').open = false;
    }

    /**
     * Opens settings overlay
     * @method
     */
    openSettingsOverlay() {
        document.querySelector('[data-settings-overlay]').open = true;
    }

    /**
     * Closes settings overlay.
     * @method
     */
    closeSettingsOverlay() {
        document.querySelector('[data-settings-overlay]').open = false;
    }

    /**
     * Closes active book list view overlay.
     * @method
     */
    closeListActive() {
        document.querySelector('[data-list-active]').open = false;
    }

    /**
     * Loads more books and renders into list.
     * @method
     */
    loadMoreBooks() {
        const fragment = document.createDocumentFragment();
        const start = this.page * this.booksPerPage;
        const end = (this.page + 1) * this.booksPerPage;
        this.renderBooksFragment(fragment, this.matches.slice(start, end));
        document.querySelector('[data-list-items]').appendChild(fragment);
        this.page += 1;
        this.updateListButton();
    }

    /**
     * Updates button based on remaining books.
     * @method
     */
    updateListButton() {
        const remaining = Math.max(0, this.matches.length - (this.page * this.booksPerPage));
        document.querySelector('[data-list-button]').disabled = remaining < 1;

        document.querySelector('[data-list-button]').innerHTML = `
      <span>Show more</span>
      <span class="list__remaining"> (${remaining})</span>
    `;
    }

    /**
     * Handles the form submission for settings.
     * Updates the theme based on selected theme and closes settings overlay.
     * @method
     * @param {Event} event - The form submission event
     */
    handleSettingsFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const { theme } = Object.fromEntries(formData);
        this.updateTheme(theme);
        this.closeSettingsOverlay();
    }

    /**
     * Handles the form submission for search.
     * Filters books based on form input, updates the book list and resets the page.
     * @method
     * @param {Event} event - The form submission event.
     */
    handleSearchFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const filters = Object.fromEntries(formData);
        const result = this.filterBooks(filters);
        this.page = 1;
        this.matches = result;
        this.updateBookList(result);
    }

    /**
     * Filters books based on search criteria.
     * @method
     * @param {Object} filters - The search filters.
     * @returns {Array} = Filtered list of books.
     */
    filterBooks(filters) {
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
    }

    /**
     * Updates the book list based on the filtered result.
     * @method
     * @param {Array} result - The filtered list of books.
     */
    updateBookList(result) {
        const listItems = document.querySelector('[data-list-items]');
        listItems.innerHTML = '';

        if (result.length < 1) {
            document.querySelector('[data-list-message]').classList.add('list__message_show');
        } else {
            document.querySelector('[data-list-message]').classList.remove('list__message_show');
        }

        const newItems = document.createDocumentFragment();
        this.renderBooksFragment(newItems, result.slice(0, this.booksPerPage));
        listItems.appendChild(newItems);
        this.updateListButton();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.closeSearchOverlay();
    }

    /**
     * Handles click event on book item.
     * Finds the clicked book and opens the corresponding active list view.
     * @method
     * @param {Event} event - The click event.
     */
    handleBookItemClick(event) {
        const pathArray = Array.from(event.path || event.composedPath());
        let active = null;

        for (const node of pathArray) {
            if (active) break;

            if (node?.dataset?.preview) {
                active = books.find((book) => book.id === node?.dataset?.preview);
            }
        }

        if (active) {
            this.openListActive(active);
        }
    }

    /**
     * Opens the active list view for a selected book.
     * @method
     * @param {Object} book - The selected book.
     */
    openListActive(book) {
        document.querySelector('[data-list-active]').open = true;
        document.querySelector('[data-list-blur]').src = book.image;
        document.querySelector('[data-list-image]').src = book.image;
        document.querySelector('[data-list-title]').innerText = book.title;
        document.querySelector('[data-list-subtitle]').innerText = `${authors[book.author]} (${new Date(book.published).getFullYear()})`;
        document.querySelector('[data-list-description]').innerText = book.description;
    }

    /**
     * Updates the theme of the app based on the selected themme.
     * @method
     * @param {string} theme - The selected theme.
     */
    updateTheme(theme) {
        const root = document.documentElement;

        if (theme === 'night') {
            root.style.setProperty('--color-dark', '255, 255, 255');
            root.style.setProperty('--color-light', '10, 10, 20');
        } else {
            root.style.setProperty('--color-dark', '10, 10, 20');
            root.style.setProperty('--color-light', '255, 255, 255');
        }
    }
}

// Instantiate the BookList class to start the application
try {
    const bookList = new BookList();
} catch (err) {
    console.error('Data retrieval failed', err);
}
