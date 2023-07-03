var runningSum = function(nums) {

    const res= nums.reduce((inicial,final,idx)=>{
let fim=final+inicial[idx-1]
let add= idx===0? inicial.push(final) : inicial.push(fim)   
return inicial
    },[])
return res

};


console.log(runningSum([1,2,3,4]))