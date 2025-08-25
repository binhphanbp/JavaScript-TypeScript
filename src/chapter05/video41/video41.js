console.log('Video 41');

//============== FILTER() =============//
// Cũng giống như map() thì filter() tạo ra array mới chứ không modify array gốc

// Ôn tập lại map() để so sánh với filter()
const ages = [10, 20, 30, 25, 12, 17];
const agesX2 = ages.map((item) => {
  return item * 2;
});

// filter()
const agesGreaterThan18 = ages.filter((item) => {
  return item > 18; // true
});

// filter() ngắn gọn hơn
const agesGreaterThan18_v2 = ages.filter((item) => item > 18);

console.log('original:', ages);
console.log('agesX2:', agesX2); // Array(6) [ 20, 40, 60, 50, 24, 34 ]
console.log('agesGreaterThan18:', agesGreaterThan18); // Array(3) [ 20, 30, 25 ]
console.log('agesGreaterThan18_v2:', agesGreaterThan18_v2); // Array(3) [ 20, 30, 25 ]
