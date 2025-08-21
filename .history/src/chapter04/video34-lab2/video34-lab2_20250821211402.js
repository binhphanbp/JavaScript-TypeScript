console.log('Video 34 - Lab 2');

const tinhTrungBinh = (toan, van, anh) => {
  return (toan + van + anh) / 3;
};

const xepLoai = (diemTB) => {
  if (diemTB >= 9) {
    return 'Xuất sắc';
  } else if (diemTB >= 8) {
    return 'Giỏi';
  } else if (diemTB >= 6.5) {
    return 'Khá';
  } else {
    return 'Trung bình';
  }
};

console.log(xepLoai(tinhTrungBinh(8, 9, 10)));

const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

const myDiemTrungBinh = tinhTrungBinh(diemToan, diemVan, diemAnh);

console.log(`
Điểm trung bình: ${myDiemTrungBinh}
Xếp loại: ${xepLoai(myDiemTrungBinh)}
  `);
