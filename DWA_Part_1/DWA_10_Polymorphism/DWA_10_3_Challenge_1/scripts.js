/**
 * Represents an interactive counter with UI elements and color-changing features.
 */
class InteractiveCounter {
  /**
   * Initializes a new instance of the InteractiveCounter class.
   */
  constructor() {
    /**
     * The maximum value that the counter can have.
     * @type {number}
     */
    this.MAX_NUMBER = 15;

    /**
     * The minimum value that the counter can have.
     * @type {number}
     */
    this.MIN_NUMBER = -5;

    /**
     * The amount by which the counter is incremented or decremented.
     * @type {number}
     */
    this.STEP_AMOUNT = 1;

    /**
     * HTML elements used in the counter interface.
     * @type {Object}
     * @property {HTMLElement} number - The counter element.
     * @property {HTMLElement} subtract - The subtract button element.
     * @property {HTMLElement} add - The add button element.
     * @property {HTMLElement} reset - The reset button element.
     * @property {HTMLElement} settings - The settings button element.
     * @property {HTMLElement} dayOption - The day mode option element.
     * @property {HTMLElement} nightOption - The night mode option element.
     */
    this.elements = {
      number: document.querySelector('[data-key="number"]'),
      subtract: document.querySelector('[data-key="subtract"]'),
      add: document.querySelector('[data-key="add"]'),
      reset: document.getElementById('resetButton'),
      settings: document.getElementById('settingsButton'),
      dayOption: document.getElementById('dayOption'),
      nightOption: document.getElementById('nightOption'),
    };

    /**
     * The drawer element for additional settings.
     * @type {HTMLElement}
     */
    this.drawer = document.querySelector('.drawer-overview');

    /**
     * The button to open the drawer.
     * @type {HTMLElement}
     */
    this.openButton = this.drawer.nextElementSibling;

    /**
     * The button to close the drawer.
     * @type {HTMLElement}
     */
    this.closeButton = this.drawer.querySelector('sl-button[variant="primary"]');

    this.setupEventListeners();
  }

  /**
   * Sets up event listeners for various UI elements.
   */
  setupEventListeners() {
    this.openButton.addEventListener('click', () => this.drawer.show());
    this.closeButton.addEventListener('click', () => this.drawer.hide());
    this.elements.subtract.addEventListener('click', () => this.subtractHandler());
    this.elements.add.addEventListener('click', () => this.addHandler());
    this.elements.reset.addEventListener('click', () => this.resetHandler());
    this.elements.dayOption.addEventListener('click', () => this.toggleDayNightMode(false));
    this.elements.nightOption.addEventListener('click', () => this.toggleDayNightMode(true));
  }


  /**
   * Disables or enables a button.
   * @param {HTMLElement} button - The button element.
   * @param {boolean} disable - Whether to disable the button.
   */
  disableButton(button, disable) {
    button.disabled = disable;
  }

  /**
   * Handles the subtract button click event.
   */
  subtractHandler() {
    const newValue = parseInt(this.elements.number.value) - this.STEP_AMOUNT;
    this.elements.number.value = newValue;
    this.disableButton(this.elements.add, false);
    this.disableButton(this.elements.subtract, newValue <= this.MIN_NUMBER);
  }

  /**
   * Handles the add button click event.
   */
  addHandler() {
    const newValue = parseInt(this.elements.number.value) + this.STEP_AMOUNT;
    this.elements.number.value = newValue;
    this.disableButton(this.elements.subtract, false);
    this.disableButton(this.elements.add, newValue >= this.MAX_NUMBER);
  }

  /**
   * Handles the reset button click event.
   */
  resetHandler() {
    this.elements.number.value = 0;

    alert('Counter has been reset!');
  }

  toggleDayNightMode(isNightMode) {
    if (isNightMode) {
      document.documentElement.classList.add('sl-theme-dark');
      document.documentElement.classList.remove('sl-theme-light');
    } else {
      document.documentElement.classList.remove('sl-theme-dark');
      document.documentElement.classList.add('sl-theme-light');
    }
  }
}

const interactiveCounter = new InteractiveCounter();