const size = 16;
var output = new String();

for (let i = 0; i < size; i++) {
    for (let j = 0 ; j < size; j++) {
        if (i % 2 == 0) {
            if (j % 2 == 0) {
                output += "#";
            } else {
                output += " ";
            }
        } else {
            if (j % 2 != 0) {
                output += "#";
            } else {
                output += " ";
            }
        }
    }
    if (i + 1 != size) output += "\n";
}

console.log(output);
