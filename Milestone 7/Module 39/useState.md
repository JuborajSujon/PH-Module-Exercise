# useState Hook

## What is useState?

রিঅ্যাক্ট হুক হচ্ছে জাভাস্ক্রিপ্ট ফাংশন যা রিয়েক্টের বিশেষ কিছু ফিচার ব্যবহার করতে দেয়। রিঅ্যাক্টে, আপনি যখন কোনো অ্যাপ্লিকেশন তৈরি করেন, তখন আপনার ডেটা পরিবর্তন হওয়ার সাথে সাথে আপনার UI আপডেট করার প্রয়োজন হয়। useState হুকটি হলো এমনই একটি হুক যা রিঅ্যাক্টের কোনো কম্পোনেন্টে স্টেট বা অবস্থা সংরক্ষণের জন্য ব্যবহৃত হয়।

## State কি?

রিঅ্যাক্টে, স্টেট হলো এমন এক ধরণের তথ্য যা কোনো কম্পোনেন্টের অবস্থা বা আচরণকে নির্দেশ করে। এই তথ্য সময়ের সাথে সাথে পরিবর্তন হতে পারে, যেমন ইউজারের ইন্টারঅ্যাকশনের ফলে বা অন্যান্য ডেটার উপর নির্ভর করে। স্টেটের পরিবর্তনের ফলে রিঅ্যাক্ট কম্পোনেন্টটিকে re-render করে, যাতে UI সর্বদা সামঞ্জস্যপূর্ণ থাকে।

একটি সহজ উদাহরণ হিসেবে কল্পনা করুন আপনার রয়েছে একটি লাইট সুইচ। এই সুইচটি লাইটের অবস্থা (চালু বা বন্ধ) নির্দেশ করে। ঠিক যেমন সুইচ ফ্লিপ করলে লাইটের অবস্থা পরিবর্তন হয়, তেমনি স্টেটের পরিবর্তন হলে রিঅ্যাক্টের UI আপডেট হয়।

## কেন আমরা useState ব্যবহার করি?

a. `Dynamic UI তৈরি`: যেসব কম্পোনেন্টের ইউজারের ইন্টার‌্যাকশন বা সময়ের সাথে ডেটা পরিবর্তন হয়, সেগুলোর জন্য useState হুক খুবই গুরুত্বপূর্ণ। এটি কম্পোনেন্টগুলোকে রি-রেন্ডার করে, যাতে UI সবসময় সামঞ্জস্যপূর্ণ থাকে।

b. `স্টেট ম্যানেজমেন্ট`: useState কম্পোনেন্ট লেভেলে স্টেট ম্যানেজ করার একটি সহজ উপায় দেয়। এর মানে হল, কম্পোনেন্টগুলো তাদের নিজস্ব পরিবর্তনশীল ডেটা রাখতে পারে।

## useState এর Structure:

```js
const [currentState, updateState] = useState(initialValue);
```

এখানে -

1. currentState: দিয়ে বোঝায় কম্পোনেন্টের বর্তমান স্টেটের মান
2. updateState: হলো একটি ফাংশন যা দিয়ে বর্তমান স্টেট পরিবর্তন করা যায়
3. initialValue: হলো স্টেটের প্রাথমিক মান (initial value)

useState কে একটা বাক্স হিসেবে কল্পনা করুন। এই বাক্সে আপনি ভেতরে কিছু রাখতে পারেন (স্টেট)। তবে এই বাক্সের অনন্য বৈশিষ্ট্য হলো, যখন আপনি বাক্সের ভেতরে কিছু পরিবর্তন করেন, রিঅ্যাক্ট বুঝতে পারে যে পরিবর্তন হয়েছে এবং আপনার কম্পোনেন্টটিকে রি-রেন্ডার করে যেন UI আপডেটেড থাকে।

## useState কিভাবে ব্যবহার করা হয়?

```js
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // initial state 0

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

## স্ট্রিং আপডেট করা:

```js
import React from "react";

