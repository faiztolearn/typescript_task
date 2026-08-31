/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */


type CourseRegistration = {
  studentId: string;
  studentName: string;
  gradeLevel: string;
  courseId: string;
  courseTitle: string;
  instructorName: string;
  totalLearningHours: number;
  registrationDate: string;
  isPaymentCompleted: boolean;
};

const registration1: CourseRegistration = {
  studentId: "STD-001",
  studentName: "Faeyza Anandhito",
  gradeLevel: "10",
  courseId: "CRS-TS01",
  courseTitle: "TypeScript Fundamentals",
  instructorName: "Pak Eko",
  totalLearningHours: 24,
  registrationDate: "2026-08-18",
  isPaymentCompleted: true,
};

const registration2: CourseRegistration = {
  studentId: "STD-002",
  studentName: "Nadia Putri",
  gradeLevel: "10",
  courseId: "CRS-PY01",
  courseTitle: "Python forBeginners",
  instructorName: "Bu Budi",
  totalLearningHours: 30,
  registrationDate: "2026-08-17",
  isPaymentCompleted: true,
};

const registration3: CourseRegistration = {
  studentId: "STD-003",
  studentName: "Ahmad Rizky",
  gradeLevel: "11",
  courseId: "CRS-JS01",
  courseTitle: "Modern JavaScript",
  instructorName: "Pak Sandhika",
  totalLearningHours: 20,
  registrationDate: "2026-08-18",
  isPaymentCompleted: false,
};

console.log("--- Data Pendaftaran 1 ---");
console.log(registration1);

console.log("\n--- Data Pendaftaran 2 ---");
console.log(registration2);

console.log("\n--- Data Pendaftaran 3 ---");
console.log(registration3);