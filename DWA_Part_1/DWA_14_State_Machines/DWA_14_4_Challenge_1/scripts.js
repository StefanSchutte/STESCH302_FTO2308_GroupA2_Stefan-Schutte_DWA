import { LitElement, html, css } from '../../../package.json';

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
    `;

  static properties = {
    value: { type: Number },
    readonly: { type: Boolean },
  };

  render() {
    return html`<input .value="${this.value}" ?readonly="${this.readonly}" />`;
  }
}

customElements.define('lit-input', LitInput);

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
  };

  render() {
    return html`<button ?disabled="${this.disabled}" @click="${this._onClick}"><slot></slot></button>`;
  }

  _onClick() {
    this.dispatchEvent(new CustomEvent('click'));
  }
}

customElements.define('lit-button', LitButton);

let counter = 0;

const subtractHandler = () => {
  counter -= STEP_AMOUNT;
  updateColor();
};

const addHandler = () => {
  counter += STEP_AMOUNT;
  updateColor();
};

const updateColor = () => {
  // Logic to update color based on counter value
  const colorStepsAmount = 250 / (MAX_NUMBER - MIN_NUMBER);
  const distMax = MAX_NUMBER - counter;
  const distMin = counter - MIN_NUMBER;
  const red = distMax * colorStepsAmount;
  const green = distMin * colorStepsAmount;

  // Update styles or perform other actions based on the calculated color
  // For example: elements.number.style.color = `rgb(${red}, ${green}, 0)`;
};

const elements = {
  // Add any additional elements if needed
};

updateColor();