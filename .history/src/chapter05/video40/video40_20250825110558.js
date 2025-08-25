console.log('Video 40');

const scores = [10, 6, 8, 9, 5];

scores.forEach((element, index) => {
  console.log('index =', index, 'value =', element);
});

const map1 = scores.map((element, index) => {
  return element * 2;
});

console.log(map1);
