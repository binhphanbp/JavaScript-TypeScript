console.log('Video 62');

console.log('1');

// Async

console.log('3');

const myPromist = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('2');

      // return
      resolve('OK');
    }, 2000);
  });
};

myPromise().then();
