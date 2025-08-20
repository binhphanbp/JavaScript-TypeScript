console.log('Lab 1');

const fullName = 'Phan Đức Bình';

const birthYear = 2004;

const isStudent = true;

// Lấy ra năm hiện tại
const today = new Date();
const currentYear = today.getFullYear();
console.log(currentYear, typeof currentYear); // 2025 "number"

console.log('Cách làm 1:');
const introduce = `
Introduce:
    Tên: ${fullName}
    Tuổi: ${currentYear - birthYear}
    Sinh viên: ${isStudent ? 'Đúng' : 'Sai'}
`;
console.log(introduce);
