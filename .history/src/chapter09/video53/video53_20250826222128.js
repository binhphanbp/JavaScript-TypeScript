console.log('Video 53');

const myBtnChangeColorElement = document.getElementById('myBtnChangeColor');
const myBtnChangeBackElement = document.getElementById('myBtnChangeBackColor');
const myTextElement = document.getElementById('myText');

myBtnChangeColorElement.addEventListener('click', () => {
  myTextElement.style.color = 'blue';
});
myBtnChangeBackElement.addEventListener('click', () => {
  myTextElement.style.color = 'red';
});
