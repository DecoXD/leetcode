var differenceOfSum = function(nums) {

   
    let lastSum=0
    let firstSum=0

    let secondSum=nums.join("").split("")

    for(let pos=0;pos<secondSum.length;pos++){
      firstSum+=Number(secondSum[pos])
    }
    for(let pos in nums){
        lastSum+=nums[pos]
    }
 return lastSum-firstSum
    };

    console.log(differenceOfSum([1,15,6,3]))