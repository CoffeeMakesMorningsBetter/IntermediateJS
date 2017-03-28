# Introduction to the DOM

## Objectives

* Explain in your own words what the DOM is and how it is created
* Use the document object to manipulate the DOM
* Iterate over DOM elements and add attributes

## What is the DOM?

MDN

The Document Object Model (DOM) is a programming interface for HTML, XML and SVG documents. It provides a structured representation of the document as a tree. The DOM defines methods that allow access to the tree, so that they can change the document structure, style and content. The DOM provides a representation of the document as a structured group of nodes and objects, possessing various properties and methods. Nodes can also have event handlers attached to them, and once an event is triggered, the event handlers get executed. **Essentially, it connects web pages to scripts or programming languages.**

To access the DOM, we make use of the `document object`. This object has properties and functions that we use to access our HTML elements which we can manipulate with JavaScript.

Working with the DOM is one of the more fun parts about using JavaScript because we can add behavior to our web pages. With JavaScript, we can change how a page looks and functions based on events the user makes (clicking, hovering, submitting a form, typing a certain key). As you walk through the next couple sections, think about what you might be able to build with this new knowledge.

## How to access elements in the DOM

Let's get started with this sample HTML. Copy and paste this into a file called `index.html` and add an external script tag, or use a <script></script> right before the body closes. For simplicity, we'll take the latter approach right now.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- make sure for now that your script tag is in the head -->
    <title>Document</title>
</head>
<body id= "container">
    <div class="hello">
        Hello World
    </div>
    <div class="hello">
        Hello Everyone!
    </div>
    <a href="#">This link goes nowhere!</a>
    <button>Click me!</button>
    <script>
        // you can put your JavaScript in here, or include an external file.
    </script>
</body>
</html>
```
The easiest way to select elements is by their id using the `getElementById` function on the document object (`document.getElementById`). This returns a **SINGLE** element (because ids must be unique!).

```JavaScript
var container = document.getElementById("container");
```
We can also use a function called `querySelector`, which selects a **SINGLE** element using CSS selectors. If multiple elements match the query you pass in to `querySelector`, *the function will simply return the first matching element that it finds.*

```JavaScript
var container = document.querySelector("#container");
```
Notice that when we select by id using `querySelector`, we pass in the string `#container`, not `container`. Remember: `querySelector` **always expects a CSS selector.** In contrast, when we use `getElementById`, **we just pass in the string container (no hashtag)!** Since `getElementById` expects to find an element by id, in this case the hashtag isn't necessary.

**To select multiple elements**, we can use `getElementsByTagName` or `getElementsByClassName`, or we can use `querySelectorAll` and pass in a CSS selector. These will return what appear to be arrays (they are not exactly arrays, but for right now, that is not a problem).

```JavaScript
var divs = document.getElementsByTagName("div");
var divs = document.querySelectorAll("div");
```
Here is another example using `getElementsByClassName` and the same thing with `querySelectorAll`.

```JavaScript
var divsWithClassOfHello = document.getElementsByClassName("hello");
var divsWithClassOfHello = document.querySelectorAll(".hello");
```

As you can see, when you pass in a class name using `getElementByClassName`, you don't need to start the string with a dot. The function expects to receive a class name - it's in the name of the function! On the other hand, `querySelectorAll` takes in any valid CSS query, which is why you need to pass in .hello if you want it to find all elements with a class of "hello."
