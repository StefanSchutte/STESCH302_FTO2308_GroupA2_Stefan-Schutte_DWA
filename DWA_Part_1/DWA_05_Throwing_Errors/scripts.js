//@ts-check

const modeHTML = document.querySelector('[data-mode]');
const intensityHTML = document.querySelector('[data-intensity]');

/**
 *
 * @param {string} label
 * @return {HTMLElement}
 */
const getHtml = (label) => {
    const node = document.querySelector(`[data-${label}]`);
    if (!(node instanceof HTMLElement)){
        throw new Error("[data-${label}] was not found in HTML")
    }
    return node
}

const html = {

    alert: getHtml("alert"),

    mode: {
        display: getHtml('mode-display'),
        button: getHtml('mode-button'),
    },

    intensity: {
        display: getHtml('intensity-display'),
        button: getHtml('intensity-button'),
    }
}

/**
 * @typedef {object} Data
 * @prop {'low' | 'high'} intensity
 * @prop {'wide' | 'focus'} mode
 * @prop {boolean} locked
 */

/**
 * @type {Data}
 */
const data = {
    intensity: 'low',
    mode: 'wide',
    locked: true,
}

const lockFn = () => {
    if (data.locked) throw new Error('Already locked')

    data.locked = true;

    return () => {
        data.locked = false;
    }
}

const toggleMode = () => {
    try {
        const unlock = lockFn()

        setTimeout(() => {
            const newMode = data.mode === 'wide' ? "focus" : "wide";
            data.mode = newMode;
            html.mode.display.innerText = newMode;
            unlock();
        }, 2000);
    } catch (error){
        html.alert.innerText = `${error.message}Operation could not be performed, since another operation is in progress. Please try again in a few seconds`
        const interval = setInterval(() => {
            if (!data.locked){
                html.alert.innerText = '';
                clearInterval(interval);
            }
        }, 1000)
    }
};

const toggleIntensity = () => {
    try {
        const unlock = lockFn();
        const newIntensity = data.intensity === 'low' ? "high" : "low";
        data.intensity = newIntensity;
        html.intensity.display.innerText = newIntensity;
        unlock();
    } catch (error){
        html.alert.innerText = `Operation could not be performed, since another operation is in progress. Please try again in a few seconds${error.message}`;
        const interval = setInterval(() => {
          if (!data.locked){
              html.alert.innerText = '';
              clearInterval(interval);
          }
        }, 1000)
    }
};

html.intensity.button.addEventListener("click", toggleIntensity);
html.mode.button.addEventListener("click", toggleMode);

window.addEventListener('error', ()=> {
    document.body.innerHTML = /* html */`
    Something went wrong on our side. Please restart and try again.
    If issue persists please contact support.
    `
})

html.intensity.display.innerText = data.intensity;
html.mode.display.innerText = data.mode;
data.locked = false;