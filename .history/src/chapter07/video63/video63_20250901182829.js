console.log('Video 63');

//============= FETCH API ================//
// Bản chất, API là một URL. Dùng fetch để gọi tới URL đó để lấy data

// fetch('url') => raw data (response) => object (Data type in JavaScipt)
const temp = fetch('http://localhost:8000/users');

temp.then((response) => response.json()).then((data) => data);
