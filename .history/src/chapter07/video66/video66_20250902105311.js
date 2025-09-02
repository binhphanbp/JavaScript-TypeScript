console.log('Video 66');

//================== ASYNC - AWAIT ==================//

// Cách dùng Promise
fetch('http://localhost:8000/users')
  .then((response) => response)
  .then((data) => console.log('fetch with promist:'data));
