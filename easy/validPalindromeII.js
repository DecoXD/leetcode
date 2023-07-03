
// Esse algoritmo verifica se a string é um palíndromo usando dois índices, left e right, que se movem para dentro da string a partir dos extremos. Se encontrar dois caracteres diferentes, ele tenta excluir um dos caracteres e verifica se a string restante é um palíndromo. Se excluir qualquer um dos caracteres não resultar em um palíndromo, o algoritmo retorna false. Se não encontrar nenhum par de caracteres diferentes, ou se excluir um dos caracteres resultar em um palíndromo, o algoritmo retorna true.

// A complexidade temporal desse algoritmo é O(n), onde n é o comprimento da string.'



var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
      if (s[left] !== s[right]) {
        // Try deleting the character at `left`
        let tempLeft = left + 1;
        let tempRight = right;
        while (tempLeft < tempRight && s[tempLeft] === s[tempRight]) {
          tempLeft++;
          tempRight--;
        }
        
        if (tempLeft >= tempRight) {
          // Deleting the character at `left` makes the string a palindrome
          return true;
        }
        
        // Try deleting the character at `right`
        tempLeft = left;
        tempRight = right - 1;
        while (tempLeft < tempRight && s[tempLeft] === s[tempRight]) {
          tempLeft++;
          tempRight--;
        }
        
        if (tempLeft >= tempRight) {
          // Deleting the character at `right` makes the string a palindrome
          return true;
        }
        
        // Deleting either character at `left` or `right` does not make the string a palindrome
        return false;
      }
      
      left++;
      right--;
    }
    
    return true;
  };



















































// var validPalindrome = function(s) {
//     let try1=s.split("")
//     let try2=s.split("")
//     let tentative1=0
//     let tentative2=0
    
//     let left=0
//     let right= try1.length-1

//     while(right>=0){
       
// if(tentative1>1){
// tentative1=false
//     break
// }
// if(try1[left]!==try1[right]){
// tentative1++
// try1.splice(right,1)
// right=try1.length
// left=-1
// }
// //  deee eeed

// right--
// left++


//     }


// if(tentative1)return true

// left=0
// right= try2.length-1

//     while(right>=0){

     
//         if(tentative2>1){
//    return false
//     break
// }
// if(try2[left]!==try2[right]){
  
// tentative2++
// try2.splice(left,1)
// right=try2.length
// left=-1
// }
// //  cbbcc ccbbc

// right--
// left++


//     }



// return true
// }


// console.log(validPalindrome( "cbbcc"))



