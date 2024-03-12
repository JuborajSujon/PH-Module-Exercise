# Module Wrapper

- Every module in node.js gets wrapped in an IIFE function before being loaded
- IIFE helps keep top level variables scoped to the module rather than the the global scope
- The IIFE that wraps every module contains 5 parameters - exports, require, module, **filename, and **dirname which are pretty important for the functioning of a module

Let's see an example of module wrapper in Node.js.

```js
(function (message) {
  const superHeroName = "Batman";
  console.log(message, superHeroName);
})("Hello");
(function () {
  const superHeroName = "Superman";
  console.log(message, superHeroName);
})("Hey");
```

Output:

```js
Hello Batman;
Hey Superman;
```
