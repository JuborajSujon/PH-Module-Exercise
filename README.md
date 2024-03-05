# Milestone 6

## Object

এই মাইলস্টোন থেকে তুমি যদি আটটা জিনিস শিখতে চাও তাহলে নিচের এই আটটি জিনিস আরেকবার ভালো করে দেখে নাও-

1. Fetch বা Async Await ইউজ করে API থেকে কিভাবে ডাটা লোড করতে হয়। ডাটা অনেক সময় অনেকভাবে থাকে। সেই ডাটা কোনটা কখন Array কখন অবজেক্ট এর ভিতরে আছে। সেটা বুঝে সেই অনুসারে ডাটা দেখানোর সিস্টেম
2. Arrow ফাংশন কিভাবে ইউজ করা হয়
3. Template String এ ডাইনামিকভাবে কিভাবে ডাটা যোগ করতে হয়
4. Map, ForEach, Filter, Find এইগুলা কখন কোনটা ব্যবহার করতে হয়, এদের মধ্যে পার্থক্য কি
5. Let, Const, Var এদের মধ্যে ডিফারেন্স কি, কোন কোনটা ইউজ করতে হয়।
6. কোনটা দিয়ে Array এর মধ্যে লুপ করতে হয়, কোনটা দিয়ে অবজেক্ট এর মধ্যে লুপ করতে হয়
7. Spread কিভাবে ইউজ করা হয়, স্প্রেড অপারেটর দিয়ে কিভাবে Array কপি করে ফেলে।
8. ES6 এর মধ্যে কিভাবে অবজেক্ট বা Array এর Destructure করে সেটা থেকে ভেরিয়েবল ডিক্লেয়ার করতে হয়।

## Module 32

_Title :_ Understand Common JavaScript Concepts

### _32-1:_ Module overview , Primitive and non-primitive data type

- Typed language
- primitive and non-primitive
- find primitiveNonprimitive.js

### _32-2:_ Null vs Undefined , different ways you will get undefined

    *8 ways to get undefined*
    1. Variable that is not initialized
    2. Function with no return statement
    3. Function parameter that is not passed
    4. Function return nothing no the right return will be undefined
    5. Object property that does not exist
    6. Array index that does not exist or index range
    7. When array element delete explicitly inside - using delete operator ,if needed to delete use splice method
    8. Set a value directly to undefined, if needed to assign use null

    - find nullVsUndefined.js

### _32-3:_ Different Truthy and Falsy values

    - check falsy value use not (!) sign
    - check truthy value use not (!!) sign
    - check all kind of data is it truty of falsy
        Truthy - always
        1.true
        2. Any number (+ve , -ve) will be truthy other than 0
        3. Any string will be truthy other than ""
        4. empty object {}
        5. empty array []
        6. funtion(){}

        Falsy - always
        1. false
        2. 0 or -0
        3. '' (empty string)
        4. undefined
        5. null
        6. NaN
        [Truthy and Falsy Value]("https://www.sitepoint.com/javascript-truthy-falsy/")
    - find truthyFalsy.js

## Module 36.5

_Title :_ Bonus - Local Storage

### _36.6-1:_ Set and Read simple value from loacl storage

- You can set manually key and value at local storage
- You can also interact with javascript
- local storage support only string data type for key and value.
- If you try to set value by primitive data type but it will storage by string. Convert as like toSting()

**method:**

1. localStorage.getItem("key") -- to get data
2. localStorage.setItem("key", value) -- to set data
3. localStorage.removeItem("key") -- to remove data
4. localStorage.clear() -- clear storage

- work file: setReaddataLocalStorage.js

### _36.6-2:_ How to set and get objects to local storage

- If you work with object , then you have to use

  - JSON stringify to convert object to string and
  - JSON parse to convert string to objcet
  - You can use inside the function
  - some time you may see window.localStorage because localStorage it window object

- work file: setReaddataLocalStorage.js

### _36.6-3:_ A simple shopping cart to add product and quantity

    - make simple data to add product and quantity
    - find commit simple shopping cart to add product and quantity
    - work file: project shopping Cart

### _36.6-4:_ (Advanced) Loacal Storage interactions for a shopping cart

    - make object data to add product and quantity
    - find commit local storage interactions for a shopping cart
    - work file: project shopping Cart

### _36.6-5:_ React JS installation with vite
