function findMin(nums) {
let low = 0
let high = nums.length-1

while(low < high ) {
let mid = Math.floor((low+high)/2)
if(nums[mid] < nums[high]) high=mid
else if( nums[mid] > nums[high]) low=mid+1
else{high--}

}
return nums[high]
}

console.log(findMin([10,1,10,10,10,10]))