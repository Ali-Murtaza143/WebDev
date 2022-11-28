var list = document.getElementById("list");
function addtodo(){
    var todo_item = document.getElementById("todo_item");
    // create li tag with text node
    var li = document.createElement('ul');
    li.setAttribute("class","list-group-item list_item")
    var litext = document.createTextNode(todo_item.value);
 var text = document.createElement('span');
text.setAttribute("class","col-md-7 mr-sm-0 ml-1");
text.appendChild(litext);
li.appendChild(text); 
   


    //create delete button

    var delBtn = document.createElement("button");
    var deltext =document.createTextNode("Delete");
    delBtn.setAttribute("class","btn btn-danger  col-md-2 mr-sm-0 ml-2");
    delBtn.setAttribute("onclick","deleteItem(this)");
    delBtn.appendChild(deltext);
    delBtn.appendChild(deltext);
// create edit button
    var editBtn = document.createElement("button");
    var edittext =document.createTextNode("Edit");
    editBtn.appendChild(edittext);
    editBtn.setAttribute("class","btn btn-success col-md-2 mr-sm-0 ml-2");
    editBtn.setAttribute("onclick","editItem(this)");
li.appendChild(editBtn);
li.appendChild(delBtn);
list.appendChild(li);
todo_item.value=""

}
function deleteItem(e)
{
e.parentNode.remove()
}
function deleteall()
{
    list.innerHTML=""
}
function editItem(e)
{
    var val=e.parentNode.firstChild.firstChild.nodeValue;
    var editValue =prompt("enter edit value",val)
    e.parentNode.firstChild.firstChild.nodeValue = editValue
 
}
 