const countBs = function(str) {
    let count = 0;
    for (ch of str) {
        if (ch == "B") count++;
    }
    return count;
};
