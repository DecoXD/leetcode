// var longestConsecutive = function(nums) {
// if(nums.length === 0) return 0
// let current = 1
// let reps = 1
// nums.sort((a,b)=>a-b)
// let j = 1

// for(let i=0 ;i < nums.length; i++ ){
// if(nums[i] === nums[j]) {
//     j++
//    continue
// }
// else if(nums[i]+1 === nums[j]){
//     reps++
// }
// else  {
//     current = reps > current? reps : current;
//     reps = 1
// }
// j++
//     }
//     return current
// };


// console.log(longestConsecutive([9,1,-3,2,4,8,3,-1,6,-2,-4,7]))



//  var longestConsecutive = function(nums) {
//     if(nums.length === 0) return 0;

//     let set = new Set(nums);
//     let max = 0;



//     for(let num of set) {
//         if(set.has(num-1)) {
//             continue;
//         }

//         let count = 1;

//         while(set.has(num+1)) {
//             count++;
//             num++;
//         }
        
//         count > max ? max = count : max;
//     }

//     return max;
// };


var longestConsecutive = function(nums) {
if(nums.length === 0) return 0
  
const setNums = new Set(nums)
let current = 0

for( let num of setNums){
if(setNums.has(num-1)) continue // colocou num - 1 porque enquanto tiver algum numero -1 dele mesmo significa que ele nao é o inicio da contagem

let reps = 1

while(setNums.has(num+1)){ //aqui se inicia a contagem da consecutividade
    reps++
    num++
}


current = current > reps? current : reps


}
return current

    };
    
    
    console.log(longestConsecutive([9,1,-3,2,4,8,3,-1,6,-2,-4,7]))