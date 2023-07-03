var searchMatrix = function(matrix, target) {
  
    
  

for( let pos in matrix){

let low = 0 
let high = matrix[pos].length-1
    while(low <= high ){
       let mid = Math.floor((low+high)/2)  

        if(matrix[pos][mid] == target) return true
        if(matrix[pos][high] == target) return true
        if(matrix[pos][mid]> target) high = mid
        else{ low = mid+1}
   
        if(low>=high) break
    }}
    return false

    
};


console.log(searchMatrix([[1]],1))