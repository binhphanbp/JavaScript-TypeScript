console.log('Video 29');

// break
for (let i = 0; i < 10; i++) {
  console.log('i =', i);
  if (i === 5) {
    break; // Thoát hẳn khỏi vòng lặp nếu điều kiện đúng
  }
}

// continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Thoát khỏi vòng lặp hiện tại
  }
  console.log('i =', i);
}
