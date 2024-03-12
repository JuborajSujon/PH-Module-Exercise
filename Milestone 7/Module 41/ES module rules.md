# ES Module Rules

At the time Node.js was created , there was no built-in module system in JavaScript.

Node.js defaulted to Common JS as its module system

As of ES2015, JavaScript does have a standardized module system as part of the language itself.

The Moudle system is called EcmaScriptModules or ES Modules or ESM for short.

let create a file named math.js and write the following code in it:
The file extension for ES modules in dot MJS and not JS

## Frist Pattern - Export and Import a single variable or function

main.mjs

```js
import add form "./math.mjs"; // any name while importing it
console.log(add(2, 3)); // Output: 5
```

math.mjs

```js
const add = (a, b) => a + b;
export default add;
```

## Second Pattern - Export and Import a single variable or function, instead of having a default export on a separate line we it inline with the arrow function

main.mjs

```js
import add form "./math.mjs"; // any name while importing it
console.log(add(2, 3)); // Output: 5
```

math.mjs

```js
export default (a, b) => a + b;
```

## Third Pattern - Export and Import multiple variables or functions

```js
import math form "./math.mjs"; // any name while importing it
console.log(math.add(2, 3)); // Output: 5
console.log(math.subtract(2, 3)); // Output: -1
```

math.mjs

```js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

export default { add, subtract };

//or
export default {
  add: add,
  subtract: subtract
};

```

## Fourth Pattern - When dealing with object imports though you might also come across destructuring

```js
import math form "./math.mjs"; // any name while importing it

const { add, subtract } = math;

console.log(add(2, 3)); // Output: 5
console.log(subtract(2, 3)); // Output: -1
```

math.mjs

```js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

export default { add, subtract };

//or
export default {
  add: add,
  subtract: subtract
};

```

# Name Exports Rules - Where the variable or function name being exported must match while importing it.

## Export Rules One - defined the variable or function this export

```js
// We can import it two ways
// frist way using *
import * as math  form "./math.mjs"; // match name while importing it
const { add, subtract } = math;

// second way using {}
import { add, subtract } form "./math.mjs"; // match name while importing it
import { add as zog, subtract as biog } form "./math.mjs"; // you can alias

console.log(add(2, 3)); // Output: 5
console.log(subtract(2, 3)); // Output: -1
```

math.mjs

```js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

# Circular dependencies

Circular dependencies occur when two or more modules depend on each other directly or indirectly. This can lead to issues because one module needs the other to be loaded before it can finish loading itself. Here's an example of a circular dependency:

Module A (moduleA.js)

```js
import { greet } from "./moduleB";

export function hello() {
  return `${greet()}, this is Module A`;
}
```

Module B (moduleB.js)

```js
import { hello } from "./moduleA";

export function greet() {
  return `${hello()}, greetings from Module B`;
}
```

In this example, Module A depends on Module B through the greet function, and Module B depends on Module A through the hello function. This creates a circular dependency between the two modules.

When you try to run this code, you may encounter an error like "Maximum call stack size exceeded" or "Circular dependency detected." To avoid circular dependencies, it's essential to refactor your code to remove the dependency loop. One way to do this is by restructuring your modules so that they don't depend on each other directly or by moving shared functionality to a separate module that both modules can import without creating a circular dependency.

# ES Module Summary

- ES Module is the ECMAScript standard for modules in JavaScript.
- It was introduced with ES2015. Node.js 14 and above support ES Module.
- Instead of module.exports, we use the export keyword
- The export can be default or named
- We import the exported variables or functions using the import keyword
- if it is a default export , we can assign any name while importing
- If it is a named export , the import name must be the same.
