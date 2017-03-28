# Higher Order Functions

## Objectives:

* Define what a higher order function is
* Define what a callback function is
* Understand why higher order functions can help reduce code duplication

### A quick review of parameters and functions

So far we have seen functions that take in all kinds of parameters: strings, numbers, booleans, and even arrays and objects. **We can also pass functions as parameters! We call functions that accept functions as parameters "higher order functions."** This is actually something special about JavaScript. Not all languages allow us to pass other functions as parameters to functions!

This might sounds a bit strange at first, so let's check out an example. Let's create a function called `sendMessage` that accepts a string and a function. The `sendMessage` function will **return the result** of the function being passed to it with the message as a **parameter:**

```JavaScript
// sendMessage is a higher order function as it accepts a parameter called fn.
// How do we know fn is a function? We can see the fn parameter is being
// invoked with ()
function sendMessage(message, fn){
    return fn(message);
}

sendMessage("Hello World", console.log); // Hello World
sendMessage("Hello World", alert); // Hello World is alerted
sendMessage("What is your name?", prompt); // value from prompt is returned
sendMessage("Do you like JavaScript?", confirm); // true or false is returned
```

It is important to remember the difference between `referencing` a function here, and `invoking` a function.
In the following line of code, `sendMessage`("Hello World", console.log);, `console.log` is a function that is being **referenced but not invoked.** Nothing is actually written to the console until the function is invoked. *When you pass a function in to a higher order function, you must always pass in the function name, not an invocation of the function.*

* Did you use parentheses to call the function? If so, you didn't pass in the function itself, which is what the higher order function wants you to do
