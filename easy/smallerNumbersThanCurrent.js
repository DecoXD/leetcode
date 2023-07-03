var smallerNumbersThanCurrent = function(nums) {
const res = []    
for( let i = 0 ; i < nums.length ; i++){

    let j = 0
    let count = 0
    
    while(j <  nums.length){
        if(nums[i] >  nums[j]) count ++
    }
res.push(count)
}
    return res
};