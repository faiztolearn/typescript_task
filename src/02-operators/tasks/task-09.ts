/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

type CartItem = {
  productName: string;
  price: number;
  quantity: number;
};

type CustomerInfo = {
  voucherValue: number;
  isPremiumMember: boolean;
  rewardPointRate: number; // Rp50.000 spent = 1 point
  vatRate: number; // 11% = 0.11
};

const cart: CartItem[] = [
  { productName: "Mechanical Keyboard", price: 850000, quantity: 1 },
  { productName: "Wireless Mouse", price: 275000, quantity: 2 },
  { productName: "Monitor Stand", price: 420000, quantity: 1 }
];

const customer: CustomerInfo = {
  voucherValue: 100000,
  isPremiumMember: true,
  rewardPointRate: 50000,
  vatRate: 0.11
};

const productSubtotal: number = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

const membershipDiscountRate: number = customer.isPremiumMember ? 0.10 : 0;
const membershipDiscount: number = productSubtotal * membershipDiscountRate;

const priceAfterDiscount: number = productSubtotal - membershipDiscount;

const voucherDeduction: number = customer.voucherValue;

const paymentBeforeTax: number = priceAfterDiscount - voucherDeduction;

const vat: number = paymentBeforeTax * customer.vatRate;

const finalPayment: number = paymentBeforeTax + vat;

const rewardPoints: number = Math.floor(paymentBeforeTax / customer.rewardPointRate);

const isFreeShippingEligible: boolean =
  customer.isPremiumMember || paymentBeforeTax > 1500000;

console.log("=== Online Marketplace Checkout Receipt ===");
console.log("Product Subtotal:", productSubtotal);
console.log("Membership Discount (10%):", membershipDiscount);
console.log("Voucher Deduction:", voucherDeduction);
console.log("-----------------------------------------");
console.log("Payment Before Tax:", paymentBeforeTax);
console.log("VAT (11%):", vat);
console.log("Final Payment:", finalPayment);
console.log("-----------------------------------------");
console.log("Reward Points Earned:", rewardPoints);
console.log("Free Shipping Eligibility:", isFreeShippingEligible);