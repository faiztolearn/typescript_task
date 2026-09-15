/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

type salesAnalysis = {
  totalRevenue: number;
  highestTransaction: number;
  lowestTransaction: number;
  highValueTransactions: number;
  averageTransaction: number;
};

const sales: number[] = [
  125000,
  350000,
  78000,
  910000,
  150000,
  420000,
  275000,
  99000,
  640000,
  18000
];

let totalRevenue = 0;
let highestTransaction = sales[0];
let lowestTransaction = sales[0];
let highValueTransactions = 0;

for (const transaction of sales) {
  totalRevenue += transaction;

  if (transaction > highestTransaction) {
    highestTransaction = transaction;
  }

  if (transaction < lowestTransaction) {
    lowestTransaction = transaction;
  }

  if (transaction >= 300000) {
    highValueTransactions++;
  }
}

const averageTransaction = totalRevenue / sales.length;

const analysis: salesAnalysis = {
  totalRevenue,
  highestTransaction,
  lowestTransaction,
  highValueTransactions,
  averageTransaction
};

console.log(analysis);