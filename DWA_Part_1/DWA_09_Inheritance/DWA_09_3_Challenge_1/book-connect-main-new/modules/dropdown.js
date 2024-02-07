import { authors, genres } from '../data.js'

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
export const populateDropdown = (dropdownId, data) => {
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
 */
export const populateDropdownsForGenresAndAuthors = () => {
  populateDropdown('genre', genres);
  populateDropdown('author', authors);
};