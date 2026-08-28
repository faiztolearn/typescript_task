/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

type HotelBooking = {
  roomPricePerNight: number;
  nightsStayed: number;
  serviceCharge: number;
  taxRate: number; // 11% = 0.11
  isVipMember: boolean;
};

const booking: HotelBooking = {
  roomPricePerNight: 650000,
  nightsStayed: 4,
  serviceCharge: 120000,
  taxRate: 0.11,
  isVipMember: true
};

const roomSubtotal: number = booking.roomPricePerNight * booking.nightsStayed;

const discountRate: number = booking.isVipMember ? 0.12 : 0;
const discountAmount: number = roomSubtotal * discountRate;

const discountedRoomPrice: number = roomSubtotal - discountAmount;

const taxAmount: number = discountedRoomPrice * booking.taxRate;

const finalPayment: number = discountedRoomPrice + taxAmount + booking.serviceCharge;

const isEligibleForFreeBreakfast: boolean = booking.nightsStayed >= 3 || booking.isVipMember;

console.log("=== Hotel Receipt & Summary ===");
console.log("Room Subtotal:", roomSubtotal);
console.log("VIP Discount (12%):", discountAmount);
console.log("Tax (11% after discount):", taxAmount);
console.log("Service Charge:", booking.serviceCharge);
console.log("-----------------------------------");
console.log("Final Payment:", finalPayment);
console.log("Eligible for Free Breakfast:", isEligibleForFreeBreakfast);