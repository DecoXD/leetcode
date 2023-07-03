var searchMatrix = function(matrix, target) {
   
for( let pos in matrix){

let low = 0 
let high = matrix.length-1
    while(low <= high ){
        let mid = Math.floor((low+high)/2)    
        if(matrix[pos][mid] == target) return true
        if(matrix[pos][mid]> target) high = mid
        else{ low= mid+1}
    }}
    return false
};


console.log(searchMatrix([[1,2,3],[4,5,6],[0,8,9]],7))