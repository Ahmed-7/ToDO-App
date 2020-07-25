var list = document.getElementById("list");
function addToDO() {
  // List input Work
  var todo_item = document.getElementById("todo-item");
  var li = document.createElement("li");
  var liText = document.createTextNode(todo_item.value);

  li.appendChild(liText);
  // Delete Button
  var delBtn = document.createElement("button");
  var delText = document.createTextNode("Delete");
  delBtn.setAttribute("class", "delete");
  delBtn.setAttribute("onclick", "delete_item(this)");
  delBtn.appendChild(delText);
  //   create edit button

  var editBtn = document.createElement("button");
  var editText = document.createTextNode("Edit");
  editBtn.appendChild(editText);
  editBtn.setAttribute("class", "edit");
  editBtn.setAttribute("onclick", "editList(this)");

  li.appendChild(editBtn);

  li.appendChild(delBtn);

  list.appendChild(li);
  todo_item.value = "";

  console.log(li);
}

function delete_item(e) {
  e.parentNode.remove();
}
function deleteAll() {
  list.innerHTML = "";
}
function editList(e) {
  var val = e.parentNode.firstChild.nodeValue;
  var editValue = prompt("Enter Edit Value", val);

  e.parentNode.firstChild.nodeValue = editValue;
}
