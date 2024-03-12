# Common JS Module Export and Import Rules

## Export Rules One - it is default export rules

Export From add.js

```js
// add.js
const add = (a, b) => a + b;
module.exports = add;
```

Improt From index.js

```js
// index.js
const add = require("./add"); // const name can be anything
console.log("index.js file is loaded.");
console.log(add(2, 3)); // Output: 5
console.log(add(5, 5)); // Output: 10
```
