document.getElementById('add').addEventListener('click', () => {
  var todoItem = document.getElementById('item');
    
  if (todoItem.value.length === 0) {
    alert('Cannot add empty todo');
  } else {
    var todo = document.createTextNode(todoItem.value);
    var delButton = document.createElement('button');
    delButton.appendChild(document.createTextNode('Delete'));
    delButton.classList.add('del');
    
    var li = document.createElement('li');
    li.appendChild(todo);
    li.appendChild(delButton);
    
    document.getElementById('todo-list').appendChild(li);
    todoItem.value = '';
    for (i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].onclick = function() {
        this.parentElement.style.display = 'none';
      }
    }
  }
})

document.getElementById('clear').addEventListener('click', () => {
  document.getElementById('todo-list').innerHTML = '';
})

var deleteBtn = document.getElementsByClassName('del');
for (i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].onclick = function() {
    this.parentElement.style.display = 'none';
  }
}
