function rangeByStepV2(start, end, step = 1) {
    const range = [];

    // Handle single argument case (e.g., range(5)).
    // if (typeof end === "undefined") {
    //     end = start;
    //     start = 1;
    // }

    // Handle invalid step or range conditions.
    // if ((step < 0 && start <= end) || (step > 0 && start >= end)) {
    //     return [];
    // }

    // Iterate and populate the range array.
    for (; step > 0 ? start <= end : start >= end; start += step) {
        range.push(start);
    }

    return range;
}
