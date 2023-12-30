const template = document.createElement('template');

template.innerHTML = /* html */ `

<style>
    button {
      height: 3rem;
      padding: 0 3rem;
      background: white;
      color: var(--color-primary);
      border-radius: 8px;
      border-width: 0;
      cursor: pointer;
      border: 1px solid var(--color-primary);
      font-weight: bold;
      font-size: 1rem;
    }
    
    button:hover {
      background: var(--color-primary);
      opacity: 0.4;
    }
    
    button:hover {
      background: var(--color-primary);
      color: var(--color-secondary);
    }
    
</style>

<button class="button">
  <slot>
  
  </slot>
</button>
`;

class UserInput extends HTMLElement {

  #inner = this.attachShadow({mode: 'closed'})

  /**
   *
   * @type {'primary'|'secondary'}
   */
  #importance = "secondary"

  #elements = {
    /**
     * @type {null |HTMLButtonElement}
     */
    button: null
  }

constructor(){
    super();

  console.log(this.innerHTML)
  if (!this.innerHTML || this.innerHTML.trim() === ''){
    throw new Error ('UserAction must have content')
  }
}


  connectedCallback() {
    const node = template.content.cloneNode(true)

    this.#inner.appendChild(node)


    this.#elements = {
      button: this.#inner.querySelector('button')
    }

    const importance = this.getAttribute('importance') || 'secondary';
      if (importance !== 'primary' && importance !== 'secondary'){
        throw new Error("invalid importance")
      }

      this.importance = importance;
  }

  set importance(newValue){
    if (newValue === this.#importance) return
    this.#importance = newValue

    if (newValue === 'primary'){
      this.#elements.button.classList.add('primary')
    } else {
      this.#elements.button.classList.remove('primary')
    }
  }

  get importance(){
    return this.#importance
  }

}

customElements.define('user-action', UserInput)