var twoSum = function(nums, target) {
    const numbers = new Map()
    let low = 0
    let high  = nums.length - 1
    
    while(low <= high){
    const max = target - nums[low] 
    console.log(max)
    if(numbers.has(max)){
        return [numbers.get(max)+ 1,low +1]
    }
    let mid = Math.floor((low + high)/2)
    if(nums[mid] > target)high = mid 
    numbers.set(nums[low],low)
    low++
 
    }
        
        
     };

     console.log(twoSum([-3,3,4,90],0))