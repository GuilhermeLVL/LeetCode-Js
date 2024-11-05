/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
    
    let arrayWord1 = word1.split("");
    let arrayWord2 = word2.split("");

    console.log(arrayWord1, arrayWord2)

    let maiorArray = Math.max(arrayWord1.length, arrayWord2.length);
    


    let resultado = [];

    for(let i=0; i<maiorArray ; i++){

        resultado.push(arrayWord1[i])
        resultado.push(arrayWord2[i])
        
       
    }
console.log(resultado)


console.log(resultado.join(''))

return resultado.join('')
};

