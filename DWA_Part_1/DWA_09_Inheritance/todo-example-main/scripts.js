// @ts-check

// import { state, Task } from "./modules/state.js";
// console.log("It works");
//
// window.addEventListener('error', () => {
//     document.body.innerHTML = 'Something went wrong. Please refresh.'
// })
//
// addTaskToHTML()
//
// addTaskToHTML('test')
// updatHtmlTask('test', {title: 'wash the dog' });
//
import {getHtml} from './modules/helper.js'
import './components/single-task.js'
import { Task } from './modules/tasks-backup.js'
import { createAdding } from './modules/adding.js';
import { TaskAdding } from './components/task-adding.js'

//
// const list =  [
// createTask({
//     title: "wash the dog",
//     urgency: "high",
//     due: null,
// }),
//
// createTask({
//     title: "wash the dog",
//     urgency: "high",
//     due: null,
// }),
//
// createTask({
//     title: "wash the dog",
//     urgency: "high",
//     due: null,
// }),
// ];
//
// list[1].completed = true;

const addButton = getHtml({dataAttr: 'add-button'})
const taskAdding = getHtml({dataAttr: 'adding'})

if(!(addButton instanceof HTMLElement) ) {
  throw new Error ('data-add')
}

if(!(taskAdding instanceof TaskAdding)){
  throw new Error ('Invalid task-adding in HTML')
}
addButton.addEventListener('click', () => {
  taskAdding.open = true;
})

taskAdding.addEventListener('added', (event) => {
  if (!(event instanceof CustomEvent)){
    throw new Error('REguired to be custom event')}

  console.log(event.detail)


  console.log(event)
})

window.addEventListener('error', () => {
  document.body.innerHTML = `<div>Something went very wrong</div>`;
})

const task = document.createElement('single-task')
console.log(task)
console.log(document.querySelector('.wrapper'))


const adding = createAdding();
adding.submission = (data) => new Task(data);

// const example = new Task({
//   title: "Do homework",
//   due: null,
//   urgency: "high",
// })
// example.id = "asdasd"
// example.title = "Do homework";
// console.log(example.created)

// class Example extends HTMLElement {
//   connectedCallback(){
//     this.innerText = 'Hello'
//   }
// }
//
// customElements.define('example-schalk', Example)