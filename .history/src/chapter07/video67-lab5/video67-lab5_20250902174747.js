console.log('Video 67');
const tbody = document.querySelector('#users tbody');

// Fetch API
const fetchUsers = async () => {
  const response = await fetch('http://localhost:8000/users');
  const data = await response.json(); // JavaScript Object contain the user data

  data.forEach((user) => console.log(user));
  const row = tbody.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerHTML = user.id;
  cell2.innerHTML = user.name;

  console.log('User Data (JavaScript Object)', users);
};
fetchUsers();
