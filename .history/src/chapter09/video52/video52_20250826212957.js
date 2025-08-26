console.log('Video 52');

const myBtnElement = document.getElementById('myBtn');
const backMyBtnElement = document.getElementById('myBtnChangeBack');
const myTextElement = document.getElementById('myText');

console.log(myBtnElement, myTextElement);

// innerText
myBtnElement.addEventListener('click', () => {
  myTextElement.innerText = 'Change my text';
});

backMyBtnElement.addEventListener('click', () => {
  myTextElement.innerText = 'Video 52';
});

// innerHTML
const myBtnChangeHTML = document.getElementById('myBtnChangeHTML');
const myHTMLElement = document.getElementById('myHTML');
console.log(myBtnChangeHTML, myHTMLElement);

myBtnChangeHTML.addEventListener('click', () => {
  myHTMLElement.innerHTML = '<strong><em>HTML changed</em></strong>';
});
