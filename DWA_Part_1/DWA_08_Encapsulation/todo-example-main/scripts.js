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

import { createTask } from './modules/tasks.js'
import { createAdding } from './modules/adding.js';

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

const adding = createAdding();
adding.submission = createTask;