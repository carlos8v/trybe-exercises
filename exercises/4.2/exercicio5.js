let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let highestNumber = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highestNumber) {
        highestNumber = numbers[i];
    }
}

console.log(`Maior valor: ${highestNumber}`);