const addBtn = document.querySelector('#add-button');
addBtn.addEventListener('click', function () {
  const input = document.querySelector('#todo-input');
  const task = input.value.trim();
  const taskList = document.querySelector('#todo-list');
  const addNewTask = document.createElement('li');
  const removeBtn = document.createElement('button');
  if (task !== '') {
    addNewTask.textContent = task;
    taskList.appendChild(addNewTask);

    input.value = '';

    removeBtn.textContent = 'Remove';
    addNewTask.appendChild(removeBtn);

    removeBtn.addEventListener('click', function () {
      removeBtn.parentNode.remove();
    });
  }
});
