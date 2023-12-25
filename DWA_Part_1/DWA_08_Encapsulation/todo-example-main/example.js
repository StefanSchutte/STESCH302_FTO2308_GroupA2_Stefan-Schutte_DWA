// @ts-check

let value = 3;

const increase = () => {
  value += 1;
};

const decrease = () => {
  value -= 1;
};

increase();
decrease();
increase();
console.log(value);

//  combine data and behaviour into a single encapsulated unit

const counter = {
  value: 1,
  /**
   * Increase counter value by 1
   */
  increase (){
    this.value += 1;
  },
  decrease (){
    /**
     * Decrease counter value by 1
     * @type {number}
     */
    counter.value -= 1;
  },
  /**
   * Logs counter value
   */
  display(){
    console.log(this.value)
  }
}
counter.increase();
counter.increase();
counter.display();

// factory function

/**
 * @callback Modify
 * @param {number} [amount] - the amount to modify value with
 */

/**
 * @callback EmptyFn
 */

/**
 * Objets that keeps internal state and allows you to increase, decrease and log the value.
 * Note that there is no way to access the value from inside.
 * @typedef {object} Counter
 * @prop {Modify} increase
 * @prop {Modify} decrease
 * @prop {EmptyFn} display
 *@prop {string} label
 */


/**
 * @param {string} label - Actual value that is being measured
 * @returns {Counter}
 */
const createCounter = (label) => {
  let value2 = 1;
  let innerLabel = label

  const increase2 = (amount) => { value2 += amount || 1};
  const decrease2 = (amount) => { value2 -= amount || 1};
  // eslint-disable-next-line
  const display2 = () => console.log(`${value2} ${innerLabel}`);

  return {
    increase2,
    decrease2,
    display2,

    get label (){
      return innerLabel
    },

    set label (newLabel){
     innerLabel = `${newLabel} is the label`;
      // throw new Error(`Label can not be updated to ${value}`)
    },
  };
};
// const counter2 = createCounter();
// counter2.value2 = 10;
// counter2.increase2();
// counter2.display2();

const temperature = createCounter('Celsius');
const humidity = createCounter('Humidity');
console.log(temperature.label)
temperature.label = "F"

humidity.increase2(30);
temperature.decrease2(3)
temperature.display2();