console.log('Video 49');

// getElementById()
const username = document.getElementById('username');

// querySelector() và querySelectorAll()
// querySelector() lấy ra phần tử đầu tiên
const myTest = document.querySelector('.test'); // <div class="test">Hello World</div>

// querySelectorAll() lấy ra tất cả các phần tử
const myTests = document.querySelectorAll('.test'); // NodeList(2)

console.log(username);
console.log(myTest);
console.log(myTests);