function StringExample() {
  const [message, setMessage] = useState("Hello World!");

  const handleClick = () => {
    setMessage("Goodbye!");
  };

  return (
    <div>
      <p> Current Message: {message}</p>

      <button onClick={handleClick}>Change Message</button>
    </div>
  );
}

export default StringExample;
```

## Object আপডেট করা:

```js
import React, { useState } from "react";

function ObjectExample() {
  const [user, setUser] = useState({ name: "John Doe", age: 30 });

  const incrementAge = () => {
    setUser({ ...user, age: user.age + 1 }); // Update age property
  };

  return (
    <div>
      <p>
        Name: {user.name}, Age: {user.age}
      </p>

      <button onClick={incrementAge}>Increment Age</button>
    </div>
  );
}

export default ObjectExample;
```

## Array আপডেট করা:

```js
import React, { useState } from "react";

function ArrayExample() {
  const [numbers, setNumbers] = useState([1, 2, 3]); // Initial state with some numbers

  const addNumber = () => {
    setNumbers([...numbers, numbers.length + 1]); // Add new element
  };

  return (
    <div>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Add Number</button>
    </div>
  );
}

export default ArrayExample;
```

// Implementing an object as a state variable

There are two things you need to keep in mind about updates when using object

- The importance of [immutability](https://blog.logrocket.com/immutability-react-should-you-mutate-objects/).
- and the fact that the setter return by `useState` doesn't [merge object like](https://legacy.reactjs.org/docs/state-and-lifecycle.html#state-updates-are-merged) `setState()` does in class components.

About the first point, if you use the same value as the current state to update the state (React uses `Object.is()` for comparing), React won't trigger a re-render.

```js
console.log(Object.is("1", 1)); // Expected output: false
console.log(Object.is(NaN, NaN)); // Expected output: true
console.log(Object.is(-0, 0)); // Expected output: false
const obj = {};
console.log(Object.is(obj, {})); // Expected output: false
```

When working with objects, it's easy to make the [following mistake](https://blog.logrocket.com/avoiding-common-mistakes-in-react-hooks/):

```js
const Message = () => {
  const [messageObj, setMessage] = useState({ message: "" });

  return (
    <div>
      <input
        type="text"
        value={messageObj.message}
        placeholder="Enter a message"
        onChange={(e) => {
          messageObj.message = e.target.value;
          setMessage(messageObj); // Doesn't work
        }}
      />
      <p>
        <strong>{messageObj.message}</strong>
      </p>
    </div>
  );
};

onChange={e => {
          const newMessageObj = { message: e.target.value };
          setMessage(newMessageObj); // now it work
        }}
```

Instead of creating a new object, the above example mutates the existing state object. To React, that’s the same object. To make it work, we must create a new object, just like we discussed earlier

if we add another property to the message object (id)

```js
const [messageObj, setMessage] = useState({ message: "", id: 1 });
```

And we only update the message property like in the above example, React will replace the original { message: '', id: 1 } state object with the object used in the onChange event, which only contains the message property:

`{ message: ‘message entered’ } // id property is lost`

You can replicate the behavior of setState() by using the function argument that contains the object to be replaced and the object spread syntax:

```js
onChange={e => {
  const val = e.target.value;
  setMessage(prevState => {
    return { ...prevState, message: val }
  });
}}
```

The ...prevState part will get all of the properties of the object, and the message: val part will overwrite the message property. This will have the same result as using Object.assign() (just remember to create a new object):

```js
onChange={e => {
  const val = e.target.value;
  setMessage(prevState => {
    return Object.assign({}, prevState, { message: val });
  });
}}
```

However, the spread syntax simplifies this operation, and it also works with arrays. Basically, when applied to an array, the spread syntax removes the brackets so you can create another one with the values of the original array

## How to update state in a nested object in react with

In JavaScript, multi-dimensional arrays are arrays within arrays

