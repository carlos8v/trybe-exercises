function biggestValue(arr) {
    let biggestNumber = arr[0];
    for (let key in arr) {
        if (arr[key] >= 0) {
            if (arr[key] > biggestNumber) {
                biggestNumber = arr[key];
            }
        }
    }
    return biggestNumber;
}

console.log(biggestValue([2, 3, 6, 7, 10, 1]));