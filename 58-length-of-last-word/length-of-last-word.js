/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.trimEnd().split(" ").reverse()[0].length;
};