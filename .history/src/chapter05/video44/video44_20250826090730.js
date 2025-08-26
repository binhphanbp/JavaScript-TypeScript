console.log('Video 44');

//============== FOR IN ==============//
// Duyệt qua thuộc tính

const sv1 = {
  name: 'Bình Phan',
  age: 21,
  score: 9.5,
};
const sv2 = {
  name: 'Kim Anh',
  age: 20,
  score: 10,
};
const sv3 = {
  name: 'Nguyen Van A',
  age: 22,
  score: 8,
};
const sinhvien = [sv1, sv2, sv3];

console.log('>>> check sinhvien:', sinhvien);

// Dùng forEach()
sinhvien.forEach((item, index) => {
  console.log('index =', index, 'name =', item.name);
});

// for...in
for (let key in sinhvien) {
  console.log('key =', key, typeof key, 'value =', sinhvien[key]);
}

const scoreArr = [10, 2, 8, 9];
console.log(scoreArr[0]);

//============== FOR OF ==============//
