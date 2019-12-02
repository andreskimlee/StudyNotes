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

// #3 LongestSubStringWithoutRepeatingCharacters 

var lengthOfLongestSubstring = function(s) {
    let max = 0; 
    let leftPtr = 0; 
    let rightPtr = 1; 
    let map = new Map; // Maps are similar to objects with k/v pairs but are iterable. and ordered.
    if (s.length === 1) return 1; // edge case for when string length is 1 
    map.set(s[leftPtr], leftPtr); // initializes map with the first index of string with its position.

    while (rightPtr < s.length) {// iterates until last index 
        if (map.has(s[rightPtr]) && map.get(s[rightPtr]) >= leftPtr) { // map.has returns boolean indicating if key exists. If it does exist and the rightptr is greater than or equal to leftptr (ensures no duplicates) then we want to move leftptr to check for newer substrings.
            leftPtr = map.get(s[rightPtr]) + 1; 
        }
        map.set(s[rightPtr], rightPtr) // store to map at every iteration.
        let windowLength = (rightPtr - leftPtr) + 1; // captures the length of substring at every iteration. 
        max = Math.max(max, windowLength); // sets max to be equal to either max or windowLength depending on whichever one is greater
        rightPtr +=1 
    }

    return max 

};



// #3 longest substring Without Repeating Characters 


