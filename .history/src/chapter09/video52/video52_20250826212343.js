console.log('Video 52');

const myBtnElement = document.getElementById('myBtn');
const backMyBtnElement = document.getElementById('myBtnChangeBack');
const myTextElement = document.getElementById('myText');

console.log(myBtnElement, myTextElement);

myBtnElement.addEventListener('click', () => {
  myTextElement.innerText = 'Change my text';
});

backMyBtnElement.addEventListener('click', () => {
  myTextElement.innerText = 'Video 52';
});
