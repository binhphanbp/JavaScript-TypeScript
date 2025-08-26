console.log('Video 53');

const myBtnChangeColorElement = document.getElementById('myBtnChangeColor');
const myBtnChangeBackElement = document.getElementById('myBtnChangeBack');
const myTextElement = document.getElementById('myText');

// style
myBtnChangeColorElement.addEventListener('click', () => {
  myTextElement.style.color = 'white';
  myTextElement.style.backgroundColor = 'blue';

  // classList
  myTextElement.classList.add('text-style binhphan');
});
myBtnChangeBackElement.addEventListener('click', () => {
  myTextElement.style.color = 'black';
  myTextElement.style.backgroundColor = 'unset';
});
