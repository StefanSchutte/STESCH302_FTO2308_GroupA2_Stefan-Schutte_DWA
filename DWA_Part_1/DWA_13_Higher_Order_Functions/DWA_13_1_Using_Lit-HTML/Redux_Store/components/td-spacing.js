import {templateString} from './td-spacing.helpers.js'

const template = document.createElement('template')



template.innerHTML = /* html */`

<style>
  :host([left='xs']){
  div {}
  }
</style>

<div>
<slot></slot>
</div>
`

/**
 * @element td-spacing
 * @attr{'xs'|'s'|'m'|'l'|'xl'} left
 * @attr{'xs'|'s'|'m'|'l'|'xl'} right
 * @attr{'xs'|'s'|'m'|'l'|'xl'} top
 * @attr{'xs'|'s'|'m'|'l'|'xl'} bottom
 */
export class Spacing extends HTMLElement {

  #inner = this.attachShadow({mode: 'closed'})

  constructor (){
    super()
    const node = template.content.cloneNode(true)

    this.#inner.appendChild(node)
  }
}

customElements.define('td-spacing', Spacing)
export default Spacing