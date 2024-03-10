# Module 39

## _39-1_ - Module Introduction and Vite Project Overview

_React core concept_

- Components
- JSX
- props
- events
- state
  new project setup and project file structure overview

## _39-2_ - Different way to handle events in React

- event handler name should be camelCase
- at event passing parameter as dynamic value function reference onClick={myFunction}
- you can also write inline function onClick={function handlerName() {alert("Hello")}}
- you can also write inline function reference onClick={() => myFunction()}
- you can also pass function parameter , onClick={(event) => myFunction(event)}

### Responding to Events

- React lets you add event handlers to your JSX. Event handler are your own functions that will be triggered in response to interaction like clicking, hovering, focusing, or any other interaction.

### Rules of Adding Event Handler

_Event handler function_

- Are useally defined inside your component
- Have names that start with handle, followed by the name of the event

_By Convention_ - It is common to name event handler as handle followed by the event name

- onClick = {handleClick}
- onMouseOver = {handleMouseOver}
- function passed to event handlers must be passed , not called

_Reading Props in Event handler_

_Preventing Default Behaviour of Form_

_Recap_

- You can handle events by passing a function as prop to an element like `<button>`
- Event handlers must be passed, not called
- You can define an event handler function separately or inline
- Event handlers are defined inside a component, so they can access props
- You can declare an event handler in a parent and pass it as prop to a child
- Explicity calling an event handler prop from a child handler is a good alternative to propagation

## _39-3_ - A simple Introduction to State change in React

- In this module, learn how to change state in React
- working file : state.js

## _39-4_ - Understand the concept of useState and react hooks

### What exactly is state?

- The useState Hook provides those two things:

  - A state variable to retain the data between renders.
  - A state setter function to update the variable and trigger React to render the component again.

  ```js
  const [count, setCount] = useState(0);
  ```

  count - current state

  setCount - state setter function to update state

  useState(0) - set initial value

### Why useState() is needed?

To update a component with new data, two things need to happen:

- Retain the data between renders.
- Trigger react to render the component with new data(re-render)

Variable do not preserve data between renders and cannot trigger react to render. Hence, useState is needed as it preserves data since it is a memory as well trigger react to render with the help of setter function.

### 5 use cases of useState()

1. State management
2. Conditional rendering
3. Toggle flags (true/false)
4. Counter
5. Store API data in state

### Rules of Hooks

1. Only React Hooks in React Functions

- React component functions
- Custom Hooks (covered later)

2. Only call react hooks at the Top Level

- Don't call them in nested functions
- Don't call them in any block statements

- Extra, unofficial rule for useEffect(), Always add everything you refer to inside of useEffect() as a dependency.

### Different types

- State hooks
- Context hooks
- Ref hooks
- Effect hooks
- Performance hooks
- others

### State Hooks

- State lets a component 'remember' information like user input
- To add state to a component, use one of these Hooks:
  - useState declares a state variable that you can update directly
  - useReducer declares a state variable with the update logic inside a reducer function.

### Context Hooks

- context lets a component recive information from distant parents without passing it as props
- useContext reads and subscribes to the context

### Ref Hooks

- Refs let a component hold some information that isn't used for rendering, like a DOM node or a timeout ID
- useRef declares a ref. You can hold any value in it. but most often it's used to hold a DOM node.

### Effect hooks

- Effect lets a component connect to and sychronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a differnt UI library, and other non-react code.
- useEffect connects a component to an external system

## _39-5_ - (Advanced) Understand the concept of useEffect

### What are Effects?

There are two types of logic inside react components:

- _Rendering code_ - lives at the top level of your component. This is where you take the props and state, transform them, and return the JSX you want to see on the screen.
- _Event handlers_ - An event handler might update an input field, submit an HTTP POST request by buy a product, or navigate the user to another screen.

