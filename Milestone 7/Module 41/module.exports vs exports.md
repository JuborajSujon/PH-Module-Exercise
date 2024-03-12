# Module.Exprots vs Exprots

It is discourage we to use just exports and always stick to module.exports, Why is it to use module.exports instead of just exports ?

## Example will help to find out this question answer

make a creating file - object-reference.js

```js
const obj1 = {
  name: "Bruce Wayne",
};

const obj2 = obj1;

obj2.name = "Clark Kent";

console.log(obj1.name); // Clark Kent
```

This is because obj1 and obj2 are pointing to the same object. So if we change obj2.name to Clark Kent , it will reflect in obj1.name as well.

Now here is the interesting bit after the initial assignment if we assign a new object instead of modifying the properties on the existing object that references is broken.

```js
const obj1 = {
  name: "Bruce Wayne",
}

let obj2 = obj1;

obj2 = {
  name : "Clark Kent";
}

console.log(obj1.name); // Bruce Wayne
```

Now why did i explain this well as it turns out obj1 is module.exports and obj2 is just exports.

This behavior where we expect Clark Kent to be logged but Bruce Wayne is logged instead is what might happen when working with node.js modules as well.

At the moment make file math.js

```js
module.exports.add = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;
```

We are modifying the property that exists on the exports object. This as you can see works as expected when we run node index.js

```js
const math = require("./math"); // require will return an object and we assign it to math

const { add, subtract } = math; // destructuring

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 5)); // Output: 0
```

but when we replace module.exports with exports, it will not work as expected.

```js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

exports = {
  add,
  subtract,
};
```

and we run node index.js

```js
const math = require("./math"); // require will return an object and we assign it to math

const { add, subtract } = math; // destructuring

console.log(add(2, 3));
console.log(subtract(5, 5));
```

Does not work expected, geting error.

If we assign a new object to exports like this

```js
exports = {
  add,
  subtract,
};
```

the reference is broken and module.exports will be an empty object that is exported. in our case math becomes an empty object in inex.js file.
if you try access dot add or subtract on an empty object you will get an error.