```js
[
  ["value1", "value2"],
  ["value3", "value4"],
];
```

You could use them to group all your state variables in one place. However, for that purpose, it would be better to use nested objects like this

```js
{
  'row1' : {
    'key1' : 'value1',
    'key2' : 'value2'
  },
  'row2' : {
    'key3' : 'value3',
    'key4' : 'value4'
  }
}
```

But, the problem when working with multi-dimensional arrays and nested objects is that Object.assign and the spread syntax will create a [shallow copy](https://blog.logrocket.com/copy-objects-in-javascript-complete-guide/#shallow-copy:~:text=Structured%20cloning-,Shallow%20copy,-A%20shallow%20copy) instead of a [deep copy](https://blog.logrocket.com/copy-objects-in-javascript-complete-guide/#shallow-copy:~:text=disrupt%20our%20program.-,Deep%20copy,-A%20deep%20copy).

Spread syntax effectively goes one level deep while copying an array. Therefore, it may be unsuitable for copying multi-dimensional arrays, as the following example shows. (The same is true with Object.assign() and spread syntax.)

```js
const arr = [
  [1, 2],
  [3, 4],
];
const arrCopy = [...arr];
```

This [Stack Overflow query](https://stackoverflow.com/questions/43421704/why-is-a-spread-element-unsuitable-for-copying-multidimensional-arrays) offers good explanations for the above example, but the important point is that when using nested objects, we can’t just use the spread syntax to update the state object. For example, consider the following state object:

```js
const [messageObj, setMessage] = useState({
  author: "",
  message: {
    id: 1,
    text: "",
  },
});
```

To properly update the text field, we have to copy to a new object the entire set of fields/nested objects of the original object:

```js
// Correct
setMessage((prevState) => ({
  ...prevState, // copy all other field/objects
  message: {
    // recreate the object that contains the field to update
    ...prevState.message, // copy all the fields of the object
    text: "My message", // overwrite the value of the field to update
  },
}));
```

In the same way, here’s how you’d update the author field of the state object:

```js
// Correct
setMessage((prevState) => ({
  author: "Joe", // overwrite the value of the field to update
  ...prevState.message, // copy all other field/objects
}));
```

However, this is assuming the message object doesn’t change. If it does change, you’d have to update the object this way:

```js
// Correct
setMessage((prevState) => ({
  author: "Joe", // update the value of the field
  message: {
    // recreate the object that contains the field to update
    ...prevState.message, // copy all the fields of the object
    text: "My message", // overwrite the value of the field to update
  },
}));
```

Working with multiple state variables or one state object
When working with multiple fields or values as the state of your application, you have the option of organizing the state using multiple state variables:

```js
const [id, setId] = useState(-1);
const [message, setMessage] = useState('');
const [author, setAuthor] = useState('');
Or an object state variable:
const [messageObj, setMessage] = useState({
  id: 1,
  message: '',
  author: ''
});
```

However, you have to be careful when using state objects with a complex structure (nested objects). Consider this example:

```js
const [messageObj, setMessage] = useState({
  input: {
    author: {
      id: -1,
      author: {
        fName: "",
        lName: "",
      },
    },
    message: {
      id: -1,
      text: "",
      date: now(),
    },
  },
});
```

If you have to update a specific field nested deep in the object, you’ll have to copy all the other objects along with the key-value pairs of the object that contains that specific field:

```js
setMessage((prevState) => ({
  input: {
    ...prevState.input,
    message: {
      ...prevState.input.message,
      text: "My message",
    },
  },
}));
```

In some cases, cloning deeply nested objects can be expensive because React may re-render parts of your applications that depend on fields that haven’t even changed.

For this reason, the first thing you need to consider is trying to flatten your state object(s). In particular, the React documentation recommends splitting the state into multiple state variables based on which values tend to change together.

If this is not possible, the recommendation is to use libraries that help you work with immutable objects, such as immutable.js or immer.
