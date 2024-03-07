## Module 36.5

_Title :_ Bonus - Local Storage

### _36.6-1:_ Set and Read simple value from loacl storage

- You can set manually key and value at local storage
- You can also interact with javascript
- local storage support only string data type for key and value.
- If you try to set value by primitive data type but it will storage by string. Convert as like toSting()

**method:**

1. localStorage.getItem("key") -- to get data
2. localStorage.setItem("key", value) -- to set data
3. localStorage.removeItem("key") -- to remove data
4. localStorage.clear() -- clear storage

- work file: setReaddataLocalStorage.js

### _36.6-2:_ How to set and get objects to local storage

- If you work with object , then you have to use

  - JSON stringify to convert object to string and
  - JSON parse to convert string to objcet
  - You can use inside the function
  - some time you may see window.localStorage because localStorage it window object

- work file: setReaddataLocalStorage.js

### _36.6-3:_ A simple shopping cart to add product and quantity

    - make simple data to add product and quantity
    - find commit simple shopping cart to add product and quantity
    - work file: project shopping Cart

### _36.6-4:_ (Advanced) Loacal Storage interactions for a shopping cart

    - make object data to add product and quantity
    - find commit local storage interactions for a shopping cart
    - work file: project shopping Cart

### _36.6-5:_ React JS installation with vite

    ```code
    npm create vite@latest my-first-react -- --template react
    ```

### _36.6-reward 1:_ Pass by reference and pass by value

Pass by value and pass by reference are two different ways to pass aguments to function.
_Pass by Value_ - In pass by value , a copy of the actual value is passed to the function - Any changes made to the parameter inside the function will not be reflected outside the function - It is commonly used for primitive data types like number, string, boolean, null, undefined, symbol, BigInt

_Pass by Reference_ - In pass by reference , a reference (memory address) to the actual value is passed to the function - Any changes made to the parameter inside the function will also be reflected outside the function - It is commonly used for objects, arrays, and functions

_Handle data at reference data type_
use structureClone() to copy object

```js
const person3 = structuredClone(person);
```

1. Array Operations

concat(): Concatenates two or more arrays, returning a new array without modifying the original arrays.

```js
const originalArray = [1, 2, 3];
const newArray = originalArray.concat([4, 5]);
```

slice(): Returns a shallow copy of a portion of an array into a new array, without modifying the original array.

```js
const originalArray = [1, 2, 3];
const newArray = originalArray.slice();
```

spread operator (...): Copies the elements of an array into a new array, allowing you to make modifications without affecting the original array.

```js
const originalArray = [1, 2, 3];
const newArray = [...originalArray];
```

2. Object Operations

Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object, returning the target object. It does not modify the source objects.

```js
const originalObject = { a: 1, b: 2 };
const newObject = Object.assign({}, originalObject, { c: 3 });
```

Spread operator (...): Creates a shallow copy of an object, allowing you to make modifications without modifying the original object.

```js
const originalObject = { a: 1, b: 2 };
const newObject = { ...originalObject, c: 3 };
```

When working with nested data structures, like arrays of objects or objects containing arrays, spread operator can be useful.

Use array methods like map(), filter(), and reduce() to iterate over the array and perform operations on each element.

```js
const originalArray = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Alice", age: 25 },
  { id: 3, name: "Bob", age: 35 },
];

// Updating age of John
const newArray = originalArray.map((item) => {
  if (item.id === 1) {
    return { ...item, age: 31 }; // Create a new object with updated age
  }
  return item;
});
```

Use spread syntax ({ ... }) or Object.assign() to create a new object with the desired changes while maintaining immutability.
For deeply nested objects, you may need to use recursion or libraries like immer or immutable.js for more complex updates.

```js
const originalObject = {
  id: 1,
  name: "John",
  address: {
    city: "New York",
    country: "USA",
  },
};

// Updating city in the address
const newObject = {
  ...originalObject,
  address: { ...originalObject.address, city: "San Francisco" },
};
```

- work file: passValueReference.js
