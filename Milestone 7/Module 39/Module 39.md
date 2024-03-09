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

## _39-6_ - (Recap) Load dynamic data, API call useEffect integrate state

## _39-7_ - (Recap) Core Concepts Components, State, useEffect

## _39-8_ - Thinking in React way

## _39-9_ - Explore React official documentation
