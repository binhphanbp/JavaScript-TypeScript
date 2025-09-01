console.log('Video 65');

const greeting = (myName, callback) => {
  console.log(`Hello, my name is ${myName}`);

  callback();
};

const hello = () => {
  console.log('Learn callback...');
};

const hi = () => {
  console.log('Say hi...');
};

greeting('Bình Phan', hello);
greeting('Bình Phan', hi);
