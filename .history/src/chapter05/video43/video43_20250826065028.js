console.log('Video 43');

const person = {
  name: 'Bình Phan',
  age: 21,
};

console.log('person before:', person);

// get data
console.log('name:', person.name);
console.log('age:', person['age']);

// set data
person.address = 'Ho Chi Minh City';
person['language'] = 'Vietnamese';

console.log('person after:', person); // person after: Object { name: "Bình Phan", age: 21, address: "Ho Chi Minh City", language: "Vietnamese" }

// Xoá thuộc tính trong đối tượng
delete person.age;
delete person['language'];

console.log('person after v2:', person);
