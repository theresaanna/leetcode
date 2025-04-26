/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const result = [];
    arr.forEach((num, i) => {
        result.push(fn.call(this, num, i));
    });
    
    return result;
};