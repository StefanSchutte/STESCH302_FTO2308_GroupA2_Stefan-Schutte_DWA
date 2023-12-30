import { getHtml } from '../modules/helper'


const template = document.createElement('template');

template.innerHTML = `/* html */
<style>

* {
box-sizing: border-box;
}

.wrapper {
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 1);
  height: 4rem;
  border-radius: 6px;
  display: flex;
  margin-bottom: 0.5rem;
}

.check {
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.check:hover {
  background: rgba(0, 50, 200, 0.1);
  }
  .input {
  height: 2rem;
  width: 2rem;
  border-radius: 16px;
  cursor: pointer;
}

.icon {
  height: 1.5rem;
  width: 1.5rem;
}

.title {
  height: 4rem;
  width: 100%;
  background: none;
  text-align: left;
  border-width: 0;
  padding: 0 1rem;
  font-size: 1rem;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-left: 1px solid grey;
}

.title:hover {
  background: rgba(0, 50, 200, 0.1);
}

</style>

      <li class="wrapper"
          <label class="check">
            <input class="input" type="checkbox" data-check/>
          </label>
                <button class="title" data-title ></button>
          <button class="check" data-remove style="display: none">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              
            >
              <path
                d="M253 961q-40.212 0-67.606-27.1Q158 906.8 158 867V314h-58v-94h231v-48h297v48h232v94h-58v553q0 39.05-27.769 66.525Q746.463 961 707 961H253Zm454-647H253v553h454V314ZM354 789h77V390h-77v399Zm175 0h78V390h-78v399ZM253 314v553-553Z"
              ></path>
            </svg>
          </button>
          </li>

`
customElements.define('single-task',

class extends HTMLElement {
  /**
   *
   * @type {string}
   */
  #title = this.getAttribute('title');

  /**
   * 
   * @type {boolean}
   */
  #completed = this.getAttribute('completed');

  #elements = {
    /**
     * @type {undefined | HTMLElement}
     */
    check: undefined,
    title: undefined,
    remove: undefined,
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

    console.log(this.#title, this.#completed)
  }

  connectedCallback(){
    this.#elements ={
      check: getHtml({dataAttr: 'check', target: this.#inner}),

      remove: getHtml({dataAttr: 'remove', target: this.#inner}),
      title: getHtml({dataAttr: 'title', target: this.#inner})
    }

    this.#elements.title.innerText = this.#title

    if (!(this.#elements.check instanceof HTMLInputElement)){
      throw new Error('Required to be input element')
    }
    this.#elements.check.checked = this.#completed;
  }
}
);