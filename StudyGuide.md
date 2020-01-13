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

Correct approach o(n) time. 

if (matrix.length === 0 || matrix[0].length !== 0] return false (this is for edge cases where matrix is not big enough for rotation or includes empty arrays)

for let (i = 0; i < matrix.length / 2; i++ ) {  we do divide by 2 because we only want to rotate the edges of the matrix
    let first = i 
    let last = matrix.length - 1 - i 
    for (j = first; j < last; j++ ) {
        let offset = i - first)
        let top = matrix[first][i]; // save top
        matrix[first][i] = matrix[last-offset][first];
        matrix[last-offset][first] = matrix[last][last - offset]; 
        matrix[last][last - offset] = matrix[i][last]; 
        matrix[i][last] = top; 

        this will swap all places 
    }
  }

Linked List 

Linked lists can be singly linked (Each node pointing to the next node) or the linked list can be point to its previous or next node. The trade off is ultimately the overhead is greater for a doubly linked list vs single since the doubly linked list requires pointers to its prev and next which require more memory. Also when it comes to iteration singly linked lists are terrible in a sense that in order to iterate through all nodes you always have to start at the head. Whereas doubly linked list has a more efficient iteration. (Think reverse iteration because you can start at the tail and move backwards) 

The runner technique 
iterate through the linked list with two pointers simultaneously with one ahead of the other. This is used also commonly in arrray problems as well. 

Problem 83 

Remove Duplicates from a linkedList 

The Approach: two potential solutions. You want to either use a hashmap to store and check if there are duplicates or while iterating with two pointers you check if the current and next node values are equal to eaech other and if it is you reassign the node pointers. 

var deleteDuplicates = function(head) {
    let currentNode = head
    while (currentNode !== null && currentNode.next !== null) {
            if (currentNode.val === currentNode.next.val) {
                currentNode.next = currentNode.next.next
            } else {
                currentNode = currentNode.next
            }
        };
    return head; 
    
};

key point to this is to make sure the while loop conditional which is to make sure that the current node and the currentNode's next node is not null otherwise you will face an error. 

Remove Nth to last node from the list
Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.

Approch: In order to remove the nth to last node, you have to know the length of the list. In order to do this in one pass, you have to iterate with two pointers at the given n. For example, if you are asked to get the 2nd to last element given a head, your pointers will be 2 nodes apart. That way when you reach the tail, you will know that the pointer is at the correct node. 

1->2->3->4->5, and n = 2.

lets assume pointer A starts at 1 and pointer B starts at 2. we move both pointers one iteration at a time and we know by the time pointer B reaches 5 that the .next value will be null and thus is a tail. Once we know that 5 node is a tail then we know our pointer A will be at 4 and is the 2nd to last. In order to create the proper distance between pointer A and pointer B, we can use a forloop that will iterate until the proper distance is created

Lets code this out;

var removeNthFromEnd = function(head, n) {
  var left, before, right = head;
  left = before = {next: head}; 
  while (n--) right = right.next;
  while (right) {
    right = right.next;
    left = left.next;
  }
  left.next = left.next.next;
  return before.next;
};

delete medium node from linked list.

if odd number of nodes then you delete the 2nd middle, else odd is middle. 

Linked List - two pointers can be used. First pointer iterates at a pace of 1 while second is twice as fast. Iterate until the last pointers next is null. Return first pointer.

Problem 86 Partition List

Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5

General Approach. Create two dummy nodes and then sort through which node it will be placed in.

Stacks And Queues

Stacks.

Unlike arrays stacks do not have constant time lookup but they do have constant time add and removal. 

#155 

Implement a stack as well as a min value within the stack 

var MinStack = function() {
  this.elements = [];
};

MinStack.prototype.push = function(x) {
  this.elements.push({
    value: x,
    min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
  });
};

when you are pushing into the stack you can make a hashmap that stores value as well as the min value. 

 @return {void}
 */
MinStack.prototype.pop = function() {
  this.elements.pop();
};
/**

 @return {number}
 */
