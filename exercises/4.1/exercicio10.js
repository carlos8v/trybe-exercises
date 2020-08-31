const cost = parseFloat((Math.random() * 101).toFixed(2));
const totalCost = parseFloat((cost + (cost * 20 / 100).toFixed(2)));
const price = parseFloat((Math.random() * 201).toFixed(2));

const profit = price - totalCost;

console.log(`Custo: R$ ${cost}`);
console.log(`Custo com imposto: R$ ${totalCost}`);
console.log(`Preço: R$ ${price}`);
console.log(`Lucro: R$ ${profit}`);