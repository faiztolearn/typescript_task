/**
 * An Internet Service Provider recommends an internet package based on the customer's monthly data usage.
 * Business Rules
 * | Monthly Usage    | Recommended Package |
 * | ---------------- | ------------------- |
 * | Less than 50 GB  | Basic               |
 * | 50–150 GB        | Standard            |
 * | More than 150 GB | Premium             |
 * 
 * Today's customer has used:
 * | Information   | Value        |
 * | ------------- | ------------ |
 * | Customer Name | Raka Saputra |
 * | Monthly Usage | 124 GB       |
 * 
 * Tasks:
 * 1. Declare all variables.
 * 2. Implement the business rules using if...else if...else.
 * 3. Display the recommended package.
 */

type CustomerUsage = {
    customerName: string;
    monthlyUsageGB: number;
};

const customer: CustomerUsage = {
    customerName: "faiz",
    monthlyUsageGB: 23
};

let recommendedPackage: string;

if (customer.monthlyUsageGB < 50){
    recommendedPackage = "basicPackage";
} else if (customer.monthlyUsageGB <=150){
    recommendedPackage = "normalPackage"
} else {
    recommendedPackage = "richGuyPackage"
}

console.log("Customer Name:", customer.customerName);
console.log("Monthly Usage:", customer.monthlyUsageGB, "GB");
console.log("Recommended Package:", recommendedPackage);