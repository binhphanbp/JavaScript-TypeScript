console.log('Video 51');

const myBtn = document.getElementById('myBtn');
console.log(myBtn);

// Cách 1
// myBtn.addEventListener('click', () => {
//   console.log('Button Clicked');
// });

// Cách 2 (nên dùng tách như thế này để dễ quản lý)
const handleClickBtn = () => {
  console.log('Button Clicked');
};
myBtn.addEventListener('click', handleClickBtn);
// handleClickBtn trong addEventListener là truyền tham chiếu hàm, không có dấu ()
