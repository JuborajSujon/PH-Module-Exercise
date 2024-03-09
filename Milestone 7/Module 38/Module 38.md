# Module 38

## _38-1_ - What is React, React vs Angular vs Vue

- react can use web application, mobile application(react native), Frameworks(Next JS) etc.

## What is ReactJS?

- ReactJS is a JavaScript library for building user interfaces.
- ReactJS is declarative, efficient, and flexible.
- It is fast and component based.
- It was initially developed by Jordan Walke. and maintained by Facebook.

## What is React Virtual DOM?

- React's Virtual DOM is a js representation of the actual DOM. When updates are made react compares the current DOM to the virtual DOM and only updates the differents between the two.

History of React
2010 - The first signs of React

- Facebook introduced xhp stack and open sourced it. Xhp allowed creating composite components. They introduced this syntax later in react.

2011 - An early prototype of React

- Jordan Walke, a software engineer at Facebook, created FaxJX, the early prototype of React - shipped a search element on Facebook.

2012 - Something new had started at Facebook

- Facebook ads became hard to manage, so Facebook needed to come up with a good solution for it. Jordan Walke worked on the prototype and created react. Then Instagram was acquired by Facebook.

2013 - The year of the Big launch

- Jordan Walke introduced React. React gets open sourced.
- React (by Facebook) is available on JSFiddle.
- Open sourced Ract in the : JS conference.
- Pete Hunt : Rething best Practices

2014 - The year of Expansion

- React gradually gained its reputation, started to go through to early majority of its potential users
- React Developer Tools becomes an extension of the chrome Developer Tools.
- Atom was introduced - a hackable text editor for the 21th century.
- ReactiveX.io emrged
- The release of react Hot loader. React hot loader is a plugin that allows react components to be reloaded without the loss of state
- PlanOut 0.5 (a language for online experiments), which includes a react based planout language editor was released.

2015 - React is Stable

- Flopboard releases React Canvas
- NetFlix likes React
- Airbnb uses React
- Facebook announced that react native for iOS is open
- Redux was released by Ban Abramov and Andrew Clark
- The first Stable version of the new react Developer tools launched
- React Native for android was released

2016 - React gets mainstream

- The introduction of Mobx
- Draft.js was introduced at React.js
- The introduction of React Storybook
- Introducing React's Error code system
- The introduction of Blueprint - a react UI toolkit for the web

2017 - The year of further improvements

- Airbnb introcuces their new open source library react Sketch.app
- React Fiber gets open sourced
- React 16: error boundaries, portals, fragments and the fiber architecture

## Roadmap

- roadmap.sh for react js - https://roadmap.sh/reactjs to complete as junior developer

### React vs Angular

#### _Library vs Framework_

- React is a javascript library. Angular is a complete framework built on typeScript - a superset of javascript.
- React js is a samaller piece of the overall puzzle , whereas angular is a collection of all different puzzle pieces.

#### _Architechture_

- ReacJS is responsible for the view elements of application development in a model-view-controller (MVC) architecture.
- Angular is a complete MVC framework for front-end development

#### _Templates_

- The template used by ReactJS is called JSX (JavaScript XML) which combines the javascript code and markup in one line of code to create user interfaces efficiently
- angular uses templates based on advanced HTML , means you will need to learn the proper HTML syntax in order to be able to write code in angular

#### _Document Object Model_

- Ract JS maintains a virtual DOM which allows it to be lightining fast.
- Angular has a regular DOM which updates the entire HTML Structure every time a change is made.

#### _Components_

- ReactJS is a library for buldign and rendering components.
- Angular is not only about components , it offers more solutions that simply create components such as routing, state management, form validations, and other tools that you need to develop large applications.

#### _Performance_

- The virtual DOM is feature of ReactJS allows its application to virtually update the changes without rewriting the entire HTML document, this renders updates much quicker.
- The regular DOM reature of Angular makes the application slow in perofrmaance. especially when compared to applications build using react.

#### _Data binding_

- ReactJS supports unidirectional data binding, or what is commomly know as one way data binding, means that data is flows one way while sychronizing the Model and View.
- Angular data binding model is bidirectional and supports two way data binding.

#### _Scalability_

- React application requires you to rely on third party tools and supporting integrations external to ReactJS
- Angular includes additional tools like routing state management, HTTPS, etc. Which help you build large-scale apps, means it comes packed with all the core features that you may require.

#### _Learning curve_

- ReactJS uses JSX, which is fairly easy to learn if you have prior experience with writing code in JavaScript.
- A beginner need to familiarise with the TypeScript language that Angular uses . He will also need to learn about all the rich topics that angular comprises of from components , templats , modules and other basic cocepts to the more comples ones like depencedency injection, change detection, routing, RXJS, HTTP, etc.

## When to use ReactJS?

#### _Pros_

