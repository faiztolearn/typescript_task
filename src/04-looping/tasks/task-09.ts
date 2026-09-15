/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */
type gradeAnalysis = {
  aCount: number;
  bCount: number;
  cCount: number;
  dCount: number;
  highestScore: number;
  lowestScore: number;
  averageScore: number;
};

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let aCount = 0;
let bCount = 0;
let cCount = 0;
let dCount = 0;
let totalScore = 0;
let highestScore = -Infinity;
let lowestScore = Infinity;

for (const student of students) {
    const score = student.score;
    totalScore += score;

    if (score >= 90) {
        aCount++;
    } else if (score >= 80) {
        bCount++;
    } else if (score >= 70) {
        cCount++;
    } else {
        dCount++;
    }

    if (score > highestScore) {
        highestScore = score;
    }

    if (score < lowestScore) {
        lowestScore = score;
    }
}

const averageScore = totalScore / students.length;

const analysis: gradeAnalysis = {
    aCount,
    bCount,
    cCount,
    dCount,
    highestScore,
    lowestScore,
    averageScore
};

console.log(analysis);