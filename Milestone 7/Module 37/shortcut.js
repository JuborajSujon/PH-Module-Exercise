// 'alams', 5, true, {}, []
// "", 0, false, null, undefined

let myVar = 5;
// check any truthy
if (myVar) {
  myVar = myVar * 100;
} else {
  myVar = 0;
}

let myMoney = 100;
// you check negative or falsy anything
if (!myMoney) {
}

const money = 80;
let food;
if (money > 100) {
  food = "biryani";
} else {
  food = "cha biscuit";
}
console.log(food);

// ternary operator
let food1 = money > 100 ? "biryani" : "cha biscuit";
console.log(food1);

let drink = money > 100 && myVar > 100 ? "coke" : "filter water";
console.log(drink);

// convert number to string convertion
const num1 = 52;
console.log(num1);
const numString = num1 + "";
console.log(numString);

// convert string to number convertion
const input = "569";
const myNumber = +input;
console.log(myNumber);

// convert number to boolean
const isActive = 0;
const myBoolean = isActive ? true : false;
console.log(myBoolean);

// convert boolean to number
const myBoolean1 = true;
const myNumber1 = myBoolean1 ? 1 : 0;
console.log(myNumber1);

// use nullish coalescing operator
const userInput = "";
const storedData = userInput ?? "default value";
console.log(storedData);

// use nullish coalescing operator
const userInput1 = null;
const storedData1 = userInput1 ?? "default value";
console.log(storedData1);

// use nullish coalescing operator
const userInput2 = 0;
const storedData2 = userInput2 ?? "default value";
console.log(storedData2);

// use boolean with and logical
const isTrue = false;
const result = isTrue && "hello";
console.log(result);

// use boolean with and logical
const isTrue1 = true;
const result1 = isTrue1 && "hello";
console.log(result1);

// use boolean with or logical
const isTrue2 = false;
const result2 = isTrue2 || "hello";
console.log(result2);

// use boolean with or logical
const isTrue3 = true;
const result3 = isTrue3 || "hello";
console.log(result3);

// use boolean with not logical
const isTrue4 = true;
const result4 = !isTrue4;
console.log(result4);

// use boolean with not logical
const isTrue5 = false;
const result5 = !isTrue5;
console.log(result5);

// use boolean for invoke function
const isActive1 = true;
const showUser = (num) => console.log(num, "display User");
const hideUser = (num) => console.log(num, "hide User");

isActive1 ? showUser(1) : hideUser(1);
// use &&  if the left side is true then right side will be executed
isActive1 && showUser(2);
// use || if the left side is false then right side will be executed
isActive1 || hideUser(3); // not execute because left side is true

!isActive1 && hideUser(4); // not execute because left side is false
!isActive1 || showUser(5);

// toggle boolean
let isActive3 = true;
isActive3 = !isActive3;
console.log(isActive);
