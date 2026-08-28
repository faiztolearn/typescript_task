/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

type Item = {
  name: string;
  price: number;
  quantity: number;
};

const friedRice: Item = { name: "Fried Rice", price: 18000, quantity: 3 };
const mineralWater: Item = { name: "Mineral Water", price: 5000, quantity: 2 };
const discount: number = 10000;

// 1. Kalkulasi
const totalFoodPrice: number = friedRice.price * friedRice.quantity;
const totalDrinkPrice: number = mineralWater.price * mineralWater.quantity;
const grandTotal: number = totalFoodPrice + totalDrinkPrice;
const finalPayment: number = grandTotal - discount;

// 2. Output
console.log("=== Rincian Pembayaran Kantin ===");
console.log("Total Food Price:", totalFoodPrice);
console.log("Total Drink Price:", totalDrinkPrice);
console.log("Grand Total:", grandTotal);
console.log("Final Payment:", finalPayment);