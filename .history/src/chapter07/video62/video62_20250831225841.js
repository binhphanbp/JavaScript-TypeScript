console.log('Video 62');

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

console.log('1');
myPromise().then((data) => {
  console.log('data:', data);
  console.log('3');
});
