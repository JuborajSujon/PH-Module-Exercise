# Milestone 6

## Module 32

_Title :_

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
