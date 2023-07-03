// var firstMissingPositive = function(nums) {

// const numbers = new Map()

// for(let pos of nums){
//     numbers.set(pos,pos)
// }
// let i = 1
// while(numbers.has(i)){ 
//     i++  
// }
// return i 
// };


// console.log(firstMissingPositive([3,4,-1,1]))

var firstMissingPositive = function(nums) {
    // Primeiro, precisamos entender que o primeiro número positivo ausente é menor ou igual a n (o comprimento do array), exceto por um caso. A explicação está acima.
    // Vamos posicionar todos os números inteiros positivos no array em seus índices correspondentes
    // ex) 1 no índice 0, 2 no índice 1, 3 no índice 2
    // Dessa forma, o array pode posicionar todos os inteiros menores ou iguais a n em seus índices correspondentes sem alterar o tamanho do array fornecido.
    // Portanto, podemos encontrar o primeiro número positivo ausente percorrendo o array.
    
    for (let i = 0; i < nums.length; i++) {
        let idx = nums[i]-1;
        if (i == idx || nums[i] == nums[idx]) continue; // já posicionado ou nums[i] é um duplicado
        if (idx >= 0 && idx <= nums.length - 1) {
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            i--; // verificar o número trocado
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (i+1 == nums[i]) continue;
        else return i+1; // o próximo número positivo, que é i+1, não existe no array
    }
    
    return nums.length + 1; // o array é [1,2,...,n]
}

