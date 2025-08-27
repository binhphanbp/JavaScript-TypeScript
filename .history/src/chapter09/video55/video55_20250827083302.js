console.log('Video 55');

//============ LOCAL STORAGE =============//
const inputText = document.getElementById('name');
const submitBtn = document.getElementById('submitBtn');
const nameDisplay = document.getElementById('nameDisplay');

submitBtn.addEventListene('click', () => {
  const name = inputText.value;

  nameDisplay.innerText = `Your name is: ${name}`;
});

submitBtn.addEventListener('click', () => {
  const name = inputText.value;

  // Save data to local storage
  localStorage.setItem('name', name);
}