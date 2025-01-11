/**
 * Returns true if the provided HTML element contains the specified text
 * @param {*} node HTML element type you want to inspect
 * @param {*} string Text content within an element
 * @returns boolean
 */
function talksAbout(node, string) {
    if (node.nodeType == node.ELEMENT_NODE) {
        for (let child of node.childNodes) {
            if (talksAbout(child, string)) {
                return true;
            }
        }
        return false;
    } else if (node.nodeType == node.TEXT_NODE) {
        return node.nodeValue.indexOf(string) > -1;
    }
}
