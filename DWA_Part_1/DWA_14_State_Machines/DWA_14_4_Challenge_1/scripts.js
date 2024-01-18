import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 1;

/**
 * LitInput is custom element for input field.
 * @extends LitElement
 */
class LitInput extends LitElement {
  /**
   * Styles for the LitInout custom element.
   * @type {CSSResult}
   */
  static styles = css`
        :host {
            display: block;
            width: 100%;
            text-align: center;
            font-size: 6rem;
            font-weight: 900;
            color: var(--color-white);
            border-width: 0;
            border-bottom: 1px solid var(--color-light-grey);
        }
    `;

  /**
   * @type {Object}
   * @property {Number} value - The value of the input.
   * @property {Boolean} readonly - Whether the input is read-only.
   */
  static properties = {
    value: { type: Number },
    readonly: { type: Boolean },
  };

  constructor() {
    super();
    this.value = 0;  // Initialize value property
  }

  /**
   * Renders the LitInput custom element.
   * @returns {TemplateResult}
   */
  render() {
    return html`<input .value="${String(this.value)}" ?readonly="${this.readonly}" />`;
  }
}

customElements.define('lit-input', LitInput);

/**
 * LitButton is a custom element for a button.
 * @extends LitElement
 */
class LitButton extends LitElement {

  /**
   * Styles for the LitButton custom element.
   * @type {CSSResults}
   */
  static styles = css`
        :host {
            display: block;
            background: none;
            width: 50%;
            border-width: 0;
            color: var(--color-white);
            font-size: 3rem;
            height: 10rem;
            border-bottom: 1px solid var(--color-light-grey);
            transition: transform 0.3s;
            transform: translateY(0);
        }

        :host([disabled]) {
            opacity: 0.2;
        }

        :host(:active) {
            background: var(--color-medium-grey);
            transform: translateY(2%);
        }
    `;

  /**
   * Properties for the LitButton custom element.
   * @type {Object}
   * @property {Boolean} disabled - Whether the button is disabled.
   */
  static properties = {
    disabled: { type: Boolean },
  };

  /**
   * Renders the LitButton custom element.
   * @returns {TemplateResult}
   */
  render() {
    return html`<button ?disabled="${this.disabled}" @click="${() => this._onClick()}"><slot></slot></button>`;
  }

  /**
   * Handles the click event on the button.
   * Dispatches a 'click' event.
   * @private
   */
  _onClick() {
    this.dispatchEvent(new CustomEvent('click'));
  }
}

customElements.define('lit-button', LitButton);

/**
 * Counter variable to keep track of the current value.
 * @type {number}
 */
let counter = 0;

/**
 * Event handlers for subtracting from the counter.
 */
const subtractHandler = () => {
  counter -= STEP_AMOUNT;
  updateColor();
  updateCounterValue();
  console.log('cc')
};

/**
 * Event handler for adding to the counter.
 */
const addHandler = () => {
  counter += STEP_AMOUNT;
  updateColor();
  updateCounterValue();
};

/**
 * Updates the color based on the counter value.
 */
const updateColor = () => {
  // Logic to update color based on counter value
  const colorStepsAmount = 250 / (MAX_NUMBER - MIN_NUMBER);
  const distMax = MAX_NUMBER - counter;
  const distMin = counter - MIN_NUMBER;
  const red = distMax * colorStepsAmount;
  const green = distMin * colorStepsAmount;
};

/**
 * Function to update the counter value in the UI.
 */
const updateCounterValue = () => {
  const litInput = document.querySelector('.counter_value');
  if (litInput) {
    litInput.value = counter;
  }
};

// do we use this when we have lit-html?
document.addEventListener('DOMContentLoaded', () => {
  const subtractButton = document.querySelector('.counter_actions lit-button:first-child');
  const addButton = document.querySelector('.counter_actions lit-button:last-child');

  if (subtractButton && addButton) {
    subtractButton.addEventListener('click', subtractHandler);
    addButton.addEventListener('click', addHandler);
    console.log('c')
  }
});

updateColor();
