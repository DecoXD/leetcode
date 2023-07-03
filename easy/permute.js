
function backtracking(array, target) {
    const result = [];
  
    function backtrack(curr, start, sum) {
      if (sum === target) {
        result.push(curr.slice()); // Adiciona uma cópia da solução atual ao resultado
        return;
      }
      if (sum > target) {
        return;
      }
      for (let i = start; i < array.length; i++) {
        curr.push(array[i]); // Adiciona o número atual à solução
        backtrack(curr, i, sum + array[i]); // Chama a função recursivamente
        curr.pop(); // Remove o número atual da solução
      }
    }
  
    backtrack([], 0, 0); // Inicia a busca recursiva
    return result; // Retorna o resultado
  }
  
  const array = [2, 4, 6, 8];
  const target = 10;
  const result = backtracking([1,2,3,4,5,6,7,8,9,10], 11);
  console.log(result); // [ [ 2, 8 ], [ 4, 6 ] ]


