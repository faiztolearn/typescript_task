/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

type CartItem = {
  productName: string;
  price: number;
  quantity: number;
};

const cart: CartItem[] = [
  { productName: "Mechanical Keyboard", price: 850000, quantity: 1 },
  { productName: "Wireless Mouse", price: 275000, quantity: 2 },
  { productName: "Mouse Pad", price: 120000, quantity: 1 }
];

const isPremiumMember: boolean = true;

let subtotal: number = 0;
let totalItems: number = 0;

cart.forEach((item) => {
  subtotal += item.price * item.quantity;
  
  for (let i = 0; i < item.quantity; i++) {
    totalItems++;
  }
});


const isDiscountEligible: boolean = subtotal > 1000000;
const discountPercentage: number = isDiscountEligible ? 0.10 : 0;
const discountAmount: number = subtotal * discountPercentage;


const shippingFee: number = isPremiumMember ? 0 : 20000;

const finalPayment: number = subtotal - discountAmount + shippingFee;


console.log("=== Shopping Cart Receipt ===");
console.log("Subtotal:", subtotal);
console.log("Total Purchased Items:", totalItems);
console.log("Discount Applied (10%):", isDiscountEligible);
console.log("Discount Amount:", discountAmount);
console.log("Free Shipping:", isPremiumMember);
console.log("Final Payment:", finalPayment);