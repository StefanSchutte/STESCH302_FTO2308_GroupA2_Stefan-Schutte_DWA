/*
//pure function

let num = 123;

function toString(val){
    num = val;
        return val.toString()
}
const str = toString(num)
console.log(typeof str)//string

//immutable Data
const data = Object.freeze([1,2,3,4,5,6]);

//functions as arguments
const addEmoji = (val) => toString(val) + 'emoji';

const emojiData = data.map(addEmoji)
console.log(emojiData)

//functions as return value

const appendEmoji = (fixed) => (dynamic) => fixed + dynamic;

const rain = appendEmoji('rain');
const sun = appendEmoji('sun');

console.log( rain('today')) //rain today
console.log( sun('tomorrow'))   //sun tomorrow

//object oriented typescript

class Emoji {
    //icon: string;

    constructor(private _icon){}
       //this.icon = icon;
    get icon () {
        return this._icon
    }

    get prev() {
    return this._prev}

    change(val){
        this._prev = this._icon;
    }

}
const sun = new Emoji('sunn')
console.log(sun('sunn')) //Emoji { icon: 'sunn'}

//es3
var Emoji = (function (){
    function Emoji(value){
        this.value = value;
    }
    return Emoji
}());

//Static Methods

class Emoji {
    static addOneTo(val){
        return 1 + val;
    }
}
Emoji.addOneTo(3)

//inheratence

class Human {
    constructor(public name){}

    sayHi(){
        return `Hello, ${this.name}`;
    }
}
const patrick = new Human('Patrick Mullot')
console.log( patrick.sayHi()); //Hello, Patrick Mullot

*/