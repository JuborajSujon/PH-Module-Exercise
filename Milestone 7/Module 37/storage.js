const addToLocalStorage = () => {
  const idInput = document.getElementById("storage-id");
  const valueInput = document.getElementById("storage-value");
  const id = idInput.value;
  const value = valueInput.value;

  //save to local storage
  if (id && value) {
    localStorage.setItem(id, value);
  }

  idInput.value = "";
  valueInput.value = "";
};

// set an array to local storage
const setArrayToLocalStorage = () => {
  const array = [1, 2, 3, 4, 5];
  localStorage.setItem("array", JSON.stringify(array));
};

setArrayToLocalStorage();

// get an array from local storage
const getArrayFromLocalStorage = () => {
  const array = JSON.parse(localStorage.getItem("array"));
  console.log(array);
};

const array = getArrayFromLocalStorage();
console.log(array);

// get all keys from local storage
const keys = Object.keys(localStorage);
console.log(keys);

// get all values from local storage
const values = Object.values(localStorage);
console.log(values);

// get all entries from local storage
const entries = Object.entries(localStorage);
console.log(entries);

// update item in local storage
localStorage.setItem("array", JSON.stringify([1, 2, 3, 4, 5]));

// remove item from local storage
localStorage.removeItem("array");
console.log(localStorage);

// clear local storage
localStorage.clear();
console.log(localStorage);

// set an object to local storage
const setObjectToLocalStorage = () => {
  const person = {
    name: "jamal",
    age: 34,
  };
  localStorage.setItem("person", JSON.stringify(person));
};

setObjectToLocalStorage();

// get an object from local storage
const getObjectFromLocalStorage = () => {
  const person = JSON.parse(localStorage.getItem("person"));
  console.log(person);
};

getObjectFromLocalStorage();

// get all keys from local storage
const keys1 = Object.keys(localStorage);
console.log(keys1);

// get all values from local storage
const values1 = Object.values(localStorage);
console.log(values1);

// get all entries from local storage
const entries1 = Object.entries(localStorage);
console.log(entries1);

// update item in local storage
localStorage.setItem("person", JSON.stringify({ name: "kamal", age: 34 }));

// remove item from local storage
localStorage.removeItem("person");
console.log(localStorage);

// clear local storage
localStorage.clear();
console.log(localStorage);
