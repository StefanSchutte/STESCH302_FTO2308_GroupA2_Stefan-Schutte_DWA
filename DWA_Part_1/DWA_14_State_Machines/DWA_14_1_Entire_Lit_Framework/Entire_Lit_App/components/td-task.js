import { LitElement, html, css } from '../libs/lit-html.js'

const URGENCY_DISPLAY_MAP = {
  low: 'Low Urgency',
  normal: 'Normal Urgency',
  high: 'High Urgency',
}

/**
 *
 * @param {null|Date} due
 * @return {any}
 */
const calcDue = (due) => {
  if (!due) return html`<span>No Due Date</span>`
  const hasPassed = due.getTime() >= new Date().getTime()

  if (hasPassed) html`<strong>Due Date Passed</strong>`

  const display = due.toString()

  return html`<sl-relative-time date="${display}"></sl-relative-time>`
}

class Task extends LitElement {
  title
  completed
  urgency
  created
  due;

  static properties = {
    title: { type: String},
    completed: { type: Boolean},
    urgency: {type: String},
    created: {type: Date},
    due: {},

  }

  static styles = css `
  .outside {
      background: var(--sl-color-neutral-0);
      box-shadow: var(--sl-shadow-large);
  }
      
      .inside {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: var(--sl-radius-medium);
      }
      
  `
  constructor() {
    super()
  }

  /**
   *
   *
   * @returns {any}
   */
  render(){
    return html` <div class="outside">
      <td-spacing top="m" bottom="m" left="m" right="m">
        <div class="inside">
      <sl-checkbox size="large" .checked="${this.completed}"></sl-checkbox>
        <sl-button variant="text">${this.title}</sl-button>
        
        <sl-button variant="default" size="medium" circle>
          <sl-icon name="trash" label="Delete Task"></sl-icon>
        </sl-button>
        </div>
      </td-spacing>
      <sl-dialog open label="${this.title}">
        <ul>
          
          <li>${this.completed ? "Completed" : "Not Completed"}</li>
          <li>${URGENCY_DISPLAY_MAP[this.urgency]}</li>
          <li>Due ${calcDue(this.due)}</li>
          <li>Created <sl-format-date date=${this.created.toString()} month="long" day="numeric" year="numeric"></sl-format-date></li>
        </ul>

        <div slot="footer">
          <sl-button type="button" (false)}>Edit</sl-button>
          <sl-button variant="primary" >Close</sl-button>
        </div>
        
      </sl-dialog>
    </div>`
  }
}
customElements.define ('td-task', Task)