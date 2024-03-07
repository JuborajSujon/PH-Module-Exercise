//Hoisting in JavaScript
/**
 * What is hoisting?
 *
 * Hoisting is a concept (behaviour / mechanism ) where the interpreter would "hoist"(raise, lift) the declaration of functions, variables and classes to the top of the scope they were defined, before the code is executed.
 *
 * Hoisting is JavaScript's default behavior of moving declarations to the top.
 * It means that the variable or function declarations are moved to the top of the current scope, prior to execution of the code.
 * In other words, it allows you to use variables and functions before they are declared.
 *
 */

// functions

printHello();
function printHello() {
  printWorld();
  console.log("Hello");
  function printWorld() {
    console.log("World");
  }
}

/**
 * Variable declared with var are hoisted to the top of the scope they are defined in, but with a default value of undefined.
 */

// var variables
console.log(name);
var name = "John";
console.log(name);

// printVarVariable();
// console.log(name);
// function printVarVariable() {
//   console.log(name);
//   var name = "Carter";
//   console.log(name);
// }

/**
 * You notice this error does not say name is not defined.
 * Actually acknowledges that name is defined but the error says cannot assess name before initialization.
 *
 * The name variable is hoisted , but without a default initialization , so that makes it unaccessible.
 * Variable declared with let are hoisted but with no default initialization.
 * This is also referred to as Temporary Dead Zone.
 */

// let variables
// console.log(letVariable);
let letVariable = "This is let";
console.log(letVariable);

// printLetVariable();
// console.log(name);
// function printLetVariable() {
//   console.log(name);
//   let name = "Carter";
//   console.log(name);
// }

/**
 * Just like let, variables declared with const are hoisted , but without a default initialization.
 * This makes usch variables unaccessible.
 */

// const variables
// console.log(constVariable);
const constVariable = "This is const";
console.log(constVariable);

// printConstVariable();
// console.log(name);
// function printConstVariable() {
//   console.log(name);
//   const name = "Carter";
//   console.log(name);
// }

/**
 * Just like let, class declared with hoisted , but without a default initialization.
 * This makes usch class unaccessible.
 */
//class
// const dog = new Animal("Bolt"); //Get error
class Animal {
  constructor(name) {
    this.name = name;
  }
}

const dog = new Animal("Bolt");

// printObject();
// const dog = new Animal("Bolt"); //Get error
function printObject() {
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }
}

console.log(dog.name);

/**
 * The Temporal Dead Zone , TDZ for a variable is the area where a variable is hoisted , but not accessible until the variable is initialized with a value.
 */
