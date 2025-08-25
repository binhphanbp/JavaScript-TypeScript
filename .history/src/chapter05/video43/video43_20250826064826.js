console.log('Video 43');

const person = {
  name: 'Bình Phan',
  age: 21,
};

console.log('person before:', person);

// get data
console.log('name', person.name);
console.log('age', person['age']);

// set data
person.address = 'Ho Chi Minh City';
person['language'] = 'Vietnamese';

console.log('person after:', person);
