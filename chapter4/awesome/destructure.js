// Computing correlation function for frequency table.
function phi([n00, n01, n10, n11]) {            // phi coefficient
    return (n11 * n00 - n10 * n01) /            // (n11)(n00)-(n10)(n01)/
        Math.sqrt((n10 + n11) * (n00 + n01) *   // ^2/(n1.)(n0.)(n.1)(n.0)
                  (n01 + n11) * (n00 + n10));
}
