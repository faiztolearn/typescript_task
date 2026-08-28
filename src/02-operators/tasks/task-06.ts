/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

type NumericValue = number;
type DiscountEligibility = boolean;

const hourlyRate: NumericValue = 8000;
const playingHours: NumericValue = 7;
const playingMinutes: NumericValue = 35;
const discountRate: NumericValue = 0.15;

const totalPlayingTimeInMinutes: NumericValue = playingHours * 60 + playingMinutes;
const remainingMinutes: NumericValue = totalPlayingTimeInMinutes % 60;
const totalBilledHours: NumericValue = Math.ceil(totalPlayingTimeInMinutes / 60);
const paymentBeforeDiscount: NumericValue = totalBilledHours * hourlyRate;
const qualifiesForDiscount: DiscountEligibility = totalPlayingTimeInMinutes > 5 * 60;
const discountAmount: NumericValue = qualifiesForDiscount ? paymentBeforeDiscount * discountRate : 0;
const finalPayment: NumericValue = paymentBeforeDiscount - discountAmount;

console.log("Total playing time in minutes:", totalPlayingTimeInMinutes);
console.log("Remaining minutes after full hours:", remainingMinutes);
console.log("Total billed hours:", totalBilledHours);
console.log("Total payment before discount:", paymentBeforeDiscount);
console.log("Discount amount:", discountAmount);
console.log("Final payment:", finalPayment);
