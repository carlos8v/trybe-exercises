const a = Math.floor(Math.random() * 201 - 100);
const b = Math.floor(Math.random() * 201 - 100);

function maior(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

console.log(`Números: ${a} e ${b}`);
console.log(`Maior: ${maior(a,b)}`);