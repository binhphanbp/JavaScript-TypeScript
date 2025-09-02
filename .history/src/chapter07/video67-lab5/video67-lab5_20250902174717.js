console.log('Video 67');
const tbody = document.querySelector('#users tbody');

// Fetch API
const fetchUsers = async () => {
  const response = await fetch('http://localhost:8000/users');
  const data = await response.json(); // JavaScript Object contain the user data

  data.forEach((user) => console.log(user));

  console.log('User Data (JavaScript Object)', users);
};
fetchUsers();
