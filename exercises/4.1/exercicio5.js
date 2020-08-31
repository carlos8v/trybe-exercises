const a = Math.floor(Math.random() * 201 - 100);
const b = Math.floor(Math.random() * 201 - 100);
const c = Math.floor(Math.random() * 201 - 100);

function eTrinagulo(n1, n2, n3) {
    if (n1 + n2 + n3 === 180) {
        return true;
    }

    return false;
}

console.log(`Ângulos: ${a}, ${b} e ${c}`);
console.log(`É um triângulo válido? ${eTrinagulo(n1,n2,n3)}`);