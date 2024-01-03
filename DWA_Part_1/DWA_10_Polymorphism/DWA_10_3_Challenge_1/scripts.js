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
    this.setInitialTheme();
    this.updateColor();
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
   * Updates the text color of the counter based on its value.
   */
  updateColor() {
    const value = parseInt(this.elements.number.value);
    const colorStepsAmount = 250 / (this.MAX_NUMBER - this.MIN_NUMBER);
    const distMax = this.MAX_NUMBER - value;
    const distMin = value - this.MIN_NUMBER;
    const red = distMax * colorStepsAmount;
    const green = distMin * colorStepsAmount;
    this.elements.number.style.color = `rgb(${red}, ${green} , 0)`;
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
    this.updateColor();
  }

  /**
   * Handles the add button click event.
   */
  addHandler() {
    const newValue = parseInt(this.elements.number.value) + this.STEP_AMOUNT;
    this.elements.number.value = newValue;
    this.disableButton(this.elements.subtract, false);
    this.disableButton(this.elements.add, newValue >= this.MAX_NUMBER);
    this.updateColor();
  }

  /**
   * Handles the reset button click event.
   */
  resetHandler() {
    this.elements.number.value = 0;
    this.updateColor();
    alert('Counter has been reset!');
  }

  /**
   * Toggles the day or night mode.
   * @param {boolean} isNightMode - Whether to enable night mode.
   */
  toggleDayNightMode(isNightMode) {
    document.documentElement.classList.toggle('sl-theme-dark', isNightMode);
  }

  /**
   * Sets the initial theme based on the system's color scheme preference.
   */
  setInitialTheme() {
    const isNightModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.toggleDayNightMode(isNightModePreferred);
  }
}

// Create an instance of the InteractiveCounter class
const interactiveCounter = new InteractiveCounter();