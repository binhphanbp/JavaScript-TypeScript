console.log('Video 64');

//=============== TRY/CATCH/FINALLY ===============//
const doSomething = (a, b) => {
  if (b === 0) {
    throw new Error('b is 0');
  }

  return a / b;
};

try {
  doSomething(10, 0);
} catch (errorMessage) {
  console.log('Error -', errorMessage);
} finally {
  console.log('Run final');
}
