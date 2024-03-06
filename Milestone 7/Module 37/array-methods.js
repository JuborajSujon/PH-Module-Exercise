const products = [
  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "laptop", price: 3200, brand: "lenovo", color: "gold" },
  { name: "phone", price: 7000, brand: "iphone", color: "golden" },
  { name: "watch", price: 5000, brand: "casio", color: "yellow" },
  { name: "sunglass", price: 300, brand: "rayban", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

// 1. forEach
products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.name));

// 2. map
const brands = products.map((product) => product.brand);
console.log(brands);
const prices = products.map((product) => product.price);
console.log(prices);

// 3. filter
const cheap = products.filter((product) => product.price < 5000);
console.log(cheap);

// 4. find
const special = products.find((product) => product.name === "laptop");
console.log(special);

// 5. some
const hasFast = products.some((product) => product.name === "laptop");
console.log(hasFast);

// 6. every
const allFast = products.every((product) => product.price < 5000);
console.log(allFast);

// 7. reduce
const total = products.reduce(
  (previous, product) => previous + product.price,
  0
);
console.log(total);

// 8. sort
const sorted = products.sort((a, b) => b.price - a.price);
console.log(sorted);
const reversed = products.sort((a, b) => a.price - b.price);
console.log(reversed);

// 9. concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

// 10. includes
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isAvailable = arr4.includes(5);
console.log(isAvailable);
const isAvailable2 = arr4.includes(50);
console.log(isAvailable2);
