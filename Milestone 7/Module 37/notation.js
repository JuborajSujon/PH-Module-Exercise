const person = {
  name: "lal nill holud mia",
  profession: "Traffic Surgeon",
  age: 39,
  address: "shahabag",
  25: "batch number",
  "son-name": "Sunny",
};

// dot notation
console.log(person.name); // lal nill holud mia
// bracket notation
console.log(person["profession"]); // Traffic Surgeon

const pName = "profession";
console.log(person[pName]); // Traffic Surgeon

console.log(person[25]); // batch number
console.log(person["25"]); // batch number
// console.log(person[son - name]); // error- son is not define
console.log(person["son-name"]); // Sunny
