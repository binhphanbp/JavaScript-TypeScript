console.log('Video 56 - Lab 4');

const submitBtnElement = document.getElementById('submitBtn');
const inputTextElement = document.getElementById('inputText');
const inputPasswordElement = document.getElementById('inputPassword');
console.log(location);

submitBtnElement.addEventListener('click', () => {
  const userName = inputTextElement.value;
  const password = inputPasswordElement.value;

  if (userName === 'bianbp' && password === '150504') {
    alert('Login successfully!');
  } else {
    inputPasswordElement.style.outline = 'none';
    inputTextElement.style.outline = 'none';
    inputTextElement.style.border = 'solid 1px red';
    inputPasswordElement.style.border = 'solid 1px red';
    alert('Login failed!');
  }
});
