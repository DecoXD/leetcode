var setZeroes = function(matrix) {

// i= row j=column
const zerar = []

for(let pos in matrix[0]){
    zerar.push(0)
}
const rows =  new Map()

for(let i = 0; i < matrix.length ; i++){
let j = 0
let find = false
    while(j < matrix[i].length){

       if(matrix[i][j]===0){
        rows.set(j,i)
        find= true
       }
       else if(rows.has(j)){
        matrix[i][j] = 0
       }
j++

    }
    if(find){
        matrix[i] = zerar
        find= false
    }
}

for(let i = 0; i < matrix.length ; i++){
let j = 0 
while (j < matrix[i].length) {



if (rows.has(j) ){
matrix[i][j] = 0
}
j++
}
}


    return matrix
};

console.log(setZeroes([[-5,7,2147483647,3],[0,3,6,-2147483648],[8,3,-3,-6],[-9,-9,8,0]]))