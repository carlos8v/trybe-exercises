function mostDuplicatedNumber(arr) {
    let duplicatedNumber = {};
    for (let key in arr) {
        if (duplicatedNumber[arr[key]]) {
            duplicatedNumber[arr[key]] += 1;            
        } else {
            duplicatedNumber[arr[key]] = 1;
        }
    }

    let firstKey = arr[0];
    let biggest = {
        biggestValue: 1,
        biggestKey: firstKey,
    }

    for (let key in duplicatedNumber) {
        if (duplicatedNumber[key] > biggest['biggestValue']) {
            biggest['biggestValue'] = duplicatedNumber[key];
            biggest['biggestKey'] = key;
        }
    }
    return biggest['biggestKey'];
}

console.log(mostDuplicatedNumber([2, 3, 2, 5, 8, 2, 3]));