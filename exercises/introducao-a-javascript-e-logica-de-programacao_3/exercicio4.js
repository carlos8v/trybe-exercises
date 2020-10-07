const n = 7;

const half = (n + 1) / 2;
let left = half;
let right = half;

for (let i = 0; i < half; i++) {
    let text = "";
    for (let j = 1; j <= n; j++) {
        if (j >= left && j <= right) {
            text += "*";
        } else {
            text += " ";
        }
    }
    console.log(text);
    right++;
    left--;
}