- ReactJS has a simple design and uses JSX which makes it easy to learn and use , even for beginners.
- Owing to its virtual DOM, ReactJS offers fast performance for applications.
- Being a view library, react does not force on the specific architecture of you application.
- React allows you t tailor your stack as per your own project requirements by giving you the freedom to chose additional libraries.
- It is a more mature and older tools thal angular, Therefore it has a larger user bas3e along with wider community support.
- React is backed and supported by facebook, which makes it a top choice for many leading businesses .

#### _Cons_

- React is not a full-scale framework. Using react means you will have to use third-party community-managed modules for routng, state management, for validation, etc. when developing your application.
- React rolls out frequent updates , making it difficult to mantan the code and keep th documentation up-to-date.

## _38-2_ - What is component,component types, build your first component

- install react
- component concept
- building blocks of the user interface
- Each component exists in the same space but works independently
- Splits UI into indepentent and reusable pieces
- All of the components are being merged in a parent component (the final UI)
- Accept input called props (optional) and return react element
- reuable having their own structure and methods.

### 4 Ways to define components

- similar in look, different in data
- Container component
- No common pattern , but breakdown for working purpose
- Stand-alone component

### What is component?

- Components are the foundation upon which you build user interfaces.
- In a React app, every piece of UI is a component.
- A React component is a javaScript function that sprinkle with markup except.
  - their names always begin with a capital letter
  - they return JSX markup

### How to build a component?

1. Export the component
2. Create a function
3. Add markup

## _38-3_ - JSX, its rules and add dynamic content to JSX in your first component

### What is JSX?

- JSX is a syntax extension to JavaScript
- JSX stands for JavaScript XML
- Lets you write HTML-like markup inside a javaScript file
- Under the hood it is transformed into regular Javascript using compilers like Bable,TypeScript

### What are the rules?

- JSX must return a single root element
- JSX must end with a closing tag or Must be self closing
- Must use camelCase - className, onClick, tabIndex
- Write expression in curly braces {}
- Using double curly braces {{}} to pass a object in JSX
- Using double curly braces {{}} to write css in JSX

## _38-4_ - Explore JSX and Props basics

### 3 way to apply css in JSX

1. Using className - import css file and use selector in JSX
2. Using style object
3. Using inline style object

### Basic props apply in JSX

1. Set the props as like attributes at component and receive the props as function aguments and pass the props as an object to the function as parameter.
2. You can destructure the props object when the function parameter define
3. You can pass dynamic value at assigning props (marks ={80})
4. You can set default value for props at function parameter

## _38-5_ - Prop types and how to pass/read a prop

- _What are props_ - Props analogy with network, basics about props
  - React components use props to communicate with each other.
  - Every parent component can pass some information to its child components by giving them props.
  - You can pass any JavaScript value through props, including components, objects, arrays and functions.
- _Pass and Read_ - Pass props to and read props from a component
  - Pass props to the child component
  - Read props inside the child component
- _Ways to read_ - Ways to reading props properties
  - Way -1 - Destructuring props as object inside function Avatar({src, name}){}
  - Way -2 - Using props.children inside function
- _Default value and JSX_ - Default value for prop, props with JSX syntax, JSX as children
  - Specifying a Default Value for a Prop function Avatar({src = "./name", name = "Carter", children}){}
- _Value of Props_ - Different types of values of props
  - string, number, boolean, null, undefined, object, array, function, symbol, bigint
  - When need to pass dynamic value at assigning props (marks ={80}, func = {myFunction}, object = {{name:"Carter"}})
- _Forwarding Props_ - Forwarding props with JSX Spread Syntax
  - Forwarding props with JSX Spread Syntax ({...props}) when send to child component
  - Or you can use object destructuring inside function ({src, name}){} then pass props as basic props define inside the child component.
- ## _Passing JSX as Children_ - Passing JSX as children

### Props are outside, States are inside

### Props are Unidirectional data flow system

## _38-6_ - Read only props Two way of conditional rendering

- import and export file basic syntax
- conditional rendering with if else with two method

### props are read only, you can't change props object properties value

### if you want to change value you have to pass destructuring it as function parameter, then you can change value

## _38-7_ - Six ways to do Conditional Rendering: If, Ternary and AND OR

### What is Conditional Rendering?

- conditional rendering is the process of displaying different content based on certain conditions or states.
- It allows you to create dynamic user interfaces that can adapt to changes in data and user interaction.
- if isDone is true, the component will return nothing null, otherwise it will return the element that was passed to it.

### Whay Conditional Rendering is necessary in react applications

- _improved user experience_ - Conditional rendering allows you to create dynamic user interfaces by showing and hiding content based on the user's state or conditions.
- _Improved Performance_ - By conditionally rendering content, apps work faster by only showing whats needed and improve the performance of your application.
- _Simplified Code_ - By using conditional statements you can decided what content should be rendered and you can avoid repeating the same code and create more modular components.
- _Flexibility_ - by rendering different content based on the application state, you can create components that can be used in different contexts and adapt to different user interactions.

### conditional rendering JSX

- if statements
- AND operator &&
- OR operator ||
- ternary operator ?:

## _38-8_ - (advanced) Rendering lists of users using map

- rendering list of users using map with array data and object data

## _38-9_ - Module Summary and Recap
