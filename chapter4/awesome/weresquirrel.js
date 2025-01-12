// Model
let journal = [
    {
        events: ["work", "touched tree", "pizza", "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break", "peanuts", "beer"],
        squirrel: true
    }
]

// Controller
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

/**
 *                    Frequency table
 *        ---(0)---           |        --(1)--
 *       /         \          |       /       \
 *     (0)         (0)        |     (0)       (1)
 * No squirrel, no pizza = 76 | No squirrel, pizza = 9
 * ---------------------------|-----------------------
 *   Squirrel, no pizza = 4   |   Squirrel, pizza = 1
 *     (1)         (0)        |     (1)       (1)
 *       \         /          |       \       /
 *        ---(2)---           |        --(3)--
 */

// Computing correlation function for frequency table.
function phi(table) {                                    // phi coefficient
    return (table[3] * table[0] - table[2] * table[1]) / // (n11)(n00)-(n10)(n01)/
        Math.sqrt((table[2] + table[3]) *                // ^2/(n1.)(n0.)(n.1)(n.0)
                  (table[0] + table[1]) *
                  (table[1] + table[3]) *
                  (table[0] + table[2]));
}

// Computing event occurrences from journal model.
function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

// Collects every type of event from journal model.
function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}
