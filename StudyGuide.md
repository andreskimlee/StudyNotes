CTCI Notes 
Big - O Notes 

Insertions are generally considered O(1) amortized time. Amortized essentially means its written off because of the overall cost is negligligible. 

Recursive Functions 
to determine the time complexity of a recursive function, look at each call stack. If the call stack gets divided into 2 children. Generally this is 2^n time. 

For Loops 
Nested for loops will generally have a n^2 time. Even for functions with iterations that start seperately, (Lets say I and J where J = i + 1 ). This will give us n^2 / 2 which means essentially 1/2 constant which can be removed. For for loops that iterate over different inputs then the O(ab) (a and b refer to the array size of two different arrays) 

