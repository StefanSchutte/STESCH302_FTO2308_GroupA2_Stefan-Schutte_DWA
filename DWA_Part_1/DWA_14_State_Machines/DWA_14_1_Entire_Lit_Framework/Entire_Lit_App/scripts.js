import './components/td-spacing.js'
import './components/td-app.js'
import { render } from './libs/lit-html'
import {app} from './view/app.js'
import {dispatch, subscribe, getState} from './model/store.js'
import {addTask} from './model/actions.js'

import './components/td-adding.js'
import './components/td-task.js'

//
// import {html, render} from "https://unpkg.com/lit-html?module";
//
// console.log(html, render)
//
// // const tree = html `
// // <div>123
// // <span>123</span>
// // </div>
// // `
// // console.log(tree)
//
// /**
//  *
//  * @param {string} name
//  */
// const createView = (name) => {
//   return html`
//     <div>Hello your name is ${name}</div>
//   `
// }
//
// const example1 = createView('Stefan')
// const example2 = createView('Stefann')
// console.log(example1, example2)
//
// const tree1 = createView('Stefan')
// const tree2 = createView('Stefann')
// render(tree1, document.querySelector('[data-app]'))
//
// setTimeout(() => {
//   render(tree2, document.querySelector('[data-app]'))
// }, 3000)
//
//

//
// const html = document.querySelector('[data-app]')
// const initialRender = app(getState());
// render(initialRender, html)
//
//
//
// subscribe((_, next) => {
//   const newRender = app(next);
//   render(newRender, html)
// });
//
// document.body.addEventListener('submit', (event)=> {
//
//   event.preventDefault()
//
//   if (!(event.target instanceof  HTMLFormElement)){
//     throw new Error('Form required')
//   }
//
//   const data = new FormData(event.target);
//   const { title } = Object.fromEntries(data)
//
//
//   dispatch(addTask({ title: title.toString()}));
//   event.target.reset();
//
//   console.log(title)
//
//   console.log(event)
// })