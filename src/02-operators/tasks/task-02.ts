/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * Today, the administration receives the following student information.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"

 */

type StudentEligibility = {
  finalScore: number;
  attendance: number;
  tuitionPaid: boolean;
};

const studentEligibility: StudentEligibility = {
  finalScore: 82,
  attendance: 94,
  tuitionPaid: true,
};

const isEligible: boolean =
  studentEligibility.finalScore >= 75 &&
  studentEligibility.attendance >= 90 &&
  studentEligibility.tuitionPaid;

console.log("=== Graduation Eligibility Status ===");
console.log("Is the student eligible for graduation ceremony? ", isEligible);
