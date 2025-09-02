console.log('Video 67');

// Fetch API
const fetchUsers = async () => {
  const response = await fetch('http://localhost:8000/users');
  const users = await response.json(); // JavaScript Object contain the user data

  console.log('User Data (JavaScript Object)');
};
