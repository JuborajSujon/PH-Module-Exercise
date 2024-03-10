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