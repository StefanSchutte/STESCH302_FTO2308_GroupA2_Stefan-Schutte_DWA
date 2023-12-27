// Why use getters & setters?

// a way to get/set the properties of an object
// Secures better data quality
// Does extra things behind-the-scenes

class User {

  constructor(first, last){
    this.first = first;
    this.last = last;
  }
  set first(value){
    this.firstName = value.toUpperCase();
  }
  set last(value){
    this.lastName = value.toUpperCase();
  }
  get fullName() {
    return this.firstName+" "+this.lastName;
  }
};

let user1 = new User("spongebob", "squarepants");
let user2 = new User("patrick", "star");

console.log(user1.fullName);
console.log(user2.fullName);

/*
these are ways to
get or set the properties of an object
they secure better data quality and they
can do extra things behind the scenes
i have a simple user object there's
three properties
first name last name and full name full
name contains a function
that will return this first name and
this last name
so without using getters and setters to
assign some of these properties
i would just type the name of the
property so user
dot first name and we can assign some
first name like
spongebob he's a cool dude and then
let's assign a last name to this user
so that would be user dot last name
equals some last name okay
then to call this function within my
property full name
within a console.log statement i would
type
the name of the object dot the name of
the property full name
then add a set of parentheses to invoke
it and as you would expect
this displays spongebob squarepants now
this time
let's assign some values to these
properties using getters and setters
and there's a specific keyword for each
of these we will
set some of these values of these
properties so let's create a setter for
first name
so we use this set keyword followed by a
unique function name
let's say first because we're going to
set the first name
and then there is one parameter and with
setters there can only be one parameter
so let's just name it value so within
the setter we will take
this dot first name
and assign it equal to our value that we
assign
now let's do the same thing with last
set
last this dot last name
equals some value that we pass in then
be sure to separate these setters with a
comma
okay so now what we're going to do is
use user dot the name of the setter
so this would not be user.firstname it
would be user.first
so currently this works the same as
before however we have an entire block
of code
dedicated to assigning and formatting
this value
so let's say we would like to make the
name all uppercase we can just add that
on
value to uppercase
and let's do the same thing with
lastname
cool my name is all uppercase then so if
there's any other formatting or
calculations that you need to do you can
just add that to your setter
now let's change this full name property
to a getter
so we need to use the get keyword let's
get rid of this function portion
but keep the parentheses now to access
this full name we do not need to invoke
it
we can access it like we do a property
so that would do the same thing too
now where getters and setters are really
useful is when you use them within a
class
so let's turn our single user object
into a class
class user and let's create a
constructor
constructor and there are two parameters
first and last first comma last
now let's take these two lines of code
and we're going to move them to within
our constructor
and they are going to behave very
similarly so
this dot first this dot last this dot
first
equals first this dot last
equals last we can get rid of these
properties here
and get rid of those commas okay now
let's construct a user object
let user equal new
user then pass in a first name and a
last name
spongebob squarepants
cool let's create a second user
so we have user one and user two
user two will be patrick
star and then we have to display the
name
so user two dot full name
spongebob squarepants and patrick star
so that's the benefit of using
getters and setters it's a way to get
and set properties of an object
it secures better data quality and it
does extra things behind the scenes if
you need to do any sort of formatting
so those are getters and setters
 */

/*
//Property getters and setters
//There are two kinds of object properties.

  //The first kind is data properties. We already know how to work with them. All properties that we’ve been using until now were data properties.

  //The second type of property is something new. It’s an accessor property. They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.

  //Getters and setters
//Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by get and set:

  let obj = {
    get propName() {
      // getter, the code executed on getting obj.propName
    },

    set propName(value) {
      // setter, the code executed on setting obj.propName = value
    }
  };
//The getter works when obj.propName is read, the setter – when it is assigned.

  //For instance, we have a user object with name and surname:

  let user = {
    name: "John",
    surname: "Smith"
  };
//Now we want to add a fullName property, that should be "John Smith". Of course, we don’t want to copy-paste existing information, so we can implement it as an accessor:

  let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };

alert(user.fullName); // John Smith
//From the outside, an accessor property looks like a regular one. That’s the idea of accessor properties. We don’t call user.fullName as a function, we read it normally: the getter runs behind the scenes.

  //As of now, fullName has only a getter. If we attempt to assign user.fullName=, there will be an error:

  let user = {
    get fullName() {
      return `...`;
    }
  };

user.fullName = "Test"; // Error (property has only a getter)
//Let’s fix it by adding a setter for user.fullName:

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper
//As the result, we have a “virtual” property fullName. It is readable and writable.

  //Accessor descriptors
//Descriptors for accessor properties are different from those for data properties.

  //For accessor properties, there is no value or writable, but instead there are get and set functions.

  //That is, an accessor descriptor may have:

 // get – a function without arguments, that works when a property is read,
 // set – a function with one argument, that is called when the property is set,
 // enumerable – same as for data properties,
//  configurable – same as for data properties.
 // For instance, to create an accessor fullName with defineProperty, we can pass a descriptor with get and set:

  let user = {
    name: "John",
    surname: "Smith"
  };

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

alert(user.fullName); // John Smith

for(let key in user) alert(key); // name, surname
//Please note that a property can be either an accessor (has get/set methods) or a data property (has a value), not both.

  //If we try to supply both get and value in the same descriptor, there will be an error:

// Error: Invalid property descriptor.
  Object.defineProperty({}, 'prop', {
    get() {
      return 1
    },

    value: 2
  });
//Smarter getters/setters
//Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them.

  //For instance, if we want to forbid too short names for user, we can have a setter name and keep the value in a separate property _name:

  let user = {
    get name() {
      return this._name;
    },

    set name(value) {
      if (value.length < 4) {
        alert("Name is too short, need at least 4 characters");
        return;
      }
      this._name = value;
    }
  };

user.name = "Pete";
alert(user.name); // Pete

user.name = ""; // Name is too short...
//So, the name is stored in _name property, and the access is done via getter and setter.

  //Technically, external code is able to access the name directly by using user._name. But there is a widely known convention that properties starting with an underscore "_" are internal and should not be touched from outside the object.

  //Using for compatibility
  //One of the great uses of accessors is that they allow to take control over a “regular” data property at any moment by replacing it with a getter and a setter and tweak its behavior.

  //Imagine we started implementing user objects using data properties name and age:

  function User(name, age) {
    this.name = name;
    this.age = age;
  }

let john = new User("John", 25);

alert( john.age ); // 25
…//But sooner or later, things may change. Instead of age we may decide to store birthday, because it’s more precise and convenient:

  function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  }

let john = new User("John", new Date(1992, 6, 1));
//Now what to do with the old code that still uses age property?

  //We can try to find all such places and fix them, but that takes time and can be hard to do if that code is used by many other people. And besides, age is a nice thing to have in user, right?

  //Let’s keep it.

  //Adding a getter for age solves the problem:

  function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // age is calculated from the current date and birthday
    Object.defineProperty(this, "age", {
      get() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
      }
    });
  }

let john = new User("John", new Date(1992, 6, 1));

alert( john.birthday ); // birthday is available
alert( john.age );      // ...as well as the age

 */