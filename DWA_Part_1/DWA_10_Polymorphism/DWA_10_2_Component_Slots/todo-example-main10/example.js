const obj = {
  name: 'schalk',
  surname: 'venter'
}
// destructuring
// const {name, surname} = obj;

// old way
const {name} = object;
const {surname} = object;


// how to do tele app as class

/**
 * @callback Update
 * @param {number} [amount]
 */

/**
 * @callback EmptyFn
 */

/**
 * @typedef {object} ICounter
 * @prop{Update} increase
 * @prop{Update} decrease
 * @prop {EmptyFn} display
 */

/**
 * @returns {ICounter}
 */
const createCounter = (props) => {
  class Shape {
    #value = 1;

    constructor(label) {
      this.label = label
    }

    increase(amount) {
      this.#value += amount || 1;
    }

    decrease(amount) {
      this.#value -= amount || 1;
    }

    display() {
      console.log(`${this.#value}${this.label}`);
    }
  }
  return new Shape(props);
}
const example = createCounter();

// example.value = 20;
example.increase()
example.decrease()
example.display()

/*
const counter = {
  value: 10,
  increase() {
    counter.value += 1,

  }
}
*/


class Counter {
  #value = 1;

  static firstName = 'Schalk';

  static lastName = 'Venter'

  static greet() {
    return 'helo'
  }

  set diffValue (newValue){
    this.value = newValue;
  }

  get diffValue (){
    return this.value;
  }

  /**
   *
   * @param {string} label
   */
  constructor(label) {
    this.label = label
  }

  increase(amount) {
    this.#value += amount || 1;
  }

  decrease(amount) {
    this.#value -= amount || 1;
  }

  display() {
    console.log(`${this.#value}${this.label}`);
  }
}
const example2 = new Counter("celsius")
example2.display();


const today = new Date()
Math.random()// static

console.log(Counter.firstName, Counter.lastName, Counter.greet())

example2.value;
example2.diffValue

// inheritance

class Animal {
  alive = false

  run(){
    this.alive = true
  }
}

const instance = new Animal()
console.log(instance.alive)

class Mammal extends Animal {
  legs = undefined
}

class Dog {
  legs=4
}

class Cat {
  legs = 4;
}

class SpotTheDog extends Dog {
  legs = 3;

  run() {
    console.log('Zoom')
  }
}

const example3 = new Cat()
const example4 = new Mammal()
const example5 = new SpotTheDog()
console.log(example3.legs, example4.legs, example5.legs)

example3.run();
console.log(example3.alive)

// inheritaance hides too many things instead:

// mixin

const flyable = {
  isFlying: false,
  liftOff () {this.isFlying = true},
  land () {this.isFlying = false},
}

const metal = {
  material: 'hard',
  tap: ()=> console.log('clang')

}

const feathers = {
  material : 'soft',
  tap: ()=> console.log('shhh')
}

const airplane = {
  ...flyable,
  ...metal,
}

const duck = {
  ...flyable,
  ...feathers
}

airplane.liftOff()
airplane.tap()// clang

duck.liftOff()
duck.land()
duck.liftOff()
duck.tap()// shhh


// web components

// underlining logic that classes abstract

// prototypes

class EventTarget extends Object {}
class Node extends EventTarget {}

/// from object up to HTMLElement = prototypal chain

// what does class do under hoof

class Example10 {
  test = undefined;

  constructor(label){
    this.test = label;
  }
}

const instance10 = new Example10('one')

function Example20(label){
  this.test  = label
}
const example20 = new Example20('one')
console.log(instance10, example20)

console.log(example20 instanceof instance10)

// how does prototypal inheratance work

const instance30 = new SpotTheDog()
instance30.bark()


class Bird extends Animal{
  wings = 2
}

const instance40 = new Bird()

Animal.prototype.legs = 9;
console.log(instance40.legs)// 9