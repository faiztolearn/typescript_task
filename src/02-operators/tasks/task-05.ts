/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */

type StudentCandidate = {
  name: string;
  gpa: number;
  familyIncome: number;
  competitionCount: number;
  hasDisciplinaryRecord: boolean;
  documentsComplete: boolean;
};

const student: StudentCandidate = {
  name: "Alya Putri",
  gpa: 3.89,
  familyIncome: 4200000,
  competitionCount: 4,
  hasDisciplinaryRecord: false,
  documentsComplete: true
};

const totalBudget: number = 500000000;
const isGpaEligible: boolean = student.gpa >= 3.75;
const isIncomeEligible: boolean = student.familyIncome < 5000000;
const isCompetitionEligible: boolean = student.competitionCount >= 3;
const isRecordClean: boolean = !student.hasDisciplinaryRecord;
const isDocsComplete: boolean = student.documentsComplete;

const isAccepted: boolean = 
  isGpaEligible && 
  isIncomeEligible && 
  isCompetitionEligible && 
  isRecordClean && 
  isDocsComplete;

const scholarshipAmount: number = isAccepted ? 12000000 : 0;
const remainingBudget: number = totalBudget - scholarshipAmount;

console.log(`=== University Scholarship Selection: {student.name} ===`);
console.log("GPA Requirement Met (>= 3.75):", isGpaEligible);
console.log("Income Requirement Met (< 5.000.000):", isIncomeEligible);
console.log("Competition Requirement Met (>= 3):", isCompetitionEligible);
console.log("Clean Disciplinary Record:", isRecordClean);
console.log("Documents Complete:", isDocsComplete);
console.log("-----------------------------------------");
console.log("Is Student Accepted:", isAccepted);
console.log("Scholarship Amount Received:", scholarshipAmount);
console.log("Remaining Total Budget:", remainingBudget);