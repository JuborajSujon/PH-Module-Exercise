function add(a, b) {
  const sum = a + b;
  return sum;
}

const result = add(5, 5);
console.log(result);

// console.log(a, b); //error - a and b not define

// block scope
if (true) {
  const a = 10;
  let b = 20;
}
// here a and b are block scope that why we can't access out side of block
// console.log(a, b); //error- a and b not define

// block can make many way like simple {}, if, for, while, do while, switch, try, catch, finally, class, function etc.

// glocal scope
let a = 10;
function myFunction() {
  const a = 10;
  console.log(a);
}

/**
 * you can access anywhere in the code
 */
myFunction();
console.log(a);

// function scope
function myFunction1() {
  const b = 10;
  console.log(b);
}

myFunction1();
// console.log(b);// error - b not define

/**
 * you can access only inside the function block and can't access outside
 */
