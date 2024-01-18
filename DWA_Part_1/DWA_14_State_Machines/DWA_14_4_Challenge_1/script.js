import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 1;

class LitInput extends LitElement {
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

  static properties = {
    value: { type: Number },
    readonly: { type: Boolean },
    error: { type: Boolean },
  };

  constructor() {
    super();
    this.value = 0;
    this.readonly = false;
    this.error = false;
  }

  render() {
    return html`<input .value="${String(this.value)}" ?readonly="${this.readonly}" ?error="${this.error}" />`;
  }
}

class LitButton extends LitElement {
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

  static properties = {
    disabled: { type: Boolean },
    clickHandler: { type: Function },
  };

  render() {
    return html`<button ?disabled="${this.disabled}" @click="${this.clickHandler}"><slot></slot></button>`;
  }
}

customElements.define('lit-button', LitButton);
customElements.define('lit-input', LitInput);

class LitTallyCount extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Arial', sans-serif;
      text-align: center;
      margin: 20px;
    }

    .counter {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }

    .counter_value {
      font-size: 6rem;
      font-weight: 900;
      color: var(--text-color);
      border-bottom: 1px solid var(--border-color);
      width: 100%;
      text-align: center;
    }

    .counter_actions {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }

    .footer {
      margin-top: 20px;
      font-size: 1rem;
      color: var(--text-color);
    }

    .error {
      color: red;
    }
  `;

  static properties = {
    counter: { type: Number },
    isMinReached: { type: Boolean },
    isMaxReached: { type: Boolean },
  };

  constructor() {
    super();
    this.counter = 0;
    this.isMinReached = false;
    this.isMaxReached = false;
  }

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

  subtractHandler() {
    this.counter -= STEP_AMOUNT;
    this.updateState();
    console.log('c')
  }

  addHandler() {
    this.counter += STEP_AMOUNT;
    this.updateState();
    console.log('c')
  }

  updateState() {
    this.isMinReached = this.counter <= MIN_NUMBER;
    this.isMaxReached = this.counter >= MAX_NUMBER;
    this.updateColor();
    this.updateCounterValue();
  }

  updateColor() {
    // Logic to update color based on counter value
    const colorStepsAmount = 250 / (MAX_NUMBER - MIN_NUMBER);
    const distMax = MAX_NUMBER - this.counter;
    const distMin = this.counter - MIN_NUMBER;
    const red = distMax * colorStepsAmount;
    const green = distMin * colorStepsAmount;
    // Update styles or do something with color information
  }

  updateCounterValue() {
    const litInput = this.shadowRoot.querySelector('.counter_value');
    if (litInput) {
      litInput.value = this.counter;
    }
  }
}

customElements.define('lit-tally-count', LitTallyCount);