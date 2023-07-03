var createTargetArray = function(nums, index) {
    const res = []
    
    for(let i = 0 ;  i < nums.length ;i++){
        if(res[index[i]]!=undefined){
            let j = res.length -1
            while(j >= index[i] ){
             res[j+1] = res[j]
               j--
            }
        }
        res[index[i]] = nums[i]
    }
    return res
    };

console.log(createTargetArray([1,2,3,4,0],[1,2,3,4,0]))  