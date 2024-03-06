// 1. array destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c);

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}
console.log(boxify(1, 2));

const [x, y] = boxify(1, 2);
console.log(x, y);

// 2. object destructuring
const person = {
  name: "jamal",
  age: 34,
  movies: ["king khan", "dhakar mastan"],
};
// method 1
const { name, age } = person;
console.log(name, age);

// method 2
const [first, second] = person.movies;
console.log(first, second);

// method 3
const { movies: favMovies } = person;
console.log(favMovies);

// method 4
const employee = {
  ide: "vscode",
  designation: "developer",
  machine: "mac",
  languages: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: 34,
    address: "dhaka",
    drink: "water",
    watch: {
      color: "black",
      price: 5000,
      brand: "casio",
    },
  },
};

const { machine, ide } = employee;
console.log(machine, ide);

const {
  specification: { address, drink },
} = employee;
console.log(address, drink);

const { weight, address: home } = employee.specification;
console.log(weight, home);

const {
  specification: {
    watch: { color, price },
  },
} = employee;
console.log(color, price);

const { brand } = employee.specification.watch;
console.log(brand);

// use optional chaining
console.log(employee?.specification?.watch?.brand);
console.log(employee?.specification?.watch?.price);
console.log(employee?.specification?.watch?.color);
console.log(employee?.specification?.watch?.matarial);

// use default value
console.log(employee?.specification?.watch?.matarial ?? "not found");
