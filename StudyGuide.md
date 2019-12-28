CTCI Notes 
Big - O Notes 

Insertions are generally considered O(1) amortized time. Amortized essentially means its written off because of the overall cost is negligligible. 

Recursive Functions 
to determine the time complexity of a recursive function, look at each call stack. If the call stack gets divided into 2 children. Generally this is 2^n time. 

For Loops 
Nested for loops will generally have a n^2 time. Even for functions with iterations that start seperately, (Lets say I and J where J = i + 1 ). This will give us n^2 / 2 which means essentially 1/2 constant which can be removed. For for loops that iterate over different inputs then the O(ab) (a and b refer to the array size of two different arrays). Single forloops that go through only half the array have the same logic. 1/2 constant is removed and it will become o(n) 

Sorting 
Sorting is generally O(n log n ) time. However keep in mind the best way to compare, generally use defined variables. Lets say we have to sort arrays with strings and sort both the string and array. It would not be O(n log n ) + O(n log n ) because.. sorting a string would be string.length and sorting a array would be array.length (Two different variables). Instead it should be O(s log s ) + O(a log a )
adding those two you get O( s*a(log s + log a) ). 


Data Structures / ADS

Linked Lists (DS) 

Single Linked Lists 
points essentially in a one way fashion. Similar to arrays in that it knows its neighbors. For single linked lists it points to the next node and the tail points to null. Solved using iteration/recursion. 

    reversedLinkList notes 
    input = 1-2-3-4-5
    output = 5-4-3-2-1 

    to solve, you need to first set the .next of the head to null. Then the 2 becomes the new head of the linkedList. However you want to capture the value of the first head or else you will not be able to reference it again. 

    steps to solve. 
    current head points to null. then save that head to a variable.
    next you want current.next to be set to a variable as well.
    you then can current.next to be pointing to 1 which is would be equal to the variable you saved it as. While loop until 
 
Abstract Data types: 

more conceptual and definitions are more conceptual and related to the rules governing their user-facing behaviors rather than their core implementations.

Examples of ADT : stack and queues. 


Big O Adding Runtimes verus multiplying. 

If you are adding generally youl be "doing this then after you finish you do that" where as for multiplying runtimes its generally do this for each time you do that. 
Most important thing to remember. If you are munipulating different arrays for example, then you need to set different variables for the arrays. For example two for loops for two different arrays will not be o(n) 
o(n + k ) 

Arrays And Strings 

Most strings / array type questions follow same protocol in terms of algorithmically solving them. 
Arrays are resized dynamically in javascript and so are strings. 
Insertions are generally O(1). Why? because lets say you have an array [1,2,3] and you want to insert a 4 into the array. to insert you would have to copy over existing elements and add the 4. When adding the 4 you are doing computationally, n/3 + (new elemenet). 1/3(n) essentially can be amortized to be equal to less than N and thus just results in o(1) 

Interview Questions. 

## Implement a function to check if all values in a string are unique. You cannot use additional datastructures.

Correct Approach 
initial approach was to create a hashmap and loop through string but remember you cannot use additional datastructures. 
1. Step one. Make sure to ask if the string is ASCII or a unicode string. The reason is because ASCII can only encode up to 128 characters whereas unicode is far more. For simplicity sake, if we assume strings are in ASCII format, we can use that to our advantage and automatically return false.

let abc = function(string) => {
    if (string.length > 128 ) return false; 
    for (let i=0; i < string.length;, i++) {
        for (let j=i+1; i < string.length;, i++)
         if string[i] === string [j] 
            return false 
    }

    return true 
}

you could reduce the runtime of this if you potentially sort the strings and check linearly. 

## Given two strings, write a method to decide if one is a permutiation of the other
strings are a permutation if they contain the same letters in different order. It is also important to ask if there is case sensitivity and if whitespace is regarded as a character. 
approach we know is if there is two varying lengths of a string, it should automatically return false.

create a hash map and subtract and add if return Object.values(hash).every( ele => ele > 0 {
    return false 
})

## One Away 
There are three types of edits that can be performed on strings: insert/remove/edit. given two strings write a function to check if they are one edit or zero edits away.
Example :
pale, ple -> true
pales, pale -> true
pale, bake -> false 

How I would approach this problem in javascript. 

Essentially we know there has to a be a difference of 1 or less between two strings. I would create a hashmap then add a count of 1 to each hash map. Next the second string I would decrement from hashmap. If that key does not exist in the hashmap I would use a secondary variable called counter and add to the counter. Finally I would check the hashmap to see if the sum of the values is greater than one after decrementing. So our final if statement should be if counter <= 1 && Object.values.reduce(acc, ele => { acc += ele}) <= 1 ) return true else return false. 

## string compression 
implement a method to perform a basic string compressiong using counts of repeated chars 
ex aabcccccaaa --> a2b1c5a3 

How I would approach this problem in javascript. 

for loop, use a counter to add to counter if i + 1 and i is equal. Then append. 

## Rotate Matrix 

given an image of represented by NxN matrix, rotate the image by 90 degress 4 bytes. 

[[a,b][c,d]
 [e,f][g,h] 
]

Questions id ask. Is it counter or clockwise
do you want to mutate original array

My approach : use placeholder variables while iterating over the edges of the matrix and then set them equal to the temp variables.





