var findMedianSortedArrays = function(nums1, nums2) {
    
let numsArr=nums1.concat(nums2)

let media;

let idx=0
let pos=0

while(pos<numsArr.length){


}


if(numsArr.length === 1) return numsArr[0]
console.log(numsArr)
if(numsArr.length %2 === 0){
idx = numsArr.length /2 -1
media=( numsArr[idx] + numsArr[idx+1] ) /2

return media
}
else{
    idx=Math.floor(numsArr.length /2)
    
    return numsArr[idx]
}



};


console.log(findMedianSortedArrays([2],[]))



// usar mathfloor