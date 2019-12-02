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
