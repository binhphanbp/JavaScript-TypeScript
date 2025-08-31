console.log('Video 62');

console.log('1');

// Async

console.log('3');

const myPromist = () => {
  return new Promise((resoleve, reject) => {
    setTimeout(() => {
      console.log('2');
    }, 2000);

    resoleve('OK');
  });
};
