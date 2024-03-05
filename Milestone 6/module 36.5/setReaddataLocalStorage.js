// show local storage object at console
console.log(localStorage);

// set item to local storage
const person = {
  name: "jamal",
  age: 34,
};

const personAddress = "Jatrabari";
localStorage.setItem("personAddress", personAddress);
localStorage.setItem("phone", 1912438258); //Try to set number

console.log(typeof localStorage.getItem("phone")); // but it store in string

const isDarkMode = true;
localStorage.setItem("isDarkMode", isDarkMode);
console.log(typeof localStorage.getItem("isDarkMode")); //string

// when to set non-primitive data you will not set properly
localStorage.setItem("person", person); // [object object]

// Conver to sting then send to storage
const updatePerson = JSON.stringify(person);
localStorage.setItem("person", updatePerson); // {"name":"jamal", "age":34}

// check length of local storage
console.log(localStorage.length);

// get data from local storage ues getItem method
let getValueOne = localStorage.getItem("drink");
console.log(getValueOne);

// get non primitive data and conver to object
const getValueTwo = localStorage.getItem("person");
console.log(getValueTwo); // {"name":"jamal", "age":34} but it is now string

//to convert string to object
const updateValue = JSON.parse(getValueTwo);
console.log(updateValue); // {"name":"jamal", "age":34} now it is object

// To remove item from local storage
localStorage.removeItem("drink");

// Clear the hole local storage data
console.log(localStorage.clear());
