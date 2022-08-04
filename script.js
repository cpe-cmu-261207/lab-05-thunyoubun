const inputAdd = document.getElementById("input-add-todo");
const todoCtn = document.getElementById("todo-container");

inputAdd.onkeyup = (event) => {
  if (event.key !== "Enter") return;

  //your code here
  /*  const todoText = document.createElement("span");
  todoText.innerText = input.value; */
  /*  addTodo(todoText, completed); */
  if (inputAdd.value === "") {
    alert("Todo cannot be empty");
    return;
  }

  addTodo(inputAdd.value, false);
};

function addTodo(title, completed) {
  //create a div that holds todo title, done button, delete button
  const div = document.createElement("div");
  div.className = "border-bottom p-1 py-2 fs-2 d-flex";

  //create span for showing title
  const span = document.createElement("span");
  span.innerText = title;
  span.style.textDecoration = completed ? "line-through" : "";
  span.className = "me-3";

  //create done button
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  doneBtn.className = "btn btn-success me-2";
  doneBtn.style.display = "none";

  //create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "btn btn-danger";
  deleteBtn.style.display = "none";

  //your code here
  //append todo to HTML...
  //define buttons event...

  const li = document.createElement("li");
  span.innerText = title;

  li.appendChild(span);
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);

  div.append(li);
  todoCtn.append(div);

  doneBtn.onclick = () => {
    if (span.style.textDecoration === "none") {
      span.style.textDecoration = "line-through";
    } else span.style.textDecoration = "none";
    saveTodo();
  };

  deleteBtn.onclick = () => {
    todoCtn.removeChild(div);
    saveTodo();
  };

  div.onmouseover = () => {
    deleteBtn.style.display = "";
    doneBtn.style.display = "";
  };

  div.onmouseout = () => {
    deleteBtn.style.display = "none";
    doneBtn.style.display = "none";
  };

  inputAdd.value = "";
  saveTodo();
}

function saveTodo() {
  const data = [];

  for (const todoDiv of todoCtn.children) {
    //your code here
    const todoObj = {};
    todoObj.title = todoDiv.children[0].innerText[0];
    todoObj.completed =
      todoDiv.children[0].children[0].style.textDecoration === "line-through";
    data.push(todoObj);
  }
  //your code here
  const dataStr = JSON.stringify(data);
  console.log(dataStr);
  localStorage.setItem("todoListData", dataStr);
}

function loadTodo() {
  //your code here
  const dataStr = localStorage.getItem("todoListData");
  const data = JSON.parse(dataStr);

  for (const todoObj of data) {
    addTodo(todoObj.title, todoObj.completed);
  }
}

loadTodo();
