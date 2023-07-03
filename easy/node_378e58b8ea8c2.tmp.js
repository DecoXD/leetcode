var majorityElement = function(nums) {

let left = 0
let right = nums.length -1

let controlReps = new Map()

while( left <= right){

if(controlReps.has(nums[left])){
    controlReps.set(nums[left],controlReps.get(nums[left] + 1))
}
if(controlReps.has(nums[right])){
    controlReps.set(nums[right],controlReps.get(nums[right] + 1))
}

if(!controlReps.has(nums[left])){
    controlReps.set(nums[left],1)
}
if(!controlReps.has(nums[right])){
    controlReps.set(nums[right],1)
}
}

return controlReps

};


console.log(majorityElement([3,2,3]))