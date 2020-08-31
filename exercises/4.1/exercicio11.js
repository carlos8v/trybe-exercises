const bruteSalary = parseFloat((Math.random() * 10001).toFixed(2));

let inns;

if (bruteSalary <= 1556.94) {
    inns = parseFloat(bruteSalary * 8 / 100).toFixed(2);
} else if (bruteSalary >= 1556.95 && bruteSalary <= 2594.92) {
    inns = parseFloat(bruteSalary * 9 / 100).toFixed(2);
} else if (bruteSalary >= 2594.93 && bruteSalary <= 5189.32) {
    inns = parseFloat(bruteSalary * 11 / 100).toFixed(2);
} else {
    inns = 570.88;
}

const baseSalary = bruteSalary - inns;

let ir;

if (baseSalary <= 1903.98) {
    ir = 0;
} else if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
    ir = parseFloat((baseSalary * 7.5 / 100) - 142.80).toFixed(2);
} else if (baseSalary >= 2826.66 && baseSalary <= 3751.05) {
    ir = parseFloat((baseSalary * 15 / 100) - 354.80).toFixed(2);
} else if (baseSalary >= 3751.06 && baseSalary <= 4664.68) {
    ir = parseFloat((baseSalary * 22.5 / 100) - 636.13).toFixed(2);
} else {
    ir = parseFloat((baseSalary * 27.5 / 100) - 869.36).toFixed(2);
}

const liquidSalary = baseSalary - ir;

console.log(`Salário bruto: ${bruteSalary}`)
console.log(`Salário base: ${baseSalary}`)
console.log(`Salário líquido: ${liquidSalary}`)