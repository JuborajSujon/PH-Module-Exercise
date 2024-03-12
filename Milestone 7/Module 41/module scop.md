# Module Scope

Make two file to understand module scope

A new file : Batman.js

```js
const superHeroName = "Batman";
console.log(superHeroName);
```

A new file : SuperMan.js

```js
const superHeroName = "Superman";
console.log(superHeroName);
```

Now require Batman.js and SuperMan.js in index.js

```js
require("./Batman");
require("./SuperMan");
```

Output:

```js
Batman;
Superman;
```

You can see the output is Batman followed by Superman. Both name are logged and there is no conflict or error.
And this is because each module has its own scope.

And the way node.js achieves that is with the immediately invoked function expression(IIFE) which is a special function that executes immediately after it is defined.

Now let's try it with IIFE function with iife.js

```js
(function () {
  const superHeroName = "Batman";
  console.log(superHeroName);
})();
(function () {
  const superHeroName = "Superman";
  console.log(superHeroName);
})();
```

Output:

```js
Batman;
Superman;
```

With iife each function gets its own private scope. under the hood node.js as well as well uses this iife function to execute the code.

## Immediately Invoked function Expression (IIFE) in node.js

- Before a module's code is executd , Node.js will wrap it with a function wrapper that provides module scope.
- This saves us from having to worry about conflicting variables or functions.
- There is proper encapsulation of variables and functions. and reusability is unaffected.

# Moule Scope Summary

- Each loaded module is node.js is wrapped with an IIFE and provides provate scope to the module.
- IIFE allows you to repeat variable or function names without any conflicts.
