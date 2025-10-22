function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ??
                   find(current * 3, `(${history} * 3)`)
        }
    }
    return find(1, "1");
}

/**
 *            6+5
 *      1+5 <
 *            6*3
 * 24 <
 *            4+5
 *      1*3 <
 *            3*3
 */
