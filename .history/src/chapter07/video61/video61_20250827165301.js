console.log('Video 61');

// Synchronous (Đồng bộ)
console.log('A');
console.log('B');
console.log('C');
// Output: A -> B -> C (đúng thứ tự)

// Asynchronous (Bất đồng bộ)
// Ưu điểm: code chạy nhanh hơn
// Nhược điểm: Khi mà có nhiều chương trình phụ thuộc vào nhau -> Bắt buộc phải chờ kết quả rồi mới thực thi được
console.log('A');

setTimeout(() => {}, 2000);

console.log('C');
