const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

/**
 * Handles submission to perform division and display result.
 * @param {Event} event - submit event triggered by form.
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
    const { dividend, divider } = Object.fromEntries(entries);

    try {
        /**
         * Check if both fields are filled in, if not update result with error message and return.
         */
        if (!dividend || !divider) {
            result.innerText = "Both values are required in inputs. Try again";
            return;
        }

        /**
         * Checks if either is not a number. Updates result with error message and return if true.
         */
        if (isNaN(dividend) || isNaN(divider)) {
            document.body.innerHTML = 'Something critical went wrong. Please reload the page.';
            console.error('Something critical went wrong. Please reload the page.');
            return;
        }

        /**
         * Checks if divider is less than or equal to 0.
         * Updates result with error message and return if true.
         */
        if (divider <= 0) {
            result.innerText = `Invalid number provided. Try again`;
            return;
        }

        /**
         * Calculates floor of division result and updates display.
         * @type {number}
         */
        result.innerText = Math.floor(dividend / divider);//round result

    } catch (error) {
        /**
         * Updates result display with error message.
         * @type {string}
         */
        result.innerText = `Division not performed. ${error.message}`;
        console.error(error);
    }
});