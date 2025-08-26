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
const person = {
  name: 'John Doe',
  age: 30,
  job: 'Developer',
};
for (let key in person) {
  console.log(key, person[key]);
}

//============== FOR OF ==============//
// Duyệt qua giá trị
// for...of với ARRAY
const languages = ['JavaScript', 'PHP', 'Ruby', 'Python'];
for (let value of languages) {
  console.log(value);
}

// Nâng cao
// for...of với OBJECT
for (let value of Object.values(person)) {
  console.log(value);
}

for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}
