const grade = Math.random() * 101;

function convertGrade(n) {
    if (n >= 90) {
        return "A";
    } else if (n >= 80) {
        return "B";
    } else if (n >= 70) {
        return "C";
    } else if (n >= 60) {
        return "D";
    } else if (n >= 50) {
        return "E";
    } else {
        return "F";
    }
}

console.log(`Nota: ${grade}%`);
console.log(`Nota: ${convertGrade(grade)}`);