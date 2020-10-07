const a = Math.floor(Math.random() * 201 - 100);
const b = Math.floor(Math.random() * 201 - 100);

function adicionar(n1, n2) {
    return n1 + n2;
}

function subtrair(n1, n2) {
    return n1 - n2;
}

function multiplicar(n1, n2) {
    return n1 * n2;
}

function dividir(n1, n2) {
    return n1 / n2;
}

function modulo(n1) {
    return Math.abs(n1);
}

console.log(`Números: ${a} e ${b}`)
console.log(`Adição: ${adicionar(a,b)}`);
console.log(`Subtração: ${subtrair(a,b)}`);
console.log(`Multiplicação: ${adicionar(a,b)}`);
console.log(`Divisão: ${dividr(a,b)}`);
console.log(`Módulo: ${modulo(a)}, ${modulo(b)}`);