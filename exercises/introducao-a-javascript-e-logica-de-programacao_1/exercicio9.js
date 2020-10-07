const a = Math.floor(Math.random() * 201 - 100);
const b = Math.floor(Math.random() * 201 - 100);
const c = Math.floor(Math.random() * 201 - 100);

function eImpar(n1, n2, n3) {
    if (n1 % 3 === 0 || n2 % 3 === 0 || n3 % 3 === 0) {
        return true;
    }
    
    return false;
}

console.log(`Números: ${a}, ${b} e ${c}`);
console.log(`Possuí pelo menos um número ímpar? ${eImpar(n1,n2,n3)}`);