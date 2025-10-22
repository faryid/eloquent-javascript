/**
 * NOTE: bug: Happens if we provide desc order range, 
 * which is start value is greater than end value
 * without providing proper step value.
 * Step value must be a minus number.
 * It occurs otherwise.
 * 
 * ex:
 *  right: rangeByStepV1(5, 1, -1)
 *  error: rangeByStepV1(5, 1)
 *  errortype: semanticerror
 */

function rangeByStepV1(start, end, step = 1) {
    const range = [];

    if (step > 0) {
        for (; start <= end; start += step) {
            range.push(start);
        }
    } else if (step < 0) {
        for (; start >= end; start += step) {
            range.push(start);
        }
    }

    return range;
}

function rangeByStepV11(start, end, step = 1) {
    const range = [];

    // Solution 1
    // Parameters validation enforce any positive integer value
    // into negative integer value if it is a descending range.
    // And vice versa.
    if (start < end && step < 0) {
        step = -step;
    } else if (start > end && step > 0) { // first created.
        step = -step;
    }

    if (step > 0) {
        for (; start <= end; start += step) {
            range.push(start);
        }
    } else if (step < 0) {
        for (; start >= end; start += step) {
            range.push(start);
        }
    }

    return range;
}

function rangeByStepV12(start, end, step) {
    const range = [];

    // Solution 2
    if (start == end) return [start];

    // Defining default value for step parameter.
    if (!step) step = start < end ? 1 : -1

    // Validate the type of range whether ascending or descending,
    // Validate the value of step on each range whether ascending or descending.
    if (start < end) {
        step = step < 0 ? -step : step;
        for (; start <= end; start += step) {
            range.push(start);
        }
    } else if (start > end) {
        step = step > 0 ? -step : step;
        for (; start >= end; start += step) {
            range.push(start);
        }
    }

    return range;
}
