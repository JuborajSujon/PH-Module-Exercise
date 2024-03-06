// How to declare a variable using let and const
const fatherName = "Jakir Hossin";
let season = "winter";
season = "summer";

// 2. conditon
// 6 basic condition >,<,<=,>=,===,!==
// multiple conditon : && , ||
// if, else, else if

if (fatherName === "jakir hossin" || season === "rainy") {
  console.log("I am happy");
} else if (fatherName === "jakir hossin" || season === "winter") {
  console.log("I am afried");
} else {
  console.log("I am sad");
}

// 3. array
// index, length, push, pop, unshift, shift
// how to assign value by index
const numbers = [1, 2, 3, 4, 5, 6];
numbers[0] = 10;

// 4. for loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// 5. function
function myFunction(a, b) {
  const result = a + b;
  return result;
}

const output = myFunction(2, 3);
console.log(output);

// 6. object
// 3 ways to access object
const student = {
  name: "jamal",
  age: 34,
};

myAge = "age";

console.log(student.age);
console.log(student["age"]);
console.log(student[myAge]);
