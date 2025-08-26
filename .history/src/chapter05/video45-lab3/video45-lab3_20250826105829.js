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

const printAllProducts = (message, products) => {
  console.log(message, products);
};

// 1. In ra tên của sản phẩm đầu tiên
console.log('Tên của sản phẩm đầu tiên:', products[0].name);

// 2. Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm
products[1].price = 150;
printAllProducts(
  'Danh sách tất cả sản phẩm sau khi thay đổi giá sản phẩm thứ hai: ',
  products
);

// 3. Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm
newProduct = {
  name: 'Jacket',
  price: 250,
  inStock: true,
};
products.push(newProduct);

printAllProducts(
  'Danh sách tất cả sản phẩm sau khi thêm sản phẩm mới: ',
  products
);

// 4. Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm
products.pop();

printAllProducts('Danh sách tất cả sản phẩm sau khi xoá sản phẩm cuối cùng: ');

// 5. Dùng forEach() để in ra tất cả tên sản phẩm.

// 6. Dùng map() để tạo mảng mới chỉ chứa giá sản phẩm.

// 7. Dùng filter() để lấy các sản phẩm còn hàng (inStock = true).

// 8. Dùng for...in để duyệt qua các thuộc tính của sản phẩm đầu tiên.
