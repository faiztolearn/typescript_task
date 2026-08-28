/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

type SmartHomeData = {
  previousMeter: number;
  currentMeter: number;
  pricePerKwh: number;
  hasSolarPanel: boolean;
  isEnergySavingMode: boolean;
};

const homeData: SmartHomeData = {
  previousMeter: 25640,
  currentMeter: 25892,
  pricePerKwh: 1650,
  hasSolarPanel: true,
  isEnergySavingMode: false
};

const totalEnergyConsumption: number = homeData.currentMeter - homeData.previousMeter;

const initialBill: number = totalEnergyConsumption * homeData.pricePerKwh;

const solarDiscountRate: number = homeData.hasSolarPanel ? 0.20 : 0;
const energySavingDiscountRate: number = homeData.isEnergySavingMode ? 0.05 : 0;

const totalDiscountRate: number = solarDiscountRate + energySavingDiscountRate;
const discountAmount: number = initialBill * totalDiscountRate;

const finalBill: number = initialBill - discountAmount;

const isGreenEnergyEligible: boolean = 
  homeData.hasSolarPanel && 
  totalEnergyConsumption < 300 && 
  homeData.isEnergySavingMode;

console.log("=== Smart Home Electricity Summary ===");
console.log("Total Energy Consumption (kWh):", totalEnergyConsumption);
console.log("Initial Bill:", initialBill);
console.log("Discount Amount:", discountAmount);
console.log("--------------------------------------");
console.log("Final Bill:", finalBill);
console.log("Green Energy Program Eligibility:", isGreenEnergyEligible);