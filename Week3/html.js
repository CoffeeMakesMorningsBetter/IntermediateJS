function callThisFunctionWhenTheDOMisLoaded(){
  var ul = document.getElementsByClassName("dog"); // getElementsByClassName returns array must be specific in array position
  var div = document.createElement("div");
  var text = document.createTextNode("Hello World");
  div.appendChild(text);
  ul[0].appendChild(div);

  var myButton = document.querySelector(".clear > button") //querySelector more dynmaic then getElementByIddocument.querySelectorAll()
  myButton.addEventListener('click', function() {
      //alert("I got a click")
      var myLi = document.querySelectorAll("li");
      for(var i = 0; i < myLi.length; i++) {
        myLi[i].remove();
      }
  })
}

// var li = document.createElement("li")
//
// // creates li element
//
// var text = document.createTextNode("Some text")
//
// // creates text
//
// li.appendChild(text)
//
// // puts text between li elements
//
// ul.appendChild(li)

// to render it to the webpage

document.addEventListener("DOMContentLoaded", callThisFunctionWhenTheDOMisLoaded);

// browser invokes the function when DOM completed loaded


function clearLi(){

}
