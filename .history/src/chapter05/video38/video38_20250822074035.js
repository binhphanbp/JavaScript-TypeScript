console.log('Video 38');
const names = ['Bình', 'Kim Anh', 'bla bla', 'nam', 'nữ'];

console.log('index 0 là', names[0]);
console.log('index 2 là', names[2]);

names[2] = 'update name';
console.log(names);

console.log('before', names);
// push: thêm vào cuối mảng
names.push(true, '123'); // [ "Bình", "Kim Anh", "update name", "nam", "nữ", true, "123" ]

// pop

// unshift

// shift
console.log('after', names);
