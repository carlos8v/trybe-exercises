const n = Math.ceil(Math.random() * 10 + 1);
console.log(`Valor de n: ${n}`);

for (let i = 0; i < n; i++) {
    let text = "";
    for (let j = n; j >= 0; j--) {
        if (i < j) {
            text += " ";
        } else {
            text += "*";
        }
    }
    console.log(text);
}