const n = Math.ceil(Math.random() * 10 + 1);
console.log(`Valor de n: ${n}`);

for (let i = 0; i < n; i++) {
    let text = "";
    for (let j = 0; j <= i; j++) {
        text += "*";
    }
    console.log(text);
}