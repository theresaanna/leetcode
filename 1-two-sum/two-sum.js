/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const results = [];
    let shifted = 0;
    const workingNums = [...nums];
    nums.every((num, i, arr) => {
        const current = workingNums.shift();
        shifted++;
        workingNums.every((next, j) => {
            if ((next + current) === target) {
                results.push(i, shifted+j);
                return false;
            }
            return true;
        })
        if (results.length > 0) {
            return false;
        }
        return true;
    })

    return results;
}