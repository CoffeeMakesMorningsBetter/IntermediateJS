# DOM Exercises

```html
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <title>Document</title>
</head>
<body>
    <div class='header'>
    </div>
    <section id='container'>
        <ul>
            <li class='first'>one</li>
            <li class='second'>two</li>
            <li class='third'>three</li>
        </ul>
        <ol>
            <li class='first'>one</li>
            <li class='second'>two</li>
            <li class='third'>three</li>
        </ol>
    </section>
    <div class='footer'>
    </div>
</body>
</html>
```
## Write the code necessary to do the following:

1. Select the `section` with an id of `container` **without using** `querySelector`.

```JavaScript
var selection = document.getElementById('container');
```

2. Select the `section` with an id of `container` using `querySelector`.

```JavaScript
var selection = document.querySelector('#container');
```

3. Select all of the list items with a class of 'second'.

```JavaScript
var allSecond = document.getElementsByClassName('.second')
```

4. Select a list item with a class of `third`, but only the list item inside of the `ol` tag.

```JavaScript
var listThird = document.querySelector('ol .third');
```

5. Give the section with an `id` of `container` the text '`Hello`!'.

```JavaScript
var hello = document.getElementById(`container`)
hello.innerHTML = 'Hello'
```

6. Add the class `main` to the div with a class of `footer`.

```JavaScript
var footer = document.querySelector('.footer');
footer.classList.add('main');
```

7. Remove the class `main` on the `div` with a class of `footer`.

```JavaScript
var dunzo = document.querySelector('.main')
dunzo.classList.remove('main')
```

8. Create a new `li` element.

```JavaScript
var newElem = document.createElement('li')
```

9. Give the `li` the text "four".

```JavaScript
newElem.innerHTML = "four"
```

10. Append the `li` to the `ul` element.

```JavaScript
var targetUl = document.querySelector('ul')
targetUl.append(newElem);
```

11. Loop over all of the lis inside the ol tag and give them a background color of "green".

```JavaScript
var yippeColor = document.querySelectorAll('ol.li')

for(var i = 0; i < yippeColor.length; i++){
    yippeColor[i].style.backgroundColor = "green"
}
```

12. Remove the div with a `class` of `footer`.

```JavaScript
var removeFoot = document.querySelector('#footer')

var cool = document.getElementById('container')
cool.removeChild(removeFoot)
```
