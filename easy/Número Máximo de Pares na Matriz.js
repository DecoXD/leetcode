var numberOfPairs = function(nums) {

const table = {

}

for(let i = 0 ;i<nums.length; i++){
   if(!table[nums[i]]){
    table[nums[i]] = 1
   }
   else{
    table[nums[i]]++
   }
}

let par = 0
let notPar = 0
for(let item in table ){
if(table[item]<2){
notPar++
}
else if(table[item] %2 == 0) par += table[item]
else {
    notPar++
    par += table[item]-1
}
}
return [par/2,notPar]
};


console.log(numberOfPairs([1,3,2,1,3,2,2]))