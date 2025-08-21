console.log('Video 33');

// Global Scope
const globalVariable = 10;
const show = () => {
  console.log(globalVariable); // Truy cập được globalVariable
};
show();
console.log(globalVariable); // Truy cập được globalVariable

// Function Scope
const sayHi = () => {
  let name1 = 'Phan Đức Bình';
  console.log('Hi ' + name1); // Truy cập được name1

  if (true) {
    const x = 1;
    const y = 2;
    console.log(x, y);
  }
};
sayHi();
console.log(name1); // Error: Uncaught ReferenceError: name1 is not defined
