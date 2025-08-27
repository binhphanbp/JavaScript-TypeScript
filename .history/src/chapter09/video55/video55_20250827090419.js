console.log('Video 55');

//============ LOCAL STORAGE =============//
const inputText = document.getElementById('name');
const submitBtn = document.getElementById('submitBtn');
const nameDisplay = document.getElementById('nameDisplay');
const previousNameDisplay = document.getElementById('previousNameDisplay');

submitBtn.addEventListener('click', () => {
  localStorage.setItem('userName', inputText.value);

  nameDisplay.innerHTML = `Your name is: <b>${inputText.value}</b>`;
});
