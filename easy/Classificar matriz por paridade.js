var sortArrayByParity = function(nums) {

let j=0
for(let i=0;i<nums.length-1;i++){

if(nums[i]%2==0){
  [nums[i],nums[j]]=[nums[j],nums[i]]
  j++
   
}

  

   
}


return nums
};

console.log(sortArrayByParity([12,17,1,4,5,6,7,8,9,10,3,11,9,11]))

