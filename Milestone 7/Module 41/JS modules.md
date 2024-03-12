# What is JS modules?

A modules is an encapsulated and reusable chunk of code that has its own context and can be exported and imported into other JavaScript files. Modules help organize code into smaller, manageable units, improve code readability, and facilitate code reuse across different parts of an application or between different applications.

# Type of JS modules

Modules can be categorized into three main types:

1. local modules
2. built-in modules
3. third-party modules.

## Local Modules

Local modules are JavaScript modules that you create within your project. These modules contain code that is specific to your application and are used to organize and encapsulate functionality into reusable units. Local modules are typically stored in separate files within your project directory structure and are imported into other parts of your code as needed.

## Built-in Modules

Built-in modules are modules that are provided by the JavaScript runtime environment or platform, such as Node.js or web browsers. These modules contain core functionality that is commonly used in JavaScript programming, such as working with files, networking, or manipulating data structures.

Built-in modules are accessed using the `require` (in Node.js) or `import` (in modern browsers) statements.

## Third-party modules

Third-party modules are modules that are created and maintained by developers outside of your project. These modules provide additional functionality that is not available in the built-in modules or that extends the capabilities of the language. Third-party modules are often distributed through package managers like npm (Node.js) or yarn (Node.js and web browsers) and can be easily installed into your project as dependencies.

<code>npm install lodash</code>

```js
import _ from "lodash";

const numbers = [1, 2, 3, 4, 5];
const sum = _.sum(numbers);
console.log(sum); // Output: 15
```

# Local Module types

1. `Utility modules` - Utility modules contain helper functions or utility methods that perform common tasks across the application. These functions are often generic and reusable, providing functionality such as data manipulation, string formatting, validation, or calculations.
2. `Component modules` - Component modules encapsulate reusable UI components that are used across different parts of the application. These modules typically contain React components, HTML templates, and associated stylesheets.
3. `Service modules` - Service modules encapsulate logic for interacting with external services or APIs, such as fetching data, sending requests, and handling responses. These modules abstract away the details of communication with external resources and provide clean interfaces for other parts of the application to use.
4. `Configuration modules` - Configuration modules contain settings, constants, or configuration parameters used throughout the application. These modules centralize configuration options and provide a single source of truth for application-wide settings.

## Key Point Local Modules

- In node.js each file is a module that is isolated by default
- To load a module into another file, we use the require() function
- When index.js is executed, the code in the module is also executed
- if the file we are requiring is a javascript file, we can skip specifying the extension and node.js wiil infer nt on our behalf.

## Common JS modules System for Node.js

1. `Local` - File output here

- Local modules refer to modules that are created within the context of a specific project or application. They are typically stored as separate files within the project directory structure.
- These modules can be imported and used within other modules or files using module loaders or bundlers like Node.js's require() function or tools like Webpack or Browserify.

2. `module.exports` - File output here
   [module export file](./common%20js%20export%20rules.md)
3. `Scope Module` - File output here [module scope](./module%20scop.md)

- The scope of a module refers to the visibility and accessibility of variables, functions, and other entities defined within the module.
- Variables declared with the `var` keyword have function scope, `let` and `const` have block scope, meaning they are accessible only within the block in which they are declared
- The use of modules helps encapsulate and isolate the scope of variables and functions, preventing unintended variable conflicts and promoting modular design.

4. `Wrapper Module`

[module wrapper](./module%20wrapper.md)

- Every module in node.js gets wrapped in an IIFE function before being loaded
- IIFE helps keep top level variables scoped to the module rather than the the global scope
- The IIFE that wraps every module contains 5 parameters - exports, require, module, **filename, and **dirname which are pretty important for the functioning of a module

- In Node.js, each module is wrapped in a function wrapper before being executed. This wrapper function provides each module with its own scope, preventing variables and functions from leaking into the global scope.

- The wrapper function ensures that modules can be executed in isolation without interfering with other modules or the global scope.
- IIFE - Immediately Invoked Function with

```js
(function (exports, require, module, __filename, __dirname) {
  // Module code
})();
```

5. `Caching Module` - File output here

[Module Caching]()

- Node.js implements a module caching mechanism to improve performance by caching the result of require() calls.
- When a module is required for the first time, its contents are loaded and executed, and the result is cached in memory.

- A object instance exports

```js
module.exports = new SuperHero("Batman");

// without

module.exports = SuperHero;
```

Node.js implements a caching mechanism to improve performance by caching the result of require() calls. When a module is required for the first time, its contents are loaded, executed, and cached in memory. Subsequent require() calls for the same module return the cached module exports without re-executing the module code.

### Example of Caching Module

Suppose we have a module named math.js that exports a function to calculate the square of a number:

```js
// math.js

console.log("math module is loaded.");

function square(x) {
  return x * x;
}

module.exports = square;
```

Now, let's create a main file named app.js that requires the math.js module and uses its functionality:

```js
// app.js

const square = require("./math");

console.log("Square of 5:", square(5)); // Output: 25
console.log("Square of 10:", square(10)); // Output: 100
```

When you run app.js, the output will be as follows:

```js
math module is loaded.
Square of 5: 25
Square of 10: 100
```

In this example, the math.js module is loaded and executed when app.js requires it for the first time. The message "math module is loaded." is logged to the console to indicate that the module has been loaded. The square() function is then used to calculate the squares of numbers.

Now, if you run app.js again, you will notice that the message "math module is loaded." is not logged to the console. This is because Node.js caches the module after the first require() call, and subsequent calls to require('./math') return the cached module exports directly without reloading or re-executing the math.js module code.

This caching mechanism helps improve performance by avoiding redundant module loading and execution, especially in applications with multiple dependencies and frequent module imports. However, it's essential to be aware of caching behavior when working with modules that have side effects or mutable state, as changes made to module state can affect other parts of the application that rely on the cached module exports.
