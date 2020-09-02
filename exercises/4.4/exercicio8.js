function smallestValue(arr) {
    let smallestNumber = arr[0];
    for (let key in arr) {
        if (arr[key] >= 0) {
            if (arr[key] < smallestNumber) {
                smallestNumber = arr[key];
            }
        }
    }
    return smallestNumber;
}

console.log(smallestValue([2, 3, 6, 7, 10, 1]));