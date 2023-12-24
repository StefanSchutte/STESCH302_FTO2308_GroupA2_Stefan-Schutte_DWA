// @ts-check

import { state, Task } from "./modules/state.js";
console.log("It works");

window.addEventListener('error', () => {
    document.body.innerHTML = 'Something went wrong. Please refresh.'
})

addTaskToHTML()

addTaskToHTML('test')
updatHtmlTask('test', {title: 'wash the dog' });

