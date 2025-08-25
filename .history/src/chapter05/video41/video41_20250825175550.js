console.log('Video 41');

//============== FILTER() =============//
// Cũng giống như map() thì filter() tạo ra array mới chứ không modify array gốc

const ages = [10, 20, 30, 25, 12, 17];

const agesX2 = ages.map((item) => {
  return item * 2;
});

console.log('original:', ages);
console.log('agesX2:', agesX2); // Array(6) [ 20, 40, 60, 50, 24, 34 ]
