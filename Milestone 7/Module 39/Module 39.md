# Module 39

## _39-1_ - Module Introduction and Vite Project Overview

_React core concept_

- Components
- JSX
- props
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

## _39-3_ - A simple Introduction to State change in React

## _39-4_ - Understand the concept of useState and react hooks

## _39-5_ - (Advanced) Understand the concept of useEffect

## _39-6_ - (Recap) Load dynamic data, API call useEffect integrate state

## _39-7_ - (Recap) Core Concepts Components, State, useEffect

## _39-8_ - Thinking in React way

## _39-9_ - Explore React official documentation
