console.log('Video 40');

const scores = [10, 6, 8, 9, 5];

scores.forEach((element, value) => {
  console.log('index =', index, 'value =', element);
});

const map1 = scores.map((element, index) => {
  console.log(`Element at index ${index} is ${element}`);
});

console.log(map1);
