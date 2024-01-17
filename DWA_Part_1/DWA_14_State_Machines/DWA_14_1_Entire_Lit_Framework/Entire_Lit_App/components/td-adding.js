import { LitElement, html } from '../libs/lit-html.js'

/**
 * @typedef {object} Response
 * @prop {string} title
 * @prop {null | Date} due
 * @prop {'low'|'normal'|'high'} urgency
 */

/**
 * Provide users with the means to add new tasks. If loaded, will only show an 'add task' button. However, once button is clicked will open an
 * overlay with a form inside that provides the means to add a task.
 *
 * Manages whether open or close internallu in own state
 *
 * @element td-adding
 * @fires {Response} save
 */
class Adding extends LitElement {

  static properties = {

      open: {type: 'boolean', state: true }

  }

  constructor(){
    super();
    this.open = false;
  }

  /**
   *
   * @param {boolean} [value]
   */
  toggleOpen(value){
    this.open = value === undefined ? !this.open : value;
  }

handleSubmit(event) {
  event.preventDefault()

  if (!(event.target instanceof  HTMLFormElement)){
    throw new Error('Form required')
  }

  const data = new FormData(event.target);
  const { title, due, urgency } = Object.fromEntries(data);

  if (urgency !== 'low' && urgency !== 'normal' && urgency !== 'high'){
    throw new Error('Invalid urgency value')
  }

  /**
   * @type {Response}
   */
  const response = {
    title: title.toString(),
    due: !due ? null : new Date(due.toString()),
    urgency,
  }

  if(!response.title || response.title.trim() === '') {
    return;
  }



this.toggleOpen(false)
  event.target.reset()
  this.dispatchEvent(new CustomEvent('save', {
    bubbles: true,
    composed: true,
    detail: response,
  }))
}

  /** @returns {any} */
  render(){

    console.log(this.open)

    return html`
    <div>

      <sl-button variant="primary" @click=${() => this.toggleOpen(true)}> Add Task</sl-button>
      
      <sl-dialog .open=${this.open} @sl-hide=${() => this.toggleOpen(false)} label="New Task">
        
        <form @submit=${this.handleSubmit}>
          <td-spacing bottom="xl">
              <sl-input filled name="title" label="Title" required></sl-input>
    
            <td-spacing bottom="s">
              <sl-input type="date" filled name="due" label="Due Date" required></sl-input>
          </td-spacing>
            
          <td-spacing bottom="s">
<!--              <sl-input filled name="urgency" label="Urgency" required></sl-input>-->
            
            <sl-select value="normal" filled name="urgency" label="Urgency">
              <sl-option value="high">High</sl-option>
              <sl-option value="normal">Normal</sl-option>
              <sl-option value="low">Low</sl-option>
            </sl-select>
          </td-spacing>
          </td-spacing>  
          
          <div slot="footer">
            <sl-button type="button" @click=${() => this.toggleOpen(false)}>Cancel</sl-button>
            <sl-button variant="primary" type="submit">Save</sl-button>
          </div>
        </form>
      </sl-dialog>
      
      
      
    </div>
    `
  }
}

customElements.define("td-adding", Adding)
