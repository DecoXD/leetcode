function majorityElement(nums) {
  let maj = new Map()
  
  for(let i = 0 ; i <nums.length ; i++ ){
  
  if(!maj.has(nums[i])){
    maj.set(nums[i],1)
    continue
  }
  
  maj.set(nums[i],maj.get(nums[i]) + 1)
  if(maj.get(nums[i]) > nums.length /2){
    return nums[i]
  }
    }
  
  
  }

  console.log(majorityElement([3,2,2,3,3,3,5,5,5,5,5,5,5,5,5]))