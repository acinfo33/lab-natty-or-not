function addTask() {
            const taskInput = document.getElementById('new-task');
            const taskText = taskInput.value;
            if (taskText) {
                const li = document.createElement('li');
                li.textContent = taskText;
                document.getElementById('tasks').appendChild(li);
                taskInput.value = '';
            }
        }
