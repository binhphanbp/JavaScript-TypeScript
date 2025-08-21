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

  //   if (true) {
  //     let x = 10;
  //     const y = 20;
  //     console.log(x, y); // Truy cập được
  //   }

  //   console.log(x); // Error: Uncaught ReferenceError: x is not defined
};
sayHi();
console.log(name1); // Error: Uncaught ReferenceError: name1 is not defined
