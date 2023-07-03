// var shuffle = function(nums, n) {
//    const xy={}

//    for(let pos=0;pos<nums.length-n;pos++){
//     xy.push(nums[pos],nums[Number(pos)+n])
//    }
    
// return xy
// };

// console.log(shuffle([2,5,1,3,4,7],3))

var shuffle = function(nums, n) {
   

   const xy=[]
   for(let pos=0;pos<nums.length-n;pos++){
   let i;
      i=pos+n
   xy.push(nums[pos],nums[i])

   
   }
    
   return xy
};

console.log(shuffle([2,5,1,3,4,7],3))