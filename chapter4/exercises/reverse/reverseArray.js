function reverseArrayV1(arr) {
    const newArray = [];
    for (data of arr) {
        newArray.unshift(data);
    }
    return newArray;
}

function reverseArrayV2(arr) {
    const newArray = [];
    for (let i = arr.length - 1; i > -1; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}
