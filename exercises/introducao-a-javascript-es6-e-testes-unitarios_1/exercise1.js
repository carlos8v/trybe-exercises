const factorial = (num) => num > 0 ? num * factorial(num-1) : 1
const number = Math.floor(Math.random() * 11);
console.log(`Fatorial de ${number}: ${factorial(number)}`);
