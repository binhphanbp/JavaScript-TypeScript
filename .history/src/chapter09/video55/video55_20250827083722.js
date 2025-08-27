console.log('Video 55');

//============ LOCAL STORAGE =============//
const inputText = document.getElementById('name');
const submitBtn = document.getElementById('submitBtn');
const nameDisplay = document.getElementById('nameDisplay');

submitBtn.addEventListener('click', () => {
  const name = inputText.value;

  nameDisplay.innerText = `Your name is: ${name}`;
});
