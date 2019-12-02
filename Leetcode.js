// #1 Two Sum 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { 
    let hashMap = {}; 
        for (let i=0; i < nums.length; i++) {
                hashMap[nums[i]] = i
            }
    for (let i=0; i < nums.length; i++ ) {
        let numVar = target - nums[i]; 
        if (hashMap[numVar] && nums.indexOf(numVar) !== i) {
            return [i, nums.indexOf(numVar)] 
            }
    }
    
    return false 
}




// #3 longest substring Without Repeating Characters 