Event handlers contain 'side effects' (they changes the program's state) caused by a specific user action (for example, a button click or typing)

Consider a chatroom component that must connect to the chat server whenever it's visible on the secreen.

- Sending a message in the chat is an event because it is directly caused by the user clicking a specific button.
- However, setting up a server connection is an effect because it should happen no matter which interaction caused the component to appear.

### What are side effects in react?

- not prdictable
- Actions which are performed with the 'outside world'
- A side effect is performed when we need to reach outside the scope of our current react components to do something.
- React component rendering and side effect logic are independent.

### Some common side effects

- Making a request to an API for data from a backend server
- To interact with browser APIs (that is, to use document or window directly) / manipulating DOM directly
- Using unpredictable timing functions like setTimeout() or setInterval()
- Reading data from local storage

### What is useEffect() ?

useEffect exists -

- To synchronize a component with an external system.
- To provide a way to handle performing these side effects
- Doesn't affect the rendering or performance of the component that it's in
- Performs asynchronous tasks, like making requests to an API

### How to write an useEffect() ?

1. _Declare an effect_ - By default, your effect will run after every render
2. _Specify the effect dependencies_ - Most effects should only re-run when needed rather than after every render. For example, a fade-in animation should only trigger when a component appears.
3. _Add cleanup if needed_ - Some effects need to specify how to stop, undo or clean up whatever they were doing. For example, 'conncet' needs 'disconnect'.

### Different types of dependencies in useEffect

1. Run after every render

```js
useEffect(() => {
  // do something
});
```

2. Run only once after the initial render

```js
useEffect(() => {
  // do something
}, []);
```

3. Run on mount and also if either a or b have changed since the last render

```js
useEffect(() => {
  // do something
}, [a, b]);
```

### What is the useEffect() cleanup function?

let's look at this scenario:

Imagine the ChatRoom component is a part of a lager application with many different screens. The user starts their jurney on the ChatRoom page. The component mounts. i.e. `appears on the screen for the first time` and calls connection.connect().

Then imagine the user navigates to anoter screen - for example, to the setting page. The ChatRoom component unmounts.

Finally, the user clicks back and ChatRoom mounts again. This would set up a second connection. but the first connection was never destroyed! `As the user navigates the app, The connections would keep piling up.`

To fix this issue, return a cleanup function from useEffect().

```js
useEffect(() => {
  const connection = createConnection();
  connection.connect();

  return () => {
    connection.disconnect();
  };
}, []);
```

### What is the useEffect() cleanup function?

- The useEffect cleanup allows us to tidy up our code before our component unmounts.
- When our code runs and returns for every render, useEffect also cleans up after itself using the cleanup function.
- The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviours.
- prevent unwanted behaviours and optimizes application performance

### When should we use the useEffect() cleanup function?

- if our component unmounts before our promise resolves, useEffect will try to update the state (on an unmounted component) and will throw an error.(memory leak)
  To fix this, we need to return a cleanup function from useEffect.

## _39-6_ - (Recap) Load dynamic data, API call useEffect integrate state

### Trigger, render and commit in react

### What does render means?

- Before your components are displayed on screen, they must be rendered by react.
- "Rendering" means that React is calling your component, which is a function.
- "Rendering" is the process of converting a component into HTML.

### Understand Trigger, render and commit

Imagin that your component are cooks in the kitchen. In this scenario, React is the waiter who puts in requests from customers and brings them their orders. This process of `requesting` and `serving UI` has three steps:

1. Triggering a render (delivering the guest's order to the kitchen).
2. Rendering the component (Preparing the order in the kitchen).
3. Committing to the DOM (Placing the order on the table).

### Step 1 : Trigger a render

There are two reasons for a component to render:

1. It's the component's initial render.
2. The component's (or one of its ancestors) state has been updated.

_Initial render_ : When your app starts , you need to trigger the initial render. It's done by calling createRoot with the target DOM node, and then calling its render method with your component.

_Re-render when state updates_ :

- Once the component has been initially rendered, you can trigger further renders by updating its state the set function. updating your component's state automatically queues a render.
- You can imagine these as a restaurant guest ordering tea, dessert and all sorts of things after puting in their first order, depending on the state of their thirst or hunger.

## _39-7_ - (Recap) Core Concepts Components, State, useEffect

## _39-8_ - Thinking in React way

## _39-9_ - Explore React official documentation
