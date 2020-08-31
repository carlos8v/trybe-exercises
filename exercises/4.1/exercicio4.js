const a = Math.floor(Math.random() * 201 - 100);

function numberSign(n1) {
    if (n1 > 0) {
        return "positive";
    } else if (n1 < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

console.log(`Número: ${a}`);
console.log(`Sinal: ${numberSign(a)}`);