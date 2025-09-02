console.log('Video 66');

//================== ASYNC - AWAIT ==================//
fetch('http://localhost:8000/users')
  .then((response) => response.json())
  .then((data) => console.log(data));
