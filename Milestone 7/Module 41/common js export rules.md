# Common JS Module Export and Import Rules

## Export Rules One - it is default export rules

Export From math.js

```js
// math.js
const add = (a, b) => a + b;
module.exports = add;
```

Improt From index.js

```js
// index.js
const add = require("./math"); // const name can be anything
console.log("index.js file is loaded.");
console.log(add(2, 3)); // Output: 5
console.log(add(5, 5)); // Output: 10
```

## Export Rules Second - Directly assign the arrow function to module.exports

Export From math.js

```js
// math.js
module.exports = (a, b) => a + b;
```

Improt From index.js

```js
// index.js
const add = require("./math"); // const name can be anything
console.log("index.js file is loaded.");
console.log(add(2, 3)); // Output: 5
console.log(add(5, 5)); // Output: 10
```

## Export Rules Third - We export more than one variable or function

Export From math.js

```js
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
module.exports = { add, subtract }; //es2015 feature

// or
module.exports = {
  add: add,
  subtract: subtract,
};
```

Improt From index.js

```js
// index.js
const math = require("./math"); // require will return an object and we assign it to math

console.log("index.js file is loaded.");
console.log(math.add(2, 3)); // Output: 5
console.log(math.subtract(5, 5)); // Output: 0

/*
 * You might also come across destructuring which is again as es2015 feature
 * After requiring the module we can do:
 */

const math = require("./math"); // require will return an object and we assign it to math

const { add, subtract } = math; // destructuring

console.log("index.js file is loaded.");
console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 5)); // Output: 0
```

## Export Rules fourth - When we define the function we can directly assign it to a property on module.exports, so instead of `const add` and `cosnt subtract` we can specified module.exports.add and module.exports.subtract

Export From math.js

```js
// math.js
module.exports.add = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;
```

Improt From index.js

```js
// index.js
const math = require("./math"); // require will return an object and we assign it to math

console.log("index.js file is loaded.");
console.log(math.add(2, 3)); // Output: 5
console.log(math.subtract(5, 5)); // Output: 0

/*
 * You might also come across destructuring which is again as es2015 feature
 * After requiring the module we can do:
 */

const math = require("./math"); // require will return an object and we assign it to math

const { add, subtract } = math; // destructuring

console.log("index.js file is loaded.");
console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 5)); // Output: 0
```

## Export Rules Fifth - We are going to revisit the iife that wraps every module. The first parameter is exports , now exports is a reference to module dot exports that shorter to type. So we can replace module.exports with exports.

Export From math.js

```js
// math.js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```

it is discourage we to use just exports and always stick to module.exports, Why is it to use module.exports instead of just exports ?
