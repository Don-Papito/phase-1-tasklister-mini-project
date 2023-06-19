document.addEventListener("DOMContentLoaded", () => {
  let testForm = document.querySelector("form");
  testForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskDesc = event.target.elements["new-task-description"].value;
    const duration = event.target.elements["additional-value"].value;
    addToDo(taskDesc, duration);
    testForm.reset();
  })
});

function addToDo(task, duration){
  let newPara = document.createElement('p');
  let newBtn = document.createElement('button');
  let editBtn = document.createElement('button');
  let taskText = document.createTextNode(task);
  let durationText = document.createTextNode(` (${duration}) `);
  newBtn.addEventListener('click', deleteTask);
  newBtn.textContent = '86';
  editBtn.addEventListener('click', editTask)
  editBtn.textContent = 'Changes'
  newPara.appendChild(taskText);
  newPara.appendChild(durationText);
  newPara.appendChild(newBtn);
  newPara.appendChild(document.createTextNode(' '));
  newPara.appendChild(editBtn)
  // newPara.textContent = `${task} `
  console.log(newPara);
  document.querySelector('#list').appendChild(newPara);
}

function deleteTask(event){
  event.target.parentNode.remove();
}

function editTask(event) {
  const taskElement = event.target.parentNode;
  const taskTextElement = taskElement.firstChild;
  const taskText = taskTextElement.textContent;
  
  const newTaskDescription = prompt('Make changes', taskText);
  if (newTaskDescription) {
    taskTextElement.textContent = newTaskDescription;
  }
}




