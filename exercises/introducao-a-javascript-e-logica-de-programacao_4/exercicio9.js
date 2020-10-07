function biggestName(arr) {
    let biggestValue = arr[0];
    for (let key in arr) {
        if (arr[key].length > biggestValue.length) {
            biggestValue = arr[key];
        }
    }
    return biggestValue;
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));