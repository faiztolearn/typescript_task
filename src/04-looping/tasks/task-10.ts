/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */
type submissionAnalysis = {
    submittedCount: number;
    notSubmittedCount: number;
    passedCount: number;
    reviseCount: number;
    notSubmittedStudents: string[];
    reviseStudents: string[];
    averageScore: number;
};

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let submittedCount = 0;
let notSubmittedCount = 0;
let passedCount = 0;
let reviseCount = 0;
let totalScore = 0;

const notSubmittedStudents: string[] = [];
const reviseStudents: string[] = [];

for (const submission of submissions) {
    if (submission.submitted) {
        submittedCount++;
        totalScore += submission.score;

        if (submission.score >= 75) {
            passedCount++;
        } else {
            reviseCount++;
            reviseStudents.push(submission.student);
        }
    } else {
        notSubmittedCount++;
        notSubmittedStudents.push(submission.student);
    }
}

const averageScore = totalScore / submittedCount;

const analysis: submissionAnalysis = {
    submittedCount,
    notSubmittedCount,
    passedCount,
    reviseCount,
    notSubmittedStudents,
    reviseStudents,
    averageScore
};

console.log(analysis);