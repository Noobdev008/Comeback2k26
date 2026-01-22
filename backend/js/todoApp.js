let todoInput = document.getElementById('todoInput');
let actionBtn = document.getElementById('actionBtn');
let output = document.getElementById('output');

actionBtn.addEventListener('click', () => {
  const value = todoInput.value.trim();

  if (value === '') {
    alert('Please enter text');
    return;
  }

  const todoItem = document.createElement('div');

  const text = document.createElement('span');
  text.textContent = value;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  const updateBtn = document.createElement('button');
  updateBtn.textContent = 'Update';

  // Delete
  deleteBtn.addEventListener('click', () => {
    todoItem.remove();
  });

  // Update
  updateBtn.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = text.textContent;

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';

    todoItem.innerHTML = '';
    todoItem.appendChild(input);
    todoItem.appendChild(saveBtn);

    saveBtn.addEventListener('click', () => {
      const updatedValue = input.value.trim();

      if (updatedValue === '') {
        alert('Todo cannot be empty');
        return;
      }

      text.textContent = updatedValue;

      todoItem.innerHTML = '';
      todoItem.appendChild(text);
      todoItem.appendChild(deleteBtn);
      todoItem.appendChild(updateBtn);
    });
  });

  todoItem.appendChild(text);
  todoItem.appendChild(deleteBtn);
  todoItem.appendChild(updateBtn);

  output.appendChild(todoItem);
  todoInput.value = '';
});
