/**
 * null vs undefined, defferent ways you will get undefined
 */
// 8 ways to get undefined

// number 1 : Variable that is not initialized
let a;
console.log(a); // undefined

// number 2 : Function with no return statement
function second(a, b) {
  const total = a + b;
  // function that returns undefined
}
const c = second(10, 20);
console.log(c); // undefined

// number 3 : Function parameter that is not passed
function third(a, b) {
  const total = a + b;
  console.log(b); // undefined
}
const d = third(10);
console.log(d); // undefined

// number 4 : Function return nothing no the right return will be undefined
function fourth(a, b) {
  const total = a + b;
  return;
}
const e = fourth(10, 20);
console.log(e); // undefined

// number 5 : Object property that does not exist
const fifth = { name: "John", age: 20 };
console.log(fifth.age); // undefined

// number 6 : Array index that does not exist or index range
const sixth = [10, 20, 30];
console.log(sixth[5]); // undefined

// number 7 : When array element  delete explicitly inside - using delete operator
// if needed to delete use splice method
const seventh = [10, 20, 30];
delete seventh[1];
console.log(seventh); // [10, ,30]
console.log(seventh[1]); // undefined

seventh.splice(1, 1);
console.log(seventh); // [10, 30]

// number 8 : Set a value directly to undefined
// if needed to assign use null
const eighth = [10, 20, 30];
eighth[2] = undefined;
console.log(eighth); // [10, 20, undefined]

eighth[2] = null;
console.log(eighth); // [10, 20, null]

const data = { results: [], update: null };
console.log(typeof undefined, typeof null); // undefined object
