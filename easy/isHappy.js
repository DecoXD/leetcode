var isHappy = function(n) {


const nums = []

nums.push(String(n))


let trying = 0
for(let i = 0 ; i < nums.length ; i++){

let add = 0
let j = 0
while(j < nums[i].length){
  add+= nums[i][j]**2
  j++
}
nums.push(String(add))
if(nums[i] ==1) break
trying++
if(trying > 10) return false
}

return true

};

//iterar os numeros de n e somar em uma variavel e adcionar ela os valores de volta a nums
//

console.log(isHappy(23))