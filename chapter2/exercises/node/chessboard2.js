const size = 16;

for (let i = 0; i < size; i++) {
    for (let j = 0 ; j < size; j++) {
        if (i % 2 == 0) {
            if (j % 2 == 0) {
                process.stdout.write("#");
            } else {
                process.stdout.write(" ");
            }
        } else {
            if (j % 2 != 0) {
                process.stdout.write("#");
            } else {
                process.stdout.write(" ");
            }
        }
    }
    process.stdout.write("\n");
}
