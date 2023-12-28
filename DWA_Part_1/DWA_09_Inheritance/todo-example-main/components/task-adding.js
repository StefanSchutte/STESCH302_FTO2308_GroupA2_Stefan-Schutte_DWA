import { getHtml } from '../modules/helper'


const template = document.createElement('template');

template.innerHTML = `/* html */
<style>

* {
box-sizing: border-box;
}

.overlay {
  border-width: 0;
  position: fixed;
  top: 4rem;
  max-width: 30rem;
  width: 90%;
  border-radius: 16px;
  z-index: 10;
  background-color: rgba(255, 255, 255, 1);
  padding: 1rem 3rem;

  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
}

.title {
  text-align: center;
}

.row {
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.field {
  display: block;
  padding-bottom: 1rem;
}

.input {
  width: 100%;
  background: rgba(0, 0, 0, 0.05);
  height: 3rem;
  padding: 0 1rem;
  font-size: 1rem;
  border-radius: 6px;
  border-width: 0;
  
  .button {
  height: 3rem;
  padding: 0 3rem;
  background: black;
  color: white;
  border-radius: 8px;
  border-width: 0;
  cursor: pointer;
}
}



</style>
<dialog class="overlay">
      <h2 class="title" xmlns="http://www.w3.org/1999/html">Add Task</h2>
      <form data-form id="adding">
      <label class="field">
        <div>Title</div>
        <input required class="input" name="title"/>
      </label>
      
      <label class="field">
        <div>Due</div>
        <input type="date" class="input" name="due"/>
      </label>
      
      <label class="field">
        <div>Urgency</div>
        <select required class="input" name="urgency"/>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        <option value="low">Low</option>
        </select>
      </label>
      
      </form>
      <div class="row">
        <button class="button" data-cancel >Cancel</button>
        <button class="button" type="submit" form="adding">Save</button>
      </div>
      </dialog>

`


  export class TaskAdding extends HTMLElement {

  #open = false;

    #elements = {
      /**
       * @type {undefined | HTMLElement}
       */
     form: undefined,

      /**
       * @type {undefined | HTMLElement}
       */
      cancel: undefined,

      /**
       * @type {undefined | HTMLElement}
       */
        overlay: undefined
    }

    /**
     *
     * @type {ShadowRoot}
     */
    #inner = this.attachShadow({mode: "closed"})

    constructor (){
      super();
      const { content } = template;
      this.#inner.appendChild(content.cloneNode(true));


    }

    connectedCallback(){
      this.#elements ={
        form: getHtml({dataAttr: 'form', target: this.#inner}),

        cancel: getHtml({dataAttr: 'cancel', target: this.#inner}),

        overlay: getHtml({dataAttr: 'overlay', target: this.#inner}),
      }

      this.open = this.getAttribute('open') !== null;

      this.#elements.cancel.addEventListener('click', ()=> {
        this.open = false
      } )

      this.#elements.form.addEventListener("submit", (event) => {
        event.preventDefault()
        if (!(event.target instanceof HTMLFormElement)){
          throw new Error('Form not found')
        }

        const entries = new FormData(event.target);
        const response = Object.fromEntries(entries)

        console.log('')
        const added = new CustomEvent('added', {
          bubbles: true,
          detail: response,

        })

        this.dispatch(added)

        event.target.reset()
        this.open = false

      })
    }

    /**
     * wheter overlay is shown or not
     * @param newValue
     */
    set open (newValue){
      if (newValue === this.#open) return
      this.#open = newValue

      if (!(this.#elements.overlay instanceof HTMLDialogElement)){
        throw new Error('Dialog element required')
      }

      if (newValue){
        this.#elements.overlay.showModal()
      } else {
        this.#elements.overlay.close()
      }
    }

    get open (){
      return this.#open
    }
  }
customElements.define('task-adding',TaskAdding);

export default TaskAdding