console.log('Video 66');

//================== ASYNC - AWAIT ==================//
const temp = fetch('http://localhost:8000/users');

temp.then((response) => response.json()).then((data) => console.log(data));
