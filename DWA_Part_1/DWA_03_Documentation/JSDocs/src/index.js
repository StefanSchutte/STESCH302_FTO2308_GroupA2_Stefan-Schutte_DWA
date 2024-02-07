//@ts-check

const {add, divide, multiply, subtract } = require('./calculator.js')


/**
 *
 * @file classes.js is root file for example app
 * @author Brad
 * @see <a href="google.com">
 */

/**
 * Student Name
 * @type {string}
 */
const studentName = "John Doe"

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 97.7, 76, 89];

/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = {
    id: 1,
    text: 'Helo'
};

//FUNCTIONS AND PARAMS

/**
 * Calculate tax
 * @param {number}amount - total amount
 * @param {number}tax - tax percentage
 * @returns {string} - total with a dollar sign
 */
const calculateTax = (amount, tax) => {
    return `${amount + tax * amount}`;
};
//console.log(calculateTax(100, 0.5));

//CUSTOM TYPES

/**
 * A student
 * @typedef{Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string | number}[age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
    id: 1,
    name: 'John Doe',
    age: 20,
    isActive: true,
}

//CLASS
/**
 * Class to create a person obj
 */
class Person {
    /**
     *
     * @param {Object}personInfo - Information about person
     */
    constructor(personInfo) {
        /**
         * @property{string} name - Name of person
         */
        this.name = personInfo.name;
        /**
         *
         * @property{string} age - Age of person
         */
        this.age = personInfo.age;
    }

    /**
     * @property {Function} greet A greeting function with name and age.
     * @returns {void}
     */
    greet(){
        console.log(`Helo, my name is ${this.name} and I am ${this.age}`);
    }
}

/**
 * Person one
 * See {@link Person}
 */
const person1 = new Person({
    name: 'John',
    age: 30
})
console.log(person1.greet());

console.log(add(20, 30))