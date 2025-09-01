console.log('Video 65');

const greeting = (myName, callback) => {
  console.log(`Hello, my name is ${myName}`);

  callback();
};

const hello = () => {
  console.log('Learn callback...');
};

const hi = () => {
  console.log('Say hi...');
};

greeting('Bình Phan', hello);
greeting('bianbp', hi);
// Tại sao có thể gọi luôn hàm hello() hoặc hi() bên trong hàm greeting() luôn mà sao phải dùng callback?
// Vì để linh hoạt, dễ dàng tái sử dụng khi có nhiều hàm khác nhau (tránh hard-code)

// Ví dụ về callback hell (Nên tránh)
loginUser("hoidanit", function (user) {
getUserProfile(user.id, function (profile) {
getUserSettings(profile.id, function (settings) {
updateUl(settings, function () {
console.log("Hoàn thành!");
});

});
});