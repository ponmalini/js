// nums=[1,2,3,4,5,6,7];k=3
// if k=1 nums=[7,1,2,3,4,5,6]
// if k=2 nums=[6,7,1,2,3,4,5]
// if k=3 nums=[5,6,7,1,2,3,4]
let nums = [1, 2, 3, 4, 5, 6, 7];
let output = new Array(nums.length);
let k = 3;
for (let q = 1; q <= k; q++) {

    for (i = 0; i < nums.length; i++) {
        if (i == 0) {
            output[0] = nums[nums.length - 1];
        } else if (i != nums.length) {
            output[i] = nums[i - 1];
        }

    }

    nums=[...output];
    // for (let t = 0; t < output.length; t++) {
    //     nums[t] = output[t];
    // }


}

for (let t = 0; t < output.length; t++) {
    console.log(output[t]);
}