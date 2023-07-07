    const taskList=document.getElementById('taskList');
    const completedTasks=document.getElementById('completedTasks');
    const taskInput=document.getElementById('taskInput');

    function addTask() {
      const taskText = taskInput.value;
      if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <span class="task-text">${taskText}</span>
          <div class="task-actions">
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
            <button class="complete" onclick="completeTask(this)">Complete</button>
          </div>
        `;
        taskList.appendChild(listItem);
        taskInput.value='';
      }
    }

    function editTask(button) {
      const listItem=button.parentNode.parentNode;
      const taskText=listItem.querySelector('.task-text');
      const newTaskText=prompt('Edit task:',taskText.textContent);

      if (newTaskText!==null && newTaskText.trim()!=='') {
        taskText.textContent=newTaskText;
      }
    }

    function deleteTask(button) {
      const listItem=button.parentNode.parentNode;
      listItem.remove();
    }

    function completeTask(button) {
      const listItem=button.parentNode.parentNode;
      const taskText=listItem.querySelector('.task-text');
      completedTasks.appendChild(listItem);
      button.remove();
      taskText.style.textDecoration='line-through';
      taskText.style.color='#999';
    }
