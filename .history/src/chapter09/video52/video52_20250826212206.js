console.log('Video 52');

const myBtnElement = document.getElementById('myBtn');
const myBtnElement2 = document.getElementById('myBtnChangeBack');
const myText = document.getElementById('myText');

console.log(myBtnElement, myText);

myBtnElement.addEventListener('click', () => {
  myText.innerText = 'Change my text';
});
