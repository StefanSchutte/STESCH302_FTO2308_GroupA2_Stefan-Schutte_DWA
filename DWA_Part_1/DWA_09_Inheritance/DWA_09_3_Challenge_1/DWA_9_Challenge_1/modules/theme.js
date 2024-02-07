import { closeSettingsOverlay } from './overlays.js'

/**
 * Handles the form submission for settings and updates the theme.
 * Retrieves data using FormData to access the values submitted.
 * Extracts the selected theme from the form data using object destructuring.
 *
 * @function
 * @name handleSettingsFormSubmit
 * @param {Event} event - The form submission event.
 */
export const handleSettingsFormSubmit = (event) => {
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
export const updateTheme = (theme) => {
  const root = document.documentElement;

  if (theme === 'night') {
    root.style.setProperty('--color-dark', '255, 255, 255');
    root.style.setProperty('--color-light', '10, 10, 20');
  } else {
    root.style.setProperty('--color-dark', '10, 10, 20');
    root.style.setProperty('--color-light', '255, 255, 255');
  }
};