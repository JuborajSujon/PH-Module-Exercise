const numbers = [1, 2, 3, 4, 5, 6];
const student = {
  name: "jamal",
  age: 34,
  movies: ["king khan", "dhakar mastan"],
};

// 1. template string
const about = `my name is ${student.name} and my age is ${student.age} has number ${numbers[0]} also liked movies ${student.movies[0]}`;
console.log(about);

// 2. arrow function
const doubleIt = (num) => num * 2;
console.log(doubleIt(5));
const isEvent = (x) => x % 2 === 0;
console.log(isEvent(5));
const addThree = (x, y, z) => x + y + z;
console.log(addThree(1, 2, 3));
const multiline = (x, y) => {
  const sum = x + y;
  return sum;
};
const sum = multiline(4, 5);
console.log(sum);

// spread oprerator
const newNumbers = [...numbers];
numbers.push(7);
console.log(numbers);
console.log(newNumbers);

// creat a new array from an older array and add an element
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4];
console.log(newArray);

// rest operator
const [a, b, ...remaining] = numbers;
console.log(a, b, remaining);
