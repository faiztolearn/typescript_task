/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

type EmployeeSalary = {
  employeeName: string;
  basicSalary: number;
  overtimeHours: number;
  overtimeRate: number;
};

const employeeSalary: EmployeeSalary = {
  employeeName: "Dimas",
  basicSalary: 5000000,
  overtimeHours: 12,
  overtimeRate: 50000,
};

const overtimePay: number = employeeSalary.overtimeHours * employeeSalary.overtimeRate;
const bonus: number = employeeSalary.overtimeHours > 10 ? 300000 : 0;
const finalSalary: number = employeeSalary.basicSalary + overtimePay + bonus;

console.log("=== Employee Salary Calculation ===");
console.log("Overtime Pay:", overtimePay);
console.log("Bonus:", bonus);
console.log("Final Salary:", finalSalary);
