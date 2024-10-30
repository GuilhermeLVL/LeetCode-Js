/*
Dado um inteiro, retorna uma função. Essa função retorna inicialmente e, em seguida, retorna 1 a mais do que o valor anterior toda vez subsequente em que é chamada (, , , etc).ncountercounternnn + 1n + 2

 

Exemplo 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
Exemplo 2:

Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 

Restrições:

-1000 <= n <= 1000
0 <= calls.length <= 1000
calls[i] === "call"

*/


/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {

     
    return n++

    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */