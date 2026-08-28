/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */


type Product = {
  productCode: string;
  productName: string;
  sellingPrice: number;
  stockQuantity: number;
  productWeight: number; 
  averageRating: number;
  isDiscounted: boolean;
};

const product1: Product = {
  productCode: "PROD-001",
  productName: "Mouse Wireless Silent",
  sellingPrice: 150000,
  stockQuantity: 25,
  productWeight: 120,
  averageRating: 4.8,
  isDiscounted: true,
};

const product2: Product = {
  productCode: "PROD-002",
  productName: "Keyboard Mechanical RGB",
  sellingPrice: 450000,
  stockQuantity: 10,
  productWeight: 850,
  averageRating: 4.9,
  isDiscounted: false,
};

const product3: Product = {
  productCode: "PROD-003",
  productName: "Monitor Gaming 24 Inch",
  sellingPrice: 1800000,
  stockQuantity: 5,
  productWeight: 3500,
  averageRating: 4.7,
  isDiscounted: true,
};

console.log("--- Data Produk 1 ---");
console.log(product1);

console.log("\n--- Data Produk 2 ---");
console.log(product2);

console.log("\n--- Data Produk 3 ---");
console.log(product3);