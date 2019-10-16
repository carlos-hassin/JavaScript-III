/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is when you console log whatever you set "this" to be.
* 2. Implicit Binding is you create an object and in that you have a function (method). what you invoke the object and method, "this" refers to the values you set inside the object, which is left of the dot.
* 3. New binding is when you take make a new object from a previous object, but the value(s) of "this" is kept in the old object, and a new parameter can be passed in the newer object.
* 4. Explicit binding is when you have a function and object on the global scope and you combine/invoke them with the use of call, apply, and bind.
*
* write out a code example of each explanation above
*/

// Principle 1

function roar(){
    console.log(this.lionSound);
  }
  
  var lionSound = "roarrrrrrrrr";
  
  roar();

// Principle 2

/ const myFavThings = {
    appliance: "refridgerator",
    food: "chicken",
    combineTheTwo: function(name){
      console.log(`What are ${name}'s favorite things you ask? ${this.appliance} and ${this.food}'`);
      console.log(this);
    }
  };
  
  myFavThings.combineTheTwo("carlos");

// Principle 3

function favPhrase(saying){
  this.phrase = saying;
}

let myfavPhrase = new Phrase("I like Turtles");

console.log(myfavPhrase.phrase);

// Principle 4

function dog(){
  console.log(this.bark);
}

let myDog = {
  name: 'Tyberious',
  bark: 'BWERWEK!'
}

let neighborDog = {
  name: 'mark',
  bark: "arararararg!"
}

dog.call(myDog);
dog.call(neighborDog);