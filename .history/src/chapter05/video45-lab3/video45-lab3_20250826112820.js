console.log('Video 45 - Lab 3');

const products = [
  {
    name: 'T-shirt',
    price: 120,
    inStock: true,
  },
  {
    name: 'Pants',
    price: 180,
    inStock: true,
  },
  {
    name: 'Backpack',
    price: 100,
    inStock: false,
  },
  {
    name: 'Shoes',
    price: 300,
    inStock: true,
  },
  {
    name: 'Glasses',
    price: 80,
    inStock: false,
  },
];

console.log('Original:', products);

// 1. In ra tên của sản phẩm đầu tiên
const firstProduct = products[0];
console.log('1. Sản phẩm đầu tiên có tên:', firstProduct.name);

// 2. Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm
products[1].price = 150;
console.log(
  '2. Danh sách tất cả sản phẩm sau khi thay đổi giá sản phẩm thứ hai:',
  products
);

// 3. Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm
newProduct = {
  name: 'Jacket',
  price: 250,
  inStock: true,
};
products.push(newProduct);

console.log(
  'Danh sách tất cả sản phẩm sau khi thêm sản phẩm mới vào cuối mảng:',
  products
);

// 4. Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm
products.pop();

console.log(
  'Danh sách tất cả sản phẩm sau khi xoá sản phẩm cuối cùng:',
  products
);

// 5. Dùng forEach() để in ra tất cả tên sản phẩm.
products.forEach((item, index) => {
  console.log('Tên sản phẩm thứ', index + 1, 'là:', item.name);
});

// 6. Dùng map() để tạo mảng mới chỉ chứa giá sản phẩm.
const productPrices = products.map((item) => item.price);
console.log('Danh sách giá sản phẩm:', productPrices);

// 7. Dùng filter() để lấy các sản phẩm còn hàng (inStock = true).

const inStockProducts = products.filter((item) => item.inStock);
console.log(
  'Danh sách các sản phẩm còn hàng (inStock = true):',
  inStockProducts
);

// 8. Dùng for...in để duyệt qua các thuộc tính của sản phẩm đầu tiên.
for (let key in products[0]) {
  console.log('key =', key);
}
