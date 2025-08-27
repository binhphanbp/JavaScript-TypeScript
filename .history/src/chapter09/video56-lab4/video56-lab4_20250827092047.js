console.log('Video 56 - Lab 4');

const submitBtnElement = document.getElementById('submitBtn');
const inputTextElement = document.getElementById('inputText');
const inputPasswordElement = document.getElementById('inputPassword');

submitBtnElement.addEventListener('click', () => {
  const userName = inputTextElement.value;
  const password = inputPasswordElement.value;

  if (userName === 'bianbp' && password === '150504') {
    alert('Login successfully!');
    location.href = './success.html';
  } else {
    alert('Login failed!');
  }
});
