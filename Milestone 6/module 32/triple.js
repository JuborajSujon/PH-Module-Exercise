// Example one
const first = 2;
const second = "2";

if (first == second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

if (first === second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

// Example two
const third = 1;
const fourth = true;

if (third == fourth) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

if (third === fourth) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

// type coercion
// type conversion
// type casting

const fifth = [];
const sixth = [];

console.log(fifth == sixth); // false
console.log(fifth === sixth); // false

// non primitive like object or array checked by their reference
// if you need to compare object or array then under loop check thire element is equal or not
