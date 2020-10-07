const newArray = [];

for (let i = 1; i <= 25; i+= 1) {
    newArray.push(i);
}

for (let i = 0; i < 25; i+= 1) {
    newArray[i] /= 2;
    console.log(newArray[i]);
}