# How The Web Works

* `get` statement
* server
* HTTP request
* `response` statement

## Steps

Network tab in chrome tools to see if error
  * common errors is wrong page grabbed

1. IP Address

  https://rithmschool.com/courses/git

  `domain` is rithmschool.com

  `DNS` takes `domain` and translates its into an `IP` (number ie: 192.168.1.1)

  `https:` is the `protocol` - how we will get data, s guarantees privacy

  `http` is *NOT SECURE**

  /courses/git is the `path`

  `GET` is a request specific to HTTP protocol - **IT GETS data hence the name** , we request the *path*

  What we get back is the HTML files **only**

  It reads the HTML file *line by line* to **create the DOM, which is what you interact with**, the HTML file is not modified

  <HEAD> holds the meta data about the site which is anything about the that you don't want displayed

  When it hits line with CSS it makes another `GET` request to the URL to get `CSS` file, then we apply CSS to the page

  Go to next line and DOM node

  WITH JS files it `GET` file and executes code BUT what if we are interacting with the DOM functions (thats why people put <script> tags on bottom) OR add this in JS file

  document.addEventListerner("")

  Once DOM complete it will fire off event notifying user it is compeleted loaded


## NOTE

TCP is different from HTTP

HTTP is higher level protocol

  HTTP uses TCP for reliabilty etc


## to target decendents

The greater explicity says only descdents in ul if there is a div then it ignores those
this targets only Dole b/c it is a direct descendent ignores the <div>

```HTTP
<ul>
  <div>
    <li>BOB</li>
  </div>
  <li>Dole</li>
<ul>

class > element {
  color: black
}
```
