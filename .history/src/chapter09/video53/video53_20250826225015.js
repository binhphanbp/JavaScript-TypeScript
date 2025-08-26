console.log('Video 53');

const myBtnChangeColorElement = document.getElementById('myBtnChangeColor');
const myBtnChangeBackElement = document.getElementById('myBtnChangeBack');
const myTextElement = document.getElementById('myText');

myBtnChangeColorElement.addEventListener('click', () => {
  myTextElement.style.color = 'white';
  myTextElement.style.backgroundColor = 'blue';
});
myBtnChangeBackElement.addEventListener('click', () => {
  myTextElement.style.color = 'black';
   myTextElement.style.backgroundColor = 'blue';
});
