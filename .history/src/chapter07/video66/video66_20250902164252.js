console.log('Video 66');

//================== ASYNC - AWAIT ==================//

// Cách dùng Promise
fetch('http://localhost:8000/users')
  .then((response) => response.json())
  .then((data) => console.log('fetch with promise:', data));

// async - await
const fetchUser = async () => {
  const response = await fetch('http://localhost:8000/users');
  const data = response.json();
  console.log(response);
};

fetchUser();
