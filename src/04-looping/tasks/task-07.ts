/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

type attendanceResult = {
  presentCount: number;
  absentCount: number;
  absentStudents: string[];
  attendancePercentage: number;
};

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentCount = 0;
let absentCount = 0;
const absentStudents: string[] = [];

for (const attendance of attendances) {
    if (attendance.present) {
        presentCount++;
    } else {
        absentCount++;
        absentStudents.push(attendance.name);
    }
}

const attendancePercentage = (presentCount / attendances.length) * 100;

const result: attendanceResult = {
    presentCount,
    absentCount,
    absentStudents,
    attendancePercentage
};

console.log(result);