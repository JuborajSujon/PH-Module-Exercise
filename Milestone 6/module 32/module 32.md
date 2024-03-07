## Module 32

_Title :_ Understand Common JavaScript Concepts

এই মডিউল এ আমরা কয়েকটা জিনিস দেখবো। সেখান থেকে কয়েকটা জিনিস ইন্টারভিউতে প্রায়ই জিজ্ঞেস করে বসে।

1. জাভাস্ক্রিপ্ট কী কী ডাটা টাইপের ভেরিয়েবল আছে?

2. জাভাস্ক্রিপ্ট ফাংশন, বা Array কি টাইপের জিনিস ?

3. জাভাস্ক্রিপ্ট এ Array যদি অবজেক্ট হয় তাহলে কিভাবে চেক করবে কোন একটা ভেরিয়েবল একটা Array নাকি Array না?

4. এর মধ্যে Undefined আর Null এর মধ্যে ডিফারেন্স কি।

5. Double Equal (==) আর Triple Equal (===) এই দুইটার মধ্যে ডিফারেন্স কি।

6. Implicit Conversion কি জিনিস? এটা কখন হয়?

7. এছাড়াও জাভাস্ক্রিপ্ট এ কয়েক ধরনের স্কোপ আছে। এই স্কোপ গুলার মধ্যে ডিফারেন্স কি। কখন কোনটা হয়।

8. ব্লক স্কোপ কি জিনিস? Let, Const কি টাইপের স্কোপ তৈরি করে?

9. (এডভান্সড) Closure কি জিনিস? এইটা কিভাবে কাজ করে?

10. Callback Function কি জিনিস?

11. Hoisting কি জিনিস? (গুগলে সার্চ দিয়ে আরো ভালো করে শিখো )

12. (এডভান্সড) কি ধরণের ভেরিয়েবল Reference দিয়ে ফাংশনে পাঠানো হয় আর কোন ধরণের ভেরিয়েবল Value হিসেবে পাঠানো হয়।

### _32-1:_ Module overview , Primitive and non-primitive data type

- Typed language
- primitive and non-primitive
- find primitiveNonprimitive.js

### _32-2:_ Null vs Undefined , different ways you will get undefined

_8 ways to get undefined_

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

  1. true
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

### _32-4:_ Double Equal (==) Vs Triple Equal (===), Implicit Conversion
