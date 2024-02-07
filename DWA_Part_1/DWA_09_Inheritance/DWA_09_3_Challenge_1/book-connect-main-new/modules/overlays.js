export const overlayEventListeners = () => {
  document.querySelector('[data-search-cancel]').addEventListener('click', () => closeSearchOverlay());
  document.querySelector('[data-settings-cancel]').addEventListener('click', () => closeSettingsOverlay());
  document.querySelector('[data-header-search]').addEventListener('click', () => openSearchOverlay());
  document.querySelector('[data-header-settings]').addEventListener('click', () => openSettingsOverlay());
  document.querySelector('[data-list-close]').addEventListener('click', () => closeListActive());
}

/**
 * Closes the search overlay.
 *
 * @function
 * @name closeSearchOverlay
 */
export const closeSearchOverlay = () => {
  document.querySelector('[data-search-overlay]').open = false;
};

/**
 * Closes the settings overlay.
 *
 * @function
 * @name closeSettingsOverlay
 */
export const closeSettingsOverlay = () => {
  document.querySelector('[data-settings-overlay]').open = false;
};

/**
 * Opens the search overlay and focuses on the search input.
 *
 * @function
 * @name openSearchOverlay
 */
export const openSearchOverlay = () => {
  document.querySelector('[data-search-overlay]').open = true;
  document.querySelector('[data-search-title]').focus();
};

/**
 * Opens the settings overlay.
 *
 * @function
 * @name openSettingsOverlay
 */
export const openSettingsOverlay = () => {
  document.querySelector('[data-settings-overlay]').open = true;
};

/**
 * Closes the active book list view overlay.
 *
 * @function
 * @name closeListActive
 */
export const closeListActive = () => {
  document.querySelector('[data-list-active]').open = false;
};
