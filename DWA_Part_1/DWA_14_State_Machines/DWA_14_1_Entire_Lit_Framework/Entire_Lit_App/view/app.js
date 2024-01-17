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

      <sl-dialog .open=${phase === "adding"} label="New Task">
        <form>
          <td-spacing bottom="xl">
              <sl-input filled name="title" label="Title" required></sl-input>
    
            <td-spacing bottom="s">
              <sl-input type="date" filled name="due" label="Due Date" required></sl-input>
          </td-spacing>
            
          <td-spacing bottom="s">
<!--              <sl-input filled name="urgency" label="Urgency" required></sl-input>-->
            
            <sl-select value="normal" filled label="Urgency">
              <sl-option value="high">High</sl-option>
              <sl-option value="normal">Normal</sl-option>
              <sl-option value="low">Low</sl-option>
            </sl-select>
          </td-spacing>
          </td-spacing>  
          
          <div slot="footer">
            <sl-button type="button">Cancel</sl-button>
            <sl-button variant="primary" type="submit">Save</sl-button>
          </div>
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