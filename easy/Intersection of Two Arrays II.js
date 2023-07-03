const binarySearch = ( arr, idx,nIdx =-1) => {
let left = 0
let right = arr.length-1
while(left <= right){

if(arr[left] === idx && !nIdx.includes(left)) return left
if(arr[right] === idx && !nIdx.includes(right)) return right
left++
right--
}
return -1
}


var intersect = function(nums1, nums2) {
    
const res=[]
let idx=[]


for(let num of nums2){
const search=binarySearch(nums1,num,idx)

if(search!==-1 && !idx.includes(search)){
idx.push(search)
res.push(num)
}}

return res
};



console.log(intersect([1,2,2,1],[2,2]))