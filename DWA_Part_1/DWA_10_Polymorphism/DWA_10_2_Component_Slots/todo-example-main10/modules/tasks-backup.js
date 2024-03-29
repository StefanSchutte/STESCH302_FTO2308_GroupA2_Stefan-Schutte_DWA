// @ts-check

/**
 * @typedef {'high' | 'medium' | 'low'} Urgency - The priority that the tasks
 * should take in terms of how quickly it should be completed
 *
 * @typedef {'recent' | 'oldest' | 'upcoming'} Sorting - One of three possible
 * predefined ordering approaches that task can be shown in. `recent` arranges
 * based on the tasks that were created closest to the current date, `oldest`
 * does the opposite, and `upcoming` arranges based on the closest due date (if
 * no due date it will be placed last).
 */

/**
 * @typedef {object} Task - An object representing a task to be shown to a user
 * @prop {string} id - A unique value generated by {@link createId} used to identify a task.
 * @prop {string} title - A short user-provided description of what the task entails
 * @prop {boolean} completed - Whether the task has been completed or not
 * @prop {Date} created - The exact date when the task was created in the system
 * @prop {null | Date} due - A user specified date for when the task should be completed
 * @prop {Urgency} urgency - A user specified indication of how important the task
 */

import { doesHtmlExist, getHtml, createUniqueId } from './helper.js'
// eslint-disable-next-line no-unused-vars
// import { Task } from './state.js'


export const addTask = () => {
  /**
   *..
   * @param {string} id - ..
   */
  const addTaskToHtml = (id) => {
    if (doesHtmlExist('task', id)) {
      throw new Error('Task with that ID already added')
    }

    const list = getHtml({dataAttr: 'list'} )
    const preview = document.createElement('li')
    preview.className = 'task'
    preview.dataset.task = id

    preview.innerHTML = /* html */ `
          <label class="task__check">
            <input class="task__input" data-checkbox type="checkbox" />
          </label>
                <button class="task__title" data-title ></button>
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
    const element = getHtml({ dataAttr: 'task', value: id})

    const hasCompleted = completed !== undefined
    // const hasDue = due !== undefined
    const hasTitle = title !== undefined
    // const hasUrgency = urgent !== undefined

    if (hasCompleted){
      const inner = getHtml({ dataAttr: 'checkbox', target: element})
      if (!('checked' in inner)) throw new Error('Expected input element')
      inner.checked = completed
    }

    if (hasTitle){
      const inner = getHtml({dataAttr: 'title' , target: element})
      inner.innerText = title;
    }



    //   document.querySelector(`[data-task="${id}"]`)
    // const isHtmlElement = element instanceof HTMLElement
    // if (!isHtmlElement) throw new Error('');
  }
}

/**
 * @param {Omit<Props, 'completed'>} props
 * @returns {Task}
 */
export class Task  {
  /**
   *
   * @type {string}
   */
  #id = createUniqueId();

  /**
   *
   * @type {boolean}
   */
  #completed = false;

  /**
   *
   * @type {Date}
   */
  #created = new Date()

  /**
   *
   * @type {string}
   */
  #title = undefined;

  /**
   *
   * @type {string}
   */
  #urgency = undefined;

  /**
   *
   * @type {}
   */
  #due = undefined;


  /**
   * @param {Omit<Props, 'completed'>} props
   */
  constructor(props) {
    this.#due = props.due
    this.#urgency = props.urgency
    this.#due = props.due

    addTaskToHtml(this.#id)

    updateHtmlTask(this.#id, {
      completed: this.completed,
      ...props
    })
  }

    get id () {
      return this.#id
    }

    set id (newValue){
      throw new Error('Cannot directly change ID')
    }

    get completed () {
      return this.#completed
    }

    set completed (newValue){
      if (typeof newValue !== boolean) throw new Error ('completed" is not a boolean')
      if (newValue === this.#completed) return
      this.#completed = newValue;

      updateHtmlTask (this.#id, {
        completed: newValue
      })
    }

    get created () {
      return this.#created
    }

    // eslint-disable-next-line class-method-use-this
    set created (newValue){
      throw new Error('Cannot directly change created')
    }

    get title(){
      return this.#title
    }

    set title(newValue){
      if (!newValue || typeof newValue !== 'string' || newValue.trim() === ''){
        throw new Error('"title" is required to be a non-empty string')
      }
      this.#title = newValue;
      updateHtmlTask(this.#id, {
        title: newValue
      })
    }

    get urgency(){
      return this.#urgency
    }

    set urgency(newValue){
      /**
       * @type {Array}
       */
      const valid = ['high', 'low', 'medium'];
      if (!valid.includes(newValue)){
        throw new Error('Valid is required to be high, low, medium')
      }

      this.#urgency = newValue
    }

    get due(){
      return this.#due
    }

    set due(newValue){
      if (!(newValue instanceof Date)){
        throw new Error ('due is required to be a date')
      }

      this.#due = newValue
    }

}
export default Task;
