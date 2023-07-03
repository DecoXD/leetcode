// var removeElement = function(nums, val) {

//     for (let i = 0 ; i < nums.length ; i++){
//         if(nums[i]=== val){nums.splice(i,1) 
//             i--}
//     }
//     return nums
//     };


//     console.log(removeElement([0,1,2,2,3,0,4,2],2))


var removeDuplicates = function(nums) {
 const reps = {}

for(let i = 0 ;i < nums.length; i++){
if(!Object.hasOwn(reps,nums[i]) ){

  reps[nums[i]] = 0
    }
    else{
      reps[nums[i]] ++
    }
  
     }

for( let i = 0 ; i < nums.length ; i++){

nums.splice(i,reps[nums[i]])

}
return nums
    };

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
