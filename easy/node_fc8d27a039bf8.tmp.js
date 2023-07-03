var majorityElement = function(nums) {

let left = 0
let right = nums.length -1

let controlReps = []

while( left <= right){

if(controlReps[nums[left]]){
    controlReps[nums[left]] += 1
}
if(controlReps[nums[right]]){
    controlReps[nums[right]] += 1
}
if(!controlReps[nums[left]]){
    controlReps[nums[left]] = 1
}
if(!controlReps[nums[right]]){
    controlReps[nums[right]] = 1
}
left --
right ++

}

return controlReps

};


console.log(majorityElement([3,2,3]))