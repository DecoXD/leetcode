/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {

    const res = []
    res.push(nums[0])
    for(let i = 1 ; i < nums.length; i++){
    let j = 0 
    let sum = 0
    while(j <= i){
    sum += nums[j]
    j++
    res.push(sum)
    }
    
    }
    
    
    };
    

