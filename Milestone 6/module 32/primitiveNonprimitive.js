// Strongly typed language

// int a = 5;
// sting b = "Hello";
// bool c = True;
// object student = {name: "John", age: 20};
// int [] number = [12,34,56];
// sting [] names = ["John", "Jane", "Mary"];

// dynamic type language
// primitive type
const a = 5;
const b = "hello world";
const d = true;

// non-primitive type
const ages = [10, 20, 30];
const student = { name: "John", age: 20 };

// console.log(typeof a, typeof b, typeof ages, typeof student, typeof d);

// immutable - primitive data type
let x = 5;
let y = x;
console.log(x, y); // 5 5
y = 6; // vlaue reasign
console.log(x, y); // 5 6

// mutable - non-primitive
let p = { name: "John" };
let q = p;
console.log(p, q); // { name: 'John' } { name: 'John' }
q.name = "Tom";
console.log(p, q); // { name: 'Tom' } { name: 'Tom' }
