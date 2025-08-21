console.log('Video 32');

// Keyword RETURN
const sum = (a, b, c) => {
  if (typeof a !== 'number') {
    return 0;
  }
  console.log('Run before');
  return a + b + c;
  console.log('Run after');
};

console.log(sum('bình phan', 8, 10));
