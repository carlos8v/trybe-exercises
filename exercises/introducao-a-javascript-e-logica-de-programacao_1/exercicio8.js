const a = Math.floor(Math.random() * 201 - 100);
const b = Math.floor(Math.random() * 201 - 100);
const c = Math.floor(Math.random() * 201 - 100);

function epar(n1, n2, n3) {
    if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
        return true;
    }
    
    return false;
}

console.log(`Números: ${a}, ${b} e ${c}`);
console.log(`Possuí pelo menos um número par? ${epar(n1,n2,n3)}`);