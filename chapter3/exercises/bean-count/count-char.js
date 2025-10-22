const countChar = function(str, findChar) {
    let count = 0;
    for (ch of str) {
        if (ch == findChar) count++;
    }
    return count;
};
