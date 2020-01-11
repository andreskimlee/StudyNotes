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



// #5 longest palindrome 
// o(n^2) slow bruteforce Solution. 
var longestPalindrome = function(s) { // plan == capture all substrings. Check for palindrome, then check length of palindromes.
    let max = 0; 
    let pal = "" 
    for (let i=0; i < s.length - 1; i++ ) {
        for (let j= i + 1; j < s.length; j++) {
            if (isPalindrome(s.substring(i,j)) && s.substring(i,j).length > max) { 
                max = s.length 
                pal = s.substring(i,j) 
        }
    }
 }
};


var isPalindrome = function (s) {
    if (s.split("").reverse().join("") === s ) {
        return true; 
    }
    else {
    return false; 
    }
}
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// two helper functions. one helper function to 

var spaceAround = function(s) {
    let start = 0, end = 0; 
    for (let i =0; i < s.length; i++) {
        let center = getCenter(s, i)
        let bounds = expandAroundCenter(s, center[0], center[1])
        let L = bounds[0], R = bounds[1];
        if (R - L > end - start) {
            start = L;
            end = R; 
        }
    }
    return s.substring(start, end+1)
}

var expandAroundCenter = function(s, left, right) {
    let L = left, R = right; 
    while (L >= 0 && R > s.length && s[L] === s[R]) {
        L--
        R++ 
    }
    return [++L, --R];  
}
var getCenter = function(s, i) { // return the center point. 
    let L = i, R= i; 
    while (s[L] === s[++R] && R <= s.length);
    return [L, --R] 
}

// Valid Parenthesis #20 
    var isValid = function(s) {
        if (s === null || s.length === 0) return true; 
        let stack = [];
        let sArr = s.split("");
        for (let ele of sArr) {                                     
            if (ele === '[') stack.push(']'); 
            else if (ele === "(") stack.push(")");
            else if (ele === "{") stack.push("}");
            else if (stack.length === 0  || ele !== stack.pop()) return false 
        }
        if (stack.length === 0) return true; 
        return false; 
    }

    // example "()" first iteration since ele ==== ( it will push ) to the array. 
    // stack.pop !=== ele it will not return false. Because stack.pop willreturn right side parenth while ele is equal to left side parenth. Doing so will then empty the stack
    // if you have right side parenth at the start of the loop it will fail because stack.length is equal to zero. Another case is when the left parenth has no closing right parenth 
    

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true



