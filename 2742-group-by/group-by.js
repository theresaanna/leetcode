/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const indices = this.map(fn);
    const grouping = {};
    indices.forEach((index, i) => {
        grouping[index] = grouping[index] || [];
        grouping[index].push(this[i]);
    });
    return grouping;
 };

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */