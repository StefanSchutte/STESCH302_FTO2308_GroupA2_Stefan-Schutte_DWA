import {html} from '../libs/lit-html.js'
import {State} from '../model/store.js'

/**
 * @param {State} state
 * @returns {any}
 */
export const app = (state) => {

  const { tasks } = state
  const tasksAsArray = Object.values(tasks)

  return html `
    <div>
<td-spacing bottom="xl" >123</td-spacing>
      <sl-dialog open>
        <form>

<!--          <label>-->
<!--            <span>New Task</span>-->
<!--            <input name="title">-->
<!--          </label>-->

          <sl-input filled name="title" label="Task Name" required></sl-input>
          
          <sl-button>Cancel</sl-button>
          <sl-button variant="primary">Save</sl-button>
        </form>
      </sl-dialog>
      
      <header>
        <h1>Todo App</h1>
        
        <sl-button variant="primary">Add Task</sl-button>
        
      </header>
      
      <main>
        <h2>Tasks (${tasksAsArray.length || 0})</h2>
        <ul>
          
        </ul>
      </main>
      
      
    </div>
  `
}