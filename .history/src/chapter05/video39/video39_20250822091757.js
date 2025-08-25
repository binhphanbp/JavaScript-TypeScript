console.log('Video 39');

const myClass = [
  'Bình Phan',
  'Ngô Thị Kim Anh',
  'Nguyễn Văn A',
  'Trần Thị B',
  'Lê Thị C',
];

// FOR
// Cách 1
for (let i = 0; i < myClass.length; i++) {
  console.log('i =', i, 'and value =', myClass[i]);
}

console.log('===============================');
// Cách 2
for (let i = 1; i <= myClass.length; i++) {
  console.log('i =', i, 'and value -', myClass[i - 1]);
}

console.log('===============================');
// FOREACH
// Cách 1: Function truyền thống
myClass.forEach(function (value, index) {
  console.log('value =', value, 'and index =', index);
});

// Cách 2: Arrow Function
myClass.forEach((value, index) => {
  console.log('value =', value, 'and index =', index);
});
