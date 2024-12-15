import { database } from './firebase.js'; 

const childId = 'child1'; // Replace with the actual child ID

database.ref(`users/${childId}`).on('value', (snapshot) => {
  const data = snapshot.val();
  if (data) {
    displayTasks('daily', data.daily);
    displayTasks('weekly', data.weekly);
    displayTasks('monthly', data.monthly);
  }
});

function displayTasks(listType, tasks) {
  const listElement = document.getElementById(`${listType}List`);
  listElement.innerHTML = ''; 

  if (tasks) {
    tasks.forEach(task => {
      const listItem = document.createElement('li');
      listItem.textContent = task;
      listElement.appendChild(listItem);
    });
  }
}
