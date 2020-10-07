function somatorio(n) {
    let sum = 0;
    let count = 1;

    for (let i = 0; i < n; i++) {
        sum += count;
        count++;
    }
    
    return sum;
}

console.log(somatorio(Math.ceil(Math.random() * 10 + 1)));