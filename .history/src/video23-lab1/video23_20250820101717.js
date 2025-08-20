console.log('Lab 1');

const fullName = 'Phan Đức Bình';

const birthYear = 2004;

const isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();

const introduce = `
    Tên: ${fullName}
    Tuổi: ${currentYear - birthYear}
    Sinh viên: ${isStudent ? 'Đúng' : 'Sai'}
`;
console.log(introduce);
