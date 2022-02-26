function majorityElement(nums) {
    let numsObj = {};
    let result = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in numsObj) {
            numsObj[nums[i]]++;
        } else {
            numsObj[nums[i]] = 1;
        }
    }

    for (let key in numsObj) {
        if (numsObj[key] > numsObj[result]) {
            result = key;
        }
    }
    return Number(result);
}

majorityElement([0,2,1,2,1,1,2,2,2]);