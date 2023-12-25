// @ts-check
import { doesHtmlExist, getHtml } from './helper.js'
// eslint-disable-next-line no-unused-vars
import { Task } from './state.js'

export const addTask = () => {
  /**
   *..
   * @param {string} id - ..
   */
  const addTaskToHTML = (id) => {
    if (doesHtmlExist('task', id)) {
      throw new Error('Task with that ID already added')
    }

    const list = getHtml({dataAttr: 'list'} )
    const preview = document.createElement('li')
    preview.className = 'task'
    preview.dataset.task = id

    preview.innerHTML = /* html */ `
          <label class="task__check">
            <input class="task__input" data-checkbox type="checkbox" disabled/>
          </label>
                <button class="task__title" data-table disabled></button>
          <button class="task__check" data-delete style="display: none">
            <svg
              class="task__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              
            >
              <path
                d="M253 961q-40.212 0-67.606-27.1Q158 906.8 158 867V314h-58v-94h231v-48h297v48h232v94h-58v553q0 39.05-27.769 66.525Q746.463 961 707 961H253Zm454-647H253v553h454V314ZM354 789h77V390h-77v399Zm175 0h78V390h-78v399ZM253 314v553-553Z"
              ></path>
            </svg>
          </button>

`

    list.appendChild(preview)
  }

  /**
   *
   * @param {string} id
   * @param {Partial<Pick<Task, 'completed' | 'due' | 'title' | 'urgency'>>} changes
   */
  const updateHtmlTask = (id, changes) => {

    const { completed, title } = changes;
    const element = getHtml('task', id)

    const hasCompleted = completed !== undefined
    // const hasDue = due !== undefined
    const hasTitle = title !== undefined
    // const hasUrgency = urgent !== undefined

    if (hasCompleted){
      getHtml('checkbox')
    }

    if (hasTitle){
      getHtml('checkbox')
    }



    //   document.querySelector(`[data-task="${id}"]`)
    // const isHtmlElement = element instanceof HTMLElement
    // if (!isHtmlElement) throw new Error('');
  }
}


//
// /**
//  * @param {Omit<Props, 'completed'>} props
//  */
// export const createTask = (props){
//   const id = createUniqueId();
//   addTaskToHtml(id)
// }
