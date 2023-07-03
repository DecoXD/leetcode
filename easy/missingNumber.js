var missingNumber = function(nums) {


for( pos=0;pos<=nums.length;pos++){

if(nums[pos]!==pos){
    return pos
}

  
}

};

console.log(missingNumber([0,1,2,3,4,5,6,7,9]))