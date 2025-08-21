console.log('Video 32');

// Keyword RETURN
const sum = (a, b, c) => {
  if (typeof a !== 'number') {
    return;
  }
  console.log('Run before');
  console.log('Run after');
  return a + b + c;
};

console.log(sum('bình phan', 8, 10));
