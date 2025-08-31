console.log('Video 62');

console.log('1');

// Async

console.log('3');

const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('2 with promise');

      // return
      resolve('OK');
    }, 2000);
    reject(new Error('Error!'));
  });
};

myPromise().then((data) => {
  console.log('data:', data);
});
