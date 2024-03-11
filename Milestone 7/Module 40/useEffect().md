# useEffect()

## What is useEffect?

useEffect হল রিঅ্যাক্টে একটি বিল্ট-ইন হুক, যা আপনাকে কম্পোনেন্টের "সাইড এফেক্ট" পরিচালনা করতে দেয়। "সাইড এফেক্ট" বলতে এমন যেকোনো কিছুকে বুঝায়, যা রিঅ্যাক্টের কোর রেন্ডারিং এবং আপডেট প্রক্রিয়ার বাইরে কাজ করে। এসব সাধারণত নিম্নলিখিত কাজগুলোকে অন্তর্ভুক্ত করে:

1. ডাটা ফেচিং: এপিআই থেকে ডাটা আহরণ করা।
2. সাবস্ক্রিপশন সেটআপ: ইভেন্ট লিসনার বা অন্যান্য সাবস্ক্রিপশন তৈরি করা।
3. DOM ম্যানিপুলেশন: সরাসরি DOM উপাদানগুলিকে পরিবর্তন করা (সাধারণত এটি এড়িয়ে চলা হয়, কিন্তু কিছু ক্ষেত্রে প্রয়োজনীয় হতে পারে)।

## useEffect ব্যবহারের কারণ:

1. রিঅ্যাক্ট সাধারণত কম্পোনেন্টের রেন্ডারিং এবং আপডেটের সময়ই কোড চালায়।
2. useEffect এর মাধ্যমে, আপনি এই সীমাবদ্ধতা অতিক্রম করে রিঅ্যাক্টের বাইরে কাজ করতে পারেন।
3. এটি আপনাকে কম্পোনেন্টের life cycle এর বিভিন্ন সময়ে নির্দিষ্ট কাজ চালানোর ক্ষমতা দেয়।

## useEffect এর গঠন:

```js
useEffect(() => {
  // সাইড এফেক্ট কোড এখানে যুক্ত করুন
}, [dependency]);
```

`a. কলব্যাক ফাংশন:` এখানে আপনার সাইড এফেক্টের লজিক লিখুন।

`b. dependency (optional):` এটি একটি অ্যারে, যা নির্ধারণ করে কখন useEffect চালু হবে। যদি dependency অ্যারেটি খালি থাকে, তাহলে useEffect প্রতিটি রেন্ডারের পরে চালু হবে। অন্যথায়, useEffect শুধুমাত্র dependency অ্যারের মান পরিবর্তিত হয়, তখনই চালু হবে।

```js
import React, { useState, useEffect } from "react";

function DataFetchingExample() {
  const [posts, setPosts] = useState([]); //পোস্ট ডেটা রাখার জন্য state
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = awaitresponse.json();
      setPosts(data); // ফেচ করা ডেটা দিয়ে state আপডেট
    };
    fetchData(); // ডেটা ফেচ করার ফাংশন কল
  }, []); // খালি dependency
  return (
    <div>
      {posts.length === 0 ? (
        <p>Loading ...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}> {post.title}</li>
          ))}{" "}
        </ul>
      )}
    </div>
  );
}

export default DataFetchingExample;
```

এই উদাহরণে,

1. useState: posts স্টেটটি ফেচ করা ডেটা রাখবে।
2. useEffect: খালি dependency ([]) নির্দেশ করে যে, useEffect শুধুমাত্র কম্পোনেন্ট মাউন্ট হওয়ার পরেই একবার চালু হবে। 3. fetchData ফাংশনটি ডেটা ফেচ করে এবং ফেচ করা ডেটা setPosts এর মাধ্যমে স্টেটে আপডেট করে।

## useEffect আপডেট করা:

useEffect এর কলব্যাক ফাংশন থেকে একটি ফাংশন রিটার্ন করা যায়। এই রিটার্ন করা ফাংশনটি কম্পোনেন্টের ক্লিনআপ লজিক চালানোর জন্য ব্যবহৃত হয়, যেমন সাবস্ক্রিপশনগুলি আনসাবস্ক্রাইব করা।

useEffect হুকটি কম্পোনেন্টের জীবনচক্রের বিভিন্ন সময়ে কোড চালানোর অনুমতি দেয়। কিন্তু এই কোডটি সব সময় চালানো না-ও হতে পারে। ঠিক কোন সময় চালানো হবে, তা নির্ধারণে আমরা dependency ব্যবহার করি।

## কেন dependency ব্যবহার করি?

### পারফরম্যান্সের উন্নতি:

খালি dependency ব্যবহার করলে useEffect শুধুমাত্র কম্পোনেন্ট মাউন্ট হওয়ার পরেই চালু হয়। অন্যথায়, প্রতিবার রেন্ডারের পরেও চালু হতো, যা unnecessary পারফরম্যান্স খরচ বাড়িয়ে দিত।

### অপ্রয়োজনীয় আপডেট এড়ানো:

dependency ব্যবহার করে নিশ্চিত করা যায় যে, কোনো একটা মুহূর্তে useEffect শুধুমাত্র প্রয়োজনীয় পরিবর্তনের পরেই চালু হয়। এতে করে অপ্রয়োজনীয় কাজ এবং কম্পোনেন্টের unnecessary আপডেট এড়ানো যায়।

### কোডের cleanliness:

dependency ব্যবহার করে আমরা useEffect এর কার্যকারিতা আরও পরিষ্কারভাবে বোঝাতে পারি। ঠিক কোন পরিবর্তনে useEffect চালু হবে, তা dependency দেখেই বোঝা যায়।

```js
import React, { useEffect, useState } from "react";

function CounterExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You've clicked ${count} times`;
  }, [count]); // `count` ভেরিয়েবলটি dependency হিসাবে যুক্ত

  return (
    <div>
      <p>You've clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click!</button>
    </div>
  );
}
export default CounterExample;
```

এখানে একটি উদাহরণ দেওয়া হল যেখানে useEffect হুক এর সাথে dependency ব্যবহার করা হচ্ছে।

ব্যাখ্যা:

1. useState: count নামের একটি স্টেট তৈরি করা হয়েছে, যা কতবার ক্লিক করা হয়েছে তা গণনা করবে।
2. useEffect:
   এই useEffect শুধুমাত্র count ভেরিয়েবলের মান পরিবর্তিত হলে চালু হবে। dependency হিসেবে আমরা [count] ব্যবহার করেছি।
3. useEffect এর ভেতরের কোডটি প্রতিবার count পরিবর্তিত হলে টাইটেলটি আপডেট করে দেয়।
