// @ts-check

import { state, Task } from "./modules/state.js";
import {addTask} from "./modules/tasks"
console.log("It works");

window.addEventListener('error', () => {
    document.body.innerHTML = 'Something went wrong. Please refresh.'
})

addTaskToHTML()

addTaskToHTML('test')
updateHtmlTask('test', {title: 'wash the dog' });

