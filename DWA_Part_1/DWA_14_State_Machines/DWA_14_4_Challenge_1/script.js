import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 1;

/**
 * LitInput is a custom element for an input field.
 * @extends LitElement
 */
class LitInput extends LitElement {

  /**
   * Styles for the LitInput custom element.
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

    input {
      border: none;
      width: 100%;
      font-size: inherit;
      font-weight: inherit;
      text-align: inherit;
      color: inherit;
      background: transparent;
      outline: none;
    }
  `;

  /**
   * Properties for the LitInput custom element.
   * @type {Object}
   * @property {Number} value - The value of the input.
   * @property {Boolean} readonly - Whether the input is read-only.
   * @property {Boolean} error - Whether the input has an error.
   */
  static properties = {
    value: { type: Number },
    readonly: { type: Boolean },
    error: { type: Boolean },
  };

  /**
   * Constructor for LitInput.
   */
  constructor() {
    super();
    this.value = 0;
    this.readonly = false;
    this.error = false;
  }

  /**
   * Renders the LitInput custom element.
   * @returns {TemplateResult}
   */
  render() {
    return html`<input .value="${String(this.value)}" ?readonly="${this.readonly}" ?error="${this.error}" />`;
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
   * @property {Function} clickHandler - The function to handle the click event.
   */
  static properties = {
    disabled: { type: Boolean },
    clickHandler: { type: Function },
  };

  /**
   * Renders the LitButton custom element.
   * @returns {TemplateResult}
   */
  render() {
    return html`<button ?disabled="${this.disabled}" @click="${this.clickHandler}"><slot></slot></button>`;
  }
}

customElements.define('lit-button', LitButton);

/**
 * LitTallyCount is a custom element for a tally count app.
 * @extends LitElement
 */
class LitTallyCount extends LitElement {
  /**
   * Styles for the LitTallyCount custom element.
   * @type {CSSResult}
   */
  static styles = css`
    :host {
      display: block;
      font-family: 'Arial', sans-serif;
      text-align: center;
      margin: 20px;
    }

      .counter{
          max-width: 30rem;
          background: var(--color-dark-grey);
      }
      
      .counter_value {
          width: 100%;
          height: 15rem;
          text-align: center;
          font-size: 6rem;
          font-weight: 900;
          background: none;
          color: var(--color-white);
          border-width: 0;
          border-bottom: 1px solid var(--color-light-grey);
      }

      .counter_actions {
          display: flex;
      }
      
      .counter_button_first{
          border-right: 1px solid var(--color-light-grey);
      }
  `;

  /**
   * Properties for the LitTallyCount custom element.
   * @type {Object}
   * @property {Number} counter - The current counter value.
   * @property {Boolean} isMinReached - Whether the counter has reached the minimum value.
   * @property {Boolean} isMaxReached - Whether the counter has reached the maximum value.
   * */
  static properties = {
    counter: { type: Number },
    isMinReached: { type: Boolean },
    isMaxReached: { type: Boolean },
  };

  /**
   * Constructor for LitTallyCount.
   */
  constructor() {
    super();
    this.counter = 0;
    this.isMinReached = false;
    this.isMaxReached = false;
  }

  /**
   * Renders the LitTallyCount custom element.
   * @returns {TemplateResult}
   */
  render() {
    return html`
      
      <main class="counter">
        <lit-input
          class="counter_value"
          .value="${String(this.counter)}"
          ?readonly="${this.isMinReached || this.isMaxReached}"
          .error="${this.isMinReached || this.isMaxReached}"
        ></lit-input>

        <div class="counter_actions">
          <lit-button @click="${this.subtractHandler}" ?disabled="${this.isMinReached}">-</lit-button>
          <lit-button @click="${this.addHandler}" ?disabled="${this.isMaxReached}">+</lit-button>
        </div>
      </main>
    `;
  }

  /**
   * Handles the subtraction operation.
   */
  subtractHandler() {
    this.counter -= STEP_AMOUNT;
    this.updateState();

  }

  /**
   * Handles the addition operation.
   */
  addHandler() {
    this.counter += STEP_AMOUNT;
    this.updateState();
  }

  /**
   * Updates the state of the counter.
   */
  updateState() {
    this.isMinReached = this.counter <= MIN_NUMBER;
    this.isMaxReached = this.counter >= MAX_NUMBER;
    this.updateColor();
    this.updateCounterValue();
  }

  /**
   * Updates the color based on the counter value.
   */
  updateColor() {

    const colorStepsAmount = 250 / (MAX_NUMBER - MIN_NUMBER);
    const distMax = MAX_NUMBER - this.counter;
    const distMin = this.counter - MIN_NUMBER;
    const red = distMax * colorStepsAmount;
    const green = distMin * colorStepsAmount;

    const litInput = this.shadowRoot.querySelector('.counter_value');
    if (litInput) {
      litInput.style.color = `rgb(${red}, ${green}, 0)`;
    }
  }

  /**
   * Updates the counter value in the UI.
   */
  updateCounterValue() {
    const litInput = this.shadowRoot.querySelector('.counter_value');
    if (litInput) {
      litInput.value = this.counter;
    }
  }
}

customElements.define('lit-tally-count', LitTallyCount);