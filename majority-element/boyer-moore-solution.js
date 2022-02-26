function majorityElement(nums) {
    let count = 1;
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            result = nums[i];
        }
        if (result === nums[i]) {
            count++;
        } else {
            count--;
        }
    }
    return result;
}
majorityElement([0,2,1,2,1,1,2,2,2]);