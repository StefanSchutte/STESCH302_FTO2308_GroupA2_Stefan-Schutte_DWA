import { LitElement, css, html } from '../libs/lit-html.js'
import { Task } from '../model/store.js'

/**
 * @type {Array<Task>}
 */
const TESTING = [
  {
    id: 'ec628dc9-035c-4ce9-ad31-32fe98ba624d',
    title: 'wash the dog',
    urgency: 'high',
    due: null,
    completed: false,
    created: new Date()
  },
]

class App extends LitElement {

  static styles = css`
      ul {
          margin: 0;
          padding: 0;
      }
      
    li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
  `

  /** @returns {any} */
  render(){

    const list = TESTING.map(({ completed, created, due, id, title, urgency }) => {
      return html`
      <li>
        <td-task title="${title}" ?completed=${completed} urgency=""${urgency} .due="${due}" .created="${created}"></td-task>
      </li>
      `
    })

    return html`
    <div>
      <td-spacing left="m" right="m" top="l" bottom="xl">
      <header>
        <h1>Todo App</h1>
        <td-adding @save=${console.log}></td-adding>
      </header>
      
      <main>
        <h2>Tasks ()</h2>
        <ul>
          ${list}
<!--          <li><td-task title="hello" completed ></td-task></li>-->
        </ul>
      </main>
      </td-spacing>
    </div>
    `
  }
}
customElements.define("td-app", App)
