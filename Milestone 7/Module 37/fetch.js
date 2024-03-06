// 1. JSON

const student = {
  name: "jamal",
  age: 34,
  movie: ["king khan", "dhakar mastan"],
};

const studentJSON = JSON.stringify(student);
console.log(studentJSON);
console.log(typeof studentJSON);

const studentObject = JSON.parse(studentJSON);
console.log(studentObject);
console.log(typeof studentObject);

// 2. fetch

fetch("https://openapi.programming-hero.com/api/quiz")
  .then((res) => res.json())
  .then((data) => console.log(data));

//check what kind of data is it

// object keys, values, entries
const keys = Object.keys(student);
const values = Object.values(student);
const entries = Object.entries(student);
console.log(keys, values, entries);

// for
const numbers = [1, 2, 3, 4, 5, 6];
for (const number of numbers) {
  console.log(number);
}

// forEach
numbers.forEach((number) => {
  console.log(number);
});
// map
const newNumbers = numbers.map((number) => number * 2);
console.log(newNumbers);

// array like object use for of  and forEach
// loop on object use for in

const products = [
  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "laptop", price: 3200, brand: "lenovo", color: "gold" },
  { name: "phone", price: 7000, brand: "iphone", color: "golden" },
  { name: "watch", price: 5000, brand: "casio", color: "yellow" },
  { name: "sunglass", price: 300, brand: "rayban", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

// add or remove from an array
const newProduct = {
  name: "webcam",
  price: 700,
  brand: "logitech",
  color: "black",
};

// add newProduct - copy products array and then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);

// create a new array without one specific item
// remove one item from an array and create a new array
const remainingProducts = products.filter(
  (product) => product.name !== "laptop"
);
console.log(remainingProducts);
