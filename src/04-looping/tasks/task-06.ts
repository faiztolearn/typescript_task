/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

type stockAnalysis = {
    outOfStockCount: number;
    lowStockCount: number;
    safeStockCount: number;
    totalInventory: number;
    averageStock: number;
};

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];
    
let outOfStockCount = 0;
let lowStockCount = 0;
let safeStockCount = 0;
let totalInventory = 0;

for (const stock of stocks) {
    totalInventory += stock;

    if (stock === 0) {
        outOfStockCount++;
    } else if (stock < 10) {
        lowStockCount++;
    } else {
        safeStockCount++;
    }
}

const averageStock = totalInventory / stocks.length;

const analysis: stockAnalysis = {
    outOfStockCount,
    lowStockCount,
    safeStockCount,
    totalInventory,
    averageStock
};

console.log(analysis);
