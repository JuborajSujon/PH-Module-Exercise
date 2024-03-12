# Module Caching Mechanism

Make a file super-hero.js and create a superhero class with constructor t initialize the name of the hero. Add two method to set and get the name.

```js
class SuperHero {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}

module.exports = new SuperHero("Batman"); // export an instance of the class
```

Finally to export an instance of the class.

In side index.js file import the module and use it.

```js
cosnt superHero = require("./super-hero");
console.log(superHero.getName()); // Output: Batman
superHero.setName("Superman");
console.log(superHero.getName()); // Output: Superman
```

To require the superhero module again to create another instance of superhero
index.js file

```js
const newSuperHero = require("./super-hero");
console.log(newSuperHero.getName()); // Output: Superman
```

You can see the new superhero name is also Superman. Now why is that ?
clearly we are creating a new instance of superhero which should receive Batman as the name. Shouldn't the lock statement alson be Batman.

Well this is where the concept of module caching comes into picture.

When we require a new module it is loaded and cached for subsequent loading

In our case

- line 1 the superhero module is loaded and cached, cached is simply a fancy word for remembered.
- The next time we require the same module as `newSuperHero`. Node.js will think hey i remember this module already been loaded before. let me reuse that instead of doing the additional work of loading it brand new. In our case it is going to load the same object as line one. Since object are passed by reference we get the same object back.
- This is how module caching works in node.js and it's the reason , you see Superman being log again instead of Batman.

- In a real world Application the same module is typically imported in several different files and caching is what helps with performance.

- The execution does not bring us back to newSuperHero module. It is cached. so execution go next line.

## Why Caching is important

Well if caching is really important how do we deal with scenarios where we need to create separate instance of superhero.

Well it is simple instead of exporting an instance that we can import we export the class it self.

So module.exports is equal to the superhero class.

```js
module.exports = SuperHero;
```

Now back to index.js file.

```js
const SuperHero = require("./super-hero");

const batman = new SuperHero("Batman");
console.log(batman.getName()); // Output: Batman

batman.setName("Bruce Wayne");
console.log(batman.getName()); // Output: Bruce Wayne

const superman = new SuperHero("Superman");
console.log(superman.getName()); // Output: Superman

superman.setName("Clark Kent");
console.log(superman.getName()); // Output: Clark Kent
```
