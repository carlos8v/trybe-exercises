const a = Math.floor(Math.random() * 201 - 100);
const b = Math.floor(Math.random() * 201 - 100);
const c = Math.floor(Math.random() * 201 - 100);

function maior(n1, n2, n3) {
    if (n1 === n2 || n2 === n3 || n1 === n3) {
        return "Números repetidos";
    } else {
        if (n1 > n2 && n1 > n3) {
            return n1;
        } else if (n2 > n1 && n2 > n3) {
            return n2
        } else {
            return n3;
        }
    }
}

console.log(`Números: ${a} e ${b}`);
console.log(`Maior: ${maior(a,b,c)}`);