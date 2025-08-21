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

xepLoai(tinhTrungBinh(8, 9, 7)); // Gọi hàm và in kết quả xếp loại
