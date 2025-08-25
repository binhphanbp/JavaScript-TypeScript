console.log('Video 40');

//============== MAP() =============//
// map() tạo ra array mới chứ không modify array gốc

const scores = [10, 6, 8, 9, 5];

// forEach() thường dùng để read data
scores.forEach((element, index) => {
  console.log('index =', index, 'value =', element);
});

// Dùng forEach đẩy phần tủ vào mảng mới (ở bên dưới dùng map() sẽ nhanh hơn, dễ dàng hơn)
const scores1 = [10, 6, 8, 9, 5];
let doubled = [];
scores1.forEach((element) => {
  doubled.push(element * 2);
});
console.log(doubled);

// map() thường dùng để modify data
const scoresx2 = scores.map((element) => {
  return element * 2;
});
// map() nhưng ngắn gọn hơn
const otherScoresx2 = scores.map((elemtn) => elemtn * 2);

console.log('scores =', scores);
console.log('scoresx2 =', scoresx2);
console.log('otherScoresx2 =', otherScoresx2);
