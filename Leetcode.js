// Leet Code Questions Solved Using JS as well as time complexities explained


//771. Jewels and Stones 
var numJewelsInStones = function(J, S) {
    let dict = {}
    let sum = 0 
    for (let i = 0; i < S.length; i++) {
        if (dict[S[i]]) {
            dict[S[i]] += 1 
        } else {
            dict[S[i]] = 1 
        }
    }
    for (let z = 0; z < J.length; z++ ) {
        if (dict[J[z]]) {
            sum += dict[J[z]] 
        }
    }
    
    return sum 
    
};

