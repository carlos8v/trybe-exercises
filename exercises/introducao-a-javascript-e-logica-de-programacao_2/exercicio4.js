let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const total = (numbers.reduce((curr, acc) => curr + acc) / numbers.length);

if (total > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}