function reverseArrayInPlace(arr) {
    let tempData, halfLengthArr = Math.floor(arr.length / 2);
    for (let i = 0; i < halfLengthArr; i++) {
        tempData = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tempData;
    }
}
