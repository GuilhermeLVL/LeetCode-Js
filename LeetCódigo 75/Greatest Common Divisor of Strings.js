/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    //console.log(str1, str2)

    var array1= str1.split('');
    var array2 = str2.split('');

    var maiorValor = null;

    var resultado=[]

    if(array1.length > array2.length){

        maiorValor = array1.length;
    }else{
        maiorValor = array2.length;
    }

   // console.log(array1.length, array2.length);
   for(let i =0; i < maiorValor; i++){


    //console.log(array1[i], array2[i])
    if(array1[i] === array2[i]){

        resultado.push(array2[i]) 

    }

  
   }

   let filtroArray = resultado.filter(function(este, i){
    return resultado.indexOf(este) === i;
   })
    




return filtroArray.toString().replaceAll(',', '')


};