  /***************************************************************/
 /*----Add's Function to the "Add Task" button in the header----*/
/***************************************************************/

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {

    event.preventDefault(); // Prevents code from deleting the event and refreshing the page.

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  }  

  formEl.addEventListener("submit", createTaskHandler);
  

  /***************************************************************/
 /*----Add's Function to the "Add Task" button in the header----*/
/***************************************************************/