MinStack.prototype.top = function() {
  return this.elements[this.elements.length - 1].value;
};
/**

 @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.elements[this.elements.length - 1].min;
};

Most important takeaway from min stack value is that the value if stored in a multivariable hashmap with min val as well as the value, you can keep the min value info consistent. 

return this.elements[this.elements.length - 1].min; // this line returns the last element known min value.
this  works because even if you pop the stack off, when you added onto the stack it captures the min value anyways. 

Graphs and Trees 

** Do not assume a binary tree is perfect and always ask your interviewer what type of binary tree it is as this can affect the time complexity of the problem.

Complete binary Tree - Every level of the tree is filled except for the last level to the and it is is filled from left to right

Full Binary Trees - Every node has either zero or two children. 

Perfect Binary Tree - All nodes are filled left to right (perfectly symmetrical)



Binary Tree Traversal types

inOrderTraversal (TreeNode node) {
    if (node !== null ) { 
        inOrderTraversal(node.left); // essentailly the recusrive call will dive deep into the stack if the left node exists. And then it will start trickling upwards in asecnding fashion. 
        visit(node); 
        inOrderTraversal(node.right);
    }

   
}

preOrderTraversal(TreeNode node) {
    if (node !== null ) {
        visit(node); 
        preOrderTraversal(node.left);
        preOrderTraversal(node.right);
    }
}

 visits the node in ascending order. from left to right. 

postOrderTraversal(TreeNode node) {
    if (node !== null ) {
        preOrderTraversal(node.left);
        preOrderTraversal(node.right);
        visit(node); 
    }
}

Binary Heaps (min or max heaps) 

essentially heaps are complete binary tree that is totally filled other than the rightmost elements. Recall min or max and heap sort process to sort of trickle up or down. heaps are essentially sorted in a min max order. Min heaps node is the smallest node. While max heap node largest number is node. 

Tries (think word serach) 

#211 Leet Code (Add Word and Search) 

Generally when you see a problem that uses word search automatically think TRIES!! Tries have very good lookup time due to not having to traverse all nodes. o(k) time where k is length of string for word look up. 

// This class shows each and every node of trie

class Node{
    constructor(){
        this.keys = new Map();
        this.end = false;
    }
    setEnd(){this.end = true;}
    isEnd(){return this.end}
}

// Simple initialization of the WordDictionary class

var WordDictionary = function() {
    this.root = new Node();
};

// This just adds the word to the dictionary

WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    function rec(node, word){
        if(word){
            if(!node.keys.has(word[0]))
                node.keys.set(word[0], new Node());
            return rec(node.keys.get(word[0]), word.substr(1));
        }
        else node.setEnd();
    }
    rec(node, word)
    return true;
};

// This is the main recursive function where all of the magic is happening

WordDictionary.prototype.search = function(word) {
    let node = this.root;
    function rec(node, word){
        
		// returns false if the node doesn't exist
        if(!node) return false;
		
		// if the word exist
        if(word){
		
			//skipping any calculation if the word[0] is . 
        
			if(word[0]==='.'){
				
				// Since we don't know what should be the next node so, need to go through all of them one by one
                let out = false;
                for(let val of node.keys.keys()){
					// Any one of the nodes will return true for the upcoming character in word after .
					// So, taking an OR operation
                    out = out || rec(node.keys.get(val), word.substr(1));
                }
                return out;
            }
            else if(node.keys.has(word[0])){
				// If the node has encountered a word then the simple stuff
                return rec(node.keys.get(word[0]), word.substr(1));
            }
			// otherwise return false when the above two are false
            else{ return false}
            
        }
		// If the word doesn't exist but it could have existed so just checking if the node is the end node and returning the result
        else return node.isEnd();
    }
	
    return rec(node, word);
};


Graphs 

Graphs are connected tree without cycles. Can be either directed or undirected. (undirected is like a two way street while directed is like a one way street) 

Most common way to represent a graph is through an adjacency list. 

Simple class definition of a graph will look something like this

class Node {
    constructor() {
        this.name = "" 
        this.children = [] 
    }
}

class Graph {
    this.adjList = {}; Key value pairs can be used to store neighboring nodes. For example 1 : 0, 1 etc.  
}

Graph Search Methods 
DFS BFS 

function depthFirst(graph) {
    let visited = new Set(); // to keep a memoization in order to make sure we do not end up in an endless cycle. 

    for (let node in graph) {  // this sort of builds our graph set. 
        _depthFirstRecur(node, graph, visited);
    }
}

function _depthFirstRecur(node, graph, visited) {
    if (visited.has(node)) return; // if we already visited that node return 

    visited.add(node); // otherwise visit that node. 

    graph[node].forEach(neighbor => {  // and then call iteration on the neighbors for that node 
        _depthFirstRecur(neighbor, graph, visited); // recursive call to the neighbors. 
    });
}

depthFirst(graph);


Bit Manipulation

