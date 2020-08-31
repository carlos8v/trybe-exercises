let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numberOfOdds = 0;

for (let i = 0; i < numbers.length; i+=1) {
    if (numbers[i] % 3 === 0) {
        numberOfOdds += 1;
    }
}

if (numberOfOdds <= 0) {
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log(`Quantidade de números ímpares: ${numberOfOdds}`);
}