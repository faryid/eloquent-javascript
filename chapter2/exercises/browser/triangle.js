var triangle = new String();

for (let i = 1; i <= 7; i++) {
    for (let j = 0; j < i; j++) {
        triangle += "#";
    }
    if (i != 7) triangle += "\n";
}

console.log(triangle);
