console.log('Video 66');

//================== ASYNC - AWAIT ==================//

// Cách dùng Promise
fetch('http://localhost:8000/users')
  .then((response) => response.json())
  .then((data) => console.log('fetch with promise:', data));

// async - await
const fetchUser = () => {
  const response = fetch('http://localhost:8000/users');
  console.log(response);
};

fetchUser();
