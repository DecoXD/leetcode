var searchRange = function(nums, target) {


let left = 0
let right = nums.length-1


if (nums[left] == target && nums[right] == target) return [left,right]

while ( left <= right ){
let mid = Math.floor ((left + right ) / 2)

if ( nums[mid] == target ) {

if ( nums.length < 2 ) return [0,0]

left = mid
right = mid

while ( nums[left ] === target ){
 left-- }

while ( nums[right] === target ){
  right ++ }

 return [left+1,right -1] 
}

nums[mid] > target ? right=mid - 1 : left = mid + 1

}


return [-1, -1]
};



console.log(searchRange([1,2,2,3,4,5,5,6,7],5))



// var searchRange = function(nums, target) {
//   let left = 0, right = nums.length - 1;
  
//   while (left <= right) {
//   let mid = Math.floor((left + right) / 2);
//   if (nums[mid] === target) {
//   let nLeft = mid, nRight = mid;
//   while (nums[nLeft - 1] === target) {
//   nLeft--;
//   }
//   while (nums[nRight + 1] === target) {
//   nRight++;
//   }
//   return [nLeft, nRight];
//   } else if (nums[mid] > target) {
//   right = mid - 1;
//   } else {
//   left = mid + 1;
//   }
//   }
//   return [-1, -1];
//   };