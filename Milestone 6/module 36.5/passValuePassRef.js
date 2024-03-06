// senario - passing value at primitive data
let name = "John";
let name2 = name; // copy of name
name = "Jane";
console.log(name, name2); // Jane John
// here are not effect to each other

function increment(num) {
  num++;
}

let x = 10;
increment(x);
console.log(x); // Output: 10 (unchanged)

// senario - passing reference at non-privitive data
let person = { name: "John", age: 20 };
let person2 = person; // memory address reference of person object
person.name = "Jane";
console.log(person, person2); // { name: "Jane", age: 20 } { name: "Jane", age: 20 }
// here are effect to each other

function test(v) {
  v.name = "Jason";
  return v;
}

console.log(test(person)); // { name: "Jason", age: 20 }

function changeArray(arr) {
  arr.push(4);
}

let arr = [1, 2, 3];
changeArray(arr);
console.log(arr); // Output: [1, 2, 3, 4] (changed)

// solve this problem
const person3 = structuredClone(person);
person3.name = "Maria";
console.log(person3);
