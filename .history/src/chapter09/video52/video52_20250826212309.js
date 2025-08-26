console.log('Video 52');

const myBtnElement = document.getElementById('myBtn');
const backMyBtnElement = document.getElementById('myBtnChangeBack');
const myText = document.getElementById('myText');

console.log(myBtnElement, myText);

myBtnElement.addEventListener('click', () => {
  myText.innerText = 'Change my text';
});

backMyBtnElement.addEventListener('click', () => {
  myText.innerText = 'Video 52';
});
