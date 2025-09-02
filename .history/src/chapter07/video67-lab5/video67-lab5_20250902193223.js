console.log('Video 67');
const tbody = document.querySelector('#users tbody');

// Fetch API
const fetchUsers = async () => {
  const response = await fetch('http://localhost:8000/users');
  const data = await response.json(); // JavaScript Object contain the user data

  console.log('User Data:', users);

  // Insert Data to Table
  for (let i = 0; i < data.length; i++) {
    tbody.innerHTML += `
    <tr>
      <td>${data[i].id}</td>
      <td>${data[i].name}</td>
      <td>${data[i].country}</td>
    </tr>
    `;
  }
};
fetchUsers();
