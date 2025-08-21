console.log('Video 33');

const globalVariable = 10;
const show = () => {
  console.log(globalVariable); // Truy cập được globalVariable
};
show();
console.log(globalVariable); // Truy cập được globalVariable

const sayHi = () => {
  let name = 'Phan Đức Bình';
};
