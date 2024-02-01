const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

/**
 * Handlles submission to perform division and display result.
 * @param {Event}} event - submit event triggered vy form.
 */
form.addEventListener("submit", (event) => {
    event.preventDefault();

    /**
     * Retrieves form data
     * @type {FormData}
     */
    const entries = new FormData(event.target);

    /**
     * Destructures form data into dividend and divider.
     * @type {Object}
     * @property {number|string} dividend - Dividend input value.
     * @property {number|string} divider - Divider input value.
     */
    const {dividend, divider} = Object.fromEntries(entries);

    try {
        /**
         * Check if both fields are filled in, if not throws err.
         */
        if (!dividend || !divider) {
            throw new Error("Both values are required in inputs. Try again");
        }

        /**
         * Checks if either is not a number. Throws err if true.
         */
        if (isNaN(dividend) || isNaN(divider) ) {
            document.body.innerHTML = 'Something critical went wrong. Please reload the page.'
            console.error('Something critical went wrong. Please reload the page.')//huh
        }

        /**
         * Checks if divider is less than 0.
         */
        if (divider <= 0) {
            throw new Error(`Invalid number provided. Try again`);
        }

        /**
         * Calc floor of division result and updates display.
         * @type {number}
         */
        result.innerText = Math.floor(dividend / divider);//round result

    } catch (error) {
        /**
         * Updates result display with err msg.
         * @type {string}
         */
        result.innerText = `Division not performed. ${error.message}`;
        console.error(error);
    }
});