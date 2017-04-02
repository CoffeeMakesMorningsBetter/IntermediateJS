document.addEventListener("DOMContentLoaded", function(event) {
  var ul = document.getElementById("todolist") // closure
  var todoForm = document.getElementById("todo-form");
  todoForm.addEventListener("submit", function(event) { // listens to the submit button 
    event.preventDefault(); // prevents browswer from refreshing
    var titleInput = document.querySelector("input[name=title]"); // gets all values



    var li = document.createElement("li")
    var text = document.createTextNode(titleInput.value)
    li.appendChild(text);
    ul.appendChild(li);
    todoForm.reset() // clears the input fields
  });

  ul.addEventListener("click", function(event){
      event.target.remove()

      //this.target is the same as event.target on any callback
  });
});
