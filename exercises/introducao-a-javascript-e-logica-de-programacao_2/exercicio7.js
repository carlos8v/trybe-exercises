let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let lowestNumber;

for (let i = 0; i < numbers.length; i+=1) {
    if (i === 0) {
        lowestNumber = numbers[i];
    }

    if (numbers[i] < lowestNumber) {
        lowestNumber = numbers[i];
    }
}

console.log(`Menor valor: ${lowestNumber}`);