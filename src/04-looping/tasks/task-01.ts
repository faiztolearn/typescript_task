/**
 * A teacher wants to verify student attendance before starting class. There are 30 students in the classroom.
 * Instead of writing the attendance message 30 times,
 * the teacher wants the system to display an attendance check for every student.
 * The expected output is:
 * -------------------------------------
 * Checking attendance for Student #1
 * Checking attendance for Student #2
 * ...
 * Checking attendance for Student #30
 * Attendance verification completed.
 * -------------------------------------
 * 
 * Tasks: 
 * 1. Create a program using a for loop.
 * 2. Display the attendance message for every student.
 * 3. After the loop finishes, display: "Attendance verification completed"

 */

type Student = {
  id: number;
};

const students: Student[] = [];
for (let i = 1; i <= 30; i++) {
  students.push({ id: i });
}

for (const student of students) {
  console.log(`Checking attendance for Student #${student.id}`);
}
console.log("Attendance verification completed.");

/*still needs some corrections, but the main logic is implemented. 
The program creates an array of students and uses a for loop to check attendance for each student, followed by a completion message.*/