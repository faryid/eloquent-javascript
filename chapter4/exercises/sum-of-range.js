// range in ascending only.
function range(start, end) {
    const range = [];
    for (; start <= end; start++) {
        range.push(start);
    }
    return range;
}

// sum with array parameter only.
function sum(range) {
    let sum = 0;
    for (number of range) {
        sum += number;
    }
    return sum;
}

// this function could use either varargs or array parameter.
function sumVarArgs(...number) {
    let sum = 0;
    for (number of number) {
        sum += number;
    }
    return sum;
}

// Test case
// range(1, 10);
// range(1, 10, 2);
// range(5, 2);
// range(5, 2, -1);

// Additional test case
// range(1, 10, -2);
// range(5, 2, 1);
