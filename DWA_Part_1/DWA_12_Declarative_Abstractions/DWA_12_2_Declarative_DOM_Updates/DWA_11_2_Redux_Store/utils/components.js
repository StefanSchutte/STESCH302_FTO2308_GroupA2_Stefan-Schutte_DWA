import { subscribe, State } from '../model/store.js'

/**
 * @callback GetHTML
 * @param {string} key - The data-key attribute value of the element to find
 * @param {boolean} [strict] - if true throws an error if not a single match is found. Is true by default
 * @returns {Array<HTMLElement>}
 */

/**
 * @callback Handler
 * @param {Event | CustomEvent} event
 * @param {GetHTML} getHTML
 */

/**
 * @callback Connect
 * @param {State} prev
 * @param {State} next
 * @param {GetHTML} getHTML
 */

/**
 * @typedef {object} Props
 * @prop {string} element
 * @prop {string} template
 * @prop {Record<string, Handler>} [events]
 * @prop {Connect} [connect]
 */

/**
 * @param {any} nodeList
 * @returns {Array<HTMLElement>}
 */
const nodeListToArray = (nodeList) => {
  const result = Array.from(nodeList);
  return
}

/**
 *
 * @param {Props} props
 */
export const createComponent = (props) => {

  const { element, template: templateString, events, connect } = props;

  if (!element.includes('-')){
    throw new Error("Element name must include a hyphen")
  }


  const template = document.createElement('template');
  template.innerHTML = templateString


  class Component extends HTMLElement {

    #inner = this.attachShadow({ mode: 'closed'})

    #unsubscribe = null;

    #listeners = [];

    constructor() {
      super();

      const node = template.content.cloneNode(true);

      this.#inner.appendChild(node)
    }

    connectedCallback(){

      const getHtml = (key, strict) => {
        const results = this.#inner.querySelector(`[data-key='${key}']`)

        // @ts-ignore
        if (strict !== false && results.length < 0){
          throw new Error(`No elements found with data-key "${key}"`)
        }
        return nodeListToArray(results)
      }

      if (events) {
        Object.entries(events).forEach(([key, handler]) => {

          const wrapper = (event) => {
            handler(event, getHtml);
          }
          this.#listeners.push({key, wrapper});
          this.#inner.addEventListener(key, wrapper)
        })
      }

      if (connect){
        const wrapper = (prev, next) => {
          connect(prev, next, getHtml)
        }
        this.#unsubscribe = subscribe(wrapper)
      }
    }

    disconnectedCallback() {
      if (events){

        this.#listeners.forEach(([key, wrapper]) => {
          this.#inner.removeEventListener(key, wrapper)
        })
      }
      if (this.#unsubscribe) this.#unsubscribe();

    }
  }

  customElements.define(element, Component);
  return Component;
}