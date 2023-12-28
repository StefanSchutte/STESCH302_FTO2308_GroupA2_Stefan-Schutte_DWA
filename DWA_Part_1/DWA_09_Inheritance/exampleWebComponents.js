class Example extends HTMLElement {
  connectedCallback(){
    this.innerText = 'Hello'
  }
}

customElements.define('example-schalk', Example)