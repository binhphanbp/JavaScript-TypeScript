console.log('Video 55');

//============ LOCAL STORAGE =============//
const inputText = document.getElementById('name');
const submitBtn = document.getElementById('submitBtn');
const nameDisplay = document.getElementById('nameDisplay');

submitBtn.addEventListene('click', () => {
  const name = inputText.value;
  console.log(name);

  nameDisplay.innerHTML = `Your name is: ${name}`;
});
