console.log('Video 33');

const globalVariable = 10;
const show = () => {
  console.log(globalVariable); // Truy cập được globalVariable
};
show();
console.log(globalVariable); // Truy cập được globalVariable

const sayHi = () => {
  let name1 = 'Phan Đức Bình';
  console.log('Hi ' + name1);
};
sayHi();
console.log(name1); // Error: Uncaught ReferenceError: name1 is not defined
