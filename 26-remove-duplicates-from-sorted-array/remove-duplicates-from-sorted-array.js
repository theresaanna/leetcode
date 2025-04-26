/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let activeNum;
    const toSplice = [];
    nums.forEach((num, i) => {
        if (activeNum === num) {
            toSplice.push(i);
        }
        activeNum = num;
    });

    toSplice.reverse();
    toSplice.forEach((i) => {
        nums.splice(i, 1);
    });
    
    return nums.length;
};