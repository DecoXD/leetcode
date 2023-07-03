var intersection = function(nums1, nums2) {

    const res = []
        for( let num of nums2){
            
            if(nums1.includes(num) && res.indexOf(num)===-1){
                res.push(num)
            }
        }
    
        return res
       
       }; 

       console.log(intersection([1,2,2,1],[2,2]))


 


