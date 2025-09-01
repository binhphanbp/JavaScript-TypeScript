console.log('Video 64');

//=============== TRY/CATCH/FINALLY ===============//
const doSomething = (a, b) => {
  const a = 10,
    b = 0;
  if (b === 0) {
    throw new Error('b is 0');
  }

  return a / b;
};
